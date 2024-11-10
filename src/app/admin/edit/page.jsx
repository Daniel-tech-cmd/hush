import Edit from "@/app/components/Edit";
import { Suspense } from "react";

const page = async () => {
  return (
    <>
      <Suspense>
        <Edit />
      </Suspense>
    </>
  );
};

export default page;
