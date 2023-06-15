export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      <h1 className="text-white">Zaire McAllister</h1>
      <div className="text-white">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
