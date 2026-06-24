import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { clearAuthData, getToken, isTokenValid } from "../utils/authStorage";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleSignOut = () => {
        clearAuthData();
        setIsUserLoggedIn(false);
        navigate("/login");
    };

    useEffect(() => {
        const isLoggedIn = isTokenValid();
        setIsUserLoggedIn(isLoggedIn);
    }, [location.pathname]);

    useEffect(() => {
        const interval = setInterval(() => {
            const token = getToken();

            if (token && !isTokenValid()) {
                handleSignOut();
            }
        }, 1800000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                        <img
                            src={logo}
                            alt="VoteApp logo"
                            className="w-6 h-6 object-contain brightness-0 invert"
                        />
                    </div>

                    <span className="text-2xl font-bold text-gray-900">
                        VoteApp
                    </span>
                </Link>

                <ul className="flex items-center gap-4 text-gray-700 font-medium">
                    {isUserLoggedIn ? (
                        <>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/poll/create"
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Post Poll
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/mypolls"
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    My Polls
                                </Link>
                            </li>

                            <li>
                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;