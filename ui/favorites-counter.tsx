'use client'

import { FavoritesContext } from "@/providers/FavoritesProvider"
import { HeartIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"

const FavoritesCounter = () => {
	const { favorites } = useContext(FavoritesContext)

	return (
		<div>
			<HeartIcon /> {favorites.size}
		</div>
	)
}

export { FavoritesCounter } 