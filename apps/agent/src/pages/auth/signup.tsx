import { getProviders } from "next-auth/react";
import AuthCard from "@sahil/features/auth/AuthCard";
import RegisterForm from "@sahil/features/auth/forms/RegisterForm";
import logo from "../../../public/logo.svg";

const SignUpPage = ({ providers }: any) => {
  return (
    <>
      <AuthCard
        providers={providers}
        logo={logo}
        form={<RegisterForm />}
        title="Create an account"
        sub={{
          text: "Don't have an account?",
          href: "/auth/signin",
          cta: "Sign In",
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

export default SignUpPage;
