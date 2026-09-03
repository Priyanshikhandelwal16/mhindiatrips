import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const DEFAULT_SECRET = "mh_india_trips_admin_secret_key_2026_default_dev";

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.warn("[SECURITY WARNING] ADMIN_SESSION_SECRET environment variable is not configured in production!");
    }
    return DEFAULT_SECRET;
  }
  return secret;
}

function sign(payload: string): string {
  const hmac = crypto.createHmac("sha256", getSecret());
  hmac.update(payload);
  return hmac.digest("hex");
}

export async function createAdminSession(email: string): Promise<boolean> {
  try {
    const payload = JSON.stringify({
      email,
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days expiration
    });
    const encodedPayload = Buffer.from(payload).toString("base64url");
    const signature = sign(encodedPayload);
    const token = `${encodedPayload}.${signature}`;

    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60
    });
    return true;
  } catch (err: any) {
    console.error("[Session] Failed to create admin session cookie:", err);
    return false;
  }
}

export async function clearAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    return true;
  } catch (err: any) {
    console.error("[Session] Failed to clear admin session cookie:", err);
    return false;
  }
}

export async function verifyAdminSession(): Promise<{ authenticated: boolean; user?: { email: string } }> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return { authenticated: false };

    const parts = token.split(".");
    if (parts.length !== 2) return { authenticated: false };

    const [encodedPayload, signature] = parts;
    const expectedSignature = sign(encodedPayload);

    if (signature !== expectedSignature) {
      console.warn("[Session Security] Invalid HMAC signature on admin session cookie.");
      return { authenticated: false };
    }

    const jsonStr = Buffer.from(encodedPayload, "base64url").toString("utf-8");
    const data = JSON.parse(jsonStr);

    if (!data.exp || data.exp < Date.now()) {
      console.warn("[Session Security] Admin session cookie expired.");
      return { authenticated: false };
    }

    return { authenticated: true, user: { email: data.email } };
  } catch (err: any) {
    console.warn("[Session Security] Error verifying session cookie:", err.message || err);
    return { authenticated: false };
  }
}

export async function requireAdminSession(): Promise<{ success: true; user: { email: string } } | { success: false; error: string }> {
  const session = await verifyAdminSession();
  if (!session.authenticated || !session.user) {
    return { success: false, error: "Unauthorized: Admin authentication session required." };
  }
  return { success: true, user: session.user };
}
