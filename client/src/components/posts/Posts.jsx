import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";
import PostItem from "../postItem/PostItem";

export default function Posts() {
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');
    
    const urlParams = new URLSearchParams({
        load: 'author=_ownerId:users'
    });

    const { isAuthenticated } = useContext(UserContext);
    const { data: posts } = useRequest(`/data/posts?${urlParams.toString()}`, []);
    
    // Filter posts by category if one is selected
    const filteredPosts = selectedCategory 
        ? posts.filter(post => post.category === selectedCategory)
        : posts;

    return (
        <div className="lg:col-span-3">
            {selectedCategory && (
                <div className="mb-4 flex items-center justify-between bg-gray-800 rounded-lg border border-gray-700 px-4 py-3">
                    <div>
                        <span className="text-gray-400">Showing posts in </span>
                        <span className="text-blue-400 font-semibold">{selectedCategory}</span>
                    </div>
                    <Link 
                        to="/" 
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                        Clear filter
                    </Link>
                </div>
            )}

            {isAuthenticated && (
                <div className="mb-6">
                    <Link to="/create-post" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium transition-colors">
                        + Create New Post
                    </Link>
                </div>
            )}

            {filteredPosts.length === 0 ? (
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 text-center">
                    <p className="text-gray-400">
                        {selectedCategory 
                            ? `No posts found in "${selectedCategory}" category`
                            : 'No posts available'
                        }
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredPosts.map(post => <PostItem key={post._id} post={post} />)}
                </div>
            )}
        </div>
    );
}