export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  paragraphs: string[]
  title?: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string
  title: string
  subtitle: string
  image: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
