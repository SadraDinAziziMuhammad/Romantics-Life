const Hero = () => {
    const tahunLahir = 2003;
    const bulanLahir = 4;
    const tanggalLahir = 18;

    const today = new Date();
    const tahunSekarang = today.getFullYear();
    const bulanSekarang = today.getMonth() + 1;
    const tanggalSekarang = today.getDate();

    const ulangTahunSudahLewat = bulanSekarang > bulanLahir || (bulanSekarang === bulanLahir && tanggalSekarang >= tanggalLahir);

    const usia = ulangTahunSudahLewat ? tahunSekarang - tahunLahir : tahunSekarang - tahunLahir - 1;
    return (
        <div className="relative w-[79rem] h-[34rem] flex flex-col items-center justify-center text-center px-4">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            >
                <source src="/video/Hero.webm" type="video/webm" />
            </video>

            {/* Konten di atas video */}
            <div className="relative z-10 text-white bg-opacity-40 p-6 rounded-lg justify-center">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Gallery My Girlfriend</h1>
                {/* <p className="text-lg mt-4">Hello, My Name is Regita Pramesti Harianto</p> */}
                <p className="text-lg mt-4">Selamat Ulang Tahun ke-{usia}</p>
            </div>
        </div>
    );
};

export default Hero;