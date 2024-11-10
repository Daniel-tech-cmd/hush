import Address from "@/app/components/Address";
import MapEmbed from "@/app/components/Map";
import { notFound } from "next/navigation";
async function getdatabyId(id) {
  const res = await fetch(
    `https://backendlogis-up1h.onrender.com/api/gift/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}
const page = async ({ params }) => {
  const id = await params.id;
  const data = getdatabyId(id);
  const [dat] = await Promise.all([data]);
  const location = "Nigeria";
  return (
    <>
      <div style={{ background: "#fff" }}>
        <MapEmbed location={location} />
        <Address data={dat} />
      </div>
    </>
  );
};

export default page;
