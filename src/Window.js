// @flow
//import THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';

class Window {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.setupDOM();
    this.react = React;
  }

  setupDOM() {
    ReactDOM.render(
      <h1>Hello, world</h1>,
      this.container
    );
  }
}

export { Window };
