import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

const Footer = () => {
    return (
        <footer className="p-4 text-center bg-black text-gray-500">
            {/* <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p> */}
            <Dialog>
            {/* Tombol untuk membuka popup */}
            <DialogTrigger asChild>
                <button className="bg-blue-500 text-white">Buka Popup</button>
            </DialogTrigger>

            {/* Konten Popup */}
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg w-96">
                <DialogTitle className="text-xl font-bold">Popup Modal</DialogTitle>
                <DialogDescription className="mt-2">
                    Ini adalah contoh popup menggunakan shadcn/ui.
                </DialogDescription>
            </DialogContent>
        </Dialog>
        </footer>
    );
};

export default Footer;
