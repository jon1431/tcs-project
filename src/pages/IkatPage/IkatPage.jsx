import React, {useState} from 'react';
import { Building2, Key, Info, Send } from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import ChatboxButton from "../../components/ChatboxButton.jsx";
import Background from '../../assets/rumah_ibu_background.png'
import ChatBox from "../../components/Chatbox.jsx";
import Ikat from './assets/ikat_mechanism.png'
const IkatPage = () => {
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

                            “ The house exemplifies the Tanggan (Mortise) and Pasak (Tenon) system, a method of joinery
                            that uses no metal nails. “
                        </p>
                    </div>
                </header>

                {/* Structural Elements Section */}
                <SectionHeader icon={<Key size={24} />} title="Key Structural Elements" />
                <section className="mt-4 mb-10 h-[60vh] flex flex-col h-1/2">
                    <div className="space-y-4 h-full">
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <img src={Ikat} className='h-full'/>
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>The Mechanism</p>
                                <p className='text-xl leading-9'>A hole (mortise) is chiseled into a column,
                                    and a shaped tongue (tenon) at the end of a beam is inserted into it. A wooden peg
                                    (pasak) is then driven through the joint to lock it.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>Structural Ductility</p>
                                <p className='text-xl leading-9'>This system is superior to rigid nailing in a tropical climate.
                                    Timber expands and contracts with humidity. A nailed joint would eventually crack or loosen as the wood moves.
                                    A pegged joint allows for "micro-movements." The structure is flexible, allowing it to absorb wind loads or minor ground tremors without catastrophic failure.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded shadow-inner flex h-1/2 rounded-2xl shadow-2xl">
                            <div className='m-2'>
                                <p className='text-2xl font-bold'>Portability</p>
                                <p className='text-xl leading-9'>This system is the enabler of the house's relocation. Because the joints are mechanical interlocks rather than permanent fusions, the house could be dismantled (knocked down) and reassembled (knocked together) without destroying the primary components.
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

export default IkatPage;
