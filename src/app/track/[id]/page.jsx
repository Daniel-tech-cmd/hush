import Address from "@/app/components/Address";
import Footer from "@/app/components/Footer";
import MapEmbed from "@/app/components/Map";
import { notFound } from "next/navigation";
async function getdatabyId(id) {
  const res = await fetch(`${process.env.URL}/api/gift/${id}`, {
    cache: "no-store",
  });
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
  const location = "Enugu";
  return (
    <>
      <div style={{ background: "#fff", marginTop: "65px" }}>
        <MapEmbed location={dat?.location} />
        <Address data={dat} />
        <Footer />
      </div>
    </>
  );
};

export default page;
