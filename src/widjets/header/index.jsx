import Link from "next/link";

export default function Header() {
    return(
         <header className="header">
            <div className="left">
              <Link href="#" className="lnk2">
              <img src="./img/logo.png" alt="" />
              </Link>
            </div>

              <div className="right">
                <ul className="ul1">
                  <li className="li1">
                   <Link href="/" className="lnk">
                    Home
                   </Link>
                  </li>
                  <li className="li1">
                   <Link href="/aboUt" className="lnk">
                    About Us
                   </Link>
                  </li>
                  <li className="li1">
                   <Link href="#" className="lnk">
                    News
                   </Link>
                  </li>
                  <li className="li1">
                   <Link href="#" className="lnk">
                    Impact
                   </Link>
                  </li>
                </ul>

                <button className="btn">
                  <Link href="#" className="lnk2">
                  Programs
                  </Link>
                </button>

                <button className="btn2">
                  <Link href="#" className="lnk3">
                  Kolibri
                  </Link>
                </button>


                <div className="menu">
                    <img src="./img/menu.png" alt="" />
                </div>
              </div>
            </header>
    )
}