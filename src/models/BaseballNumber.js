import InputView from "../views/InputView";
import { NUMBER_LENGTH } from "../constants/constants";

class BaseballNumber {
  #userNumber;

  async getUserInput() {
    const userNumber = await InputView.readUserNumber();
    this.#userNumber = userNumber;
    this.validateUserNumber();
  }

  validateUserNumber() {
    if (this.isInValidUserNumber()) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  isInValidUserNumber() {
    return (
      this.#userNumber === null ||
      this.#userNumber === undefined ||
      String(this.#userNumber).length !== NUMBER_LENGTH ||
      Object.is(this.#userNumber, NaN) ||
      this.#hasDuplicateDigits(this.#userNumber)
    );
  }

  #hasDuplicateDigits(number) {
    const digits = String(number).split("");
    return new Set(digits).size !== digits.length;
  }

  getUserNumber() {
    return this.#userNumber;
  }
}

export default BaseballNumber;
