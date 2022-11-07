import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

/**
 * FoodMenu component
 * @param {items} param0 list of menu items
 * @param {title} param1 either Snacks or Drinks
 * @returns menu of either snack or drink items depending on title param
 */
function FoodMenu({ items, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${title}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Button>
            <Link to={`/${title}/add`}>
              Add to {title} Menu
            </Link>
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
