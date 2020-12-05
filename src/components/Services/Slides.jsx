import React from 'react';

function Slides() {
    return (
        <div className='slider-container ' >
            <div id="carouselExampleInterval" className="carousel slide effect7" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src="../Images/6.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="../Images/2.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Images/3.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Images/4.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Images/5.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Images/19.jpg" className="d-block sliderImg" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Slides;
