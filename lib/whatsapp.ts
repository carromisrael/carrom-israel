// Single place for the WhatsApp number. Taken from the friend's design (972524845695); confirm before launch.
export const WHATSAPP_NUMBER = "972524845695";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
