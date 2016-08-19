import { Window } from "./Window.js";

class Application {
  window: Window;
  container: HTMLElement;

  constructor() {
    // Initialize a container for the application
    this.container = document.createElement('div');
    document.body.appendChild(this.container);

    // Construct a new window for operation in the container
    this.window = new Window(this.container);
  }
}

export { Application };
