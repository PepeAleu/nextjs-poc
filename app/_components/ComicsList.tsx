import { getComicsByCharacterId } from "@/modules/characters/application/getComicsByCharacterId";
import { IComic } from "@/modules/characters/domain/IComic";
import ComicsItem from "./ComicItem";

export default async function ComicsList({ id }: { readonly id: string }) {
  const result = await getComicsByCharacterId(id);

  return (
    <div className="py-4 pl-4 lg:pl-0 mx-auto max-w-[960px]">
      <h2 className="text-black text-xl font-bold tracking-wide uppercase font-mono my-5">
        Comics
      </h2>
      <ul className="flex gap-2 overflow-x-auto pr-4">
        {result?.map((comic: IComic) => (
          <ComicsItem key={comic.id} comic={comic} />
        ))}
      </ul>
    </div>
  );
}
