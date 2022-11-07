import React from "react";
import { render } from "@testing-library/react";
import FoodItem from "./FoodItem.js"
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const snacks = [
  {
    id: "nachos",
    name: "Nachos",
    description: "An American classic!",
    recipe: "Cover expensive, organic tortilla chips with Cheez Whiz.",
    serve: "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }
]

it("renders without crashing", function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={['snacks/nachos']}>
      <Route path='snacks/:id'>
        <FoodItem items={snacks} cantFind="/snacks" />
      </Route>
    </MemoryRouter>)

  const title = getByText("Nachos")
  const recipe = getByText("Cover expensive, organic tortilla chips with Cheez Whiz.")
  expect(title).toBeInTheDocument();
  expect(recipe).toBeInTheDocument();
})



