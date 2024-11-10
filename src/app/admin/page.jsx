import AdminComp from "@/app/components/Admin";
import { notFound } from "next/navigation";

async function getdataby() {
  const res = await fetch(`https://backendlogis-up1h.onrender.com/api/gift/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}

const page = async () => {
  const data = getdataby();
  const [dat] = await Promise.all([data]);

  return (
    <>
      <AdminComp data={dat} />
    </>
  );
};

export default page;
