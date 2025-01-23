import './hero.css';
import Photo from './profile.jpg';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>
                    Hello, I am <span>Rel Ace A. Tenorio</span>
                </h1>
                <p>Web Developer</p>
            </div>
            <div className="hero-photo">
                <img src={Photo} alt="Rel Ace, Web Developer" />
            </div>
        </div>
    );
}

export default Hero;
