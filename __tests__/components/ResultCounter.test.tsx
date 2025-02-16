import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResultCounter from "@/app/_components/ResultCounter";

describe.concurrent("ResultCounter", () => {
  it("displays '1 RESULT' when counter is 1", () => {
    render(<ResultCounter counter={1} />);
    expect(screen.getByText("1 RESULT")).toBeInTheDocument();
  });

  it("displays '0 RESULTS' when counter is 0", () => {
    render(<ResultCounter counter={0} />);
    expect(screen.getByText("0 RESULTS")).toBeInTheDocument();
  });

  it("displays '2 RESULTS' when counter is greater than 1", () => {
    render(<ResultCounter counter={2} />);
    expect(screen.getByText("2 RESULTS")).toBeInTheDocument();
  });
});
