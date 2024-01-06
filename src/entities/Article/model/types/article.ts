import { User } from 'entities/User'

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED_AT = 'createdAt'
}

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
  ALL = 'All',
  IT = 'IT',
  DATA_SCIENCE = 'Data Science',
  PROGRAMMING = 'Programming',
  MACHINE_LEARNING = 'Machine Learning',
  TECHNOLOGY = 'Technology',
  WEB_DEVELOPMENT = 'Web Development',
  CYBERSECURITY = 'Cybersecurity',
  BUSINESS = 'Business',
  ARTIFICIAL_INTELLIGENCE = 'Artificial Intelligence'
}

export enum ArticleView {
  LIST = 'LIST',
  GRID = 'GRID'
}

export interface Article {
  id: string
  title: string
  user: User
  subtitle: string
  image: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
