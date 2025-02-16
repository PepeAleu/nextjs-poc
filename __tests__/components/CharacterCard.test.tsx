import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CharacterCard from "@/app/_components/CharacterCard";
import { ICharacter } from "@/modules/characters/domain/ICharacter";

describe("CharacterCard", () => {
  it("validates the character's image and link", () => {
    const character = {
      id: "1",
      name: "Test Character",
      image: "/test.src",
      description: "Test description",
    } as ICharacter;
    render(<CharacterCard character={character} />);
    const imageElement = screen.getByTestId("character-image");
    const linkElement = screen.getByTestId("character-link");
    const nameElement = screen.getByText("Test Character");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.src&w=3840&q=75"
    );
    expect(imageElement).toHaveAttribute("alt", "Portrait of Test Character");
    expect(linkElement).toHaveAccessibleDescription("View character details");
    expect(linkElement).toHaveAttribute("href", `/characters/${character.id}`);
    expect(nameElement).toBeInTheDocument();
  });

  it("validates the character's image when none is provided", () => {
    const character = {
      id: "1",
      name: "Test Character",
      description: "Test description",
    } as ICharacter;
    render(<CharacterCard character={character} />);
    const imageElement = screen.getByTestId("character-image");
    expect(imageElement).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmarvel-logo.png&w=3840&q=75"
    );
  });
});
