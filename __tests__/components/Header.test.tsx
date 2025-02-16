import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "@/app/_components/Header";

vi.mock("@/app/_components/FavoritesCounter", () => ({
  FavoritesCounter: () => <div>FavoritesCounter</div>,
}));

describe.concurrent("Header", () => {
  it("renders the logo with the correct link and displays FavoritesCounter", () => {
    render(<Header />);

    // Verifica que el link del logo esté presente y tenga el atributo href='/'
    const logoLink = screen.getByTestId("header-logo-link");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    // Verifica que la imagen del logo tenga el alt correcto
    const logoImage = screen.getByAltText("Logo de la página: Marvel Wiki");
    expect(logoImage).toBeInTheDocument();

    // Verifica que se renderice el FavoritesCounter mockeado
    expect(screen.getByText("FavoritesCounter")).toBeInTheDocument();
  });
});
