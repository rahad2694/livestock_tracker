import React from 'react';

const Carousel = () => {
    return (

        <div className=''>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img alt='' src="https://img.freepik.com/free-photo/farmer-cowshed-with-pitchfork-cleaning-up_1303-30779.jpg?w=1060&t=st=1686069636~exp=1686070236~hmac=c36bc1186b3f55d9324bf44a8508b7bda5027ee96e52d4c8164ee449d1e0cfb6" class="w-full h-screen" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img alt='' src="https://img.freepik.com/free-photo/man-farm-looking-tablet_23-2148673074.jpg?w=1060&t=st=1686075599~exp=1686076199~hmac=ab4b1c6c6c551b99b9a23d484b3e19eb262e579609b6a4695b7e5aef4b21852c" class="w-full h-screen" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img alt='' src="https://img.freepik.com/free-vector/farmer-analyzing-data-eco-farming-isolated-flat-illustration_74855-14018.jpg?w=1060&t=st=1686069801~exp=1686070401~hmac=0a733b5ef6f6e5b08284d5d7ff818ac13a8302607c808731fb5506517f29b7aa" class="w-full h-screen" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;