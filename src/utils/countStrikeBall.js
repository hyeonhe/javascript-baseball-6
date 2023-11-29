import { NUMBER_LENGTH } from "../constants/constants";

export default function countStrikeBall(user, computer) {
  let strike = 0;
  let ball = 0;
  const userNumber = String(user);

  for (let i = 0; i < NUMBER_LENGTH; i++) {
    if (userNumber[i] === computer[i]) {
      strike += 1;
    } else if (computer.includes(userNumber[i])) {
      ball += 1;
    }
  }

  return { strike, ball };
}
