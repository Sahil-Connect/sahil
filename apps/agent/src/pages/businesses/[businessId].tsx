import { useRouter } from "next/router";

export default function BusinessPage() {
  const router = useRouter();
  const { businessId } = router.query;

  return (
    <div className="min-h-screen p-8 space-y-4">
        <h1>Business Page</h1>
    </div>
  );
}
