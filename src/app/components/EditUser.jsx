"use client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Edit = () => {
  const router = useSearchParams();
  const query = router.get("query");

  const [res, setRes] = useState("");
  const [admin, setAdmin] = useState("");
  const [username, setUsername] = useState(res.username || "");
  const [email, setEmail] = useState(res.email || "");
  const [role, setRole] = useState(res.role || "");
  const [balance, setBalance] = useState(res.balance || "");
  const [err, setError] = useState(null);

  useEffect(() => {
    if (query) {
      handleFetch(query);
    }
  }, [query]);

  const handleFetch = async (searchKeyword) => {
    try {
      const encodeQuery = encodeURIComponent(searchKeyword.trim());
      const response = await fetch(`/api/user/${encodeQuery}`);
      if (!response.ok) {
        return notFound();
      }
      const data = await response.json();
      setRes(data);
      setUsername(data.username);
      setEmail(data.email);
      setRole(data.role);
    } catch (error) {
      console.error(error);
    }
  };

  const { isLoading, error, updateUser } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !email || !role) {
      setError("All fields must be filled!");
      toast.error("All fields must be filled!");
      return;
    }

    const data = {
      username: username.trim(),
      email: email.trim(),
      role: role.toLowerCase(),
    };
    const dat = {
      data,
    };

    try {
      await updateUser({ data });
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  return (
    <>
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          {!res ? (
            <div className="flex justify-center items-center h-40">
              <div className="loader border-t-transparent border-4 border-gray-300 rounded-full w-8 h-8 animate-spin"></div>
            </div>
          ) : (
            <>
              <h2 className="text-center text-2xl font-semibold uppercase mb-6 text-gray-300">
                Edit User
              </h2>
              <div className="flex flex-col items-center">
                <Image
                  src="/profile.png"
                  width={100}
                  height={100}
                  alt="Profile"
                  className="rounded-full"
                />
                <form className="w-full max-w-md mt-6" onSubmit={handleSubmit}>
                  <label className="block mb-2 font-bold italic">
                    Username:
                  </label>
                  <input
                    placeholder="Username"
                    className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label className="block mb-2 font-bold italic">Email:</label>
                  <input
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="block mb-2 font-bold italic">Role:</label>
                  <select
                    className="w-full mb-4 p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                  </select>

                  <button
                    className={`w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Updating..." : "Update"}
                  </button>

                  {err && (
                    <div className="text-red-500 mt-4 text-center">{err}</div>
                  )}
                  {error && (
                    <div className="text-red-500 mt-4 text-center">{error}</div>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Edit;
