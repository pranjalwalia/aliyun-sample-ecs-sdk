import 'source-map-support/register';

import Ecs from './modules/ecs';
export default class AliCloud {
	public ecs: Ecs;

	private _accessKeyId: string;
	private _accessKeySecret: string;

	constructor(accessKeyId: string, accessKeySecret: string) {
		this._accessKeyId = accessKeyId;
		this._accessKeySecret = accessKeySecret;

		this.ecs = new Ecs(accessKeyId, accessKeySecret, 'cn-hangzhou'); //ecs-cn-hangzhou.aliyuncs.com
	}
}
