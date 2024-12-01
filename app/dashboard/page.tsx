'use client';
import { useSession } from "next-auth/react";
import { Container } from "../componets/Container";
import { NavBar } from "../componets/NavBar";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const session = useSession();
  const route = useRouter();
  if (!session.data?.user) {
    route.push("./");
    return null;
  }
  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-3xl w-full">
        <NavBar />
        <Container />
      </div>
    </div>
  );
};

export default dashboard;
