import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getProviders, useSession } from "next-auth/react";
import logo from "../../../public/logo.svg";
import LoginForm from "@sahil/features/auth/forms/LoginForm";
import AuthCard from "@sahil/features/auth/AuthCard";
import illustration from "../../../public/illustration.svg";

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
        providers={providers}
        logo={logo}
        appTitle="Admin App"
        illustration={illustration}
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
