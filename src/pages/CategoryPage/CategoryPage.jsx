import Header from "./components/Header.jsx";
import CategoryItem from "./components/CategoryItem.jsx";
import {data} from "./data/data.js";
import {useNavigate} from "react-router-dom";
const CategoryPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[70%] m-auto mb-5'>
            <Header/>
            <div className='w-full' style={{backgroundColor:'#F2F2F2'}}>
                <div onClick={() => navigate('/rumah-ibu')}>
                    <CategoryItem image={data['rumahIbu'].image} qr={data['rumahIbu'].qr} title={data['rumahIbu']['title']}/>
                </div>
                <div onClick={() => navigate('/balai')}>
                    <CategoryItem image={data['balai'].image} qr={data['balai'].qr} title={data['balai']['title']} />
                </div>
                <div onClick={() => navigate('/selang')}>
                    <CategoryItem image={data['selang'].image} qr={data['selang'].qr} title={data['selang']['title']} />
                </div>
                <div onClick={() => navigate('/dapur')}>
                    <CategoryItem image={data['dapur'].image} qr={data['dapur'].qr} title={data['dapur']['title']} />
                </div>
                <div onClick={() => navigate('/ikat')}>
                    <CategoryItem image={data['ikat'].image} qr={data['ikat'].qr} title={data['ikat']['title']} />

                </div>
                <div onClick={() => navigate('/climate')}>
                    <CategoryItem image={data['climate'].image} qr={data['climate'].qr} title={data['climate']['title']} />
                </div>
                <div onClick={() => navigate('/ornament')}>
                    <CategoryItem image={data['ornament'].image} qr={data['ornament'].qr} title={data['ornament']['title']} />
                </div>
            </div>

        </div>
    )
}

export default CategoryPage