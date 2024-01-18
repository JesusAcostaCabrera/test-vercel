const express = require("express");
const router = express.Router();

const subjects = [
  {
    code: "MATH-101",
    name: "Mathematics",
    description: "Mathematics",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
  {
    code: "PHYS-101",
    name: "Physics",
    description: "Physics",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "Jane Doe",
  },
  {
    code: "CHEM-101",
    name: "Chemistry",
    description: "Chemistry",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
];

router.get("/", async (req, res, next) => {
  return res.status(200).json(subjects);
});

router.post("/", async (req, res, next) => {
  const newSubject = await req.json();
  if (subjects.find((subject) => subject.code === newSubject.code)) {
    return res.json(
      { error: "Subject already exists" },
      { status: 400 }
    );
  }
  subjects.push(newSubject);
  return res.json(newSubject);
});

router.delete('/', async (req, res, next) => {
  const { code } = await req.json();
  const index = subjects.findIndex((subject) => subject.code === code);
  if (index !== -1) {
    const deletedSubject = subjects.splice(index, 1)[0];
    return res.json(deletedSubject);
  } else {
    return res.json({ error: "Subject not found" }, { status: 404 });
  }
});

module.exports = router;