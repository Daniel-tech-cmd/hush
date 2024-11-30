"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/useAuthContext";
import useSignup from "../hooks/useSignup";
import Logo from "./Logo";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useSignup();
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
              <Logo />
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
            {!user && (
              <>
                <Link
                  href="/admin/user/signup"
                  className={`px-3 py-2 text-sm font-medium ${
                    router.pathname === "/services"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Sign Up
                </Link>{" "}
                <Link
                  href="/admin/user/signin"
                  className={`px-3 py-2 text-sm font-medium ${
                    router.pathname === "/admin/user/signin"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Log in
                </Link>
              </>
            )}

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
                <Link
                  href="/admin/add-number"
                  className={`px-3 py-2 text-sm font-medium ${
                    router.pathname === "/admin/add-number"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Add Number{" "}
                </Link>
                <Link
                  href="/admin/"
                  className={`px-3 py-2 text-sm font-medium${
                    router.pathname === "/admin/"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  All Packages
                </Link>
                {/* <Link
                  href="/admin/user"
                  className={`px-3 py-2 text-sm font-medium${
                    router.pathname === "/admin/user"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  All Users
                </Link> */}
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
            {user && (
              <button
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                onClick={logout} // Replace with your logout function
              >
                Logout
              </button>
            )}
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
            <Link
              href="/admin/user/signup"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/services"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Sign Up
            </Link>{" "}
            <Link
              href="/admin/user/signin"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/admin/user/signin"
                  ? "text-green-600"
                  : "text-gray-700"
              } hover:text-green-600`}
            >
              Log in
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
                <Link
                  href="/admin/add-number"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === "/add-number"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                >
                  Add Number
                </Link>
              </>
            )}
            {user && (
              <button
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                onClick={logout} // Replace with your logout function
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
