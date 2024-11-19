import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const VerifyPage = () => {
  const router = useRouter();
  const { status } = useSession();
  const { token } = router.query;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token && status === "unauthenticated") {
      signIn("email", { token, redirect: false }).then((result) => {
        if (result?.error) {
          console.error("Verification failed:", result.error);
          setError(result.error);
          // Handle error (e.g., show error message to user)
        } else {
          // Successful verification, redirect to appropriate page
          router.push(result?.url!);
        }
      });
    } else if (status === "authenticated") {
      // User is already signed in, redirect to appropriate page
      router.push("/");
    }
  }, [token, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Verifying your email...</div>;
};

export default VerifyPage;
