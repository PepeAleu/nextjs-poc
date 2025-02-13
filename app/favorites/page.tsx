import Search from "../_components/Search";
import FavoritesList from "../_components/FavoritesList";
import FavoritesListCounter from "../_components/FavoritesListCounter";

interface Params {
  query?: string;
}
type AsyncParams = Promise<Params>;

export const revalidate = 3600; // invalidate every hour

export default async function Favorites({
  searchParams,
}: {
  readonly searchParams: AsyncParams;
}) {
  const params: Params = await searchParams;
  const query = params.query ?? "";

  return (
    <div className="p-3">
      <h2 className="text-black text-xl font-bold tracking-wide uppercase my-5">
        Favorites
      </h2>
      <Search initialQuery={query}>
        <FavoritesListCounter query={query} /> RESULTS
      </Search>
      <FavoritesList query={query}></FavoritesList>
    </div>
  );
}
