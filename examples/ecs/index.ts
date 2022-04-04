require('dotenv').config();
import AliCloud from '../../src';
import {
	ICreateInstanceParams,
	IDeleteInstanceParams,
} from '../../src/modules/ecs/interfaces';

const { accessKeyId, accessKeySecret } = process.env;

const getInstance = () => {
	if (accessKeyId && accessKeySecret) {
		return new AliCloud(accessKeyId, accessKeySecret);
	}
	return false;
};

const ecsOperations = {
	// working
	listInstancesRequest: async (instance: AliCloud): Promise<void> => {
		try {
			instance.ecs.setRegion('cn-hangzhou');
			// console.log('ECS Instance: ', instance.ecs);
			const res = await instance.ecs.listInstances({
				regionId: 'cn-hangzhou',
			});
			console.log('Success: ', JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},

	// working
	listInstanceTypesRequest: async (instance: AliCloud): Promise<void> => {
		try {
			const res = await instance.ecs.listInstanceTypes({ maxResults: 10 });
			console.log('Success: ', JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},

	// working
	createInstanceRequest: async (
		instance: AliCloud,
		params: ICreateInstanceParams
	): Promise<void> => {
		try {
			const res = await instance.ecs.createInstance(params);
			console.log('Success: ', JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},

	// working
	deleteInstance: async (
		instance: AliCloud,
		params: IDeleteInstanceParams
	): Promise<void> => {
		try {
			const res = await instance.ecs.deleteInstance(params);
			console.log('Success: ', JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},

	// working
	describeImages: async (
		instance: AliCloud,
		params: { regionId: string; pageSize?: number }
	): Promise<void> => {
		try {
			const res = await instance.ecs.describeImages({
				...params,
				pageSize: 50,
			});
			console.log('Success: ', JSON.stringify(res));
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},
};

const main = async () => {
	const instance: AliCloud | false = getInstance();
	if (instance) {
		instance.ecs.setRegion('cn-hongkong');
		// ecsOperations.listInstanceTypesRequest(instance);
		// ecsOperations.describeImages(instance, {
		// 	regionId: 'cn-hongkong',
		// });

		// ecsOperations.createInstanceRequest(instance, {
		// 	regionId: 'cn-hongkong',
		// 	imageId: 'ubuntu_20_04_x64_20G_alibase_20220215.vhd',
		// 	instanceType: 'ecs.n4.large',
		// });
	}
};

main();

/**
 * Images: https://next.api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImages
 * */
