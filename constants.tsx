
import { Service, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'mkt-1',
    title: 'Precision Marketing',
    description: 'Data-driven SEO, PPC, and social strategies that turn clicks into loyal customers.',
    icon: 'fa-chart-line',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'dev-1',
    title: 'High-Performance Web',
    description: 'Bespoke web applications built for speed, scalability, and seamless user experiences.',
    icon: 'fa-code',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'dev-2',
    title: 'E-commerce Evolution',
    description: 'Transform your storefront into a conversion powerhouse with modern headless architecture.',
    icon: 'fa-shopping-bag',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'mkt-2',
    title: 'Brand Storytelling',
    description: 'Creating visual identities and content that resonate deeply with your target audience.',
    icon: 'fa-pen-nib',
    color: 'from-orange-500 to-red-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'CEO, Lumina Tech',
    content: 'Vistaario completely transformed our digital presence. Our conversion rate increased by 40% in just three months.',
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Founder, EcoStream',
    content: 'The development team at Vistaario is top-tier. They built a custom dashboard that saved our operations team 20 hours a week.',
    image: 'https://picsum.photos/seed/marcus/100/100'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-hirer',
    client: 'Hirer',
    title: 'Hirer - The Job Place',
    category: 'Full-Stack Platform',
    result: 'Seamless Recruitment',
    description: 'Hirer is a modern job platform connecting talented individuals with verified opportunities. Discover thousands of jobs, apply seamlessly, and find your ideal career faster.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Full-Stack', 'UI/UX Design', 'Cloud Integration'],
    link: 'https://job-app-hirer.vercel.app/'
  },
  {
    id: 'cs-1',
    client: 'Lumina Tech',
    title: 'SaaS Scaling & Architecture',
    category: 'Development / Marketing',
    result: '+340% User Growth',
    description: 'Re-engineered the core SaaS platform for Lumina Tech using a distributed micro-frontend architecture while launching an aggressive multi-channel growth campaign.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Rust', 'SEO Automation', 'Paid Ads']
  },
  {
    id: 'cs-2',
    client: 'EcoStream',
    title: 'Internal Efficiency Dashboard',
    category: 'Product Development',
    result: '2,500 Hours Saved Yearly',
    description: 'Developed a custom real-time monitoring dashboard for renewable energy streams, reducing manual reporting time by 80% across the organization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    tags: ['Real-time Data', 'Custom UI/UX', 'Cloud Native']
  }
];
