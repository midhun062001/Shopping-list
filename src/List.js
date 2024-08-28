import ListItem from "./ListItem";

export default function List({ items, onChecking }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={item.id} onChecking={onChecking} />
      ))}
    </ul>
  );
}
