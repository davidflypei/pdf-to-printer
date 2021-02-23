"use strict";

import execAsync from "../execAsync";
import getCompletedJobs from "./get-completed-jobs";

jest.mock("../../src/execAsync");

const mockJobListStdout = `
macOS_Printer-1                ubuntu            1024   Thu Feb 18 14:20:09 2021
Zebra-1               ubuntu            1024   Thu Feb 18 14:20:09 2021
    `;

afterEach(() => {
  // restore the original implementation
  execAsync.mockRestore();
});

test("returns list of jobs", () => {
  execAsync.mockImplementation((_, [], callback) =>
    Promise.resolve(callback(mockJobListStdout))
  );
  return expect(getCompletedJobs()).resolves.toStrictEqual([
    "macOS_Printer-1",
    "Zebra-1",
  ]);
});

test("fails with an error", () => {
  execAsync.mockImplementation(() => Promise.reject("error"));
  return expect(getCompletedJobs()).rejects.toBe("error");
});
