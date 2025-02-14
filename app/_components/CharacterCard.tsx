"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { FavoriteButton } from "./FavoriteButton";
import { ICharacter } from "@/modules/characters/domain/ICharacter";
import Link from "next/link";

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard = forwardRef<HTMLDivElement, CharacterCardProps>(
  ({ character }, ref) => {
    return (
      <Link href={`/characters/${character.id}`} title="View character details">
        <article
          ref={ref}
          className="flex h-full flex-col bg-black overflow-hidden clip-path-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary [clip-path:polygon(0_0,100%_0,100%_calc(100%-13px),calc(100%-13px)_100%,0_100%)]"
        >
          <div className="overflow-hidden aspect-[4/4] bg-black relative flex items-center justify-center flex-1">
            <Image
              src={character.image || "/placeholder.svg"}
              alt={`Portrait of ${character.name}`}
              fill
              priority={false}
              loading="lazy"
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
);

// Add display name for debugging
CharacterCard.displayName = "CharacterCard";

export default CharacterCard;
