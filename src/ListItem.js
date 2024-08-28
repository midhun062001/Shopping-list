import { useState } from "react";

export default function ListItem({ item, onChecking }) {
  const [isSelected, setIsSelected] = useState(item.isSelcted);

  function handleSelection() {
    setIsSelected((isSelected) => !isSelected);
    onChecking({ ...item, isSelected });
  }

  return (
    <li
      className={item.isSelected ? "-bg--green" : "-bg--white"}
      onClick={handleSelection}
    >
      <h3>{item.name}</h3>
      <div className="item-detail ">
        <p>{`(${item.quantity})`}</p>
        <div
          className={`rounded-checkbox ${
            item.isSelected ? "rounded-checkbox-checked " : ""
          }`}
        ></div>
        {/* <input type="checkbox" className="rounded-checkbox" /> */}
      </div>
    </li>
  );
}

// ;
