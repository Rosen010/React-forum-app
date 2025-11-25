import { Link } from "react-router-dom";

export default function Navigation() {
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
                        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Login
                        </Link>
                        <Link to="/register" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}