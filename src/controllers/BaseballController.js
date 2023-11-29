import { Console } from "@woowacourse/mission-utils";
import generateComputerNumber from "../utils/generateComputerNumber";
import countStrikeBall from "../utils/countStrikeBall";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";
import { NUMBER_LENGTH } from "../constants/constants";
import BaseballNumber from "../models/BaseballNumber";

class BaseballController {
  #gameInProgress = true;
  #computerNumber = generateComputerNumber();
  #baseballNumber;

  constructor() {
    this.#baseballNumber = new BaseballNumber();
  }

  async init() {
    try {
      OutputView.printStart();

      while (this.#gameInProgress) {
        await this.#processTurn();
      }
    } catch (error) {
      this.#handleError(error);
    }
  }

  async #processTurn() {
    await this.#baseballNumber.getUserInput();
    const userNumber = this.#baseballNumber.getUserNumber();

    const { strike, ball } = countStrikeBall(userNumber, this.#computerNumber);

    if (strike === NUMBER_LENGTH) {
      await this.#handleStrikeOutcome();
    } else if (ball === NUMBER_LENGTH) {
      OutputView.printBall(ball);
    } else if (strike === 0 && ball === 0) {
      OutputView.printNothing();
    } else if (strike > 0 && ball > 0) {
      OutputView.printResult(ball, strike);
    }
  }

  async #handleStrikeOutcome() {
    OutputView.printStrike();
    OutputView.printQuitGame();

    const restart = await InputView.restartOrQuit();

    if (restart === 1) {
      this.#computerNumber = generateComputerNumber();
    } else if (restart === 2) {
      this.#endGame();
    }
  }

  #endGame() {
    this.#gameInProgress = false;
  }

  #handleError(error) {
    Console.print(error.message);
    throw new Error("[ERROR]");
  }
}

export default BaseballController;
