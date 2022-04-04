import AliCloud from '../src';

describe('unit tests for ali-wrapper', (): void => {
	const ACCESS_KEY_ID = 'accessKeyId';
	const ACCESS_KEY_SECRET = 'accessKeySecret';
	const ENDPOINT = 'ecs.cn-qingdao.aliyuncs.com';
	let instance;
	beforeEach((): void => {
		instance = new AliCloud(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
	});

	describe('Test Suite: Check for Instantiation of correct modules at root level', (): void => {
		test('should bind the correct modules', (): void => {
			const expectedModules = ['_accessKeyId', '_accessKeySecret', 'ecs'];
			expect(Object.keys(instance)).toEqual(
				expect.arrayContaining(expectedModules)
			);
		});
	});
});
