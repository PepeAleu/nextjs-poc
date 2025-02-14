"use server";

import ComicsList from "@/app/_components/ComicsList";
import { FavoriteButton } from "@/app/_components/FavoriteButton";
import { getCharacterDetail } from "@/modules/characters/application/getCharacterDetail";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const detail = await getCharacterDetail(id);

  return (
    <>
      <article className="bg-black border-t border-gray-700 [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
        <section className="flex h-4/6 flex-col mx-auto md:flex-row max-w-[960px]">
          <Image
            className="w-full md:w-[278px] lg:w-[320px]"
            style={{ objectFit: "contain" }}
            src={detail.image}
            alt={detail.name}
            width={600}
            height={600}
            quality={60}
            priority={true}
          />
          <div className="flex flex-col px-4 py-6 justify-center flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold tracking-wide uppercase">
                {detail.name}
              </h1>
              <FavoriteButton character={detail} />
            </div>
            <p className="text-white text-xs font-normal tracking-tighter my-4">
              {detail.description}
            </p>
          </div>
        </section>
      </article>
      <article>
        <div className="py-4 pl-4 lg:pl-0 mx-auto max-w-[960px]">
          <Suspense fallback={<div className="my-4">Loading...</div>}>
            <ComicsList id={id} />
          </Suspense>
        </div>
      </article>
    </>
  );
}
