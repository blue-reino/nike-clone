import './home.css'

import HeroImage from '../images/hero-feature-image.jpeg';
import featuredImageLeft from '../images/featured-image-left.jpeg'
import featuredImageRight from '../images/featured-image-right.jpeg'

function Home(){

    const Hero = () =>{

        return(
            <div className="heroContainer">
                <div className='deleteMe'>
                    <p>Nike Women's Week Sale | Extra 25% Off</p>
                    <a href='#'>Sign in & use code CELEBRATE. Select styles</a>
                </div>
                <img src={HeroImage} alt='featuredImage' style={{width:'100%'}}></img>

                <div className="heroInfo">
                    <h1 className="heroTitle">
                        FAST FORWARD.
                    </h1>
                    <h1 className="heroTitle">
                        REWIND.
                    </h1>
                    <p style={{fontSize: '18px'}}>
                        The Nike V2K Run takes retro style into the future.
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