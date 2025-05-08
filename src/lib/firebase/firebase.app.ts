// src/lib/server/firebaseAdmin.ts
import admin from "firebase-admin";
import { env } from '$env/dynamic/private';


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: env.GOOGLE_PROJECT_ID,
      privateKey: env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: env.GOOGLE_CLIENT_EMAIL,
      privateKeyId: env.GOOGLE_PRIVATE_KEY_ID,
      clientId: env.GOOGLE_CLIENT_ID,
      type: env.GOOGLE_TYPE,
      authUri: env.GOOGLE_AUTH_URI,
      tokenUri: env.GOOGLE_TOKEN_URI,
      authProviderX509CertUrl: env.GOOGLE_AUTH_PROVIDER_CERT_URL,
      clientC509CertUrl: env.GOOGLE_CLIENT_CERT_URL,
      universeDomain: env.GOOGLE_UNIVERSE_FDOMAIN,
    } as admin.ServiceAccount)
  });
}

export default admin;
