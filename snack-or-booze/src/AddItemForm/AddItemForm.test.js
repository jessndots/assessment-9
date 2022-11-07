import React from "react";
import { fireEvent, render } from "@testing-library/react";
import AddItemForm from "./AddItemForm.js"
import { MemoryRouter, Route } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import App from '../App/App'
import SnackOrBoozeApi from "../Api/Api"



it("renders form without crashing", function() {
  async function addSnack(formData) {
    let newSnack = await SnackOrBoozeApi.addSnack(formData);
  }
  const { getByText } = render(
    <MemoryRouter initialEntries={['snacks/add']}>
        <Route path='snacks/add'>
          <AddItemForm title={"Snacks"} addItem={addSnack}/>
        </Route>
    </MemoryRouter>)
  const formTitle = getByText("New Snacks Menu Item")
  expect(formTitle).toBeInTheDocument();
})

// how to test that form is workking??

// it("updates database on form submission", function() {
//   async function addSnack(formData) {
//     let newSnack = await SnackOrBoozeApi.addSnack(formData);
//   }
//   const { getByLabelText, getByText } = render(
//     <MemoryRouter initialEntries={['snacks/add']}>
//         <Route path='snacks/add'>
//           <AddItemForm title={"Snacks"} addItem={addSnack}/>
//         </Route>
//     </MemoryRouter>)

//   const id = getByLabelText("ID");
//   const name = getByLabelText("Name");
//   const description = getByLabelText("Description");
//   const recipe = getByLabelText("Recipe");
//   const serve = getByLabelText("Serve");
//   const submit = getByText("Add!")

//   fireEvent.change(id, {target: {value: 'test'}})
//   fireEvent.change(name, {target: {value: 'test'}})
//   fireEvent.change(description, {target: {value: 'test'}})
//   fireEvent.change(recipe, {target: {value: 'test'}})
//   fireEvent.change(serve, {target: {value: 'test'}})
//   fireEvent.submit(submit);

//   expect(submit).not.toBeInTheDocument();
  

// })