import { useState } from "react";
import {
  LayoutGrid,
  ImageIcon,
  Grid3x3,
  Circle,
  Users,
  ShoppingBag,
  BookOpen,
  Layers,
  LogOut,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Transition } from "@headlessui/react";

export default function Sidebar({ isOpen, onClose }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { id: "slides", label: "Home Slides", icon: ImageIcon, hasDropdown: true },
    { id: "category", label: "Category", icon: Grid3x3, hasDropdown: true },
    { id: "products", label: "Products", icon: Circle, hasDropdown: true },
    { id: "users", label: "Users", icon: Users },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "banners", label: "Banners", icon: Circle, hasDropdown: true },
    { id: "blogs", label: "Blogs", icon: BookOpen, hasDropdown: true },
    { id: "logo", label: "Manage Logo", icon: Layers },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-6 flex flex-col shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (mobile only) */}
        <button
          onClick={onClose}
          className="self-end mb-4 text-gray-600 hover:text-gray-900 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors md:hidden"
        >
          ✕
        </button>

        {/* Logo & Hamburger (desktop only) */}
        <div className="mb-8 flex items-center justify-between">
          <img
            src="/logo.jpg"
            alt="CLASSYSHOP Logo"
            className="w-32 h-auto object-contain"
          />
          <button
            onClick={onClose}
            className="hidden md:flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems[item.id];

            return (
              <div key={item.id}>
                <button
                  onClick={() => item.hasDropdown && toggleExpand(item.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-gray-600" />
                    <span className="font-medium text-gray-800">{item.label}</span>
                  </div>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={18}
                      className={`text-gray-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                <Transition
                  show={!!isExpanded}
                  enter="transition-all duration-200 ease-out"
                  enterFrom="opacity-0 max-h-0"
                  enterTo="opacity-100 max-h-40"
                  leave="transition-all duration-150 ease-in"
                  leaveFrom="opacity-100 max-h-40"
                  leaveTo="opacity-0 max-h-0"
                  className="overflow-hidden ml-6 mt-1 space-y-1"
                >
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                    Submenu Item
                  </button>
                </Transition>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black z-30 md:hidden"
        />
      </Transition>
    </>
  );
}
