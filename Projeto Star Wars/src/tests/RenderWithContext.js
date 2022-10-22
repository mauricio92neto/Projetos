import React from "react";
import { render } from "@testing-library/react";
import Provider from "../context/Provider";

export const renderWithContext = (component) => ({
  ...render(<Provider>{component}</Provider>),
});
