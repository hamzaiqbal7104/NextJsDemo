import Link from "next/link";
import Image from "next/image";
import style from '../../styles/navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Image src="/Logo.svg" width="144" height="32" alt="LogoImage" />
        <nav>
            <ul className={style.menu_bar}>
                <li>
                    <Link href="/">
                        <a> Product </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> Test Directory </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> Pricing </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> Blog </a>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="btn d-flex flex-row">
            <button className="btn1">Try for free</button>
            <button className="btn2">Sign In</button>
        </div>
    </div>
  );
};

export default Navbar;