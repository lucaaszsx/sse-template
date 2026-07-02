import type { DecodedAccessTokenPayload } from "./common.ts";
import type { UserEntity } from "./entities.ts";

export {};

declare global {
    namespace Express {
        interface Request {
            payload?: DecodedAccessTokenPayload;
            user?: UserEntity;
        }
    }
}