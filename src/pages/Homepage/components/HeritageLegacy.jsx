
import React from 'react';

const ArchitecturalLegacy = ({ onExplore }) => {
    return (
        <section className="mt-12 space-y-8 w-full ">
            <div className="flex flex-col items-start mx-auto  w-[80%]">
                <div className="flex items-center gap-3 mb-4 ">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h2 className="text-[2rem] uppercase font-bold tracking-[0.2em] text-gray-400">
                        Architectural Legacy
                    </h2>
                </div>

                <blockquote className="text-gray-700 text-3xl leading-relaxed font-normal italic ">
                    &ldquo; Rumah Penghulu Abu Seman is a traditional Malay house that reflects early 20th-century Malay architecture and way of life. Originally built in Kedah and later restored in Kuala Lumpur, it stands as an important example of Malaysia&apos;s cultural heritage. Today, it serves as a place to learn about traditional design, craftsmanship, and values. &rdquo;
                </blockquote>
            </div>

            <button
                onClick={onExplore}
                className="w-full bg-black text-white py-6 px-8 rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-900 transition-all transform active:scale-[0.98] group"
            >
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M3 3H9V9H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3H21V9H15V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 15H9V21H3V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 21V18H18V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.15em]">Explore Exhibit Directory</span>
            </button>
        </section>
    );
};

export default ArchitecturalLegacy;
