import { IApiCharacter } from "@/modules/characters/domain/ICharacterResponse";
import { IComic } from "@/modules/comics/domain/IComic";
import { IApiComic } from "@/modules/comics/domain/IComicResponse";

export const testApiCharacter1 = {
	id: "1",
	name: "Test Character",
	thumbnail: {
		path: "http://example.com/image",
		extension: "jpg"
	},
} as unknown as IApiCharacter;
export const testApiCharacter2 = { id: "2", name: "Another Character" } as unknown as IApiCharacter;
export const testComic = { id: "1", title: "Comic Title", image: "/comic.jpg", year: "2021" } as unknown as IComic;
export const testApiComic = {
	id: 1,
	title: "Comic Title",
	thumbnail: {
		path: "http://example.com/comic",
		extension: "png",
	},
	dates: [{ date: "2020-01-01T00:00:00Z" }]
} as unknown as IApiComic;