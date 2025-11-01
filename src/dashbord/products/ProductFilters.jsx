"use client";

import { Search } from "lucide-react";

export default function ProductFilters({
  categories = [],
  subcategories = [],
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Category
          </label>
          <select
            className="w-full border border-gray-300 p-2 sm:p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory("");
              setCurrentPage(1);
            }}
          >
            <option value="">All Categories</option>
            {categories?.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Subcategory
          </label>
          <select
            className="w-full border border-gray-300 p-2 sm:p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedSubcategory}
            disabled={!selectedCategory}
            onChange={(e) => {
              setSelectedSubcategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Subcategories</option>
            {selectedCategory &&
              subcategories?.map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
          </select>
        </div>

        {/* Third Level (placeholder) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Third Level
          </label>
          <select
            className="w-full border border-gray-300 p-2 sm:p-2.5 rounded-lg text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
            disabled
          >
            <option>No third level available</option>
          </select>
        </div>

        {/* Search Field */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-9 border border-gray-300 p-2 sm:p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
