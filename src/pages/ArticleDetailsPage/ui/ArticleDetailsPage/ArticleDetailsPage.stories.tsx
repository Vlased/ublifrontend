import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { Article, ArticleType, ArticleBlockType } from '@/entities/Article'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ArticleDetailsPage.async'
import { ReduxDecorator } from '@/shared/config/storybook/decorators/ReduxDecorator'

const article: Article = {
  id: '1',
  title: 'JavaScript News',
  subtitle: 'What\'s new in JS in 2023',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
  views: 1022,
  createdAt: '26.06.2023',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
  },
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'This block title',
      paragraphs: [
        'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
        'JavaScript\'s dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).',
        'This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs that are specific to Web pages, please see Web APIs and DOM.'
      ]
    },
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: 'console.log(\'Hello world!\');'
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'This 2 block title',
      paragraphs: [
        'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
        'JavaScript\'s dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.IMAGE,
      src: 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
      title: 'Image number 1'
    },
    {
      id: '5',
      type: ArticleBlockType.CODE,
      code: "var http = require('http');\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello World!');\n}).listen(8080);"
    }
  ]
}

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleDetailsPage>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [
  ReduxDecorator({
    articleDetails: {
      data: article
    }
  })
]

export const Dark: Story = {
  args: {}
}

Dark.decorators = [
  ReduxDecorator({
    articleDetails: {
      data: article
    }
  }),
  ThemeDecorator(Theme.DARK)
]
