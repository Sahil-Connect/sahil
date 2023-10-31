import { ListBusinesses } from "@/Businesses/ListBusinesses";
import { useRouter } from "next/router";

export default function Business() {
  const router = useRouter();
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 lg:px-8 xl:max-w-full">
      <section className="my-8">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="relative text-2xl inline-block z-[1] before:absolute before:left-0 before:bottom-1 before:w-full before:h-1.5 before:bg-[#84faa1] before:z-[-1] md:text-3xl">Partner Businesses</h1>
            <p>
              Excited to have you join us.
              These are tailored to your needs.
            </p>
          </div>
          <div>
            <button 
              className="btn btn-sm btn-primary normal-case rounded-none"
              onClick={() => router.push("/businesses/new/basic_info")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/>
              </svg>
              Register Business
            </button>
          </div>
        </div>
        <div className="my-8">
          <ListBusinesses />
        </div>
      </section>
    </main>
  );
}
