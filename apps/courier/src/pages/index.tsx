import { MapView } from "@sahil/features/Maps/MapView";
import { TripInfo } from "@sahil/features/Maps/TripInfo";
export default function Home() {
  return (
    <section>
      <MapView />
      <TripInfo />
    </section>
  );
}
