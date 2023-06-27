const { logModel } = require("../Model/log.model");
const express = require("express");
const logRouter = express.Router();

logRouter.get("/", async (req, res) => {
  try {
    const logs = await logModel.find();

    res.send(logs);
  } catch (error) {
    res.status(400).json({ err: "bad request" });
  }
});

module.exports = { logRouter };
