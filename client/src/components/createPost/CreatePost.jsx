import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import useForm from "../../hooks/useForm";

export default function CreatePost() {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createPostHandler = async (data) => {
        try {
            await request('/data/posts', 'POST', data);
            navigate('/');
        } catch (err) {
            alert('Failed to create post: ' + err);
        }
    }

    const { register, formAction, }
        = useForm(createPostHandler, {
            category: '',
            title: '',
            content: '',
        });

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-white mb-2">Create New Post</h1>
                    <p className="text-gray-400">Share your thoughts with the community</p>
                </div>

                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <form className="space-y-6" action={formAction}>
                        {/* Category Selection */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                {...register('category')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your post category"
                            />
                        </div>

                        {/* Post Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                {...register('title')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your post title"
                            />
                        </div>

                        {/* Post Content */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                                Content
                            </label>
                            <textarea
                                id="content"
                                {...register('content')}
                                rows="12"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                                placeholder="Write your post content here..."
                            ></textarea>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                            <Link
                                to="/"
                                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors">
                                Cancel
                            </Link>
                            <div className="flex space-x-3">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition-colors">
                                    Publish Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}