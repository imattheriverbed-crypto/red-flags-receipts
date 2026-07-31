import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ message, accent }) {
  const isUser = message.role === 'user';
  return (
    <div className={isUser ? 'flex justify-end' : 'flex justify-start'}>
      {!isUser && (
        <span
          className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full mt-2 self-start"
          style={{ backgroundColor: accent }}
        />
      )}
      <div
        className={
          isUser
            ? 'max-w-[80%] bg-primary text-white rounded-2xl rounded-br-sm px-4 py-2.5'
            : 'max-w-[80%] bg-white/5 ring-1 ring-white/10 text-parchment rounded-2xl rounded-bl-sm px-4 py-2.5'
        }
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
        ) : (
          <div className="text-sm leading-relaxed text-parchment/90 [&_p]:my-1 [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}