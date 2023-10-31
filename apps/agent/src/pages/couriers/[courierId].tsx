import { CourierProfileOveriew } from "@/Couriers/CourierProfileOverview"
export default function CourierPage () {
    return (
        <main className="p-8">
            <h1>Courier Page</h1>
            <section className="flex gap-4">
                <CourierProfileOveriew />
            </section>
        </main>
    )
}