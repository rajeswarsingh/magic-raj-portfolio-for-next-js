// TypeScript type definitions for various interfaces

export interface About {
    title: string;
    description: string;
    image: string;
}

export interface Blog {
    id: string;
    title: string;
    content: string;
    date: Date;
}

export interface Gallery {
    images: string[];
}

export interface Home {
    welcomeMessage: string;
    featuredProjects: string[];
}

export interface Newsletter {
    email: string;
    subscribeDate: Date;
}

export interface Person {
    name: string;
    age: number;
    role: string;
}

export interface Social {
    platform: string;
    url: string;
}

export interface Work {
    title: string;
    description: string;
    tools: string[];
}