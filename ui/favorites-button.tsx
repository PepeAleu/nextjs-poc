'use client'

import { FavoritesContext } from "@/providers/FavoritesProvider"
import { HeartIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"

const FavoriteButton = ({ pjId }: { pjId: string }) => {
	const { toggleFavorite } = useContext(FavoritesContext)
	return (
		<button onClick={() => toggleFavorite(pjId)}  >
			<HeartIcon className="h-8 w-auto text-red-500" />
		</button>
	)
}

export { FavoriteButton } 