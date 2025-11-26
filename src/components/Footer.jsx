const Footer = () => {
    return (
        <footer className="bg-[#0a0a0f] py-8 border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-primary opacity-50" />
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Ahmed Yacine. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
