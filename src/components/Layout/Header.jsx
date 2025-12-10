// src/components/Layout/Header.jsx

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ERP System</h1>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
