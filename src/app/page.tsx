"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootPage = () => {

  // STATE

  const router = useRouter();

  // EFFECT HOOKS

  useEffect(() => {
    router.push("/locations");
  }, []);

  // JSX

  return (
    <></>
  )

};

export default RootPage;
