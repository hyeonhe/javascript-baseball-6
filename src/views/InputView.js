import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants";

const InputView = {
  async readUserNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.readNumber);
  },

  async restartOrQuit() {
    const restart = await Console.readLineAsync(INPUT_MESSAGE.restartOrQuit);
    return parseInt(restart);
  },
};

export default InputView;
