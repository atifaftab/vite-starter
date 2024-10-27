import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("button starts with correct color", () =>{
  render(<App/>)
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveClass("red");
})
test("button starts with correct text", () =>{
  
})
test("button has correct color after click", () =>{

})
test("button has correct text after click", () =>{
  
})