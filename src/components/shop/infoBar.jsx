
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";

// Info Bar Component

const InfoBar = () => {

    const shippingInfo = "Free shipping for all orders of $350";

    return (
        <article className="infoBar">
            <div className="navContainer">
                <h3 className="shippingInfo">
                    { shippingInfo.toUpperCase() }
                </h3>
                <div className="navigation">
                    <div className="icons">
                        <GrYoutube />
                        <RiInstagramFill />
                        <FaXTwitter />
                        <RiFacebookCircleFill />
                    </div>
                    <h3>Contact Us</h3>
                    <h3>FAQs</h3>
                </div>
            </div>
        </article>
    )

}

export default InfoBar;






