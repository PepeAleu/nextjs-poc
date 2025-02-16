import { describe, it, expect, vi } from "vitest";
import { getComicsByCharacterId } from "@/modules/comics/application/getComicsByCharacterId";
import { ComicsRepository } from "@/modules/comics/infrastructure/ComicsRepository";
import { testComic } from "@/__tests__/mocks";

vi.mock("@/modules/comics/infrastructure/ComicsRepository", () => ({
	ComicsRepository: class {
		getAll() {
			return Promise.resolve([testComic]);
		}
	}
}));

vi.mock("@/modules/comics/domain/comic", () => ({
	comic: vi.fn(() => testComic)
}));

describe.concurrent("getComicsByCharacterId", () => {
	it("fetches and transforms comics based on character id", async () => {
		const mockGetAll = vi.spyOn(ComicsRepository.prototype, "getAll");
		const result = await getComicsByCharacterId("123");
		expect(mockGetAll).toHaveBeenCalledWith({ id: "123" });
		expect(result).toEqual(testComic);
		mockGetAll.mockRestore();
	});

	it("throws an error if getAll fails", async () => {
		const error = new Error("Test error");
		const mockGetAll = vi.spyOn(ComicsRepository.prototype, "getAll").mockRejectedValueOnce(error);
		await expect(getComicsByCharacterId("123")).rejects.toThrow("Test error");
		mockGetAll.mockRestore();
	});
});
