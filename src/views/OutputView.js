import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.startMessage);
  },

  printQuitGame() {
    Console.print(OUTPUT_MESSAGE.quitMessage);
  },

  printBall(count) {
    Console.print(OUTPUT_MESSAGE.ball(count));
  },

  printStrike() {
    Console.print(OUTPUT_MESSAGE.strike);
  },

  printNothing() {
    Console.print(OUTPUT_MESSAGE.nothing);
  },

  printResult(ball, strike) {
    Console.print(OUTPUT_MESSAGE.result(ball, strike));
  },
};

export default OutputView;
