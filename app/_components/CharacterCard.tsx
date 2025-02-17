"use client";

import Image from "next/image";
import { ICharacter } from "@/modules/characters/domain/ICharacter";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function CharacterCard({
  character,
}: {
  readonly character: ICharacter;
}) {
  return (
    <Link
      data-testid="character-link"
      href={`/characters/${character.id}`}
      title="View character details"
    >
      <article className="flex h-full flex-col bg-black overflow-hidden clip-path-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary [clip-path:polygon(0_0,100%_0,100%_calc(100%-13px),calc(100%-13px)_100%,0_100%)]">
        <div className="overflow-hidden aspect-[4/4] bg-black relative flex items-center justify-center flex-1">
          <Image
            data-testid="character-image"
            src={character.image || "/marvel-logo.png"}
            alt={`Portrait of ${character.name}`}
            fill
            priority={false}
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="h-[3px] w-full bg-red-600" />
        <div
          className="flex items-center justify-between py-3 pl-3"
          aria-label="Character information"
        >
          <h2 className="text-white text-xs tracking-wide uppercase font-mono">
            {character.name}
          </h2>
          <div className="pl-3">
            <FavoriteButton character={character} />
          </div>
        </div>
      </article>
    </Link>
  );
}
