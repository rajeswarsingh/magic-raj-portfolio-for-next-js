// TypeScript interfaces for the project structure

interface Person {
    name: string;
    age?: number;
    pictureUrl?: string;
}

interface Social {
    platform: string;
    url: string;
}

interface Newsletter {
    email: string;
    subscribed: boolean;
}

interface Home {
    welcomeMessage: string;
    featuredProjects?: string[];
}

interface About {
    bio: string;
    skills?: string[];
    experience?: string[];
}

interface Blog {
    title: string;
    content: string;
    tags?: string[];
    publishedDate?: string;
}

interface Work {
    title: string;
    description?: string;
    link?: string;
}

interface Gallery {
    images: string[];
}