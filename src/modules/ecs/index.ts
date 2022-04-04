import Ecs20140526, * as $Ecs20140526 from '@alicloud/ecs20140526';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';

import BaseModule from '../../common';
import {
	ICreateInstanceParams,
	IDeleteInstanceParams,
	IDescribeImagesParams,
	IDescribeInstancesParams,
	IListInstanceTypesParams,
	IStartInstanceParams,
	IStopInstanceParams,
} from './interfaces';
import { ecsRegions, endPointMapper } from './utils';

class Client extends BaseModule {
	private _client: Ecs20140526;

	/**
	 *	@default endpoint: `ecs.cn-qingdao.aliyuncs.com` => use the same region as the client `cn-qingdao`, ref: `/examples/ecs/describeRegions.json`
	 */
	protected _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: ecsRegions
	): Ecs20140526 {
		const config = new $OpenApi.Config({
			accessKeyId: accessKeyId,
			accessKeySecret: accessKeySecret,
		});
		config.endpoint = endPointMapper[regionId] || 'ecs.cn-qingdao.aliyuncs.com';
		return new Ecs20140526(config);
	}

	constructor(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: ecsRegions
	) {
		super(accessKeyId, accessKeySecret, regionId);
		this._client = this._createClient(accessKeyId, accessKeySecret, regionId);
	}

	public setRegion(regionId: ecsRegions) {
		const config = new $OpenApi.Config({
			accessKeyId: this._accessKeyId,
			accessKeySecret: this._accessKeySecret,
			regionId,
		});
		config.endpoint = endPointMapper[regionId] || 'ecs.cn-qingdao.aliyuncs.com';
		if (endPointMapper[regionId]) {
			this._regionId = regionId;
		}
		this._client = new Ecs20140526(config);
		return this._client;
	}

	/**
	 * Create an ECS instance
	 * @param params : ICreateInstanceParams
	 * @Object ICreateInstanceParams: 
		 	@param regionId: string;
			@param instanceName?: string;
			@param instanceType?: string;
			@param hostName?: string;
	 */
	public createInstance(params: ICreateInstanceParams): Promise<any> {
		const createInstanceRequest = new $Ecs20140526.CreateInstanceRequest({
			...params,
		});
		return this._client.createInstance(createInstanceRequest);
	}

	/**
	 *	List available ECS instances
	 *	@param params : IDescribeInstancesParams
	 *	@Object IDescribeInstancesParams:
			@param regionId: string;
	 * */
	public listInstances(params: IDescribeInstancesParams): Promise<any> {
		const describeInstancesRequest = new $Ecs20140526.DescribeInstancesRequest({
			...params,
		});
		return this._client.describeInstances(describeInstancesRequest);
	}

	/**
	 * Start an ECS instance
	 *	@param params : IStartInstanceParams
	 *	@Object IStartInstanceParams:
			@param instanceId: string;
			@param sourceRegionId?: string;
			@param dryRun?: boolean;
	 * */
	public startInstance(params: IStartInstanceParams): Promise<any> {
		const startInstanceRequest = new $Ecs20140526.StartInstanceRequest({
			...params,
		});
		return this._client.startInstance(startInstanceRequest);
	}

	/**
	 *	Stop an ECS instance
	 *	@param params : IStopInstanceParams
	 *	@Object IStopInstanceParams:
			@param instanceId: string;
			@param confirmStop?: boolean;
			@param forceStop?: boolean;
			@param dryRun?: boolean;
			@param hibernate?: boolean;
	 * */
	public stopInstance(params: IStopInstanceParams): Promise<any> {
		const stopInstanceRequest = new $Ecs20140526.StopInstanceRequest({
			...params,
		});
		return this._client.startInstance(stopInstanceRequest);
	}

	/**
	 * List available ECS instance types
	 * @param params : IListInstanceTypesParams
	 * @Object IListInstanceTypesParams:
	 *     @param maxResults?: number;
	 * */
	public listInstanceTypes(params: IListInstanceTypesParams): Promise<any> {
		const describeInstanceTypesRequest =
			new $Ecs20140526.DescribeInstanceTypesRequest({ ...params });
		return this._client.describeInstanceTypes(describeInstanceTypesRequest);
	}

	/**
	 * Delete an ECS instance
	 *	@param params : IDeleteInstanceParams
	 *	@Object IDeleteInstanceParams:
	 		@param instanceId: string;
	 * */
	public deleteInstance(params: IDeleteInstanceParams): Promise<any> {
		const deleteInstanceRequest = new $Ecs20140526.DeleteInstanceRequest({
			...params,
		});
		return this._client.deleteInstance(deleteInstanceRequest);
	}

	public describeImages(params: IDescribeImagesParams): Promise<any> {
		const deleteInstanceRequest = new $Ecs20140526.DescribeImagesRequest({
			...params,
			pageSize: params.pageSize || 20,
		});
		return this._client.describeImages(deleteInstanceRequest);
	}
}

export default Client;
