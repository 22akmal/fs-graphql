import { useQuery } from "@apollo/client/react"
import { ALL_AUTHORS } from "./queries"
import BirthYearForm from "./BirthYearForm"

const Authors = (props) => {
  if (!props.show) {
    return null
  }
  const result = useQuery(ALL_AUTHORS)
  if (result.loading) {
    return <h1>Loading...</h1>
  }

  const authors = result.data.allAuthors


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BirthYearForm authors={authors}/>
    </div>
  )
}

export default Authors
