// src/components/Layout/Layout.jsx
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
