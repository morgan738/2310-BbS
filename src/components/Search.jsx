import { useState } from "react"
import { Link } from "react-router-dom"

const Search = ({books}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    })
    return(
        <div>
            <h1>Search for a book...</h1>
            <input 
                type="text"
                value={searchTerm}
                placeholder="Enter Search Term Here"
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            {
                searchTerm.length > 0 ? 
                <div>
                    <h3>Viewing {filteredBooks.length} out of {books.length}</h3>
                    <ul>
                        {
                            filteredBooks.map((book) => {
                                return <li key={book.id}>
                                    <Link to={`/books/${book.id}`}>{book.title}</Link>
                                </li>
                            })
                        }

                    </ul> 
                </div>
                : null
                
            }

        </div>
    )
}

export default Search