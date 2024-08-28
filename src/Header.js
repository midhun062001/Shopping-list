export default function Header() {
  const date = new Date();
  return (
    <div className="header">
      <h3>My List</h3>
      <p>{date.toDateString()}</p>
    </div>
  );
}
