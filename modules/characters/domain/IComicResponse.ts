import { IApiComicSummary, IApiEventList, IApiImage, IApiSeriesSummary, IApiStoryList } from "@/modules/shared/domain/IResponse";
import { IApiUrl } from "./ICharacterResponse";

export interface IApiComic {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: IApiTextObject[];
	resourceURI: string;
	urls: IApiUrl[];
	series: IApiSeriesSummary;
	variants: IApiComicSummary[];
	collections: IApiComicSummary[];
	collectedIssues: IApiComicSummary[];
	dates: IApiComicDate[];
	prices: IApiComicPrice[];
	thumbnail: IApiImage;
	images: IApiImage[];
	creators: IApiCreators;
	characters: IApiCharacters;
	stories: IApiStoryList;
	events: IApiEventList;
}

export interface IApiTextObject {
	type: string;
	language: string;
	text: string;
}


export interface IApiComicDate {
	type: string;
	date: string;
}

export interface IApiComicPrice {
	type: string;
	price: number;
}

export interface IApiCreators {
	available: number;
	collectionURI: string;
	items: IApiCreator[];
	returned: number;
}

export interface IApiCreator {
	resourceURI: string;
	name: string;
	role: string;
}

export interface IApiCharacters {
	available: number;
	collectionURI: string;
	items: IApiCharacterSummary[];
	returned: number;
}

export interface IApiCharacterSummary {
	resourceURI: string;
	name: string;
}



