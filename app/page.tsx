import { useSession } from "next-auth/react";
import Auth from "./pages/Auth";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div>
      <Auth/>
    </div>
  );
}
