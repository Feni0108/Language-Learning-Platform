import { updatePoints } from "../../components/updatePoints";
import fetchMock from "fetch-mock-jest";

beforeEach(() => {
  fetchMock.reset();
});

afterAll(() => {
  fetchMock.mockReset();
});

describe("updatePoints", () => {
  const totalPoints = 100;
  const userId = "123";
  const isProgressUpdate = true;
  const interfaceLanguage = "en";
  const targetLanguage = "is";

  it("should return the response data on successful fetch", async () => {
    const mockResponse = {
      success: true,
    };

    fetchMock.mock("/api/updatePoints", mockResponse);

    const response = await updatePoints(
      totalPoints,
      userId,
      isProgressUpdate,
      interfaceLanguage,
      targetLanguage
    );

    expect(response).toEqual(mockResponse);
  });

  it("should handle the error case", async () => {
    fetchMock.mock("/api/updatePoints", 500);

    try {
      await updatePoints(
        totalPoints,
        userId,
        isProgressUpdate,
        interfaceLanguage,
        targetLanguage
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
