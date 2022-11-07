import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";

/**
 * AddItemForm component
 * @param {addItem} param0 function to add item to db
 * @param {title} param1 either Snacks or Drinks
 * @returns Form to add snack or drink to appropriate menu
 */
const AddItemForm = ({ addItem, title }) => {
  const INITIAL_STATE = { id: "", name: "", description: "", recipe: "", serve: "" }
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [isValid, setIsValid] = useState(true);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }))
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (Object.values(formData).every(currentVal => currentVal !== "")) {
      addItem(formData);
      setFormData(INITIAL_STATE);
      history.push(`/${title}`)
    } else {
      setIsValid(false);
    }
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            New {title} Menu Item
          </CardTitle>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id" id="id">ID</label>
              <input name="id" type="text" aria-labelledby="id" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input name="name" type="text" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input name="description" type="textarea" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="recipe">Recipe</label>
              <input name="recipe" type="textarea" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="serve">Serve</label>
              <input name="serve" type="textarea" onChange={handleChange} />
            </div>
            {!isValid ? <div style={{color: "red"}}>All fields are required!</div> : null}
            <button type="submit">Add!</button>
          </form>
        </CardBody>
      </Card>

    </div>

  )
}

export default AddItemForm