import { handleDecryptToken } from "@sahil/features/auth/lib/handleDecryptToken";
import { getIdTokenClaims } from "@sahil/features/auth/lib/routeGuard";

const handler = handleDecryptToken(getIdTokenClaims);
export default handler;
