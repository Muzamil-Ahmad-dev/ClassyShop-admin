"use client";

import { useState } from "react";
import { Edit2, Eye, Trash2, Star, StarHalf } from "lucide-react";

export default function ProductTable() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      subcategory: "Audio",
      price: 59.99,
      originalPrice: 79.99,
      sales: 150,
      stock: 42,
      rating: 4.5,
      image: "https://via.placeholder.com/80x80.png?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Wearables",
      subcategory: "Fitness",
      price: 89.99,
      originalPrice: 129.99,
      sales: 310,
      stock: 12,
      rating: 4.8,
      image: "https://via.placeholder.com/80x80.png?text=Watch",
    },
    {
      id: 3,
      name: "Gaming Mouse RGB",
      category: "Electronics",
      subcategory: "Accessories",
      price: 29.99,
      originalPrice: 39.99,
      sales: 87,
      stock: 75,
      rating: 4.2,
      image: "https://via.placeholder.com/80x80.png?text=Mouse",
    },
    {
      id: 4,
      name: "Leather Office Chair",
      category: "Furniture",
      subcategory: "Office",
      price: 199.99,
      originalPrice: 249.99,
      sales: 54,
      stock: 10,
      rating: 4.7,
      image: "https://via.placeholder.com/80x80.png?text=Chair",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalProducts);

  // ⭐ Render Rating Stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalf && (
          <StarHalf className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        )}
      </div>
    );
  };

  return (
    <div className="w-full mt-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
      {/* ✅ Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Product List
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto overflow-y-auto max-h-[500px] flex-1">
        <table className="min-w-[900px] w-full text-sm table-auto">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <tr className="text-gray-700">
              <th className="p-3 text-left w-10">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left font-semibold min-w-[160px]">Product</th>
              <th className="p-3 text-left font-semibold">Category</th>
              <th className="p-3 text-left font-semibold">Subcategory</th>
              <th className="p-3 text-left font-semibold">Price</th>
              <th className="p-3 text-left font-semibold">Sales</th>
              <th className="p-3 text-left font-semibold">Stock</th>
              <th className="p-3 text-left font-semibold">Rating</th>
              <th className="p-3 text-left font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <p className="font-medium text-gray-800 text-sm line-clamp-2">
                    {product.name}
                  </p>
                </td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.subcategory}</td>
                <td className="p-3">
                  <p className="line-through text-gray-400">${product.originalPrice}</p>
                  <p className="font-semibold text-blue-600">${product.price}</p>
                </td>
                <td className="p-3">{product.sales}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">{renderStars(product.rating)}</td>
                <td className="p-3 flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded-md">
                    <Edit2 className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-md">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-md">
                    <Trash2 className="h-4 w-4 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-600">Rows per page:</span>
          <select
            className="border p-1 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
          {`${startIndex}-${endIndex} of ${totalProducts}`}
        </span>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded-md hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 border rounded-md hover:bg-gray-100 disabled:opacity-50 text-xs sm:text-sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* ✅ Footer Buttons */}
      <div className="flex justify-end gap-3 p-4 border-t border-gray-200 bg-gray-50 flex-wrap">
        <button className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
