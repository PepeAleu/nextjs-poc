import { ICharacter } from "./ICharacter";
import { IApiCharacter } from "./ICharacterResponse";

export function characterDetail(data: IApiCharacter): ICharacter {
	return {
		...data,
		id: data.id.toString(),
		image: `${data.thumbnail?.path}.${data.thumbnail?.extension}`,
	}
}