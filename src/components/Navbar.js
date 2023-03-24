import { Link } from 'react-router-dom';
import '../css/nav.css';
import lskk from '../assets/logodeal.png'

function Navbar() {
    return(
    <div class="bagian w-full fixed top-0 left-0 z-50 "> 
        <header class="header">
            <a href="/"> <img src={lskk} alt="" className='w-24 ml-4'/>  </a>
            <ul class="main-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/tekido">BACK</a></li>

            </ul>
        </header> 
    </div>
    );
}

export default Navbar;