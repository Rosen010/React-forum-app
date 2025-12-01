import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { getUserInitials } from "../../utils/userUtils";

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
            <Link
                to="/profile"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                {user?.profilePicture ? (
                    <img
                        src={user.profilePicture}
                        alt={user.email}
                        className="w-8 h-8 rounded-full object-cover border border-gray-600"
                    />
                ) : (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">
                            {getUserInitials(user?.email)}
                        </span>
                    </div>
                )}
                <span>{user?.email}</span>
            </Link>
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