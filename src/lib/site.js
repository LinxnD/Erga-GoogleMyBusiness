export const BUSINESS = {
  name: 'Erga Assessoria de Marketing',
  instagram: 'https://www.instagram.com/erga.matcon/',
  whatsappDisplay: '+55 82 9656-2253',
  whatsappNumber: '558296562253',
  email: null,
}

export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Erga e quero saber mais sobre o plano de Google Meu Negócio com site profissional grátis.'

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const SECTION_IDS = {
  hero: 'inicio',
  benefits: 'beneficios',
  howItWorks: 'como-funciona',
  offer: 'oferta',
  faq: 'duvidas',
}
