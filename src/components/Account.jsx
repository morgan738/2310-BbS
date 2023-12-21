import axios from "axios"
import { useNavigate } from "react-router-dom"


const Account = ({user, setUser, setToken, reserved, setReserved }) => {
    const navigate = useNavigate()
    
    


    const returnBook = async (resBook) => {
        const token = window.localStorage.getItem('token')
       
            
        await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${resBook.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        setReserved(reserved.filter((book) =>{ return book.id !== resBook.id }))



    }

    const logout = () => {

        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <h2>{user.email}</h2>
            <h3>Books checked Out</h3>
            {
                reserved.length === 0 ? (
                    <h4>No books checked out</h4>
                ) : (
                    
                    reserved.map((book) => {
                        return (
                            <div key={book.id}>
                                <li > {book.title} </li>
                                <button onClick={() => {returnBook(book)}}>Return</button>
                            </div>
                        
                        )
                        
                    })
                    
                )
            }
           
        </div>
    )
}

export default Account