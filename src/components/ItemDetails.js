import React from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage() {
  const { itemId } = useParams();

  // In a real application, you would fetch item details based on the itemId
  const itemDetails = {
    id: itemId,
    name: `Item ${itemId}`,
    description: `Details for Item ${itemId}`,
  };

  return (
    <div>
      <h2>Item Details</h2>
      <p>ID: {itemDetails.id}</p>
      <p>Name: {itemDetails.name}</p>
      <p>Description: {itemDetails.description}</p>
    </div>
  );
}

export default ItemDetailsPage;
