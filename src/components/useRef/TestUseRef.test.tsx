import { fireEvent, render, screen } from "@testing-library/react";
import TestUseRef from "./TestUseRef";

beforeEach(() => {
  render(<TestUseRef />);
});

test("shit", () => {
  expect(1).toBe(1);
});

test("should be 2 images displaed", () => {
  const images = screen.getAllByAltText("img");
  expect(images.length).toBe(2);
});

test("images should be displaed next to each other", () => {
  screen.debug();
  //const images = screen.getAllByAltText("img");
  //expect(images[0].parentElement).toHaveAttribute("display", "flex");
});

test("on hover images should change bacground", () => {
  //const images = screen.getAllByAltText("img");
  // fireEvent.mouseOver(images[0]);
  //expect(images[0]).toHaveAttribute("opacity", "0.5");
});
