import { CourierStats, CourierProfileOveriew, LatestDeliveries } from "@/Couriers";
export default function CourierPage () {
    return (
        <main className="p-8 space-y-4">
            <CourierStats />
            <section className="flex gap-4">
                <CourierProfileOveriew />
                <LatestDeliveries courierId="e9fdad03-0732-49b3-b817-da1feefaf998" />
            </section>
        </main>
    )
}