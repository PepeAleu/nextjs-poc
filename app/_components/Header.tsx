import Image from "next/image";
import FavoritesCounter from "./FavoritesCounter";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center w-full bg-black dark:bg-white justify-between py-4 px-4 md:px-8 text-white cursor-pointer">
      <Link data-testid="header-logo-link" href="/" title="Go to Home">
        <Image
          className="h-16 w-auto object-fill"
          src="/marvel-logo.png"
          width={130}
          height={52}
          alt="Logo de la página: Marvel Wiki"
          loading="lazy"
        />
      </Link>
      <Link href="/favorites">
        <FavoritesCounter />
      </Link>
    </header>
  );
};

export default Header;
