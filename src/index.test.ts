import { getHello } from "./index";

test("Hello world", () => {
  expect(getHello("world")).toBe("Hello world!");
});
