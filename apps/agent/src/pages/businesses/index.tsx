import { ListBusinesses } from "@sahil/features/Businesses/ListBusinesses";
import { useRouter } from "next/router";

export default function Business() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Partner Businesses</h1>
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary normal-case"
            onClick={() => router.push("/businesses/register/basic_info")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
              />
            </svg>
            Register Business
          </button>
        </div>
      </div>
      <div>
        <ListBusinesses />
      </div>
    </section>
  );
}
