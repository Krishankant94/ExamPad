const subjectList = require("../storage/subjects.json");
const questionSet = require("../storage/questions.json");
const answerkey = require("../storage/answerKey.json");
const { getPercentage } = require("../utils/appUtils");

const getSubjectList = () => {
  const list = subjectList;
  return list;
};

const getQuestionList = (id) => {
  const questions = questionSet[id];
  return questions;
};

const getResult = (solutionList, subId) => {
  let score = 0;
  const correctAnswers = [];
  const wrongAnswers = [];

  solutionList.forEach((solution) => {
    const { questionId, optId } = solution;
    const questionObj = questionSet[subId].find(
      (item) => item.question.id === questionId
    );
    const option = questionObj.options.find((option) => option.id === optId);
    if (answerkey[questionId] === optId) {
      score += 1;
      correctAnswers.push({
        question: questionObj.question.value,
        answer: option.value,
      });
    } else {
      wrongAnswers.push({
        question: questionObj.question.value,
        answer: option.value,
      });
    }
  });

  return {
    score: getPercentage(score, solutionList.length),
    correctAnswers,
    wrongAnswers,
  };
};

module.exports = {
  getSubjectList,
  getQuestionList,
  getResult,
};
