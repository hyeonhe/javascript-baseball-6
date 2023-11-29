import BaseballController from "./controllers/baseballController";

class App {
  async play() {
    const baseballController = new BaseballController();
    await baseballController.init();
  }
}

export default App;
