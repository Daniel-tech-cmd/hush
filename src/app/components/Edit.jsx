"use client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import { useAuthContext } from "@/app/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";

const Edit = () => {
  const router = useSearchParams();
  const query = router.get("query");
  const [res, setres] = useState("");

  useEffect(() => {
    if (query) {
      handlefetch(query);
    }
  }, [query]);

  const [quantity, setQuantity] = useState("");
  const [service, setService] = useState(res?.service);
  const [author, setAuthor] = useState(res?.recieverName);
  const [name, setName] = useState(res?.description);
  const [songOwner, setSongOwner] = useState(res?.recieverEmail);
  const [metaDescription, setMetaDesc] = useState(res?.weight);
  const [err, setError] = useState(null);
  const [address, setAddress] = useState(res?.recieveraddress);
  const [date, setDate] = useState(res?.deliverydate);
  const [senderName, setSenderName] = useState(res?.senderName);
  const [location, setLocation] = useState(res?.location);
  const [senderAddress, setSenderAddress] = useState(res?.senderaddress);
  const [shipmentDate, setShipmentDate] = useState(res?.shipmentDate);
  const [currentLocation, setCurrentLocation] = useState(res?.currentLocation);
  const [status, setStatus] = useState(res?.status);

  const handlefetch = async (searchkeyword) => {
    try {
      const encodeQuery = encodeURIComponent(searchkeyword.trim());
      const response = await fetch(`/api/gift/${encodeQuery}`);
      if (response.status !== 200) {
        return notFound();
      }
      const data = await response.json();

      setres(data);
      setQuantity(data.quantity);
      setService(data.service);
      setAuthor(data.recieverName);
      setName(data.description);
      setSongOwner(data.recieverEmail);
      setMetaDesc(data.weight);
      setAddress(data.recieveraddress);
      setDate(data.deliverydate);
      setSenderName(data.senderName);
      setLocation(data.location);
      setSenderAddress(data.senderaddress);
      setShipmentDate(data.shipmentDate);
      setCurrentLocation(data.currentLocation);
      setStatus(data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useAuthContext();
  const { isLoading, error, responseData, updatePost } = useFetch();

  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);

  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();

    if (
      !service ||
      !name ||
      !songOwner ||
      !author ||
      !address ||
      !date ||
      !quantity ||
      !metaDescription ||
      !senderName ||
      !location ||
      !senderAddress ||
      !shipmentDate ||
      !currentLocation ||
      !status
    ) {
      setError("All fields must be filled!");
    } else {
      const data = {
        quantity: quantity.trim(),
        weight: metaDescription.trim(),
        service: service.trim(),
        description: name.trim(),
        recieverEmail: songOwner.trim(),
        recieverName: author.trim(),
        recieveraddress: address.trim(),
        deliverydate: date.trim(),
        senderName: senderName.trim(),
        location: location.trim(),
        senderaddress: senderAddress.trim(),
        shipmentDate: shipmentDate.trim(),
        currentLocation: currentLocation.trim(),
        role: user?.role,
        status,
      };
      const body = { data };
      try {
        await updatePost(res._id, body, "gift");
      } catch (erro) {
        console.log(erro);
      }
    }
  };

  return (
    <>
      {!res ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Edit Package</h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Number of Box:</label>
                <input
                  type="text"
                  placeholder="Number of boxes"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={handleQuantityChange}
                  value={quantity}
                />
              </div>

              <div>
                <label className="block text-gray-700">Weight in kg:</label>
                <input
                  type="text"
                  placeholder="Weight in kg"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => setMetaDesc(e.target.value)}
                  value={metaDescription}
                />
              </div>

              <div>
                <label className="block text-gray-700">Service Type:</label>
                <select
                  value={service}
                  onChange={handleServiceChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select service type</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Road Freight">Road Freight</option>
                  <option value="Ocean Freight">Ocean Freight</option>
                  <option value="Rail Freight">Rail Freight</option>
                  <option value="Warehousing">Warehousing</option>
                  <option value="Project Cargo">Project Cargo</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Description:</label>
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Receiver's Name:</label>
                <input
                  type="text"
                  placeholder="Receiver's name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Receiver's Email/Number:
                </label>
                <input
                  type="text"
                  placeholder="Receiver's email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={songOwner}
                  onChange={(e) => setSongOwner(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Receiver's Address:
                </label>
                <input
                  type="text"
                  placeholder="Receiver's Address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Date of Delivery:</label>
                <input
                  type="date"
                  value={date}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Sender's Name:</label>
                <input
                  type="text"
                  placeholder="Sender's Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Shipment Location:
                </label>
                <input
                  type="text"
                  placeholder="Shipment Location"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Sender's Address:</label>
                <input
                  type="text"
                  placeholder="Sender's Address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={senderAddress}
                  onChange={(e) => setSenderAddress(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Shipment Date:</label>
                <input
                  type="date"
                  value={shipmentDate}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => setShipmentDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Current Location:</label>
                <input
                  type="text"
                  placeholder="Current Location"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Status:</label>
                <input
                  type="text"
                  placeholder="Status"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>

              <p className="text-sm text-gray-500">{`Tracking ID: ${res?.trackingId}`}</p>
              <button
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>

              {err && <div className="text-red-500">{err}</div>}
              {error && <div className="text-red-500">{error}</div>}
            </form>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Edit;
