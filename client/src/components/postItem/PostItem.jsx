export default function PostItem({ post }) {
    const {
        title,
        content,
        _createdOn,
        author,
    } = post;

    return (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6" >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                        {content}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>By: {author.email}</span>
                        <span>•</span>
                        <span>{new Date(_createdOn).toLocaleString()}</span>
                    </div>
                </div>
                <div className="ml-4">
                    {author.profilePicture ? (
                        <div className="ml-4">
                            <img
                                src={author.profilePicture}
                                alt={author.email}
                                className="w-12 h-12 rounded-full object-cover border border-gray-600"
                            />
                        </div>
                    ) : (
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">
                                {author.email
                                    .split(' ')
                                    .map(n => n[0])
                                    .join('')
                                    .toUpperCase()}</span>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}