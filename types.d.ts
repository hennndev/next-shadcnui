type BlogTypes = {
  id: string,
  title: string,
  date: Date,
  author: string
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}