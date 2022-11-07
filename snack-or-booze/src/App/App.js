import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import SnackOrBoozeApi from "../Api/Api";
import NavBar from "../NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "../FoodMenu/FoodMenu";
import FoodItem from "../FoodItem/FoodItem";
import AddItemForm from "../AddItemForm/AddItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [newItem, setNewItem] = useState(true)

  // fetches menu items from db
  useEffect(() => {
    async function getMenuItems() {
      let snackList = await SnackOrBoozeApi.getSnacks();
      let drinkList = await SnackOrBoozeApi.getDrinks();
      setSnacks(snackList);
      setDrinks(drinkList);
      setIsLoading(false);
    }
    getMenuItems();
  }, [newItem]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function addSnack(formData) {
    let newSnack = await SnackOrBoozeApi.addSnack(formData);
    setSnacks(snacks => [...snacks, newSnack])
    setNewItem(newItem => !newItem);
  }
  async function addDrink(formData) {
    let newDrink = await SnackOrBoozeApi.addDrink(formData);
    setDrinks(drinks => [...drinks, newDrink])
    setNewItem(newItem => !newItem);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="Snacks"/>
            </Route>
            <Route exact path="/snacks/add">
              <AddItemForm title="Snacks" addItem={addSnack}/>
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu items={drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/add">
              <AddItemForm title="Drinks" addItem={addDrink}/>
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
