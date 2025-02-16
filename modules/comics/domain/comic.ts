import { IComic } from "./IComic";
import { IApiComic } from "./IComicResponse";


export function comic(data: IApiComic[]): IComic[] {
	return data.map((comic) => {
		return {
			id: comic.id.toString(),
			image: `${comic.thumbnail?.path}.${comic.thumbnail?.extension}`,
			title: comic.title,
			year: new Date(comic.dates[0].date).getFullYear().toString(),
		};
	});

}