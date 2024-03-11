
import './navbar.css'
import logo from '../images/nike-logo.png'



const Navbar = () => {

    return (
        <header className="secondaryHeader">
            
        <a href='#' className='logo'><img src={logo} style={{width:'5%', marginTop:'6px'}}  /></a>


        <div className="headerNav">
            <a href='#'>New & Featured</a>
            <a href='#'>Men</a>
            <a href='#'>Women</a>
            <a href='#'>Kids</a>
            <a href='#'>Accessories</a>
            <a href='#'>Sale</a>

        </div>


        <div className = "userIcons">
           
            <button className='searchButton'><i class="ri-search-2-line" style={{fontSize: '25px', margin: '8px 0 0 8px'}}></i><p className='searchButtonText'>Search</p></button>

            <button className='heartIcon'><i class="ri-heart-line"></i></button>
            <button className='shoppingBag'><i class="ri-shopping-bag-line"></i></button>

        </div>


        </header>

    );

}


export default Navbar;