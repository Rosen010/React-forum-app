export default function PostItem( {
    _id,
    title,
    content,
}) {
    return (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6" >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2">
                        { title }
                    </h3>
                    <p className="text-gray-300 mb-4">
                         { content }
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
        </div >
    );
}