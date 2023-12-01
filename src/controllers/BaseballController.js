import { Console } from "@woowacourse/mission-utils";
import generateComputerNumber from "../utils/generateComputerNumber";
import countStrikeBall from "../utils/countStrikeBall";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";
import { GAME_CONTROLL, NUMBER_LENGTH, ZERO } from "../constants/constants";
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
      await this.#gameRun();
    } catch (error) {
      this.#handleError(error);
    }
  }

  async #gameRun() {
    while (this.#gameInProgress) await this.#processTurn();
  }

  async #processTurn() {
    await this.#baseballNumber.getUserInput();
    const userNumber = this.#baseballNumber.getUserNumber();
    const { strike, ball } = countStrikeBall(userNumber, this.#computerNumber);

    await this.#handleTurnOutcome(strike, ball);
  }

  async #handleTurnOutcome(strike, ball) {
    if (strike === NUMBER_LENGTH && ball === ZERO)
      await this.#handleStrikeOutcome();
    else if (strike === ZERO && ball === NUMBER_LENGTH)
      OutputView.printBall(ball);
    else if (strike === ZERO && ball === ZERO) OutputView.printNothing();
    else if (strike > ZERO && ball > ZERO) OutputView.printResult(ball, strike);
  }

  async #handleStrikeOutcome() {
    OutputView.printStrike();
    OutputView.printQuitGame();
    const restart = await InputView.restartOrQuit();
    this.#restartOrQuit(restart);
  }

  #restartOrQuit(restart) {
    if (restart === GAME_CONTROLL.restart) this.#restartGame();
    else if (restart === GAME_CONTROLL.quit) this.#endGame();
  }

  #restartGame() {
    this.#computerNumber = generateComputerNumber();
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
