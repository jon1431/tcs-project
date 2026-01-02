import React, {useState} from 'react';
import { Building2, Key, Info, Send } from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import ChatboxButton from "../../components/ChatboxButton.jsx";
import Background from '../../assets/rumah_ibu_background.png'
import ChatBox from "../../components/Chatbox.jsx";
import Interaction from './assets/social_interaction.png'
import Venturi from './assets/the_venturi_effect.png'
const SelangPage = () => {
    const [isChatClose, setIsChatClose] = useState(true);
    const horizontalMask = 'linear-gradient(to right, transparent 0%, black 25%, black 50%, transparent 100%)';
    const verticalMask = 'linear-gradient(to bottom, transparent 0%, black 25%, black 50%, transparent 100%)';

    const chatButtonClickHandler = (e) => {
        e.preventDefault()
        setIsChatClose(!isChatClose);
    }

    return (
        <div className="w-[80%] h-screen m-auto mt-0 flex flex-col items-center pb-12 relative overflow-hidden"
             style={{backgroundColor:'#F2F2F2'}}>
            <div className="absolute inset-0 top-[-5%] opacity-50">
                <img
                    src={Background}
                    alt="Background"
                    className='w-[75%] m-auto'
                    style={{
                        WebkitMaskImage: `${horizontalMask}, ${verticalMask}`,
                        maskImage: `${horizontalMask}, ${verticalMask}`,
                        WebkitMaskComposite: 'source-in',
                        maskComposite: 'intersect',
                    }}
                />
            </div>
            <main className="px-6 pt-12 z-3" style={{maskImage: 'li'}}>
                {/* Main Title Section */}
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Balai
                    </h1>

                    <SectionHeader icon={<Building2 size={24} />} title="Architectural Profile" />

                    <div className="relative pl-4 mt-4 border-l-2 border-orange-200">
                        <p className="text-gray-800 text-2xl font-bold leading-relaxed italic font-sans">

                            “ The Selang is the walkway connecting the Rumah Ibu to the Dapur. While it appears to be merely a corridor, it is a critical climatic and social device.“
                        </p>
                    </div>
                </header>

                {/* Structural Elements Section */}
                <SectionHeader icon={<Key size={24} />} title="Key Structural Elements" />
                <section className="mt-4 mb-10 h-[60vh] flex flex-col h-1/2">
                    <div className="space-y-4 h-full">
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <img src={Venturi} className='h-full'/>
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>The Venturi Effect</p>
                                <p className='text-xl leading-9'>The Selang's open-sided design creates a wind channel that cools the house by accelerating breezes and extracting hot air.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <img src={Interaction} className='h-full'/>
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>Social Interaction</p>
                                <p className='text-xl leading-9'>This area often served as a colloquial space for the women of the household to converse, separate from the formal male-dominated proceedings in the Balai.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='absolute bottom-3 right-3 w-full flex justify-end z-50'>
                    <div onClick={chatButtonClickHandler} className='w-[5%]'>
                        {isChatClose && <ChatboxButton />}
                    </div>
                    <div className='fixed bottom-0 '>
                        {!isChatClose && <ChatBox chatOnClickHandler={chatButtonClickHandler}/>}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SelangPage;
