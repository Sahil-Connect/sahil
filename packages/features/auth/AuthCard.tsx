import Image, { StaticImageData } from "next/image";
import { Card } from "ui";
import { AuthProviders } from "./AuthProviders";

type Props = {
  providers: any;
  logo?: string | StaticImageData;
  form: React.ReactNode;
  title: string;
};

const AuthCard = ({ providers = [], logo = "", form, title }: Props) => {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-7rem)]">
      <Card className="w-96 md:w-2/3 max-w-lg pb-4">
        <div className="mx-auto space-y-2 mb-8">
          {logo && (
            <Image
              src={logo}
              alt="Sahil"
              loading="eager"
              width={100}
              height={100}
              className="w-24 object-contain mx-auto"
            />
          )}
          <h2 className="card-title text-md font-bold">{title}</h2>
        </div>
        {form}
        <div className="card-actions">
          {providers && (
            <div className="w-full">
              <div className="divider w-1/3 mx-auto"></div>
              <AuthProviders providers={providers} />
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default AuthCard;
