import React, { Suspense } from "react";
import FormComponent from "./HomePage/page";



export const dynamic = "force-dynamic"; // disables prerendering
export const fetchCache = "force-no-store"; // disable caching (optional)

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormComponent />
    </Suspense>
  );
}
