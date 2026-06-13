import fs from "fs";
import path from "path";
import matter from "gray-matter";

const casesDirectory = path.join(process.cwd(), "src/content/cases");

export type CaseDocument = {
    label: string;
    file: string;
    type: "pdf" | "excel" | "notebook";
};

export type Case = {
    slug: string;
    title: string;
    year: string;
    tags: string[];
    excerpt: string;
    finding?: string;
    org?: string;
    kicker?: string;
    documents?: CaseDocument[];
    content: string;
};

export function getCaseBySlug(slug: string): Case | null {
    try {
        const fullPath = path.join(casesDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            year: data.year,
            tags: data.tags || [],
            excerpt: data.excerpt,
            finding: data.finding,
            org: data.org,
            kicker: data.kicker,
            documents: data.documents,
            content,
        };
    } catch {
        return null;
    }
}

export function getAllCases(): Case[] {
    const fileNames = fs.readdirSync(casesDirectory);
    const allCases = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(casesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            year: data.year,
            tags: data.tags || [],
            excerpt: data.excerpt,
            finding: data.finding,
            org: data.org,
            kicker: data.kicker,
            documents: data.documents,
            content,
        };
    });

    return allCases.sort((a, b) => (parseInt(b.year) - parseInt(a.year)));
}
