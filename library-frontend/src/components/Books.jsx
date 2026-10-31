import { useQuery } from "@apollo/client/react"
import { ALL_BOOKS } from "./queries"

const Books = (props) => {
  if (!props.show) {
    return null
  }

  const result = useQuery(ALL_BOOKS)
  if (result.loading) {
    return <h1>Loading...</h1>
  }

  const books = result.data.allBooks

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
