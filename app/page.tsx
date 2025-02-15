import CharacterList from "@/app/_components/CharacterList";
import Search from "./_components/Search";
import { Suspense } from "react";
import CharacterCounter from "./_components/CharacterCounter";

interface Params {
  query?: string;
}
type AsyncParams = Promise<Params>;

export const revalidate = 604800;

export default async function Home({
  searchParams,
}: {
  readonly searchParams: AsyncParams;
}) {
  const params: Params = await searchParams;
  const query = params.query ?? "";
  return (
    <div className="p-3">
      <Search initialQuery={query}>
        <div>
          <Suspense key={query} fallback={"..."}>
            <CharacterCounter query={query} />
          </Suspense>{" "}
        </div>
      </Search>

      <Suspense key={query} fallback={<div>Loading...</div>}>
        <CharacterList query={query} />
      </Suspense>
    </div>
  );
}
