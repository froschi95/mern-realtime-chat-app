import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profileImg = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-sky-200/30' : 'bg-blue-400/30';
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profileImg}
                        alt="user image" />
                </div>
            </div>
            <div className={`chat-bubble text-slate-200 ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                <time className="text-xs">{formattedTime}</time>
            </div>
        </div>
    )
}

export default Message