// @ts-ignore
import { useEffect } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="p-4">
      <h1>Sahil</h1>

    </div>
  );
};

export default SignInPage;