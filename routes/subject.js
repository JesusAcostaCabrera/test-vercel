const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const js = metodo.getSubjects()
  return res.status(200).json(js);
});

module.exports = router;