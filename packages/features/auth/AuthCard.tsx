import Image, { StaticImageData } from "next/image";
import { AuthProviders } from "./AuthProviders";

type Props = {
  providers: any;
  logo?: string | StaticImageData;
  appTitle: string;
  agentDashboard?: string | StaticImageData;
  form: React.ReactNode;
  title: string;
};

const AuthCard = ({ providers=[], logo="", appTitle, agentDashboard="", form, title }: Props) => {
  return (
    <section className="w-full max-w-7xl mx-auto lg:max-w-full">
      <div className="flex h-[90vh]">
        <div className="p-4 w-full flex items-center justify-center h-screen lg:w-3/5 md:p-0">
          <div className="w-full md:w-[30rem] border px-4 py-6 rounded-xl lg:border-none lg:px-0 lg:py-0">
            <div className="">
              <div className="flex items-center flex-row gap-3">
                <Image
                  src={logo}
                  alt="Sahil"
                  loading="eager"
                  className="w-auto h-[2.5rem]"
                />
                <h3 className="text-sm font-semibold">{appTitle}</h3>
              </div>
              <h2 className="my-4 text-xl font-semibold">Sign in to your account</h2>
            </div>
            {form}
            <div>
              {providers && (
                <div className="w-full">
                  <div className="py-3 w-3/6 mx-auto flex items-center my-3 text-xs text-neutral-500 uppercase before:flex-1 before:border-t before:border-zinc-200 before:me-6 after:flex-1 after:border-t after:border-zinc-200 after:ms-6">Or</div>
                  <AuthProviders providers={providers} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:relative lg:flex lg:bg-[#F3F4F6] lg:overflow-x-auto lg:h-screen lg:w-2/5">
          <div className="w-full flex flex-col justify-between">
            <div className="ml-8 mt-8">
              <div className="absolute w-16 h-16 top-0 right-0 bg-zinc-200 rounded-bl-full rounded-tr-none z-20" />
              <h3 className="text-xl mt-4 font-semibold">Join our Community</h3>
              <p className="text-sm my-2">
                The best platform to find reliable suppliers, connect with businesses, manage orders, ensure timely deliveries and much more.
              </p>
            </div>
            <div className="overflow-hidden absolute bottom-0 left-0">
              <Image
                src={agentDashboard}
                alt="sahil-app-dashboard"
                loading="eager"
                className="rounded-tl-xl ml-9 mt-48 border-l-4 border-t-4 border-zinc-950"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthCard;
