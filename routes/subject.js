const express = require("express");
const router = express.Router();
const metodos = require('../Opt/subject-opt');


router.get("/", async (req, res, next) => {
  metodos.getSubjects(res);
});

router.post("/", async (req, res, next) => {
  metodos.insertSubject(req.body.code, req.body.name, req.body.description, req.body.credits, req.body.teacher, res);
});

router.delete('/', async (req, res, next) => {
  metodos.deleteSubject(req.body.code, res);
});


module.exports = router;