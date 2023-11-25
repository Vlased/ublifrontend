enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  paragraphs: string[]
  title?: string
}

interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

enum ArticleType {
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
