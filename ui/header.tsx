import { FavoritesCounter } from "./favorites-counter";

const Header = () => {

	return (
		<header className="flex items-center w-full bg-black dark:bg-white justify-between py-4 px-4 md:px-8 text-white cursor-pointer">
			<a data-testid="header-logo-link" href="/" aria-label="Ir a la página de inicio">
				<picture>
					<source srcSet="marvel-logo.png" type="image/webp" />
					<source srcSet="marvel-logo.png" type="image/png" />
					<img className="h-16 w-auto object-fill" src="marvel-logo.png" alt="Logo de la página: Marvel Wiki" loading="lazy" />
				</picture>
			</a>
			<FavoritesCounter />
		</header>
	)
}

export default Header