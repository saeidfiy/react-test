import { render, screen } from "@testing-library/react";
import TodoPage from "../TodoPage";

it("render todo page", async () => {
  render(<TodoPage />);

  const documentElement = await screen.findByRole("div");

  expect(documentElement).toBeInTheDocument();
});
