import { getCharacters } from "@/modules/characters/application/getCharacters";
import ResultCounter from "./ResultCounter";

export default async function CharacterCounter({
  query,
}: {
  readonly query?: string;
}) {
  const result = await getCharacters(query);
  const counter = result.length;

  return <ResultCounter counter={counter} />;
}
