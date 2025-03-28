import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user || !user.id) {
  redirect("/"); // Redirect or handle missing user
}

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user.name}
        userId={user.id}
        // profileImage={user.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;