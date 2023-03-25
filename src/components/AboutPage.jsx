import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <div id="aboutCarousel" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{backgroundColor: '#ffbd5b'}}>
                        <div className="carousel-item-txt">
                            <h2>Delicious Food To fit your lifestyle</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#92ba4a'}}>
                        <div className="carousel-item-txt">
                            <h2>Food, Folks, and Fun</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#ffbd5b'}}>
                        <div className="carousel-item-txt">
                            <h2>We love to see you smile</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#92ba4a'}}>
                        <div className="carousel-item-txt">
                            <h2>You're the Boss</h2>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mt-4">
                <h2>Promotions</h2>
            </div>

            <div id="promoCarousel" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{backgroundColor: '#FD8A8A'}}>
                        <div className="carousel-item-txt">
                            <h2>Buy on Get one for FREE!</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#F1F7B5'}}>
                        <div className="carousel-item-txt text-dark">
                            <h2>Buy a Hamburger, Get FREE Drinks!</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#A8D1D1'}}>
                        <div className="carousel-item-txt">
                            <h2>FREE Shipping across HCMC and Hanoi!</h2>
                        </div>
                    </div>
                    <div class="carousel-item" style={{backgroundColor: '#9EA1D4'}}>
                        <div className="carousel-item-txt">
                            <h2>National Women's Day Celebrations - 30% OFF</h2>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default AboutPage;