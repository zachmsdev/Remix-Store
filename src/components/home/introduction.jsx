
import '../../styles/components/homeIntro.scss'
import introImage from '../../assets/introImage.jpg'

// Introduction Component (below the hero)

const Introduction = () => {
    return (
        <section className="introSection">
            <Intro />
        </section>
    )
}

const Intro = () => {
    return (
        <div className="intro">
            <h1>We outfit you with rugged, <br/> high-performance gear.</h1>
            <p>Trail-tested. Adventure-ready. Always original.</p>
            <div className="imagePlacement">
                <img src={introImage} alt="Hiking outside in nature" />
            </div>
        </div>
    ) 
}

export default Introduction;




