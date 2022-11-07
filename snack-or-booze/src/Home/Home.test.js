import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.js"
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";


const drinks = [{id: "testDrink"}]
const snacks = [{id: "testSnack-1"}, {id: "testSnack-2"}]

it("renders without crashing, lists correct number of menu snacks and drinks", function(){
  const {getByText} = render(<MemoryRouter><Home drinks={drinks} snacks={snacks}/></MemoryRouter>);
  const home = getByText("We currently feature 2 snacks and 1 drinks on our menu.");
  expect(home).toBeInTheDocument();
})