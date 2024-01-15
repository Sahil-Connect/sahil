// @ts-ignore
import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignInPage: NextPage = ({ providers }: any) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/auth/new");
    }
  }, [session]);

  return (
    <div className="p-4">
      <h1>Sahil</h1>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div
              // @ts-ignore
              key={provider?.name}
              p="2"
            >
              <div>
                <button
                  onClick={() => {
                    signIn(provider?.id);
                  }}
                >
                  Sign in with{" "}
                  {
                    // @ts-ignore
                    provider?.name
                  }
                </button>
              </div>
            </div>
          );
        })}
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
