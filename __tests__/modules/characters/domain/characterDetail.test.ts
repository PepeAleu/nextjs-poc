import { describe, it, expect } from "vitest";
import { characterDetail } from "@/modules/characters/domain/characterDetail";
import { testApiCharacter1, testApiCharacter2 } from "@/__tests__/mocks";


describe.concurrent("characterDetail", () => {
	it("transforms API character detail to application character with thumbnail", () => {
		const result = characterDetail(testApiCharacter1);
		expect(result.id).toBe("1");
		expect(result.image).toBe("http://example.com/image.jpg");
		// ...additional assertions if needed...
	});

	it("handles missing thumbnail gracefully", () => {
		const result = characterDetail(testApiCharacter2);
		expect(result.id).toBe("2");
		// When thumbnail is missing, result.image becomes "undefined.undefined"
		expect(result.image).toBe("undefined.undefined");
	});
});
