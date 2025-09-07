import imgbanner from '../img/banner-torito.png';

const Banner = () => { 
    return(
        <>
        <section className="hero" id="inicio">
            <img src={imgbanner} alt="Artesanía Tradicional"/>
            <div className="hero-text">
                <h2>Arte con Alma, Hecho a Mano.</h2>
                <p>Descubre la belleza de lo auténtico.</p>
            </div>
        </section>
        </>
    );
};

export default Banner;