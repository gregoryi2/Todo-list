import style from './Header.module.css';
import Logo from './assets/rocket.svg';

export function Header() {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={Logo}></img>
                <p className={style.to}>to<span className={style.do}>do</span></p>
            </div>
        </div>
    )
}