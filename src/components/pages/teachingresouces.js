
import React from "react";
import NavBar from "../layout/navbar";
import Sidebar from '../layout/sidebar';
import { useState } from "react";

export default function TeachingResouces(){
  const teachingResourcesData = {
    lessonPlans: [
      {
        title: 'Math Lesson Plan for Beginners',
        description: 'A comprehensive plan for introducing basic math concepts.',
        preview: 'Preview URL or content goes here',
        rating: 4.5,
        reviews: ['Great for beginners!', 'Very detailed and helpful.'],
      },
      {
        title: 'Science Activities for Elementary Students',
        description: 'Fun science experiments for younger students.',
        preview: 'Preview URL or content goes here',
        rating: 4.2,
        reviews: ['The kids loved it!', 'Very interactive.'],
      },
    ],
    websites: [
      {
        title: 'Khan Academy',
        description: 'An online resource for learning various subjects.',
        url: 'https://www.khanacademy.org',
        rating: 4.7,
        reviews: ['Excellent resource for self-learners.', 'Good variety of topics.'],
      },
      {
        title: 'BBC Learning',
        description: 'Free resources and lessons for teachers and students.',
        url: 'https://www.bbc.co.uk/learning',
        rating: 4.3,
        reviews: ['High-quality resources.', 'Easy to use.'],
      },
    ],
    coursebooks: [
      {
        title: 'Introduction to Programming with Python',
        description: 'A beginner-friendly coursebook for learning Python.',
        preview: 'Preview URL or content goes here',
        rating: 4.8,
        reviews: ['Great for beginners!', 'Easy to follow.'],
      },
      {
        title: 'Advanced Math for High School Students',
        description: 'A comprehensive guide for high school students.',
        preview: 'Preview URL or content goes here',
        rating: 4.6,
        reviews: ['Challenging but rewarding!', 'Detailed explanations.'],
      },
    ],
  };
  
  
    const [searchTerm, setSearchTerm] = useState('');
    const [bookmarked, setBookmarked] = useState([]);
  
    // Filter resources based on the search term
    const filterResources = (resources) => {
      return resources.filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  
    // Handle bookmark functionality
    const handleBookmark = (item) => {
      setBookmarked((prev) => [...prev, item]);
    };
  
return(
    <>
  <NavBar/>
  <Sidebar content={<>
    <div>
      <h1 className="text-2xl font-bold mb-6">Teaching Resources</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search resources..."
        className="p-2 border rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lesson Plans & Activities */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Lesson Plans & Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterResources(teachingResourcesData.lessonPlans).map((resource, index) => (
            <div key={index} className="card-item p-4 bg-white text-black rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{resource.title}</h3>
              <p className="text-sm">{resource.description}</p>
              <div className="mt-2">
                <button className="text-blue-500" onClick={() => alert(resource.preview)}>
                  Preview
                </button>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">⭐ {resource.rating}</span>
                <span className="ml-2">({resource.reviews.length} reviews)</span>
              </div>
              <button
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                onClick={() => handleBookmark(resource)}
              >
                Bookmark
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Websites for Lesson Preparation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Websites for Lesson Preparation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterResources(teachingResourcesData.websites).map((resource, index) => (
            <div key={index} className="card-item p-4 bg-white text-black rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{resource.title}</h3>
              <p className="text-sm">{resource.description}</p>
              <div className="mt-2">
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Visit Website
                </a>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">⭐ {resource.rating}</span>
                <span className="ml-2">({resource.reviews.length} reviews)</span>
              </div>
              <button
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                onClick={() => handleBookmark(resource)}
              >
                Bookmark
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Coursebooks */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Coursebooks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterResources(teachingResourcesData.coursebooks).map((resource, index) => (
            <div key={index} className="card-item p-4 bg-white text-black rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{resource.title}</h3>
              <p className="text-sm">{resource.description}</p>
              <div className="mt-2">
                <button className="text-blue-500" onClick={() => alert(resource.preview)}>
                  Preview
                </button>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">⭐ {resource.rating}</span>
                <span className="ml-2">({resource.reviews.length} reviews)</span>
              </div>
              <button
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                onClick={() => handleBookmark(resource)}
              >
                Bookmark
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bookmarked Resources */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Bookmarked Resources</h2>
        {bookmarked.length > 0 ? (
          <ul>
            {bookmarked.map((resource, index) => (
              <li key={index} className="mb-2">
                <span>{resource.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No resources bookmarked yet.</p>
        )}
      </section>
    </div>
    
    
    
    </>}/>
    </>

    
);

}