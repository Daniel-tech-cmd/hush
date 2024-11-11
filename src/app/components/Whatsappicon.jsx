"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function ChatButton({ number }) {
  return (
    <Link
      href={`https://wa.me/${number}?text=I'm%20interested%20in%20...`}
      className="flex items-center gap-2 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 hover:shadow-lg transition"
      style={{
        position: "fixed",
        bottom: "50px",
        right: "20px",
        zIndex: 999,
      }}
    >
      <FaWhatsapp className="text-green-500" size={20} />
      <span className="text-gray-700 font-medium">Chat with Us</span>
    </Link>
  );
}

export default ChatButton;
