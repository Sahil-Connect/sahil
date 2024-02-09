import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoginCard } from "@sahil/features/auth/LoginCard";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/auth/new");
    }
  }, [router, session]);

  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-center">
        <div className="space-y-4">
          <h1 className="text-center text-2xl">Welcome Back</h1>
          <LoginCard providers={providers} />
          <div>
            <p className="text-center">Don&apos;t have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignInPage;
