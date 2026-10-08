// Single place for the WhatsApp number. Placeholder until the real number is confirmed.
export const WHATSAPP_NUMBER = "972000000000";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
