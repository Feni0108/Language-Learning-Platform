import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../../pages/api/updateIsFirstLogin";

jest.mock("../../../lib/prisma", () => ({
  __esModule: true,
  default: {
    user: {
      update: jest.fn(),
    },
  },
}));

const mockedPrisma = prisma as jest.Mocked<typeof prisma>;

let req: Partial<NextApiRequest>;
let res: Partial<NextApiResponse>;
let consoleErrorSpy: jest.SpyInstance;

beforeEach(() => {
  req = {
    method: "PUT",
    body: {
      userId: "1",
    },
  };
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { "Error updating isFirstLogin:"});
});

afterEach(() => {
  jest.clearAllMocks();
  consoleErrorSpy.mockRestore();
});

describe("handler", () => {

    it("should update isFirstLogin for the user and return a success message", async () => {
        await handler(req as NextApiRequest, res as NextApiResponse);
    
        expect(mockedPrisma.user.update).toHaveBeenCalledWith({
          where: { id: "1" },
          data: { isFirstLogin: false },
        });
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "isFirstLogin updated successfully" });
      });
    
      it("should handle error and return a JSON response with an error message", async () => {
        const errorMessage = "Failed to update isFirstLogin";
        mockedPrisma.user.update.mockImplementation(() => { 
          throw new Error(errorMessage);
        });
    
        await handler(req as NextApiRequest, res as NextApiResponse);
    
        expect(mockedPrisma.user.update).toHaveBeenCalledWith({
          where: { id: "1" },
          data: { isFirstLogin: false },
        });
    
        expect(consoleErrorSpy).toHaveBeenCalledWith("Error updating isFirstLogin:", expect.any(Error));
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: errorMessage });

      });
    
      it("should handle invalid method and return a JSON response with an error message", async () => {
        req.method = "GET";
    
        await handler(req as NextApiRequest, res as NextApiResponse);
    
        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.json).toHaveBeenCalledWith({ error: "Method not allowed" });
      });
});