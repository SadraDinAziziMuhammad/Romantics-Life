import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const movies = [
    { id: 1, title: "Movie 1", image: "../../public/image/10.png" },
    { id: 2, title: "Movie 2", image: "../../public/image/15.png" },
    { id: 3, title: "Movie 3", image: "../../public/image/20.png" },
    { id: 4, title: "Movie 4", image: "../../public/image/28.png" },
    { id: 5, title: "Movie 5", image: "../../public/image/36.png" },
    { id: 6, title: "Movie 6", image: "../../public/image/1.png" },
];

const MovieList5 = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Self Love</h2>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={2}
                spaceBetween={20}
                navigation
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3400, disableOnInteraction: false }}
                className="p-4"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <img src={movie.image} alt={movie.title} className="w-full h-auto object-cover rounded-md" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieList5;