export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface ILink {
    url: string;
    title: string
}

export interface ILayoutProps {
    title: string;
}

export interface IProductCardProps {
    product: IPost
}