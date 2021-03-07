import React from 'react'
import IsDoctor from './IsDoctor'
import IsMe from './IsMe'

const ChatItem = ({isDoctor}) => {
    if (isDoctor){
        return <IsDoctor />
    }
    return <IsMe />
}

export default ChatItem