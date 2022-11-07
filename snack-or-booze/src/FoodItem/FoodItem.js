import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * FoodItem component
 * @param {items} param0 list of db items for this menu
 * @param {cantFind} param1 redirect path for invalid id
 * @returns card with item name, description, recipe, and serve instructions
 */
function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let food = items.find(food => food.id === id);
  if (!food) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic">{food.description}</CardText>
          <p>
            <b>Recipe:</b> {food.recipe}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
