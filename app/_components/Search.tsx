"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { siteMetadata } from "../_data/siteMetadata";
import SearchInput from "./SearchInput";

export default function Search({
  initialQuery,
  children,
}: {
  readonly initialQuery: string;
  readonly children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState<string>(initialQuery);
  const [debouncedTerm] = useDebounce(searchTerm, 500);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(siteMetadata.queryName, term);
    } else {
      params.delete(siteMetadata.queryName);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleSearch(debouncedTerm);
  }, [debouncedTerm]);

  return (
    <SearchInput initialQuery={initialQuery} setSearchTerm={setSearchTerm}>
      {children}
    </SearchInput>
  );
}
