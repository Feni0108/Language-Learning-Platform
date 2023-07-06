import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import useFetch from "../../../components/games/useFetch";
import fetchMock from "fetch-mock-jest";

beforeEach(() => {
  fetchMock.reset();
  fetchMock.mock("*", {
    body: JSON.stringify({ result: ["Task 1"] }),
  });
});

describe("useFetch", () => {
  it("should fetch newUrl and task", async () => {
    const newUrl = "/api/tasks/greeting/sentence";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(newUrl));

    expect(result.current.task).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.task).toEqual(["Task 1"]);
    expect(fetchMock.called(newUrl)).toBe(true);
  });
});
