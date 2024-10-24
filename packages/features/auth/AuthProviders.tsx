import { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

type Props = {
  providers: Provider[];
  signIn?: (provider: any) => void;
};

enum Providers {
  Google = "Google",
  GitHub = "Github",
}

export const AuthProviders: FC<Props> = ({ providers }) => {
  console.log(providers);
  return (
    <div>
      <div className="space-y-2">
        {providers &&
          Object.values(providers).map((provider) => {
            if (provider.name !== "Email") {
              return (
                <div key={provider?.name}>
                  <div>
                    <button
                      className="btn w-full capitalize"
                      onClick={() => {
                        signIn(provider?.id, { callbackUrl: "/" });
                      }}
                    >
                      {provider.name === "Google" ? (
                        <FcGoogle size={24} />
                      ) : (
                        <FaFacebook />
                      )}
                      Continue with {provider?.name}
                    </button>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
