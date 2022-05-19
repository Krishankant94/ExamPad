const {
  addSubject,
  deleteSubject,
  addQuestion,
} = require("../handlers/adminHandlers");

const router = require("express").Router();

router.post("/addsubject", (req, resp) => {
  const { subject } = req.body;
  const newSubjectList = addSubject(subject);
  resp.send(newSubjectList);
});

router.delete("/deletesubject", (req, resp) => {
  const { subId } = req.query;
  const newSubjectList = deleteSubject(subId);
  resp.send(newSubjectList);
});

router.post("/addquestions", (req, resp) => {
  const data = req.body;
  addQuestion(data);
});

module.exports = router;
