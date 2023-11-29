import { Console } from "@woowacourse/mission-utils";
import getUserInput from "./utils/getUserInput";
import generateComputerNumber from "./utils/generateComputerNumber";
import countStrikeBall from "./utils/countStrikeBall";
import OutputView from "./views/OutputView";
import { NUMBER_LENGTH } from "./constants/constants";
import InputView from "./views/InputView";

class App {
  gameInProgress = true;
  computerNumber = generateComputerNumber();

  async play() {
    try {
      OutputView.printStart();

      while (this.gameInProgress) {
        let userNumber = await getUserInput();

        const { strike, ball } = countStrikeBall(
          userNumber,
          this.computerNumber
        );

        if (strike === NUMBER_LENGTH) {
          await this.handleStrikeOutcome();
        } else if (ball === NUMBER_LENGTH) {
          OutputView.printBall(ball);
        } else if (strike === 0 && ball === 0) {
          OutputView.printNothing();
        } else if (strike > 0 && ball > 0) {
          OutputView.printResult(ball, strike);
        }
      }
    } catch (error) {
      Console.print(error.message);
      throw new Error("[ERROR]");
    }
  }

  async handleStrikeOutcome() {
    OutputView.printStrike();
    OutputView.printQuitGame();

    const restart = await InputView.restartOrQuit();

    if (restart === 1) {
      this.computerNumber = generateComputerNumber();
    } else if (restart === 2) {
      this.gameInProgress = false;
    }
  }
}

export default App;
