import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      id
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      published
      author
      id
    }
  }
`

export const CREATE_BOOKS = gql`
  mutation createBooks(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
 ) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      id
      title
      author
      published
      genres
    }  
  }
`

export const UPDATE_AUTHORS = gql`
  mutation updateAuthors(
    $name: String!
    $setBornTo: Int!
  ) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      id
      born
      bookCount
    }  
  }
`