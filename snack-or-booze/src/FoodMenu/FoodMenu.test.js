import React from "react";
import { render } from "@testing-library/react";
import FoodMenu from "./FoodMenu.js"
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const drinks = [{id: "testDrink", name: "Test Drink 1", description: "test", recipe: "test", serve: "test"}]
const snacks = [
  {id: "testSnack-1", name: "Test Snack 1", description: "test", recipe: "test", serve: "test"}, 
  {id: "testSnack-2", name: "Test Snack 2", description: "test", recipe: "test", serve: "test"}]

it("renders Snack menu without crashing", function(){
  const {getByText} = render(<MemoryRouter><FoodMenu items={snacks} title="Snacks"/></MemoryRouter>);
  const snack1 = getByText("Test Snack 1");
  const snack2 = getByText("Test Snack 2");
  expect(snack1).toBeInTheDocument();
  expect(snack2).toBeInTheDocument();
})

it("renders Drinks menu without crashing", function(){
  const {getByText} = render(<MemoryRouter><FoodMenu items={drinks} title="Drinks"/></MemoryRouter>);
  const drink = getByText("Test Drink 1");
  expect(drink).toBeInTheDocument();
})