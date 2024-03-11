import './home.css'

import HeroImage from '../images/hero-feature-image.jpeg';


function Home(){

    const Hero = () =>{

        return(
            <div className="heroContainer">
                <div className='deleteMe'>
                    <p>Nike Women's Week Sale | Extra 25% Off</p>
                    <a href='#'>Sign in & use code CELEBRATE. Select styles</a>
                </div>
                <img src={HeroImage} alt='featuredImage' style={{width:'100%'}}></img>
            </div>
        );
    }

    return(
        <>
        <Hero/>
        </>
    );
}

export default Home;