const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-black w-full top-0 z-10">
            <h1 className="text-red-600 text-2xl font-bold">Romantics Life</h1>

            <div className="w-[300px] h-[60px] overflow-hidden">
                <iframe 
                    className="w-full h-full"
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1824684783&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
                ></iframe>
            </div>
        </nav>
    );
};

export default Navbar;