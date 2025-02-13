import { getCharacters } from "@/modules/characters/application/getCharacters";

export default async function CharacterCounter({
  query,
}: {
  readonly query?: string;
}) {
  const result = await getCharacters(query);
  const counter: string = result.length.toString();
  return counter;
}
