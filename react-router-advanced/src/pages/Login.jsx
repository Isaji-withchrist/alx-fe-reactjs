// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Login Page</h1>
      <p>You must log in to access protected pages.</p>
      <Link to="/" className="text-blue-500 underline">Go Home</Link>
    </div>
  );
}
