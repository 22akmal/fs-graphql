import { useState } from "react"
import { useMutation } from "@apollo/client/react"
import { UPDATE_AUTHORS, ALL_AUTHORS } from "./queries"

const BirthYearForm = ({authors}) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [updateAuthors] = useMutation(UPDATE_AUTHORS, {
    refetchQueries: [{query: ALL_AUTHORS}],
    onError: error => setError(error.message)
  })

  const submit = (event) => {
    event.preventDefault()
    updateAuthors({variables: {name, setBornTo: Number(born)}})
    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          <label>name 
            <select value={name} onChange={({target}) => setName(target.value)}>
              <option>select a name</option>
              {authors.map(author => <option value={author.name}>{author.name}</option>)}
            </select>
          </label>
        </div>
        <div>
          <label>born 
            <input
              value={born}
              onChange={({target}) => setBorn(target.value)}
            />
          </label>
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default BirthYearForm