const Header = () => {
    return (
        <header className="flex justify-around bg-redd text-white py-4">
            <h2 className="text-3xl font-bold">Medical Darpan</h2>
            <div className="flex">
                <a className="mx-2" href="/">
                    Home
                </a>
                <a className="mx-2" href="#products">
                    Products
                </a>
                <a className="mx-2" href="#distributors">
                    Distributors
                </a>
                <a className="mx-2" href="#manufacturers">
                    Manufacturers
                </a>
                <a className="mx-2" href="#about">
                    About
                </a>
                <a className="mx-2" href="#blog">
                    Blog
                </a>
            </div>
            <div className="flex">
                <a href="#login">Login</a>
            </div>
        </header>
    );
};

export default Header;
