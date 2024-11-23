import React, { useState } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";

export default function Events() {
  const initialEvents = [
    { name: "React Workshop", location: "Online", capacity: 100, prerequisites: "Basic JavaScript" },
    { name: "Vue.js Deep Dive", location: "Offline", capacity: 50, prerequisites: "Basic JavaScript" },
    { name: "Node.js Advanced Topics", location: "Hybrid", capacity: 75, prerequisites: "Basic JavaScript and React" },
    { name: "GraphQL Introduction", location: "Online", capacity: 150, prerequisites: "Basic JavaScript" },
    { name: "React Native Mastery", location: "Online", capacity: 50, prerequisites: "Basic JavaScript" },
    { name: "Advanced CSS Techniques", location: "Offline", capacity: 60, prerequisites: "Basic CSS" },
    { name: "Machine Learning with TensorFlow", location: "Online", capacity: 100, prerequisites: "Python basics" },
    { name: "Docker and Kubernetes", location: "Hybrid", capacity: 80, prerequisites: "Basic DevOps" },
    { name: "JavaScript ES6+ Features", location: "Online", capacity: 200, prerequisites: "Basic JavaScript" },
    { name: "SQL for Beginners", location: "Offline", capacity: 50, prerequisites: "Basic SQL" },
    { name: "Web Accessibility Workshop", location: "Online", capacity: 90, prerequisites: "Basic Web Development" },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [searchTerm, setSearchTerm] = useState(""); // Manage search input

  // Handle search input change and filter events accordingly
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter events based on the search term (searching across Name, Location, and Prerequisites)
    const filteredEvents = initialEvents.filter(
      (event) =>
        event.name.toLowerCase().includes(value.toLowerCase()) ||
        event.location.toLowerCase().includes(value.toLowerCase()) ||
        event.prerequisites.toLowerCase().includes(value.toLowerCase())
    );

    setEvents(filteredEvents); // Update state with filtered events
  };

  return (
    <>
      <NavBar />
      <Sidebar
        content={
          <>
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by Name, Location, or Prerequisites"
                className="p-2 border rounded w-full"
                value={searchTerm} // Bind search input value to state
                onChange={handleSearchChange} // Trigger filter on input change
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>

            {/* Display Events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.length > 0 ? (
                events.map((item, index) => (
                  <div key={index} className="card-item p-4 bg-white text-black rounded-lg shadow-sm">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm">Location: {item.location}</p>
                    <p className="text-sm">Capacity: {item.capacity} seats</p>
                    <p className="text-sm">Prerequisites: {item.prerequisites}</p>
                    <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Sign Up</button>
                  </div>
                ))
              ) : (
                <p>No matching events found.</p>
              )}
            </div>
          </>
        }
      />
    </>
  );
}
