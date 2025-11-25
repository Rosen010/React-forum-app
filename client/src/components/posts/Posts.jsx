export default function Posts() {
    return (
        <div className="lg:col-span-3">
            {/* Create Post Button */}
            <div className="mb-6">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium transition-colors">
                    + Create New Post
                </button>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {/* Sample Post */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Welcome to our forum!
                            </h3>
                            <p className="text-gray-300 mb-4">
                                This is a sample post to show how the forum layout looks.
                                You can replace this with real data from your backend.
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>By: John Doe</span>
                                <span>•</span>
                                <span>2 hours ago</span>
                                <span>•</span>
                                <span>5 replies</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">JD</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Another Sample Post */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-medium text-white mb-2">
                                How to get started with React?
                            </h3>
                            <p className="text-gray-300 mb-4">
                                I'm new to React and looking for some guidance on best practices...
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>By: Jane Smith</span>
                                <span>•</span>
                                <span>1 day ago</span>
                                <span>•</span>
                                <span>12 replies</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">JS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}