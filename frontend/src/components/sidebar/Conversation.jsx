import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://images.pexels.com/photos/59674/pexels-photo-59674.jpeg?auto=compress&cs=tinysrgb&dpr="
                            alt='user avatar' />
                        {/* <img src="https://images.pexels.com/photos/596748/pexels-photo-596748.jpeg?auto=compress&cs=tin" alt='user avatar' /> */}

                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-betweem'>
                        <p className='font-bold text-slate-200'>Sun Day</p>
                        <span className='text-xl'>🥵</span>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation