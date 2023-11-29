const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

const OUTPUT_MESSAGE = Object.freeze({
  startMessage: "숫자 야구 게임을 시작합니다.",
  quitMessage: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ball: (ball) => `${ball}볼`,
  nothing: "낫싱",
  strike: `${NUMBER_LENGTH}스트라이크`,
  result: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
});

const INPUT_MESSAGE = Object.freeze({
  readNumber: "숫자를 입력해주세요 : ",
  restartOrQuit: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

export { OUTPUT_MESSAGE, INPUT_MESSAGE, NUMBER_LENGTH, MIN_NUMBER, MAX_NUMBER };
