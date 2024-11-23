import React, { useState, useEffect } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import { getUserFromToken } from "../../utils/authUtils"; // Import the utility for getting user data from localStorage

export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", // Editable field
        email: "", // Non-editable field
        bio: "", // Editable field
        profilePicture: null, // Editable field
        role: "", // Role Badge
    });

    useEffect(() => {
        // Check if user data exists in localStorage and update the profile state
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setProfile({
                username: user.username,
                email: user.email,
                bio: user.bio,
                profilePicture: user.profilePicture || null,
                role: user.role,
            });
        }
    }, []);

    // Handle input changes for editable fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Handle file upload for profile picture
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile((prevProfile) => ({
                ...prevProfile,
                profilePicture: URL.createObjectURL(file),
            }));
        }
    };

    const handleSaveChanges = () => {
        // Logic to save changes can go here (for example, an API call)
        // For now, we're just updating localStorage with the new profile information
        localStorage.setItem('user', JSON.stringify(profile));
        console.log('Profile updated:', profile);
    };

    return (
        <>
            <NavBar />
            <Sidebar
                content={
                    <div className="p-8 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">Profile Settings</h2>

                        <div className="flex items-center space-x-6">
                            <div className="flex-shrink-0">
                                <label htmlFor="profile-picture" className="cursor-pointer">
                                    {profile.profilePicture ? (
                                        <img
                                            src={profile.profilePicture}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                            No Image
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="profile-picture"
                                    name="profilePicture"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>

                            <div className="space-y-4">
                                {/* Non-editable Username */}
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="username" className="font-medium text-gray-600">
                                        Username:
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={profile.username}
                                        readOnly // Make the field non-editable
                                        className="p-2 border rounded-md w-64 bg-gray-100"
                                    />
                                </div>

                                {/* Non-editable Email */}
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="email" className="font-medium text-gray-600">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={profile.email}
                                        readOnly // Make the field non-editable
                                        className="p-2 border rounded-md w-64 bg-gray-100"
                                    />
                                </div>

                                {/* Editable Bio */}
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="bio" className="font-medium text-gray-600">
                                        Bio:
                                    </label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={profile.bio}
                                        onChange={handleChange}
                                        className="p-2 border rounded-md w-64 h-32"
                                    />
                                </div>

                                {/* Display Badge for Role */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl font-medium text-gray-600">Role:</span>
                                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                                        {profile.role}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleSaveChanges}
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                    </div>
                }
            />
        </>
    );
}
