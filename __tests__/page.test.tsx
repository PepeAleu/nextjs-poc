import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "@/app/page";

// Mocks de los componentes importados en page.tsx
vi.mock("@/app/_components/CharacterCounter", () => ({
  default: () => <div>Counter: 2 RESULTS</div>,
}));
vi.mock("@/app/_components/CharacterList", () => ({
  default: () => <div>Character List</div>,
}));
vi.mock("@/app/_components/Search", () => ({
  // Renderiza children directamente
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Home page", () => {
  it("Search, Charactercounter and Characterlist render correctly", async () => {
    const searchParams = Promise.resolve({ query: "test" });
    const element = await Home({ searchParams });
    render(element);

    // Verificamos que se rendericen los textos de los mocks
    const counterElement = await screen.findByText("Counter: 2 RESULTS");
    const listElement = await screen.findByText("Character List");

    expect(counterElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});
