import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Popcorn of the Day</h1>
      <p>
        Sweet and salty popcorn, candy, and pretzel mix topped with pure gold
        leaf.
      </p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;
