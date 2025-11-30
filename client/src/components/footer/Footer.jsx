export default function Footer() {
    return (
        <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} ForumApp. All rights reserved.
                </p>
            </div>
        </footer>
    );
}