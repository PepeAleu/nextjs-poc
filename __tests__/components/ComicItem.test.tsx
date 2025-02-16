import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ComicsItem from "@/app/_components/ComicItem";
import { IComic } from "@/modules/comics/domain/IComic";

describe.concurrent("ComicsItem", () => {
  it("renders the comic's image, title, and year correctly", async () => {
    const comic = {
      id: "1",
      title: "Comic Test",
      image: "/test.jpg",
      year: "2020",
    } as IComic;

    const element = await ComicsItem({ comic });
    render(element);

    const imageElement = screen.getByAltText("Comic Test");
    const titleElement = screen.getByText("Comic Test");
    const yearElement = screen.getByText("2020");

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
  });
});
