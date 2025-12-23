// src/hooks/useSendContactEmail.ts
import { useState } from 'react';
import { sendContactEmail, ContactFormData } from '@/lib/email';

export function useSendContactEmail() {
  const [isSending, setIsSending] = useState(false);

  const send = async (data: ContactFormData) => {
    setIsSending(true);
    try {
      const res = await sendContactEmail(data);
      return res;
    } finally {
      setIsSending(false);
    }
  };

  return { isSending, send };
}
