import { NUMBER_LENGTH } from "../constants/constants";

export default function countStrikeBall(user, computer) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < NUMBER_LENGTH; i++) {
    if (user[i] === computer[i]) {
      strike += 1;
    } else if (computer.includes(user[i])) {
      ball += 1;
    }
  }

  return { strike, ball };
}
