import { describe, it, expect, vi } from "vitest";
import { getCharacterDetail } from "@/modules/characters/application/getCharacterDetail";
import { CharacterRepository } from "@/modules/characters/infrastructure/CharacterRepository";
import { character } from "@/modules/characters/domain/character";
import { testApiCharacter1 } from "@/__tests__/mocks";


vi.mock("@/modules/characters/infrastructure/CharacterRepository", () => ({
	CharacterRepository: class {
		getOne(id: string) {
			return Promise.resolve(testApiCharacter1);
		}
		getAll() {
			return Promise.resolve([testApiCharacter1]);
		}
	}
}));

vi.mock("@/modules/characters/domain/character", () => ({
	character: vi.fn(() => testApiCharacter1)
}));

describe.concurrent("getCharacterDetail", () => {
	it("fetches and transforms character details", async () => {
		const mockGetOne = vi.spyOn(CharacterRepository.prototype, "getOne");
		const result = await getCharacterDetail("1");
		expect(mockGetOne).toHaveBeenCalledWith("1");
		expect(result).toEqual(character(testApiCharacter1));
		mockGetOne.mockRestore();
	});

	it("throws an error if getOne fails", async () => {
		const error = new Error("Test error");
		const mockGetOne = vi.spyOn(CharacterRepository.prototype, "getOne").mockRejectedValue(error);
		await expect(getCharacterDetail("invalid-id")).rejects.toThrow("Test error");
		mockGetOne.mockRestore();
	});
});
