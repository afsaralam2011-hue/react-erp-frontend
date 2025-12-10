// src/components/Layout/Sidebar.jsx
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>

      <ul className="space-y-3">

        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/users" className="block p-2 rounded hover:bg-gray-700">
            Users
          </Link>
        </li>

        <li>
          <Link to="/inventory" className="block p-2 rounded hover:bg-gray-700">
            Inventory
          </Link>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;
