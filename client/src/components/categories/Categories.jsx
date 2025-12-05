import { Link, useSearchParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

export default function Categories() {
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const { data: posts } = useRequest('/data/posts', []);

    const categories = [...new Set(
        posts
            .map(post => post.category)
            .filter(category => category && category.trim() !== '')
    )].sort();

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className={`block px-3 py-2 rounded-md transition-colors ${!selectedCategory
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            All Categories
                        </Link>
                    </li>

                    {categories.map(category => (
                        <li key={category}>
                            <Link
                                to={`/?category=${encodeURIComponent(category)}`}
                                className={`block px-3 py-2 rounded-md transition-colors ${selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}

                    {categories.length === 0 && (
                        <li className="text-gray-500 text-sm px-3 py-2">
                            No categories yet
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}