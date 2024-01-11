export type Categories = 'blog' | 'tutorial'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
} 