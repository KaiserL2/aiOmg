'use client';

import Logo from '@/components/Logo';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } = useChat();

  return (
    <div className='pt-4 pb-32'>

      {messages.map(message=>{
        return (
          <div key={message.id} className='border-t border-black/10'>
            <div className='max-w-3xl mx-auto flex py-6'>

              <div className='ml-3 flex gap-2 text-sm'><span>{message.role==="assistant"&& <Logo />}</span> {message.content}</div>
            </div>
          </div>
        )
      })}

      <form onSubmit={handleSubmit} className='fixed inset-x-0 bottom-10'>

        <div>
        <input type="text" className='max-w-3xl shadow-xl w-full mx-auto py-6 px-4 flex h-10 rounded-md border border-input bg-white text-sm ring-offset-transparent' value={input} placeholder='Scrivi qualcosa' onChange={handleInputChange}/>
        </div>

      </form>

    </div>
  );
}
