
import '../../styles/components/homeHero.scss'
import Header from '../global/header.jsx'
import HeroContent from '../home/heroContent.jsx'

// Main Hero Component

const HomeHeroSection = ({ cartAmount, setCartOpen, cartOpen, setTryingSignUp }) => {

    return (
        <section className="homeHero">
            <Header 
                cartAmount={cartAmount} 
                cartOpen={cartOpen} 
                setCartOpen={setCartOpen} 
            />
            <HeroContent setTryingSignUp={setTryingSignUp} />
        </section>
    ) 

}

export default HomeHeroSection;






