const { getSubjectList, getQuestionList, getResult } = require("../handlers");

const router = require("express").Router();

router.get("/subjectlist", (req, resp) => {
  const subjectList = getSubjectList();
  resp.send(subjectList);
});

router.get("/questions", (req, resp) => {
  const subjectId = req.query.subId;
  const questions = getQuestionList(subjectId);
  resp.send(questions);
});

router.post("/result", (req, resp) => {
  const solutionList = req.body;
  const subId = req.query.subId;
  const scoreCard = getResult(solutionList, subId);
  resp.send(scoreCard);
});

module.exports = router;
