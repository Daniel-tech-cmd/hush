"use client";
import { useEffect, useState } from "react";
// import Alert from "./Alert";
import {
  FaBox,
  FaWeightHanging,
  FaPlane,
  FaInfoCircle,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Address = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  useEffect(() => {
    if (
      data?.status?.trim().toLowerCase() === "arrived" ||
      data?.status?.trim().toLowerCase() === "ulaşmış"
    ) {
      setOpen(true);
    }
  }, [data?.status]);

  return (
    <>
      <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg max-w-lg mx-auto md:max-w-2xl my-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-2xl text-lg font-semibold text-gray-800">
            Shipment Details
          </h3>
          <span className="text-sm text-gray-600 font-medium">{`Status: ${data?.status}`}</span>
        </div>

        {open && (
          <Alert
            destination={data?.recieveraddress}
            email={data?.recieverEmail}
          />
        )}

        {!data && (
          <div className="flex justify-center py-8">
            <div className="loader animate-spin border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
          </div>
        )}

        {/* Shipment Details */}
        <ul className="space-y-4">
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaBox className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">Amount</span>
              <span className="text-gray-900">{data?.quantity}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaWeightHanging className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">Weight</span>
              <span className="text-gray-900">{data?.weight}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaPlane className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Service Type
              </span>
              <span className="text-gray-900">{data?.service}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaInfoCircle className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Description
              </span>
              <span className="text-gray-900">{data?.description}</span>
            </div>
          </li>
        </ul>

        {/* Destination Section */}
        <h3 className="mt-8 text-xl font-semibold text-gray-800">
          Destination
        </h3>
        <ul className="space-y-4 mt-4">
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaUser className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Recipient Name
              </span>
              <span className="text-gray-900">{data?.recieverName}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaEnvelope className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Recipient's Email / Number
              </span>
              <span className="text-gray-900">{data?.recieverEmail}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaMapMarkerAlt className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Recipient's Address
              </span>
              <span className="text-gray-900">{data?.recieveraddress}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaCalendarAlt className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Expected Delivery Date
              </span>
              <span className="text-gray-900">{data?.deliverydate}</span>
            </div>
          </li>
        </ul>

        {/* Origin Section */}
        <h3 className="mt-8 text-xl font-semibold text-gray-800">Origin</h3>
        <ul className="space-y-4 mt-4">
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaUser className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Sender's Name
              </span>
              <span className="text-gray-900">{data?.senderName}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaMapMarkerAlt className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Shipmnt Location
              </span>
              <span className="text-gray-900">{data?.location}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaMapMarkerAlt className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Sender's Address
              </span>
              <span className="text-gray-900">{data?.senderaddress}</span>
            </div>
          </li>
          <li className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300">
            <FaCalendarAlt className="text-gray-700 mr-3" size={24} />
            <div>
              <span className="block font-medium text-gray-700">
                Shipment Date
              </span>
              <span className="text-gray-900">{data?.shipmentDate}</span>
            </div>
          </li>
        </ul>
        <div
          className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300"
          style={{ marginTop: "10px" }}
        >
          <FaMapMarkerAlt className="text-gray-700 mr-3" size={24} />
          <div>
            <span className="block font-medium text-gray-700">
              Current Location
            </span>
            <span className="text-gray-900">{data?.currentLocation}</span>
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => setShowReceipt(true)}
        >
          View Receipt
        </button>

        {/* Receipt Modal */}
        {/* Receipt Modal */}
        {showReceipt && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full text-black">
              <div
              // style={{
              //   position: "fixed",
              //   top: "100px",
              //   textAlign: "center",
              //   display: "flex",
              //   justifyContent: "center",
              //   width: "100%",
              //   // background: "#e5e5e5",
              //   left: "0",
              //   alignItems: "center",
              //   flexDirection: "column",
              // }}
              >
                {/* <Image src={"/sd.png"} width={400} height={500} alt="img" /> */}
                <h1 style={{ fontWeight: "500" }}>Delivery Info</h1>
                <div style={{ background: "#fff", padding: "20px" }}>
                  <h2 style={{ margin: "10px 0" }}>DLIVERY ADDRESS</h2>
                  <p>
                    <b>Reciepient Name:</b> {data?.recieverName}
                  </p>
                  <p>
                    <b>Address:</b> {data?.recieveraddress}
                  </p>
                  <h2 style={{ margin: "10px 0" }}>ORDER DETAILS</h2>
                  <p>
                    <b>Sender's name: </b>
                    {data?.senderName}
                  </p>
                  <p>
                    <b>Order #:</b> Y118802004
                  </p>
                  <p>
                    <b>Shipping Date:</b>
                    {data?.shipmentDate}
                  </p>
                  <p>
                    <b>Delivery Date:</b>
                    {data?.deliverydate}
                  </p>
                </div>
              </div>
              <div
                className="flex items-center bg-white rounded-lg shadow p-4 border-b border-dotted border-gray-300"
                style={{ marginTop: "10px" }}
              >
                <FaMapMarkerAlt className="text-gray-700 mr-3" size={24} />
                <div>
                  <span className="block font-medium text-gray-700">
                    Current Location
                  </span>
                  <span className="text-gray-900">{data?.currentLocation}</span>
                </div>
              </div>
              <button
                className="mt-6 w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
                onClick={() => setShowReceipt(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Address;
