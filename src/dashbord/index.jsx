import { Plus } from "lucide-react";

export default function DashboardHero() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      {/* Hero Section */}
      <div className="bg-slate-50 rounded-lg p-6 md:p-12 mb-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-800 text-lg mb-2">Welcome,</p>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
            Muzamil
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Here's what’s happening on your store today. See the statistics at a glance.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors mx-auto md:mx-0">
            <Plus size={20} />
            Add Product
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/shop-illustration.webp"
            alt="E-commerce illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users Card */}
        <StatCard
          title="Total Users"
          value="3569"
          iconColor="text-green-100"
          bgGradient="from-green-400 to-green-600"
        />

        {/* Total Orders Card */}
        <StatCard
          title="Total Orders"
          value="961"
          iconColor="text-blue-100"
          bgGradient="from-blue-500 to-blue-700"
        />

        {/* Total Products Card */}
        <StatCard
          title="Total Products"
          value="50"
          iconColor="text-purple-100"
          bgGradient="from-purple-500 to-purple-700"
        />

        {/* Total Category Card */}
        <StatCard
          title="Total Category"
          value="8"
          iconColor="text-red-100"
          bgGradient="from-red-500 to-red-600"
        />
      </div>
    </div>
  );
}

// Reusable Statistic Card Component
function StatCard({ title, value, iconColor, bgGradient }) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-lg p-6 text-white`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl md:text-4xl font-bold">{value}</h3>
        </div>
        <div className={`${iconColor} opacity-50`}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
