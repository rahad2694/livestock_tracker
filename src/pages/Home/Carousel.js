import React from 'react';

const Carousel = () => {
    return (

        // https://i.ibb.co/YfzWjW5/carousel1.jpg
        // https://i.ibb.co/5Kch6ww/carousel2.jpg
        // https://i.ibb.co/djfW1D1/carousel3.jpg
        // https://i.ibb.co/3FsV5hS/carousel4.jpg

        <div className=''>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img alt='' src="https://i.ibb.co/YfzWjW5/carousel1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img alt='' src="https://i.ibb.co/3FsV5hS/carousel4.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img alt='' src="https://i.ibb.co/djfW1D1/carousel3.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img alt='' src="https://i.ibb.co/5Kch6ww/carousel2.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;