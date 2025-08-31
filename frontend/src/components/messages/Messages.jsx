import React, { useEffect, useRef } from 'react'
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessagesSkeleton';

const Messages = () => {
    const [messages, loading] = useGetMessages();
    const lastMessageRef = useRef();
    //so it automatically scroll to last message
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
            {loading && [...Array(3)].map((idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className="text-center text-gray-400 italic">Send a message to start the conversation</p>
            )}
        </div>
    );
}

export default Messages