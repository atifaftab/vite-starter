import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
// import {logRoles} from '@testing-library/dom'


test("button click flow", () =>{
  // for debugging the test for getByRoles
  // const { container } = render(<App />)
  // logRoles(container);

  // render the app
  render(<App/>)

  //find the button
  const buttonElement = screen.getByRole("button", {name: /blue/i});

  //check initial color
  expect(buttonElement).toHaveClass("red");

  //click the button
  fireEvent.click(buttonElement)

  //check the button text
  expect(buttonElement).toHaveTextContent(/red/i);
  //check the button color
  expect(buttonElement).toHaveClass("blue");



})

test("button has correct label and color after click", () =>{


})
