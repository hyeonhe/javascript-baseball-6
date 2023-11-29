import hasDuplicateDigits from "./hasDuplicateDigits";
import { NUMBER_LENGTH } from "../constants/constants";
import InputView from "../views/InputView";

async function getUserInput() {
  let userNumber = "";

  userNumber = await InputView.readUserNumber();

  if (
    userNumber === null ||
    userNumber === undefined ||
    userNumber.length !== NUMBER_LENGTH ||
    Number.isNaN(Number(userNumber)) ||
    hasDuplicateDigits(userNumber)
  ) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return userNumber;
}

export default getUserInput;
