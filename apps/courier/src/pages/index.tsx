import { MapView } from "@sahil/features/Maps/MapView";
import { BottomNav } from "@sahil/features/Maps/BottomNav";
import { TripInfo } from "@sahil/features/Maps/TripInfo";
export default function Home() {
  return (
    <section>
      <MapView />
      <TripInfo />
      <BottomNav />
    </section>
  );
}
