import AliCloud from '../src';

describe('unit tests for ali-wrapper', (): void => {
	const ACCESS_KEY_ID = 'accessKeyId';
	const ACCESS_KEY_SECRET = 'accessKeySecret';
	const ENDPOINT = 'ecs.cn-qingdao.aliyuncs.com';
	let instance;
	beforeEach((): void => {
		instance = new AliCloud(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
	});

	function getAllFuncs(toCheck) {
		const props = [];
		let obj = toCheck;
		do {
			props.push(...Object.getOwnPropertyNames(obj));
		} while ((obj = Object.getPrototypeOf(obj)));

		return props
			.sort()
			.filter((e, i, arr) => {
				if (e != arr[i + 1] && typeof toCheck[e] == 'function') {
					return true;
				}
				return false;
			})
			.filter((e) => {
				if (e[0] === '_' && e[1] === '_') {
					return false;
				}
				return true;
			});
	}

	describe('Test Suite: tests for submodule ecs', (): void => {
		test('test available functions', () => {
			const methods = getAllFuncs(instance.ecs);
			expect(methods).toEqual(
				expect.arrayContaining([
					'_createClient',
					'createInstance',
					'listInstances',
					'deleteInstance',
					'listInstanceTypes',
					'startInstance',
					'stopInstance',
				])
			);
		});
	});
});
