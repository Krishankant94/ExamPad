let fs = require("fs");

const writeToFile = (path, fileName, jsonContent, onCallBack) => {
  fs.writeFile(
    `${path}${fileName}`,
    JSON.stringify(jsonContent, null, 4),
    "utf-8",
    onCallBack
  );
};

const getQuestionFormat = (data) => {
  const { question, questionId, a, b, c, d } = data;
  return {
    question: { id: questionId, value: question },
    options: [
      { id: "a", value: a },
      { id: "b", value: b },
      { id: "c", value: c },
      { id: "d", value: d },
    ],
  };
};

module.exports = {
  writeToFile,
  getQuestionFormat,
};
