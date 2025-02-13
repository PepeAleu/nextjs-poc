'use server'

import { IComic } from "../domain/IComic";
import { ComicsRepository } from "../infrastructure/ComicsRepository";
import { comic } from "../domain/comic";

export async function getComicsByCharacterId(id: string): Promise<IComic[]> {
	const repository = new ComicsRepository();

	return repository.getAll({ id })
		.then((detail) => {
			return comic(detail);
		});
}