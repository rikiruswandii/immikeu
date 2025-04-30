// src/lib/server/firebaseAdmin.ts
import admin from "firebase-admin";
import {
  GOOGLE_PROJECT_ID,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_CLIENT_ID,
  GOOGLE_TYPE,
  GOOGLE_AUTH_URI,
  GOOGLE_TOKEN_URI,
  GOOGLE_AUTH_PROVIDER_CERT_URL,
  GOOGLE_CLIENT_CERT_URL,
  GOOGLE_UNIVERSE_FDOMAIN
} from '$env/static/private'; // ✅ BENAR


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: GOOGLE_PROJECT_ID,
      privateKey: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: GOOGLE_CLIENT_EMAIL,
      privateKeyId: GOOGLE_PRIVATE_KEY_ID,
      clientId: GOOGLE_CLIENT_ID,
      type: GOOGLE_TYPE,
      authUri: GOOGLE_AUTH_URI,
      tokenUri: GOOGLE_TOKEN_URI,
      authProviderX509CertUrl: GOOGLE_AUTH_PROVIDER_CERT_URL,
      clientC509CertUrl: GOOGLE_CLIENT_CERT_URL,
      universeDomain: GOOGLE_UNIVERSE_FDOMAIN,
    } as admin.ServiceAccount)
  });
}

export default admin;
