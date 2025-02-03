import { getCharacters } from "@/hooks/useMarvelCharacters";
import { FavoritesProvider } from "@/providers/FavoritesProvider";
import CharacterCard from "@/ui/card";
import { FavoriteButton } from "@/ui/favorites-button";
import Header from "@/ui/header";

export default async function Home() {
  const characters = await getCharacters();
  // const characters = [
  //   { id: 1, name: "Rick", image: "../rick.png" },
  //   // ...additional data or server fetch...
  // ];

  return (
    <FavoritesProvider>
      <Header />
      <main className="bg-light_sea_green-800">
        <div>
          {characters.data.results?.map((character: any) => (
            <FavoriteButton key={character.id} pjId={character.id} />
          ))}
        </div>
      </main>
    </FavoritesProvider>
  );
}
