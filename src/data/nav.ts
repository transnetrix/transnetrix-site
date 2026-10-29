// Main menu. Items with `children` open a dropdown.
export type NavItem = { label: string; href: string; accent?: boolean; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: 'About', href: '/about/', children: [
      { label: 'Who we are', href: '/about/', note: 'Mission, vision and values' },
      { label: 'Leadership', href: '/about/#leadership', note: 'Founder and associates' },
      { label: 'Technology partners', href: '/about/#partners', note: 'AIDCO and Tech Valley' },
    ],
  },
  {
    label: 'Practices', href: '/practices/', children: [
      { label: 'Marcom', href: '/practices/marcom/', note: 'Communication for behaviour change' },
      { label: 'EdTech', href: '/practices/edtech/', note: 'Digital learning that teachers adopt' },
      { label: 'FinTech', href: '/practices/fintech/', note: 'Inclusion by use, not accounts' },
      { label: 'IT Solutions', href: '/practices/it-solutions/', note: 'Systems for where the road ends' },
      { label: 'Advisory', href: '/practices/advisory/', note: 'Policy, research and programme management' },
    ],
  },
  {
    label: 'Work', href: '/work/', children: [
      { label: 'Roads and Bridges Master Plan', href: '/work/roads-bridges-master-plan/', note: 'Gilgit Baltistan, IFAD' },
      { label: 'SHPI Phase IV Feasibility', href: '/work/shpi-phase-iv-feasibility/', note: 'KP and GB, KfW' },
      { label: 'Experience record', href: '/work/#experience', note: 'Eleven engagements' },
    ],
  },
  {
    label: 'Articles & News', href: '/articles/', children: [
      { label: 'Articles', href: '/articles/?type=article', note: 'Writing by Abid Majeed Khawar' },
      { label: 'News', href: '/articles/?type=news', note: 'Updates from Transnetrix' },
      { label: 'All posts', href: '/articles/', note: 'Everything, newest first' },
    ],
  },
  { label: 'Legacy', href: '/legacy/' },
  { label: 'Contact', href: '/contact/', accent: true },
];
