import Search from "../_components/Search";
import FavoritesList from "../_components/FavoritesList";
import FavoritesListCounter from "../_components/FavoritesListCounter";

export const revalidate = 604800;

export default async function Favorites({
  searchParams,
}: {
  readonly searchParams: Promise<{
    query?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params.query ?? "";

  return (
    <div className="p-3">
      <h2 className="text-black text-xl font-bold tracking-wide uppercase my-5">
        Favorites
      </h2>
      <Search initialQuery={query}>
        <FavoritesListCounter query={query} />
      </Search>
      <FavoritesList query={query}></FavoritesList>
    </div>
  );
}
