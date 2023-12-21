import { useParams } from "react-router-dom"
import axios from "axios"

const SingleBook = ({books, user, reserved, setReserved, setBooks}) => {
    const params = useParams()
    const id = params.id*1
    
    const singleBook = books.find((book) => {
        return book.id === id
    })

    const handleAction =  async () => {
        
        const token = window.localStorage.getItem('token')
        const {data} = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, 
        {available: false},
        {

            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        window.alert(`Checked out ${data.book.title}!`)
        
        setReserved([...reserved, data.book])



    }

    if(!singleBook){
        return null
    }

    return(
        <div>
            <h1>Single Book</h1>
            <h3>{singleBook.title}</h3>
            <p>{singleBook.description}</p>
  
            <button disabled={ user.firstname && singleBook.available ? false : true} onClick={() => {handleAction()}}>
                Checkout
            </button>
            {
                user.firstname ? null : <p>Login to check out a book!</p>
            }
        </div>
    )
}

export default SingleBook