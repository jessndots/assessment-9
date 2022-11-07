import React from "react";
import { fireEvent, render } from "@testing-library/react";
import NavBar from "./NavBar.js"
import App from "../App/App.js";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from 'react-router-dom';

it("renders without crashing", function(){
  const {getByText} = render(<MemoryRouter><NavBar/></MemoryRouter>);
  expect(getByText("Snacks")).toBeInTheDocument();
  expect(getByText("Drinks")).toBeInTheDocument();
})

