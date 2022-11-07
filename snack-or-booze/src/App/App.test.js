import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom/extend-expect";


it("renders without crashing", function(){
  const {getByText} = render(<App/>);
  const loading = getByText("Loading...");
  expect(loading).toBeInTheDocument();
})