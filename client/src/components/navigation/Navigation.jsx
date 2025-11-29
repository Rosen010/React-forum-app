import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

function GuestLinks() {
    return (
        <>
            <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Login
            </Link>
            <Link
                to="/register"
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Register
            </Link>
        </>
    );
}

function AuthLinks({ user }) {
    return (
        <>
            <span className="text-gray-300 text-sm">
                {user?.email}
            </span>
            <Link
                to="/logout"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Logout
            </Link>
        </>
    );
}

export default function Navigation() {
    const { isAuthenticated, user } = useUserContext();

    return (
        <nav className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <h1 className="text-xl font-bold text-white">ForumApp</h1>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? <AuthLinks user={user} /> : <GuestLinks />}
                    </div>
                </div>
            </div>
        </nav>
    );
}