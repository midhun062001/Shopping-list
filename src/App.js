import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [item, ...items]);
  }

  function handleCheck(item) {
    setItems((items) => items.map((i) => (i.id === item.id ? item : i)));
  }

  return (
    <div className="App">
      <div className="list-container">
        <Header />
        <List items={items} onChecking={handleCheck} />
        <Form onAddItem={handleAddItem} />
      </div>
    </div>
  );
}

export default App;
