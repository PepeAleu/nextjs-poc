import { describe, it, expect } from "vitest";
import { comic } from "@/modules/comics/domain/comic";
import { testApiComic } from "@/__tests__/mocks";

describe("comic", () => {
	it("transforms API comic array to application comic array", () => {
		const result = comic([testApiComic]);
		expect(result).toEqual([
			{
				id: "1",
				title: "Comic Title",
				image: "http://example.com/comic.png",
				year: "2020",
			},
		]);
	});
});
