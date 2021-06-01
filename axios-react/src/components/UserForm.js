import React from 'react'

const UseForm = (props) => {
    const { getUser } = props
    return (
        <>
            <form onSubmit={getUser}>
                <input style={{margin:"20px auto", display:"block"}} type="text" name="username" />
                <button style={{margin:"20px auto", display:"block"}}>Submit</button>
            </form>
        </>
    )
}

export default UseForm