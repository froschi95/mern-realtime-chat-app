import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation";


const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-slate-400/40 rounded p-2 py-1 cursor-pointer 
            ${isSelected ? "bg-sky-300/40" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic}
                            alt='user avatar' />
                        {/* <img src="https://images.pexels.com/photos/596748/pexels-photo-596748.jpeg?auto=compress&cs=tin" alt='user avatar' /> */}

                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-slate-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
        </>
    )
}

export default Conversation