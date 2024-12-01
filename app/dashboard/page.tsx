'use client';
import { Container } from "../componets/Container";
import { NavBar } from "../componets/NavBar";

const dashboard = () => {
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
