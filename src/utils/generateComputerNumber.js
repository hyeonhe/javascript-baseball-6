import { Random } from "@woowacourse/mission-utils";
import { NUMBER_LENGTH, MIN_NUMBER, MAX_NUMBER } from "../constants/constants";

export default function generateComputerNumber() {
  const computer = [];

  while (computer.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer.join("");
}
