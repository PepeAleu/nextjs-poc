"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function SearchInput({
  initialQuery,
  setSearchTerm,
  children,
}: {
  readonly initialQuery: string;
  readonly setSearchTerm: (param: string) => void;
  readonly children: React.ReactNode;
}) {
  return (
    <div className="w-full mt-4 mb-8">
      <div className="flex items-center border-b border-black">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <input
          defaultValue={initialQuery}
          type="search"
          placeholder="SEARCH A CHARACTER..."
          className="w-full pl-2 h-8 text-lg bg-background"
          onChange={(e) => {
            // Aquí puedes implementar la lógica de búsqueda real
            // Por ahora solo actualizamos el número de resultados como ejemplo
            // handleSearch(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {children}
    </div>
  );
}
