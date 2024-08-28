import { useState } from "react";

export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  function handleFormSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name: itemName,
      quantity: quantity,
      isSelected: false,
    };
    onAddItem(newItem);
    setItemName((name) => "");
    setQuantity((quantity) => 0);
  }
  return (
    <form className="footer-form" onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        placeholder="Enter an item to add..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button>Add Item</button>
    </form>
  );
}
