export interface IApiMarvelAPIResponse<T> {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: IApiDataWrapper<T>;
}

export interface IApiDataWrapper<T> {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: T;
}

export interface IApiSeriesSummary {
	resourceURI: string;
	name: string;
}

export interface IApiComicSummary {
	resourceURI: string;
	name: string;
}

export interface IApiImage {
	path: string;
	extension: string;
}

export interface IApiStoryList {
	available: number;
	collectionURI: string;
	items: IApiStorySummary[];
	returned: number;
}

export interface IApiStorySummary {
	resourceURI: string;
	name: string;
	type: string;
}

export interface IApiEventList {
	available: number;
	collectionURI: string;
	items: IApiEventSummary[];
	returned: number;
}

export interface IApiEventSummary {
	resourceURI: string;
	name: string;
}