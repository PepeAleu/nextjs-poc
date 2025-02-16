import { describe, it, expect } from "vitest";
import { character } from "@/modules/characters/domain/character";
import { testApiCharacter1, testApiCharacter2 } from "@/__tests__/mocks";

describe.concurrent("character", () => {
	it("transforms API character to application character with thumbnail", () => {
		const result = character(testApiCharacter1);
		expect(result.id).toBe("1");
		expect(result.image).toBe("http://example.com/image.jpg");
	});

	it("handles missing thumbnail gracefully", () => {
		const result = character(testApiCharacter2);
		expect(result.id).toBe("2");
		expect(result.image).toBe("undefined.undefined");
	});
});
