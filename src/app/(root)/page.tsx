import { getCurrentUser } from "@/lib/actions/auth.action";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";

async function Home() {
  const user = await getCurrentUser();

  if (!user || !user.id) {
    return <LandingPage />;
  }

  return <Dashboard userId={user.id} />;
}

export default Home;