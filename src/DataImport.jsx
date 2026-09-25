import { client } from "./lib/sanityClient";

export const getProjects = async () => {
    const projects = await client.fetch(`
        *[_type == "project"] | order(createdAt desc) {
            _id,
            thumbnail,
            name,
            description,
            skills,
            link,
            likes,
            niche
        }
    `);
    return projects;
}   
export const getSkills = async () => {
    const skills = await client.fetch(`
        *[_type == "skill"] | order(order asc) {
            _id,
            skills
        }
    `);
    return skills;
}   
