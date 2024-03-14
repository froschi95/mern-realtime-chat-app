import React from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const NoChatSelectedBool = true;
    return (
        <div className='md:min-w[450px] flex flex-col'>
            {NoChatSelectedBool ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className='bg-sky-200 px-4 py-2 mb-2 opacity-50'>
                        <span className='label-text'>To: </span> <span className='text-slate-900 font-bold'>Sun Day</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}

        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-sky-200/60 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Basil Leaf</p>
                <p>Select a chat to start messaging...</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}