import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * Home component
 * @param {snacks} param0 list of snacks for access to count
 * @param {drinks} param1 list of drinks for access to count
 * @returns home page with cafe description
 */
function Home({snacks, drinks}) {
  const numSnacks = snacks.length;
  const numDrinks = drinks.length;
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
            <p>We currently feature {numSnacks} snacks and {numDrinks} drinks on our menu.</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
};

export default Home;
