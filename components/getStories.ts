import stories from "@/data/stories.json";

export const getAllStories = () => stories;

interface Story {
    slug: string;
    [key: string]: any;
}

export const getStoryBySlug = (slug: string): Story | undefined =>
    stories.find((story: Story) => story.slug === slug);
