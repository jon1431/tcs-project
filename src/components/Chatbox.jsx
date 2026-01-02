import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ChatboxItem from "./ChatboxItem.jsx";
import axios from "axios";
import { nanoid } from 'nanoid';
import shrink from '../assets/shrink_arrow.png'
const sessionId = nanoid();

const ChatBox = ({chatOnClickHandler}) => {
    const BASE_URL = "https://tcs-560362072194.europe-west1.run.app/"
    const [inputValue, setInputValue] = useState('');
    const [messageHistory, setMessageHistory] = useState([{sender: 'bot', text:
            'Hi! How can I assist you today?'}]);
    sessionStorage.setItem("username", sessionId)
    const fetchChatResponse = async(message) => {
        const userId = sessionStorage.getItem('username')
        console.log(`userId: ${userId}`);
        const response = await axios(
            `${BASE_URL}user/chat?message=${message}`,
            {
                method: 'GET',
                headers: {
                    'username': userId
                }
            },
        )
        return response.data
    }

    const sendOnClickHandler = async (e) => {
        e.preventDefault();
        // Add user message
        setMessageHistory(prev => [...prev, { sender: 'user', text: inputValue }]);
        // Fetch bot response
        try {
            const response = await fetchChatResponse(inputValue);
            // Add bot message (assume response.message is the text)
            setMessageHistory(prev => [...prev, { sender: 'bot', text: response.message }]);
        } catch {
            setMessageHistory(prev => [...prev, { sender: 'bot', text: 'Error fetching response.' }]);
        }
        setInputValue("");
    }
    return (
        <div className="z-50 fixed bottom-8 right-8 min-w-[50%] bg-white rounded-[40px] shadow-xl p-8
        min-h-[60vh] max-h-[80vh] flex flex-col" style={{scrollbarWidth:'none'}}>
            <div className='w-7 mb-5'>
                <img src={shrink} onClick={chatOnClickHandler}/>
            </div>
            {/* Chat Messages Area (Placeholder for messages) */}
            <div className="flex-1 mb-8 flex flex-col text-gray-300 italic overflow-y-auto"
            style={{scrollbarWidth:'none'}}>
                {/* Placeholder for actual chat bubbles */}
                <ChatboxItem messages={messageHistory}/> {/* Pass array of objects */}
            </div>

            {/* Input Section */}
            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask Questions.."
                        className="w-full bg-gray-200 border-none rounded-full py-3 px-6 text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    />
                </div>
                <button
                    className="p-3 bg-white shadow-md rounded-full text-gray-500 hover:text-orange-500 hover:scale-105 active:scale-95 transition-all"
                    aria-label="Send message"
                    onClick={sendOnClickHandler}
                >
                    <Send size={24} className="transform rotate-[-10deg]" />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
