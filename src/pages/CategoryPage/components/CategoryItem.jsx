// ...existing code...
const CategoryItem = ({image, title, qr}) => {
    return (
        <div className='flex justify-center mt-8 rounded-4xl overflow-hidden'>
            <div className="w-1/3 bg-[#222] flex items-center justify-center text-white font-bold text-xl">
                {qr}
            </div>
            <div className="relative w-2/3">
                <img src={image} className="absolute inset-0 w-full h-full object-cover opacity-100"
                     alt="Main House"/>
                <div className="relative p-4 text-center">
                    <h2 className="text-5xl font-bold text-white text-center font-serif font-bold leading-tight">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
