import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Search from "@/app/_components/Search";

let replaceMock = vi.fn();

beforeEach(() => {
  replaceMock = vi.fn();
});

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(""),
  usePathname: () => "/testPath",
  useRouter: () => ({ replace: replaceMock }),
}));

vi.mock("use-debounce", () => ({
  useDebounce: (value: any, delay: number) => [value],
}));

vi.mock("@/app/_data/siteMetadata", () => ({
  siteMetadata: { queryName: "q" },
}));

vi.mock("@/app/_components/SearchInput", () => ({
  default: ({
    initialQuery,
    setSearchTerm,
    children,
  }: {
    initialQuery: string;
    setSearchTerm: (term: string) => void;
    children: React.ReactNode;
  }) => (
    <div data-testid="search-input">
      <span data-testid="search-initial">{initialQuery}</span>
      <div data-testid="search-children">{children}</div>
    </div>
  ),
}));

describe.concurrent("Search", () => {
  it("renders SearchInput with the initial query and children", async () => {
    render(
      <Search initialQuery="hello">
        <div>Child Content</div>
      </Search>
    );
    expect(screen.getByTestId("search-initial")).toHaveTextContent("hello");
    expect(screen.getByTestId("search-children")).toHaveTextContent(
      "Child Content"
    );
  });

  it("calls router.replace with the updated query on mount", async () => {
    render(
      <Search initialQuery="hello">
        <div>Child Content</div>
      </Search>
    );
    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith("/testPath?q=hello");
    });
  });
});
