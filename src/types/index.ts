// Type definitions matching content.tsx structure

type Person = {
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    avatar: string;
    email: string;
    location: string;
    languages: string[];
};

interface Newsletter {
    display: boolean;
    title: string;
    description: string;
}

type Social = {
    name: string;
    icon: string;
    link: string;
    essential: boolean;
}[];

type Home = {
    path: string;
    image: string;
    label: string;
    title: string;
    description: string;
    headline: string;
    featured: boolean;
    subline: string;
};

type About = {
    // Add all nested properties for the About section here
};

type Blog = {
    // Define Blog interface
};

type Work = {
    // Define Work interface
};

type Gallery = {
    // Define Gallery interface
};

export type { Person, Newsletter, Social, Home, About, Blog, Work, Gallery };