import { describe, it, expect, vi } from "vitest";
import { getCharacters } from "@/modules/characters/application/getCharacters";
import { CharacterRepository } from "@/modules/characters/infrastructure/CharacterRepository";
import { character } from "@/modules/characters/domain/character";
import { testApiCharacter1, testApiCharacter2 } from "@/__tests__/mocks";


vi.mock("@/modules/characters/infrastructure/CharacterRepository", () => ({
	CharacterRepository: class {
		getAll() {
			return Promise.resolve([testApiCharacter1, testApiCharacter2]);
		}
		getOne() {
			return Promise.resolve(testApiCharacter1);
		}
	}
}));

vi.mock("@/modules/characters/domain/character", () => ({
	character: vi.fn(() => testApiCharacter1)
}));

describe("getCharacters", () => {
	it("fetches and transforms characters when no search term is provided", async () => {
		const mockGetAll = vi.spyOn(CharacterRepository.prototype, "getAll").mockResolvedValueOnce([testApiCharacter1, testApiCharacter2]);
		const result = await getCharacters();
		expect(mockGetAll).toHaveBeenCalledWith({ nameStartsWith: undefined });
		expect(result).toEqual([testApiCharacter1, testApiCharacter1]);
		mockGetAll.mockRestore();
	});

	it("fetches and transforms characters when a search term is provided", async () => {
		const searchTerm = "Test";
		const mockGetAll = vi.spyOn(CharacterRepository.prototype, "getAll");
		const result = await getCharacters(searchTerm);
		expect(mockGetAll).toHaveBeenCalledWith({ nameStartsWith: searchTerm });
		expect(result).toEqual([testApiCharacter1, testApiCharacter1]);
		mockGetAll.mockRestore();
	});

	it("throws an error if getAll fails", async () => {
		const error = new Error("Test error");
		const mockGetAll = vi.spyOn(CharacterRepository.prototype, "getAll").mockRejectedValue(error);
		await expect(getCharacters("Invalid")).rejects.toThrow("Test error");
		mockGetAll.mockRestore();
	});
});
