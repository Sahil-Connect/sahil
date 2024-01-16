export async function places(
  _: any,
  { lat, lng }: any,
  { googlePlacesAPI }: any
) {
  console.log("...rest:");
  return googlePlacesAPI.getNearbyPlaces(lat, lng);
}
