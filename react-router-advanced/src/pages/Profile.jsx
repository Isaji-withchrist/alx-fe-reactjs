// src/pages/Profile.jsx
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Profile Page</h1>

      <nav className="flex gap-4 mt-2">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <div className="mt-4">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
}
