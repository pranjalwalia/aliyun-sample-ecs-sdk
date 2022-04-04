import { ecsRegions } from './utils';
export interface IDeleteInstanceParams {
	instanceId: string;
	[key: string]: any;
}

export interface IListInstanceTypesParams {
	maxResults?: number;
	[key: string]: any;
}

export interface IDescribeInstancesParams {
	regionId: ecsRegions;
	[key: string]: any;
}

export interface ICreateInstanceParams {
	regionId: ecsRegions;
	instanceName?: string;
	instanceType?: string;
	hostName?: string;
	[key: string]: any;
}

export interface IStartInstanceParams {
	instanceId: string;
	sourceRegionId?: ecsRegions | string;
	dryRun?: boolean;
	[key: string]: any;
}

export interface IStopInstanceParams {
	instanceId: string;
	confirmStop?: boolean;
	forceStop?: boolean;
	dryRun?: boolean;
	hibernate?: boolean;
	[key: string]: any;
}

export interface IDescribeImagesParams {
	regionId: string;
	pageSize?: number;
}
