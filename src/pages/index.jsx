import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <section>
        <div className="container">
           <Header/>

         <div className="banner">
          <img src="./img/bnr.png" alt="" />
         </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="colors_block">
            <div className="colors_left">
              <p className="txt2">COLORS OF KINDNESS</p>

               <button className="btn3">
                <Link href="#" className="lnk4">
                About the program
                </Link>
               </button>
            </div>


            <div className="color_right">
              <p className="txt1">
                Colors of Kindness is Amal <br />
                 Alliance’s multi-award winning <br />
                Social and Emotional Learning <br />
                  program designed to help <br />
                  children explore themselves <br />
                  and the world around them. It is <br />
                 an innovative EdTech solution <br />
                  that aims to:
              </p>
            </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="grid_block">
            <div className="itm">
              <div className="top_img">
                <img src="./img/itm1.png" alt="" />
              </div>

            <p className="txt3">Social and emotional skills</p>
            </div>

             <div className="itm">
              <div className="top_img">
                <img src="./img/itm1.png" alt="" />
              </div>

            <p className="txt3">Social and emotional skills</p>
            </div>

             <div className="itm">
              <div className="top_img">
                <img src="./img/itm1.png" alt="" />
              </div>

            <p className="txt3">Social and emotional skills</p>
            </div>

             <div className="itm">
              <div className="top_img">
                <img src="./img/itm1.png" alt="" />
              </div>

            <p className="txt3">Social and emotional skills</p>
            </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="reading_block">
            <p className="txt4">
              Through a various tools and methodologies, we aim to create a safe and <br />
               engaging learning environment.
            </p>

          <div className="reading_grid">
             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/game.png" alt="" />
              </div>

              <p className="txt5">Play + Games</p>
             </div>

             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/move.png" alt="" />
              </div>

              <p className="txt5">movement</p>
             </div>


             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/breath.png" alt="" />
              </div>

              <p className="txt5">Breathwork</p>
             </div>   

             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/social.png" alt="" />
              </div>

              <p className="txt5">
                Social <br />
                 Emotional <br />
                 Learning
              </p>
             </div>


             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/music.png" alt="" />
              </div>

              <p className="txt5">Music and Dance</p>
             </div>


             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/art.png" alt="" />
              </div>

              <p className="txt5">Art Therapy</p>
             </div>

             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/rc.png" alt="" />
              </div>

              <p className="txt5">
                Creative <br />
                 Writing
              </p>
             </div>

             <div className="rdng_itm">
              <div className="r_top">
                <img src="./img/reading.png" alt="" />
              </div>

              <p className="txt5">
                 Reading
              </p>
             </div>
          </div>

          <button className="btn4">
            <Link href="#" className="lnk5">
            How it works
            </Link>
          </button>

          <p className="txt6">Global impact</p>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="nambers_blick">
           <div className="nmbr_itm">
            <p className="txt7">250k</p>
            <p className="txt8">children</p>

            <p className="txt9">
              reached by <br />
               2022
            </p>
           </div>

           <div className="nmbr_itm">
            <p className="txt7">250k</p>
            <p className="txt8">children</p>

            <p className="txt9">
              reached by <br />
               2022
            </p>
           </div>

           <div className="nmbr_itm">
            <p className="txt7">250k</p>
            <p className="txt8">children</p>

            <p className="txt9">
              reached by <br />
               2022
            </p>
           </div>
          </div>
        </div>
       </section>

       <section className="pl">
        <div className="container">
          <div className="block_planet">
            <button className="btn5">
              <Link href="#" className="lnk6">
              Global Impact
              </Link>
            </button>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <Footer/>
        </div>
       </section>
    </>
  );
}
