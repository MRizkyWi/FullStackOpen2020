import React from 'react'
// import './../index.css'

const Notification = ({message, messageType}) => {
    if (message === null || messageType === null){
        //console.log('message = ', message, ', message type = ', messageType)
        return null
    }

    if (messageType === 0){
        return (
            <div className="error">
                {message}
            </div>
        )
    }

    if (messageType === 1){
        return (
            <div className="message">
                {message}
            </div>
        )
    }
}

export default Notification