import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardHero from "../dashbord";
import ProductFilters from "../../dashbord/products/ProductFilters";
import ProductTable from "../../dashbord/products/ProductTable";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Dark overlay for mobile (click to close sidebar) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ease-in-out 
          ${sidebarOpen ? "md:ml-64" : "ml-0"}
        `}
      >
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        Page Content
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Dashboard Overview Section */}
          {/* <section>
            <DashboardHero />
          </section> */}

          {/* Product Filters Section */}
          {/* <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <ProductFilters />
          </section> */}

          {/* Product Table Section */}
          {/* <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 overflow-x-auto">
            <ProductTable />
          </section> */}
        </main>
      </div>
    </div>
  );
}
