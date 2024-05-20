"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootPage = () => {
  // STATE

  const router = useRouter();

  // EFFECT HOOKS

  useEffect(() => {
    router.push("/locations");
  }, [router]);

  // JSX

  return <></>;
};

export default RootPage;
