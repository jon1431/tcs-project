import React, {useState} from 'react';
import { Building2, Key, Info, Send } from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import ChatboxButton from "../../components/ChatboxButton.jsx";
import Background from '../../assets/rumah_ibu_background.png'
import ChatBox from "../../components/Chatbox.jsx";
import Pelantar from './assets/pelantar.png'
import SmokeExtraction from './assets/smoke_extraction.png'
const DapurPage = () => {
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
                            “ The dapur (kitchen) is located at the back and lowest part of the house. Its walls have
                            openings and carved panels that allow smoke and heat from cooking to escape easily. The kitchen often includes a pelantar, an open wooden platform used for washing and other wet activities, where water drains directly to the ground. “
                        </p>
                    </div>
                </header>

                {/* Structural Elements Section */}
                <SectionHeader icon={<Key size={24} />} title="Key Structural Elements" />
                <section className="mt-4 mb-10 h-[60vh] flex flex-col h-1/2">
                    <div className="space-y-4 h-full">
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <img src={Pelantar} className='h-full'/>
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>Pelantar</p>
                                <p className='text-xl leading-9'>The pelantar is an open wooden platform used for
                                    washing and other wet activities. Water drains through the gaps in the floor directly to the ground below.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <img src={SmokeExtraction} className='h-full'/>
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>Smoke Extraction</p>
                                <p className='text-xl leading-9'>Traditional wood-fired cooking produces a lot of heat
                                    and smoke, so the kitchen is designed with open walls and carved panels for ventilation.
                                    Open gable ends help hot air and smoke escape quickly.
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

export default DapurPage;
