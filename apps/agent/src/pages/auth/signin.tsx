// @ts-ignore
import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Card } from "ui";

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
      <h1 className="text-2xl">Welcome to Sahil</h1>
      <Card>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Enter your email"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <button className="btn btn-sm btn-primary">Sign In</button>
        </div>
        <div className="divider">Or</div>
        {providers &&
          Object.values(providers).map((provider) => {
            return (
              <div
                // @ts-ignore
                key={provider?.name}
              >
                <div>
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      // @ts-ignore
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
      </Card>
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
