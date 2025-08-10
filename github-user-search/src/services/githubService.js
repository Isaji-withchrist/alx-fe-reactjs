// src/services/githubService.js

import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search for GitHub users
export const searchUsers = async (username, location, minRepos) => {
  try {
    // Build query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query }
    });

    return response.data.items; // API returns { total_count, incomplete_results, items }
  } catch (error) {
    throw new Error("Unable to fetch users");
  }
};

// Get full user details (optional, if needed for profile view)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch user data");
  }
};
export default fetchUserData;