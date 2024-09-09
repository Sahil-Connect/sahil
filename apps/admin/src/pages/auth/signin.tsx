import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getProviders, useSession } from "next-auth/react";
import logo from "../../../public/logo-alt.svg";
import LoginForm from "@sahil/features/auth/forms/LoginForm";
import AuthCard from "@sahil/features/auth/AuthCard";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <>
      <AuthCard
        logo={logo}
        providers={providers}
        form={<LoginForm />}
        title="Sign in to your account"
      />
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
