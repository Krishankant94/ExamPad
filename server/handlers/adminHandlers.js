const subjectList = require("../storage/subjects.json");
const questionList = require("../storage/questions.json");
const answerKey = require("../storage/answerKey.json");
const { v4 } = require("uuid");
const { writeToFile, getQuestionFormat } = require("../utils/appUtils");
const { fileNames, path } = require("../utils/constants");
const addSubject = (subject) => {
  const newSubject = {
    name: subject,
    id: v4(),
  };
  subjectList.push(newSubject);
  writeToFile(path, fileNames.SUBJECTFILE, subjectList, () => {
    console.log("fileupload");
  });
  return subjectList;
};

const deleteSubject = (subId) => {
  const newSubjectList = subjectList.filter((subject) => subject.id !== subId);
  writeToFile(path, fileNames.SUBJECTFILE, newSubjectList, () => {
    console.log("fileupload");
  });
  return newSubjectList;
};

const addQuestion = (data) => {
  const { subId, question, a, b, c, d, correctOpt } = data;
  const questionId = v4();
  setAnswerKey(questionId, correctOpt);
  const newQuestionDetails = getQuestionFormat({
    question,
    questionId,
    a,
    b,
    c,
    d,
  });
  const questionSet = questionList[subId];
  questionSet.push(newQuestionDetails);
  const newQuestionsData = { ...questionList, [subId]: questionSet };
  writeToFile(path, fileNames.QUESTIONSFILE, newQuestionsData, () => {
    console.log("fileupload");
  });
};

const setAnswerKey = (questionId, correctOpt) => {
  answerKey[questionId] = correctOpt;
  writeToFile(path, fileNames.ANWERKEYFILE, answerKey, () => {
    console.log("fileupload");
  });
};

module.exports = {
  addSubject,
  deleteSubject,
  addQuestion,
};
