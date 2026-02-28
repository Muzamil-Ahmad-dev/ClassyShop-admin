import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardHero from "./dashbord/index";
import ProductFilters from "./dashbord/products/ProductFilters";
import ProductTable from "./dashbord/products/ProductTable";
import DashboardBarChart from "./dashbord/dashbordCart/DashbordCart";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* For small screens: overlay sidebar, For large: fixed sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          className={`fixed inset-y-0 left-0 z-30 transform bg-white shadow-lg transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:static lg:w-64`}
        />

        {/* Main Content */}
        <main
          className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${
            sidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          {/* Dashboard Section */}
          <section className="p-4 sm:p-6">
            <DashboardHero />
          </section>

          {/* Product Filters Section */}
          <section className="px-3 sm:px-6 md:px-8 mb-4">
            <ProductFilters />
          </section>

          {/* Product Table Section */}
          <section className="px-2 sm:px-6 md:px-8 mb-6">
            <div className="w-full mx-auto overflow-x-auto">
              <ProductTable />
            </div>
          </section>

          {/* Dashboard Chart Section */}
          <section className="p-2  sm:px-6 md:px-8 mb-10">
            <DashboardBarChart />
          </section>

          {/* Footer */}
          <footer className="bg-white text-gray-600 text-center p-4 shadow-inner mt-auto">
            <p className="text-sm sm:text-base">
              © {new Date().getFullYear()} Muzamil Dashboard. All rights
              reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
