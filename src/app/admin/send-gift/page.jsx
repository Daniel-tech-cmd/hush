"use client";
import { useState } from "react";
import useSubmit from "../../hooks/useSubmit";
import { useAuthContext } from "../../hooks/useAuthContext";

const Sendgift = () => {
  const [quantity, setQuantity] = useState("");
  const [service, setService] = useState("");
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [songOwner, setSongOwner] = useState("");
  const [metaDescription, setMetaDesc] = useState("");
  const [err, setError] = useState(null);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [senderName, setSenderName] = useState("");
  const [location, setLocation] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [shipmentDate, setShipmentDate] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [status, setStatus] = useState("");
  const { isLoading, error, submit } = useSubmit();
  const { user } = useAuthContext();

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
      const now = new Date();
      const secondsInCurrentDay =
        now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

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
        timeinsec: secondsInCurrentDay,
        role: user?.role,
        status,
      };

      try {
        await submit(data, "gift");
      } catch (erro) {
        console.log(erro);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-black my-6">
        Create Package
      </h1>
      <h2 className="text-3xl font-semibold text-center text-black my-4">
        Send Gift
      </h2>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-black">Number of Boxes</label>
          <input
            placeholder="Enter number of boxes"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />

          <label className="block text-black">Weight in kg</label>
          <input
            placeholder="Enter weight in kg"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e) => setMetaDesc(e.target.value)}
          />

          <label className="block text-black">Service Type</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select service type</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Road Freight">Road Freight</option>
            <option value="Ocean Freight">Ocean Freight</option>
            <option value="Rail Freight">Rail Freight</option>
            <option value="Warehousing">Warehousing</option>
            <option value="Project Cargo">Project Cargo</option>
          </select>

          <label className="block text-black">Description</label>
          <input
            placeholder="Enter description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-black">Recipient's Name</label>
          <input
            placeholder="Enter recipient's name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label className="block text-black">Recipient's Email</label>
          <input
            placeholder="Enter recipient's email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={songOwner}
            onChange={(e) => setSongOwner(e.target.value)}
          />

          <label className="block text-black">Recipient's Address</label>
          <input
            placeholder="Enter recipient's address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label className="block text-black">Shipment Date</label>
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e) => setShipmentDate(e.target.value)}
          />

          <label className="block text-black">Date of Delivery</label>
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block text-black">Sender's Name</label>
          <input
            placeholder="Enter sender's name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />

          <label className="block text-black">Shipment Location</label>
          <input
            placeholder="Enter shipment location"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label className="block text-black">Sender's Address</label>
          <input
            placeholder="Enter sender's address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
          />

          <label className="block text-black">Current Location</label>
          <input
            placeholder="Enter current location"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />

          <label className="block text-black">Status</label>
          <input
            placeholder="Enter status"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <button
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {err && <div className="text-red-500 text-sm mt-2">{err}</div>}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Sendgift;
