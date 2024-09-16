import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginForm from "@sahil/features/auth/forms/LoginForm";
import AuthCard from "@sahil/features/auth/AuthCard";
import logo from "../../../public/logo.svg";
import agentDashboard from "../../../public/agentdashboard.svg";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  const router = useRouter();

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
        appTitle="Client App"
        agentDashboard={agentDashboard}
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
