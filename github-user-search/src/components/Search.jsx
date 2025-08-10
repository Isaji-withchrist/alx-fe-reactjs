import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search= () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit =async (e) =>{
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
          } catch (err) {
            setError("Looks like we cant find the user");
          } finally {
            setLoading(false);
          }
        };
    return(
        <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
            <form onSubmit={handleSubmit} className="flex gap-2 md-4">
                <input
                type='text'
                placeholder='Enter GitHub username'
                value={username}
                onChange={(e) =>
                setUsername(e.target.value)}
                className="flex-1 border px-2 py-1 rounded"
                required/>
                <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover: bg-blue-700">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {userData &&(
                <div className="text-center">
                    <img
                    src={userData.avatar_url}
                    alt={userData.login}
                    className='w-24 h-24 rounded-full mx-auto mb-2'/>
                    <h2 className="text-lg font-semibold">{userData.name || userData.login}</h2>
                    <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline">View Profile</a>
            </div>)}
        </div>
    );
};
export default Search;