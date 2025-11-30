import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";
import PostItem from "../postItem/PostItem";
import { Link } from "react-router-dom";

export default function Posts() {
    const urlParams = new URLSearchParams({
        load: 'author=_ownerId:users'
    });

    const { isAuthenticated } = useContext(UserContext);
    const { data: posts } = useRequest(`/data/posts?${urlParams.toString()}`, [])

    return (
        <div className="lg:col-span-3">

            {isAuthenticated && (
                <div className="mb-6">
                    <Link to="/create-post" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium transition-colors">
                        + Create New Post
                    </Link>
                </div>
            )}

            {/* Posts List */}
            <div className="space-y-4">
                {posts.map(post => <PostItem key={post._id} post={post} />)}
            </div>
        </div>
    );
}