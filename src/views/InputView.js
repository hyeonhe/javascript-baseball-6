import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants";

const InputView = {
  async readUserNumber() {
    const userNumber = await Console.readLineAsync(INPUT_MESSAGE.readNumber);

    return Number(userNumber);
  },

  async restartOrQuit() {
    const restart = await Console.readLineAsync(INPUT_MESSAGE.restartOrQuit);

    return parseInt(restart);
  },
};

export default InputView;
