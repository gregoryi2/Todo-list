import './Header.css';
import Logo from './assets/rocket.svg'

export function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <img src={Logo}></img>
                <p className='to'>to<span className='do'>do</span></p>
            </div>
        </div>
    )
}