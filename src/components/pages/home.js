import React, { useState, useEffect } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState(""); // For filtering by category

  const generatePosts = (page, filter) => {
    const allPosts = [
      {
        id: 1,
        title: "New Announcement",
        content: "This is a new announcement about the community.",
        category: "Announcements",
        reactions: { likes: 10, loves: 5, happy: 2 },
        comments: [
          {
            id: 1,
            author: "John Doe",
            text: "Great post!",
            replies: [
              { id: 1, author: "Jane Doe", text: "I agree!" },
              { id: 2, author: "Alice", text: "Absolutely!" },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "News Update",
        content: "Here is a major update about our community events.",
        category: "News",
        reactions: { likes: 20, loves: 10, happy: 4 },
        comments: [
          {
            id: 1,
            author: "Bob",
            text: "Interesting!",
            replies: [
              { id: 1, author: "Charlie", text: "I agree!" },
            ],
          },
        ],
      },
    ];

    if (filter) {
      return allPosts.filter((post) => post.category === filter);
    }

    return allPosts;
  };

  useEffect(() => {
    const newPosts = generatePosts(page, filter);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);

    if (newPosts.length < 5) {
      setHasMore(false);
    }
  }, [page, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
    setPosts([]);
    setHasMore(true);
  };

  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (bottom && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, 
  [hasMore]);

  return (
    <>

<NavBar/>
<Sidebar content={
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4">
        <label htmlFor="filter" className="block text-sm font-medium text-gray-700">
          Filter by Category:
        </label>
        <select
          id="filter"
          name="filter"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Announcements">Announcements</option>
          <option value="News">News</option>
        </select>
      </div>

      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-8 p-6 bg-white shadow-sm rounded-lg">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.content}</p>

            {/* Reaction System */}
            <div className="flex space-x-4 mt-4">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => alert("Liked")}
              >
                👍 {post.reactions.likes}
              </button>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => alert("Loved")}
              >
                ❤️ {post.reactions.loves}
              </button>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => alert("Happy")}
              >
                😊 {post.reactions.happy}
              </button>
            </div>

            {/* Comments */}
            <div className="mt-6">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => alert("Add Comment")}
              >
                Add Comment
              </button>
              <div className="mt-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="border-t pt-4">
                    <p className="text-gray-700">
                      <strong>{comment.author}</strong>: {comment.text}
                    </p>
                    <div className="pl-4 mt-2">
                      {comment.replies.map((reply) => (
                        <p key={reply.id} className="text-gray-600">
                          <strong>{reply.author}</strong>: {reply.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Button */}
            <div className="mt-4">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => alert("Follow Author")}
              >
                Follow Author
              </button>
            </div>
          </div>
        ))}
      </div>

      {!hasMore && <p>No more posts to show</p>}
    </div></> }/>
    </>
  );
};

export default Homepage;
