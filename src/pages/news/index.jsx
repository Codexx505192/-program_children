import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import Link from "next/link";

export default function News(){
    return(
        <>
        <section>
            <div className="container">
                <Header/>

                <div className="our_banner">
                    <div className="our_left">
                        <img src="./img/r_left.png" alt="" />
                    </div>

                    <div className="our_right">
                        <p className="txt27">Last news</p>
                        <h1 className="txt28">
                            Our Journey <br />
                            through <br />
                            Reimagining <br />
                            Learning
                        </h1>

                        <p className="txt29">
                            COVID 19 has presented <br />
                            unprecedented challenges, but has <br />
                             also provided an opportunity to <br />
                              reimagine how learning can take place <br />
                               anywhere, at any time...
                        </p>

                        <div className="nws_bl">
                            <p className="txt32">
                                Amal Alliance Team <br />
                                Jul 22, 2020
                            </p>

                            <Link href="#" className="lnkg">
                            <img src="./img/link.png" alt="link" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="wards_block">
                   <p className="txt30">awards</p> 

                   <div className="awards_grid">
                    <div className="w_itm">
                      <div className="w_top">
                        <img src="./img/spot.png" alt="" />
                        </div> 

                      <p className="txt31">
                        Selected as most Scalable <br />
                         SEL Innovation by LEGO <br />
                          Foundation & HundrED, <br />
                           2021
                      </p>
                    </div>
                   
                      <div className="w_itm">
                      <div className="w_top">
                        <img src="./img/spot.png" alt="" />
                        </div> 

                      <p className="txt31">
                        Selected as most Scalable <br />
                         SEL Innovation by LEGO <br />
                          Foundation & HundrED, <br />
                           2021
                      </p>
                    </div>



                     <div className="w_itm">
                      <div className="w_top">
                        <img src="./img/spot.png" alt="" />
                        </div> 

                      <p className="txt31">
                        Selected as most Scalable <br />
                         SEL Innovation by LEGO <br />
                          Foundation & HundrED, <br />
                           2021
                      </p>
                    </div>


                     <div className="w_itm">
                      <div className="w_top">
                        <img src="./img/spot.png" alt="" />
                        </div> 

                      <p className="txt31">
                        Selected as most Scalable <br />
                         SEL Innovation by LEGO <br />
                          Foundation & HundrED, <br />
                           2021
                      </p>
                    </div>
                   </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="in_the_block">
                    <div>
                        <p className="txt33">In the media</p>
                    </div>

                    <div className="int_grid">
                        <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>

                         <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>


                         <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>

                         <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>


                         <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>


                         <div className="int_itm">
                         <p className="txt34">
                            Design Series: Designing with <br />
                             purpose
                         </p>

                         <p className="txt35">
                            On a trip to Chios, Greece in the middle of summer, we <br />
                            witnessed a shocking disconnect between the <br />
                             humanitarian sector and the people it seeks to serve...
                         </p>


                         <p className="txt36">
                            Danielle De La Fuente <br />
                            Oct 27, 2020
                         </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <Footer/>
            </div>
        </section>
        </>
    )
}