import { IApiComicSummary, IApiEventList, IApiImage, IApiSeriesSummary, IApiStoryList } from "@/modules/shared/domain/IResponse";

export interface IApiCharacter {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: IApiImage;
	resourceURI: string;
	comics: IApiComicList;
	series: IApiSeriesList;
	stories: IApiStoryList;
	events: IApiEventList;
	urls: IApiUrl[];
}

export interface IApiComicList {
	available: number;
	collectionURI: string;
	items: IApiComicSummary[];
	returned: number;
}

export interface IApiSeriesList {
	available: number;
	collectionURI: string;
	items: IApiSeriesSummary[];
	returned: number;
}


export interface IApiUrl {
	type: string;
	url: string;
}