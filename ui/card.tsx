import { HeartIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import { forwardRef } from "react"

interface Character {
	name: string
	image: string
}

interface CharacterCardProps {
	character: Character
	onFavorite?: () => void
	isFavorite?: boolean
	onSelect?: () => void
}

const CharacterCard = forwardRef<HTMLDivElement, CharacterCardProps>(
	({ character, onFavorite, isFavorite, onSelect }, ref) => {
		return (
			<figure ref={ref} className="relative w-full aspect-[3/4] group">
				{/* Card Container - Make it focusable and keyboard interactive */}
				<div
					aria-label={`Character card for ${character.name}`}
					tabIndex={0}
					className="absolute inset-0 bg-black overflow-hidden clip-path-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					onClick={onSelect}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault()
							onSelect?.()
						}
					}}
				>
					{/* Character Image Container */}
					<div className="h-[75%] relative overflow-hidden bg-white">
						{/* <Image
							src={character.image || "/placeholder.svg"}
							alt={`Portrait of ${character.name}`}
							fill
							className="object-cover"
							priority={true} // Load immediately for important character images
						/> */}
					</div>

					{/* Red Separator Line - Made decorative */}
					<div className="h-[3px] w-full bg-red-600" role="presentation" />

					{/* Name Section */}
					<div
						className="absolute bottom-0 left-0 right-0 h-[25%] bg-black flex items-center justify-between px-4"
						aria-label="Character information"
					>
						<h3 className="text-white text-xl font-bold tracking-wide uppercase font-mono">{character.name}</h3>

						{/* Favorite Button with improved accessibility */}
						<button
							onClick={(e) => {
								e.stopPropagation()
								onFavorite?.()
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault()
									onFavorite?.()
								}
							}}
							className="absolute bottom-4 right-6 p-2 hover:scale-110 transition-transform"
							aria-label={`${isFavorite ? "Remove" : "Add"} ${character.name} ${isFavorite ? "from" : "to"} favorites`}
							aria-pressed={isFavorite}
						>
							<HeartIcon
								className={`h-6 w-6 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-red-500"}`}
							/>
						</button>
					</div>
				</div>
			</figure>
		)
	},
)

// Add display name for debugging
CharacterCard.displayName = "CharacterCard"

export default CharacterCard

