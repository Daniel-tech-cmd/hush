"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthContext();

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-md font-sans z-50"
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-black"
                style={{ fontWeight: "800" }}
              >
                GoldGroveco.
              </span>
            </Link>
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex space-x-6 mx-auto">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium ${
                router.pathname === "/" ? "text-green-600" : "text-gray-700"
              } hover:text-green-600`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`px-3 py-2 text-sm font-medium ${
                router.pathname === "/about-us"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 text-sm font-medium ${
                router.pathname === "/services"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Our Services
            </Link>
            {user?.role === "admin" && (
              <>
                <Link
                  href="/admin/send-gift"
                  className={`px-3 py-2 text-sm font-medium ${
                    router.pathname === "/services"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Send Package
                </Link>
              </>
            )}
          </div>

          {/* Right-Aligned Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium ${
                router.pathname === "/contact"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/" ? "text-green-600" : "text-gray-700"
              } hover:text-green-600`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/about-us"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/services"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/contact"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Contact Us
            </Link>
            {user?.role === "admin" && (
              <>
                <Link
                  href="/admin/send-gift"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === "/services"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Send Package
                </Link>
                <Link
                  href="/admin/"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === "/services"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  All Packages
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
