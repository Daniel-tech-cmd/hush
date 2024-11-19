"use client";
import Link from "next/link";
import useFetch from "../hooks/useFetch";

const AdminComp = ({ data }) => {
  const { deleteData, error, isLoading } = useFetch();

  // Define the delete handler as an async function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this User?"
    );
    if (confirmDelete) {
      try {
        await deleteData(id, "user");
      } catch (error) {
        console.error("Failed to delete package:", error);
      }
    }
  };

  return (
    <>
      <section
        style={{
          padding: "15px",
          minHeight: "100vh",
          padding: "70px 20px",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
        className="min-h-screen bg-[#1c222c] p-4 md:p-6 w-full dash"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: "22px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Sent Packages:
            <span>{data.length}</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {data.map((dat) => (
            <Link
              key={dat._id}
              href={`/admin/user/edit?query=${dat._id}`}
              style={{
                backgroundColor: "#374151",
                padding: "20px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#CBD5E1",
                minWidth: "fit-content",
                textDecoration: "none",
              }}
            >
              <span>{dat.email}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="red"
                style={{ marginLeft: "5px", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault(); // Prevents navigation on icon click
                  handleDelete(dat._id); // Call the delete handler
                }}
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminComp;
