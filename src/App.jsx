import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardHero from "./dashbord/index";
import ProductFilters from "./dashbord/products/ProductFilters";
import ProductTable from "./dashbord/products/ProductTable";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main
          className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {/* Dashboard Section */}
          <section className="p-1 sm:p-6 md:p-8">
            <DashboardHero />
          </section>

          {/* Product Filters Section */}
          <section className="px-1 sm:px-6 md:px-8">
            <ProductFilters />
          </section>

          {/* Product Table Section */}
          <section className="p-1 sm:p-6 md:p-8">
            <div className="w-full sm:w-[90%] mx-auto overflow-x-auto">
              <ProductTable />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center p-4 shadow-inner">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Muzamil Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
