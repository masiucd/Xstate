import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { Field, FieldType } from "@utils/types"

export const POSTS_PATH = join(process.cwd(), "posts")
export const postsFilePath = fs.readdirSync(POSTS_PATH).filter(path => /\.mdx?$/.test(path))

export const getPostsDirectory = (): string => join(process.cwd(), "posts")

export const getPostsSlugs = (postsDirectory: string): string[] => fs.readdirSync(postsDirectory)

export const getPostBySlug = (slug: string, fields: FieldType[] = []): Field => {
  const prefixedSlug = slug.replace(/.mdx$/, "")
  const fullPath = join(getPostsDirectory(), `${prefixedSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(fileContents)

  const items = {} as Field

  for (const field of fields) {
    if (field === "slug") {
      items[field] = prefixedSlug
    }
    if (field === "content") {
      items[field] = content
    }
    if (data[field]) {
      const fieldItem = <string>data[field]
      items[field] = fieldItem
    }
  }
  return items
}

export const getAllPosts = (fields: FieldType[] = []): Field[] => {
  const slugs = getPostsSlugs(getPostsDirectory())

  return slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
