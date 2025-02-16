import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ComicsList from "@/app/_components/ComicsList";

vi.mock("@/modules/comics/application/getComicsByCharacterId", () => ({
  getComicsByCharacterId: vi.fn(() =>
    Promise.resolve([
      { id: "1", title: "Comic 1", image: "/comic1.jpg", year: "2021" },
      { id: "2", title: "Comic 2", image: "/comic2.jpg", year: "2022" },
    ])
  ),
}));

vi.mock("@/app/_components/ComicItem", () => ({
  default: ({ comic }: { comic: any }) => <div>{comic.title}</div>,
}));

describe.concurrent("ComicsList", () => {
  it("renders the header and comics list correctly", async () => {
    const element = await ComicsList({ id: "123" });
    render(element);

    const header = screen.getByText("Comics");
    expect(header).toBeInTheDocument();

    const comic1 = await screen.findByText("Comic 1");
    const comic2 = await screen.findByText("Comic 2");
    expect(comic1).toBeInTheDocument();
    expect(comic2).toBeInTheDocument();
  });
});
