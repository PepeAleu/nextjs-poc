import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { CharacterRepository } from "@/modules/characters/infrastructure/CharacterRepository";

// Pre-mock next/navigation so that redirect is a mutable mock function

vi.mock("next/navigation", () => ({
	redirect: vi.fn(),
}));

vi.mock("@/modules/shared/infrastructure/data", () => ({
	getRepositoryData: vi.fn(() => ({
		apiHost: 'http://gateway.marvel.com/v1/public/',
		authParams: `ts=1234&apikey=1234&hash=1234`,
		limitCharacters: '50'
	}))
}));

// Sample API response for testing getOne and getAll
const testApiCharacter = {
	id: 1,
	name: "Test Character",
	thumbnail: {
		path: "http://example.com/image",
		extension: "jpg",
	},
};

const apiResponseForOne = {
	data: {
		results: [testApiCharacter],
	},
};

const apiResponseForAll = {
	data: {
		results: [testApiCharacter, { ...testApiCharacter, id: 2, name: "Another Character" }],
	},
};

describe("CharacterRepository", () => {
	let fetchMock: any;

	beforeEach(() => {
		fetchMock = vi.spyOn(global, "fetch");
	});

	afterEach(() => {
		fetchMock.mockRestore();
		vi.clearAllMocks();
	});

	describe("getOne", () => {
		it("fetches and returns a character when response is ok", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response(JSON.stringify(apiResponseForOne), {
					status: 200,
					statusText: "OK",
				})
			);
			const repository = new CharacterRepository();
			const result = await repository.getOne("1");
			expect(fetchMock).toHaveBeenCalled();
			expect(result).toEqual(testApiCharacter);
		});

		it("redirects and throws an error when response is 404", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response("Not Found", {
					status: 404,
					statusText: "Not Found",
				})
			);
			const repository = new CharacterRepository();
			await expect(repository.getOne("non-existent")).rejects.toThrow("Get character error: Not Found");
		});

		it("throws an error for non-OK responses (non-404)", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response("Server Error", {
					status: 500,
					statusText: "Internal Server Error",
				})
			);
			const repository = new CharacterRepository();
			await expect(repository.getOne("1")).rejects.toThrow("Get character error: Internal Server Error");
		});
	});

	describe("getAll", () => {
		it("fetches and returns characters when response is ok", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response(JSON.stringify(apiResponseForAll), {
					status: 200,
					statusText: "OK",
				})
			);
			const repository = new CharacterRepository();
			const result = await repository.getAll({ nameStartsWith: "Test" });
			expect(fetchMock).toHaveBeenCalled();
			expect(result).toEqual(apiResponseForAll.data.results);
		});

		it("throws an error when response is not ok", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response("Error", {
					status: 400,
					statusText: "Bad Request",
				})
			);
			const repository = new CharacterRepository();
			await expect(repository.getAll({ nameStartsWith: "Test" })).rejects.toThrow("Get characters error: Bad Request");
		});
	});
});
