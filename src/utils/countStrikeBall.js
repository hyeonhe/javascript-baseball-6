import { NUMBER_LENGTH, ZERO } from "../constants/constants";

export default function countStrikeBall(user, computer) {
  let strike = ZERO;
  let ball = ZERO;
  const userNumber = String(user);

  for (let i = ZERO; i < NUMBER_LENGTH; i++) {
    if (userNumber[i] === computer[i]) {
      strike += 1;
    } else if (computer.includes(userNumber[i])) {
      ball += 1;
    }
  }

  return { strike, ball };
}
