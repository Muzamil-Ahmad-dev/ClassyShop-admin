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
      image: "https://images.priceoye.pk/airox-wireless-bluetooth-earphone-nb-02-pakistan-priceoye-nfglc-500x500.webp",
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
      image: "data:image/jpeg;base64,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",
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
      image: "https://img.drz.lazcdn.com/static/pk/p/9473b0fc6b8c3d372f40d1f8e942eb01.png_960x960q80.png_.webp",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyD3ovFvVUfhxAYTY2Zg4cZ5ISrpaJ6fy0yA&s",
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
    <div className="w-full  bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
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
      <div className="overflow-x-auto overflow-y-auto  flex-1">
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
