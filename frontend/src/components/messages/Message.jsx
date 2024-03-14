import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://images.pexels.com/photos/59674/pexels-photo-59674.jpeg?auto=compress&cs=tinysrgb&dpr="
                        alt="user image" />
                </div>
            </div>
            <div className="chat-bubble text-slate-600 bg-sky-200 opacity-60">You were the Chosen One!</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                <time className="text-xs">12:46</time>
            </div>
        </div>
    )
}

export default Message