import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className="top_footer">
              <div className="logo_footer">
                <Link href="/">
                <img src="./img/logo.png" alt="" />
                </Link>
              </div>

              <div className="app_block">
                <Link href="#" className="lnkApp">
                <img src="./img/Facebook.png" alt="app" />
                </Link>

                <Link href="#" className="lnkApp">
                <img src="./img/Facebook.png" alt="app" />
                </Link>

                <Link href="#" className="lnkApp">
                <img src="./img/Facebook.png" alt="app" />
                </Link>

                <Link href="#" className="lnkApp">
                <img src="./img/Facebook.png" alt="app" />
                </Link>
              </div>
            </div>


            <p className="txt10">Copyright © 2022 Amal Alliance. License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC-BY-NC-ND)</p>
          </footer>
    )
}