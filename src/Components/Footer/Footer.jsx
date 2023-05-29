import styles from "./Footer.module.css";
import {GrFacebook} from "react-icons/gr"
import {SiTwitter} from "react-icons/si"
import {FaInstagramSquare} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs"
// import {GrFacebook} from "react-icons/gr"
// import {GrFacebook} from "react-icons/gr"
export default function Footer(){
    return(
        <div>
        <div className={styles.main}>
            <hr />
            <div>
                <div className={styles.logoBox}>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672" alt="" />
                    <p>India's Largest Travel Community</p>
                    <hr />
                    <div>
                        <a target="blank" href="https://www.facebook.com/boat.nirvana/"><GrFacebook /></a>
                        <a target="blank" href="https://twitter.com/RockWithboAt"><SiTwitter /></a>
                        <a target="blank" href="https://www.instagram.com/boat.nirvana/"><FaInstagramSquare /></a>
                        <a target="blank" href="https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ"><BsYoutube /></a>
                        <a target="blank" href="https://www.linkedin.com/company/boat-lifestyle/"><BsLinkedin /></a>
                </div>
                <p>Dowload our App</p>
                    <img className={styles.playstore} src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="" />
                </div>
            </div>

            <div className={styles.footerOptions}>
                <b>About Boat</b>
                <p>How it works</p>
                <p>FAQ's</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>

            <div className={styles.footerOptions}>
            <b>Products</b>
                <p>Wireless Headphones</p>
                <p>Wireless Speakers</p>
                <p>Mobile Accessories</p>
                <p>Smart Watches</p>
                <p>Home Audio</p>
                <p>Wired Headphones</p>
                <p>Boat Forum</p>
            </div>
            




            <div className={styles.footerOptions}>
                <b>Help</b>
                <p>Track Your Order</p>
                <p>Warranty & Support</p>
                <p>Return Policy</p>
                <p>Service Centers</p>
                <p>Bulk Orders</p>
                <p>FAQs</p>
                <p>Why Buy Direct</p>
            </div>
            






            <div className={styles.footerOptions}>
                <b>Partner Programs</b>
                <p>Investor Relations</p>
                <p>Partner With Us</p>
                <p>Earn Credits</p>
                <p>Warranty Policy</p>
                <p>Import Blog To Itinerary</p>
                <p>Boat Ai</p>
            
            </div>
            <hr />
            
        </div>
        
        <p style={{textAlign:"center"}}>© All rights reserved.</p>
        </div>
    )
}