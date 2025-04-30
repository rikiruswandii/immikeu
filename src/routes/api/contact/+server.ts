import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { z } from 'zod';
import { saveContact } from '$lib/server/services/contact.service';

const ContactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1, 'Pesan tidak boleh kosong')
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return json({ error: 'Validasi gagal', errors }, { status: 400 });
    }

    const { email, message } = result.data;

    await saveContact({ email, message });

    return json(
      {
        success: true,
        message: 'Pesan berhasil dikirim'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return json({ error: 'Terjadi kesalahan pada server' }, { status: 500 });
  }
};
