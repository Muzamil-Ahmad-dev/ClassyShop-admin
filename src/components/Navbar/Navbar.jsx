import { Menu, Bell, User } from "lucide-react";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 z-20 relative">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Menu size={24} />
        </button>
        <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <Bell
            size={24}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            4
          </span>
        </div>

        <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors">
          <User size={20} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
