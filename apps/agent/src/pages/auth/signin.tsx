import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoginCard } from "@sahil/features/auth/LoginCard";
import logo from "../../../public/logo.png";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/auth/new");
    }
  }, [router, session]);

  return (
    <>
      <LoginCard providers={providers} logo={logo} />
    </>
  );
};

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignInPage;
