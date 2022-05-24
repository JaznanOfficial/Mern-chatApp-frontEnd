import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const [chats,setChats] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/chats')
            .then(res => {
                const data = res.data;
                setChats(data);
            }
            )
        },[])
        console.log(chats);
    return (
        <div>
            <h1>
                {
                    chats.map(chat=> <div key={chat._id}>{chat.chatName}</div>)
            }
            </h1>
        </div>
    );
};

export default ChatPage;