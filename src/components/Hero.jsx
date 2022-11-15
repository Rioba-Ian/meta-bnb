import img1 from "../assets/image 3.png"
import img2 from "../assets/image 4.png"
import img3 from "../assets/image 5.png"
import img4 from "../assets/image 6.png"

export default function Hero() {
    return (
        <section className="hero container row">
            <div className="hero__text">
                <h1>Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple"> Metaverse</span></h1>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to relaity at your comfort zone.</p>
                <form action="" className="form__area">
                    <input type="search" className="search-location" name="" id="" />
                    <button type="submit" className="submit-location">Search</button>
                </form>
            </div>
            <div className="hero__image">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />

            </div>
        </section>
    )
}