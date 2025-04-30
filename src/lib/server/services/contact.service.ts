import admin from '$lib/firebase/firebase.app';

interface ContactPayload {
  email: string;
  message: string;
}

export async function saveContact({ email, message }: ContactPayload) {
  const docRef = await admin.firestore().collection('contacts').add({
    email,
    message,
    created_at: new Date()
  });

  return docRef.id; // Bisa dikembalikan jika diperlukan
}
