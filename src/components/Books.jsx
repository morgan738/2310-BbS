import { Link } from "react-router-dom"

const Books = ({books}) => {
    return(
        <div>
            <h1>Books</h1>
            <ul>
                {
                    books.map((book) => {
                        return(
                            <Link key={book.id} to={`/books/${book.id}`}>
                                <li >{book.title}</li>
                                <div>Available: {book.available ? "Yes" : "No"}</div>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Books