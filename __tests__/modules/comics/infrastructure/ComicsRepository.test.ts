import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ComicsRepository } from "@/modules/comics/infrastructure/ComicsRepository";

vi.mock("@/modules/shared/infrastructure/data", () => ({
	getRepositoryData: vi.fn(() => ({
		apiHost: "http://gateway.marvel.com/v1/public/",
		authParams: "ts=1234&apikey=1234&hash=1234",
		limitCharacters: "50",
	})),
}));

const testApiComic = {
	id: 1,
	title: "Comic Title",
	thumbnail: {
		path: "http://example.com/comic",
		extension: "png",
	},
	dates: [{ date: "2020-01-01T00:00:00Z" }],
};

const apiResponse = {
	data: {
		results: [
			testApiComic,
			{ ...testApiComic, id: 2, title: "Another Comic" },
		],
	},
};

describe("ComicsRepository", () => {
	let fetchMock: any;

	beforeEach(() => {
		fetchMock = vi.spyOn(global, "fetch");
	});

	afterEach(() => {
		fetchMock.mockRestore();
		vi.clearAllMocks();
	});

	describe("getAll", () => {
		it("fetches and returns comics when response is ok", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response(JSON.stringify(apiResponse), {
					status: 200,
					statusText: "OK",
				})
			);
			const repository = new ComicsRepository();
			// Pass an object with a valid id, as used in constructing the URL
			const result = await repository.getAll({ id: "123" });
			expect(fetchMock).toHaveBeenCalled();
			expect(result).toEqual(apiResponse.data.results);
		});

		it("returns an empty array when response is not ok", async () => {
			fetchMock.mockResolvedValueOnce(
				new Response("Error", {
					status: 400,
					statusText: "Bad Request",
				})
			);
			const repository = new ComicsRepository();
			const result = await repository.getAll({ id: "123" });
			expect(fetchMock).toHaveBeenCalled();
			expect(result).toEqual([]);
		});
	});
});
