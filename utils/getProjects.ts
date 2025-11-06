import { getProjects } from "@/app/data/projects";

export function getProjectBySlug(slug) {
	const projects = getProjects();
	return projects.find((project) => project.href === `/projects/${slug}`);
}

export function getProjectTags(slug) {
	const project = getProjectBySlug(slug);
	return project?.tags || [];
}
