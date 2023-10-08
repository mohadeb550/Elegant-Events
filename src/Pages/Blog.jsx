import React from 'react';

const BlogPage = () => {
    return (
        <div className="bg-gray-100">
            {/* Navigation Bar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl text-white font-semibold">My Blog</h1>
                </div>
            </nav>

            {/* Blog Content */}
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Blog Post 1 */}
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h2 className="text-xl font-semibold">Blog Post 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>

                            {/* Blog Post 2 */}
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h2 className="text-xl font-semibold">Blog Post 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold">Categories</h2>
                            <ul className="mt-2">
                                <li><a href="#" className="text-blue-500 hover:underline">Category 1</a></li>
                                <li><a href="#" className="text-blue-500 hover:underline">Category 2</a></li>
                                <li><a href="#" className="text-blue-500 hover:underline">Category 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    &copy; 2023 My Blog. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;
