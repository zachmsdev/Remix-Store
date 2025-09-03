
import { useNavigate } from 'react-router-dom'

const HeroContent = ({ setTryingSignUp }) => {

    const signUpPopup = () => {
        setTryingSignUp(true);
        setTimeout(() => { setTryingSignUp(false) }, 3500);
    }

    const navigator = useNavigate();

    return (
        <div className="heroContent">
            <h1>Remix</h1>
            <p>Every trail tells a story. Gear up with durable, high-performance hiking essentials.</p>
            <div>
                <button onClick={signUpPopup}>Sign Up</button>
                <button onClick={() => { navigator("/shop") }}>
                    Shop Now
                </button>
            </div>
        </div>
    )

}

export default HeroContent;






