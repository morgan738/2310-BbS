const Homepage = ({user}) => {
    return (
        
        <div>
           
            {
                user.firstname ? (
                    <h1>Welcome {user.firstname}!</h1>
                    ) : (
                        <h1>Welcome to the bookstore!</h1>
                    )
                
            }
        </div>
    )
}

export default Homepage