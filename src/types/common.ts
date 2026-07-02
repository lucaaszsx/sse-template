import type { JwtPayload } from "jsonwebtoken";

export interface AccessTokenPayload {
    sub: number;
    session: number;
}

export type DecodedAccessTokenPayload = Omit<JwtPayload, 'sub'> & AccessTokenPayload;