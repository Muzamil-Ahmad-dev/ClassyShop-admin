import React, { useState } from "react";

const data = [
  { month: "JAN", totalSales: 0, totalUsers: 0 },
  { month: "FEB", totalSales: 0, totalUsers: 0 },
  { month: "MAR", totalSales: 250000, totalUsers: 1000 },
  { month: "APR", totalSales: 13000000, totalUsers: 5000 },
  { month: "MAY", totalSales: 12000000, totalUsers: 4500 },
  { month: "JUNE", totalSales: 600000, totalUsers: 2000 },
  { month: "JULY", totalSales: 25245261, totalUsers: 6500 },
  { month: "AUG", totalSales: 700000, totalUsers: 2200 },
  { month: "SEP", totalSales: 900000, totalUsers: 2300 },
  { month: "OCT", totalSales: 1200000, totalUsers: 2600 },
  { month: "NOV", totalSales: 0, totalUsers: 0 },
  { month: "DEC", totalSales: 0, totalUsers: 0 },
];

const maxSales = Math.max(...data.map((d) => d.totalSales));

export default function DashboardBarChart() {
  const [selectedBar, setSelectedBar] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 md:p-8">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Total Users &amp; Total Sales
      </h2>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="flex items-center space-x-1">
          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 inline-block" />
          <span className="text-blue-700 text-xs sm:text-sm font-medium">
            Total Users
          </span>
        </span>
        <span className="flex items-center space-x-1">
          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-600 inline-block" />
          <span className="text-green-700 text-xs sm:text-sm font-medium">
            Total Sales
          </span>
        </span>
      </div>

      {/* Chart Container */}
      <div className="relative w-full overflow-x-auto">
        <div className="flex items-end h-56 sm:h-64 border-b border-l border-gray-200 pb-6 sm:pb-8 px-2 sm:px-4 min-w-[600px] md:min-w-full">
          {data.map((d, idx) => (
            <div
              key={d.month}
              className="flex flex-col items-center cursor-pointer group mx-1 sm:mx-2 flex-shrink-0"
              onClick={() => setSelectedBar(idx)}
            >
              {/* Sales Bar */}
              <div
                className={`w-5 sm:w-6 md:w-8 rounded-t bg-green-600 transition-all duration-200 group-hover:bg-green-700`}
                style={{
                  height: `${d.totalSales ? (d.totalSales / maxSales) * 180 : 5}px`,
                }}
                title={`${d.month} Sales: ${d.totalSales.toLocaleString()}`}
              />
              {/* Month Label */}
              <span className="text-[10px] sm:text-xs mt-1 text-gray-700">
                {d.month}
              </span>
            </div>
          ))}

          {/* Popup Tooltip */}
          {selectedBar !== null && (
            <div
              className="absolute bg-slate-900 text-white rounded shadow-lg p-3 sm:p-4 transition-all duration-200"
              style={{
                left: `calc(${(selectedBar + 1) * (100 / data.length)}% - 80px)`,
                bottom: "12rem",
                minWidth: "180px",
                maxWidth: "220px",
                zIndex: 10,
              }}
            >
              <div className="text-yellow-400 font-bold text-sm sm:text-lg">
                {data[selectedBar].month}
              </div>
              <div className="text-cyan-400 mt-1 text-xs sm:text-sm">
                Total Sales: {data[selectedBar].totalSales.toLocaleString()}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs text-gray-300 font-semibold leading-snug">
                Insight: Senior devs review spikes like July to optimize
                promotions and stock.
              </div>
              <button
                onClick={() => setSelectedBar(null)}
                className="absolute top-2 right-2 text-[10px] sm:text-xs bg-slate-700 px-2 py-1 rounded hover:bg-red-500 transition"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Legend */}
      <div className="flex justify-center mt-4 sm:mt-6 flex-wrap gap-6 text-xs sm:text-sm">
        <span className="flex items-center space-x-1">
          <span className="w-4 h-4 rounded bg-green-600 inline-block" />
          <span className="font-medium text-green-700">Total Sales</span>
        </span>
        <span className="flex items-center space-x-1">
          <span className="w-4 h-4 rounded bg-blue-600 inline-block" />
          <span className="font-medium text-blue-700">Total Users</span>
        </span>
      </div>
    </div>
  );
}
