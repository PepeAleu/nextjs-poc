'use server'

import { character } from "@/modules/characters/domain/character";
import { ICharacter } from "@/modules/characters/domain/ICharacter";
import { CharacterRepository } from "@/modules/characters/infrastructure/CharacterRepository";
import { IApiCharacter } from "@/modules/characters/domain/ICharacterResponse";

export async function getCharacters(searchTerm?: string): Promise<ICharacter[]> {
	const repository = new CharacterRepository();

	return repository.getAll({
		nameStartsWith: searchTerm
	}).then((characters: IApiCharacter[]) => {
		return characters.map(data => character(data));
	});
}