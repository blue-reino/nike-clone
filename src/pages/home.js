import './home.css'

import HeroImage from '../images/nike-just-do-it.png';
import featuredImageLeft from '../images/featured-image-right.jpg'
import featuredImageRight from '../images/featured-image-right.jpg'

function Home(){

    const Hero = () =>{

        return(
            <div className="heroContainer">
                <div className='deleteMe'>
                    <p>Save Up to 40%</p>
                    <a href='#'>Shop All Our New Markdowns</a>
                </div>
                <img src={HeroImage} alt='featuredImage' style={{width:'100%'}}></img>

                <div className="heroInfo">
                    <p style={{fontSize: '18px', fontWeight: '700'}}>
                        Nike Air Max DN
                    </p>
                    <h1 className="heroTitle">
                        FEEL THE UNREAL.
                    </h1>
                    {/* <h1 className="heroTitle">
                        REWIND.
                    </h1> */}
                    <p style={{fontSize: '18px', fontWeight: '700'}}>
                        The next generation of Air technology launches on March 26th.
                    </p>
                    <p style={{fontSize: '18px', fontWeight: '700', lineHeight: '5px'}}>
                    Preview the full lineup of colorways now.
                    </p>
                    
                    <button className="heroShopButton">Shop</button>
                </div>
            </div>
        );
    }

    const Featured = () =>{
        return(
            <div className="featuredContainer">
                <h2 className="featuredTitle">Featured</h2>

                <div className="featuredImages">
                    <a href='#' className='featuredImageLeft'><img src={featuredImageLeft} style={{width: '100%'}}/></a>

                    <a href='#' className='featuredImageRight'><img src={featuredImageRight} style={{width: '100%'}}/></a>

                </div>
            </div>
        )
        
    }


    return(
        <>
        <Hero/>
        <Featured/>
        </>
    );
}

export default Home;