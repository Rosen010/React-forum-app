export default function Navigation() {
    return (
        <nav className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-white">ForumApp</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Login
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}