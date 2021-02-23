"use strict";

const execAsync = require("../execAsync");

const getCompletedJobs = () => {
  const parseResult = (output) => {
    return output
      .trim()
      .split("\n")
      .map((e) => e.substr(0, e.indexOf(" ")));
  };
  return execAsync("lpstat", ["-W", "completed"], parseResult);
};

module.exports = getCompletedJobs;
