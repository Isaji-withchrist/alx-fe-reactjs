// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username, location = "", minRepos = "", page = 1) => {
  try {
    // Build query
    let query = "";
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // If query is empty, don't fetch
    if (!query.trim()) {
      console.warn("No search query provided");
      return [];
    }

    // GitHub API request
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
    );

    // Return array of users
    return Array.isArray(data.items) ? data.items : [];
  } catch (error) {
    console.error("Error fetching users:", error.response?.data || error.message);
    return [];
  }
};
