// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,          // ✅ gives us a manual refetch function
    isFetching,       // ✅ tells us if a background refetch is happening
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // ✅ cache fresh for 5 mins
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Posts</h2>

      {/* ✅ Manual Refetch Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-4">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition"
          >
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
