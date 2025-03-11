import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing')
    },        
    {
      text: 'About',
      href: getPermalink('/about')
    },

    {
      text: 'Contact',
      href: getPermalink('/contact')
    },    
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Contact Us', href: '/contact' },
      ]
    }
    // etc. or remove
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // If you want to keep certain socials, e.g. Facebook only
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `© ${new Date().getFullYear()} Turnkey Leads. All rights reserved.`,
};

