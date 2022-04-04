export default abstract class BaseModule {
	protected _accessKeyId: string;
	protected _accessKeySecret: string;
	protected _regionId: string | null;

	constructor(accessKeyId: string, accessKeySecret: string, regionId: string) {
		this._accessKeyId = accessKeyId;
		this._accessKeySecret = accessKeySecret;
		this._regionId = regionId;
	}

	protected abstract _createClient(
		accessKeyId: string,
		accessKeySecret: string,
		regionId: string
	): any;
}
