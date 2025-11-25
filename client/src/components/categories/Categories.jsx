export default function Categories() {
    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                            General Discussion
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                            Programming
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                            Off Topic
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}