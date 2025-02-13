'use server'

import { character } from "@/modules/characters/domain/character";
import { ICharacter } from "@/modules/characters/domain/ICharacter";
import { CharacterRepository } from "@/modules/characters/infrastructure/CharacterRepository";
import { IApiCharacter } from "@/modules/characters/domain/ICharacterResponse";

export async function getCharacterDetail(id: string): Promise<ICharacter> {
	const repository = new CharacterRepository();

	return repository.getOne(id)
		.then((detail: IApiCharacter) => {
			return character(detail);
		});
}