import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import Link from "next/link";

export default function Impact(){
    return(
       <>
        <section>
            <div className="container">
                <Header/>

                <div className="impact_block">
                    <div className="impact_left">
                        <img src="./img/impact_lft.png" alt="" />
                    </div> 

                    <div className="impact_rigth">
                        <p className="txt37">Global Impact</p>

                        <p className="txt38">
                            Our holistic programming bridges the <br />
                            learning gap posed by the pandemic, <br />
                            displacement, and other factors that <br />
                            contribute to learning losses. We help <br />
                            children develop the social and <br />
                            emotional skills necessary to cope with <br />
                            the new and difficult emotions that <br />
                            accompany emergency situations, and <br />
                            will help them succeed in life. To date, it <br />
                            has been implemented in Bangladesh <br />
                            Greece, Uganda, and our SEL workbook <br />
                            adaptation has been used in 175 <br />
                            countries
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
               <div className="country_block">
                <div className="c_imt">
               <div className="imp_left">
                <img src="./img/ic_l.png" alt="" />
               </div>

               <div className="imp_right">
                <p className="txt39">Bangladesh</p>

                <ul className="ul5">
                    <li>Cox's Bazar (Friendship NGO and Global Dignity)</li>
                    <li>Kurigram (Friendship NGO and Global Dignity)</li>
                    <li>Gaibandha (Friendship NGO and Global Dignity)</li>
                    <li>Jamalpur (Friendship NGO and Global Dignity)</li>
                </ul>
               </div>

                </div>

                <div className="c_imt">
               <div className="imp_left">
                <img src="./img/ic_l.png" alt="" />
               </div>

               <div className="imp_right">
                <p className="txt39">Bangladesh</p>

                <ul className="ul5">
                    <li>Cox's Bazar (Friendship NGO and Global Dignity)</li>
                    <li>Kurigram (Friendship NGO and Global Dignity)</li>
                    <li>Gaibandha (Friendship NGO and Global Dignity)</li>
                    <li>Jamalpur (Friendship NGO and Global Dignity)</li>
                </ul>
               </div>

                </div>


                <div className="c_imt">
               <div className="imp_left">
                <img src="./img/ic_l.png" alt="" />
               </div>

               <div className="imp_right">
                <p className="txt39">Bangladesh</p>

                <ul className="ul5">
                    <li>Cox's Bazar (Friendship NGO and Global Dignity)</li>
                    <li>Kurigram (Friendship NGO and Global Dignity)</li>
                    <li>Gaibandha (Friendship NGO and Global Dignity)</li>
                    <li>Jamalpur (Friendship NGO and Global Dignity)</li>
                </ul>
               </div>

                </div>
               </div>

            </div>
        </section>

        <section>
            <div className="container">
                <div className="evidence_block">
                 <p className="txt40">Evidence</p>

                 <p className="txt41">
                    At Amal Alliance, we understand that contributing to the larger evidence <br />
                    base is critical for the sustainability of interventions. It was initially piloted <br />
                    in Bangladesh and showed a remarkable 16.5% increase in the wellbeing <br />
                    of out-of-school children. Given the dearth of evidence in SEL in <br />
                    education in emergencies (EiE), we have invested tremendously in <br />
                    monitoring and evaluation from design to execution to continuously <br />
                    update our content through a feedback loop with local communities and <br />
                    beneficiaries. Through a partnership with the EASEL Lab of Harvard <br />
                    University and the Greek Ministry of Education and Religious Affairs we <br />
                    obtained empirically validated data to strengthen the evidence base of <br />
                    Colors of Kindness for EiE. To learn more about our successful case <br />
                    studies, please click on the reports below.
                 </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="hea_bl">
                    <div className="h_itm">
                        <Link href="#" className="lnk9">
                        HEA Pilot Report
                        </Link>
                        
                    </div>

                    <div className="h_itm">
                        <Link href="#" className="lnk9">
                        Quality Holistic Learning <br />
                         Report
                        </Link>
                        
                    </div>

                    <div className="h_itm">
                        <Link href="#" className="lnk9">
                        Nakivale Report Available <br />
                         Sept 2022
                        </Link>
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