// Company details used across the site. Edit here and every page updates.

export const site = {
  name: 'Transnetrix',
  legalName: 'Transnetrix (SMC-Private) Limited',
  tagline: '...crossing the divide, your way.',
  url: 'https://transnetrix.com.pk',
  description:
    'Transnetrix is a Gilgit based consultancy and solutions firm working across Marcom, EdTech, FinTech and IT Solutions for public institutions, development partners and businesses in Pakistan.',
  email: 'info@transnetrix.com.pk',
  phones: ['+92 344 5511499', '+92 355 5181560'],
  office: 'Office No. 3, Hakeem Market, Near Avari Express, Jutial, Gilgit',
  locations: 'Gilgit and Islamabad',
  secp: '0354516',
  ntn: 'J860340-3',
  incorporated: '4 September 2026',

  // Web3Forms access key. Get one free at https://web3forms.com using transnetrix@gmail.com,
  // then paste it here. Until then the form shows an email fallback.
  web3formsKey: '749643b3-e880-417e-9df2-46224e87373d',

  // Confirm these before launch.
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/transnetrix' },
    { label: 'Facebook', href: 'https://www.facebook.com/transnetrix' },
    { label: 'Instagram', href: 'https://www.instagram.com/transnetrix' },
    { label: 'X', href: 'https://x.com/transnetrix' },
    { label: 'YouTube', href: 'https://www.youtube.com/@transnetrix' },
  ],
};

// Practice colours. Marcom, EdTech and FinTech follow the brand book; IT uses ochre.
export const colors = {
  marcom: '#EC3013',
  edtech: '#0D7268',
  fintech: '#3B3A8F',
  it: '#9A5B12',
};

export const nav = [
  { label: 'Practices', href: '/practices/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/', accent: true },
];
