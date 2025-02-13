"use client";

import { FavoritesContext } from "@/app/_providers/FavoritesProvider";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const FavoritesCounter = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="flex items-center space-between ">
      <HeartIcon
        title="Add favorite"
        className="h-7 w-auto text-red-500 mx-1"
      />{" "}
      {favorites.size}
    </div>
  );
};

export { FavoritesCounter };
