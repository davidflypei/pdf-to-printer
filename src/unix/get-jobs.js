"use strict";

const execAsync = require("../execAsync");

const parseResult = (output) => {
  return output
    .trim()
    .split("\n")
    .map((e) => e.substr(0, e.indexOf(" ")));
};

const getCompletedJobs = () => {
  return execAsync("lpstat", ["-W", "completed"], parseResult);
};
const getNotCompletedJobs = () => {
  return execAsync("lpstat", ["-W", "not-completed"], parseResult);
};
const getAllJobs = () => {
  return execAsync("lpstat", ["-W", "all"], parseResult);
};

module.exports = getNotCompletedJobs;
module.exports = getCompletedJobs;
module.exports = getAllJobs;
