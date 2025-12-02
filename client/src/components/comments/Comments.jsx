import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import CommentItem from "./CommentItem";

export default function Comments({ postId }) {
    const { request } = useRequest();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchComments = async () => {
        try {
            setLoading(true);
            const whereClause = `postId="${postId}"`;
            
            const urlParams = new URLSearchParams({
                where: whereClause,
                load: 'author=_ownerId:users'
            });

            const data = await request(`/jsonstore/comments?${urlParams.toString()}`, 'GET');
            console.log(data);
            
            const commentsArray = Object.values(data);
            
            setComments(commentsArray);
        } catch (err) {
            console.error('Failed to fetch comments:', err);
            setComments([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (postId) {
            fetchComments();
        }
    }, [postId]);

    const handleDeleteComment = async (commentId) => {
        try {
            await request(`/jsonstore/comments/${commentId}`, 'DELETE');
            // Remove comment from state
            setComments(prevComments => 
                prevComments.filter(comment => comment._id !== commentId)
            );
        } catch (err) {
            alert('Failed to delete comment: ' + err.message);
        }
    };

    if (loading) {
        return (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Comments</h3>
                <p className="text-gray-400 text-center">Loading comments...</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
                Comments ({comments.length})
            </h3>

            {comments.length > 0 ? (
                <div className="space-y-4">
                    {comments.map(comment => (
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            onDelete={handleDeleteComment}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-center py-4">
                    No comments yet. Be the first to comment!
                </p>
            )}
        </div>
    );
}