import './navbar.css'
import logo1 from '../images/jordan-logo.png'
import logo2 from '../images/converse-logo.png'


const Topbar = () =>{
    return(
        <header className="primaryHeader">
            <a href='#' className='jordanLogo'><img src={logo1} style={{width:'80%'}}  /></a>

            <a href='#' className='converseLogo'><img src={logo2} style={{width:'90%', marginLeft:'16px'}}  /></a>

            <div className='topNav'>
                <a href='#'>Find a Store</a>

                <a className='divider' href='#'>|</a>
                
                <a href='#'>Help</a>

                <a className='divider' href='#'>|</a>

                <a href='#'>Join Us</a>

                <a className='divider' href='#'>|</a>

                <a href='#'>Sign In</a>
            </div>

        </header>
    )

}


export default Topbar;