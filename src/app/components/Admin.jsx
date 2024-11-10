"use client";
import Link from "next/link";

const AdminComp = ({ data }) => {
  return (
    <>
      <section
        style={{
          padding: "15px",
          //   backgroundColor: "#1F2937",
          minHeight: "100vh",

          //   maxWidth: "calc(100vw - 260px)",
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
              href={`/admin/edit?query=${dat.trackingId}`}
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
              <span>{dat.recieverName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="red"
                style={{ marginLeft: "5px" }}
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
