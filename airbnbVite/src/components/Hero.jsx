import pictures from '../img/groupOfPictures.png'
export default function Hero(){
    return(
        <section className='hero'>
            <img src={pictures} alt="pictures showing activities" className="hero--photo" />
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
} 