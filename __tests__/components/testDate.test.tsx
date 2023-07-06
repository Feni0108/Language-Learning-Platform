import moment from "moment";
import { testDate} from "../../components/testDate";

jest.mock("../../lib/prisma", () => ({
  prisma: {
    leaderboard: {
      update: jest.fn(),
    },
  },
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe("testDate", () => {
  const mockId = "123";
  const day = "day";

  it("should return false when prevDate is null", () => {
    const result = testDate(null, mockId);

    expect(result).toBe(false);
  });

  it("should return true when prevDate is today's date", () => {
    const today = moment().startOf(day).toDate();
    const result = testDate(today, mockId);

    expect(result).toBe(true);
  });

  it("should return false when prevDate is yesterday", () => {
    const yesterday = moment().subtract(1, day).startOf(day).toDate();
    const result = testDate(yesterday, mockId);

    expect(result).toBe(false);
  });
});
