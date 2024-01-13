export type Categories = 'blog' | 'tutorial' | 'tech' | 'music' | 'funkot' | 'hugo' | 'ondo'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
} 