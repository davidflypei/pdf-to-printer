"use strict";

const os = require("os");

function throwNotSupportedError() {
  throw new Error("Platform not supported");
}

switch (os.platform()) {
  case "darwin":
  case "linux":
    module.exports = {
      print: require("./unix/print"),
      getPrinters: require("./unix/get-printers"),
      getDefaultPrinter: require("./unix/get-default-printer"),
      getCompletedJobs: require("./unix/get-jobs"),
      getNotCompletedJobs: require("./unix/get-jobs"),
      getAllJobs: require("./unix/get-jobs"),
    };
    break;
  case "win32":
    module.exports = {
      print: require("./win32/print"),
      getPrinters: require("./win32/get-printers"),
      getDefaultPrinter: require("./win32/get-default-printer"),
    };
    break;
  default:
    throwNotSupportedError();
}
