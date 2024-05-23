import { handleDecryptToken } from "@sahil/lib/auth/handleDecryptToken";
import { getIdTokenClaims } from "@sahil/features/auth/lib/routeGuard";

const handler = handleDecryptToken(getIdTokenClaims);
export default handler;
