import { IComic } from "@/modules/characters/domain/IComic";
import Image from "next/image";

export default async function ComicsItem({
  comic,
}: {
  readonly comic: IComic;
}) {
  return (
    <li key={comic.id} className="flex-none w-[164px] pb-6 flex flex-col">
      <Image
        className="h-[244px]"
        alt={comic.title}
        src={comic.image}
        width={600}
        height={600}
        priority={false}
        loading="lazy"
        style={{ objectFit: "contain" }}
      ></Image>
      <div className="h-15 flex flex-col">
        <h3 className="font-semibold text-sm font-mono mt-3 mb-1 leading-4">
          {comic.title}
        </h3>
        <p className="text-[0.65rem]">{comic.year}</p>
      </div>
    </li>
  );
}
