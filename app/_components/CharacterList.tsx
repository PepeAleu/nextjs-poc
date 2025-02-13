import { ICharacter } from "@/modules/characters/domain/ICharacter";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "@/modules/characters/application/getCharacters";

export default async function CharacterList({
  query,
}: {
  readonly query: string;
}) {
  const result = await getCharacters(query);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {result?.map((character: ICharacter) => (
        <CharacterCard key={character.id} character={character}></CharacterCard>
      ))}
    </div>
  );
}
