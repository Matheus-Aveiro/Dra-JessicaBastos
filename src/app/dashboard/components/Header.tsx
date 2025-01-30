import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-primary text-secondaryTextColor p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Meu App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-primaryTextColor"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-primaryTextColor"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-primaryTextColor"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
