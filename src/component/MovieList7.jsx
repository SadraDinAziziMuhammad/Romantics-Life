import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const movies = [
    { id: 1, title: "Movie 1", image: "/image/37.png" },
    { id: 2, title: "Movie 2", image: "/image/38.png" },
    { id: 3, title: "Movie 3", image: "/image/39.png" },
    { id: 4, title: "Movie 4", image: "/image/40.png" },
    { id: 5, title: "Movie 5", image: "/image/41.png" },
    { id: 6, title: "Movie 6", image: "/image/42.png" },
];

const MovieList7 = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Semprotulation</h2>
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
                autoplay={{ delay: 3600, disableOnInteraction: false }}
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

export default MovieList7;