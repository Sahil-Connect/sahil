import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginForm from "@sahil/features/auth/forms/LoginForm";
import AuthCard from "@sahil/features/auth/AuthCard";
import logo from "../../../public/logo.svg";

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
      <AuthCard
        providers={providers}
        logo={logo}
        form={<LoginForm />}
        title="Sign in to your account"
        sub={{
          text: "Don't have an account?",
          href: "/auth/signup",
          cta: "Sign Up",
        }}
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
