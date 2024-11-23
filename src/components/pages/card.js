
import React from "react";
import { Link } from "react-router-dom";


export default function Card({heading,data,text,link}){
    // const events = [
    //     {
    //       name: "React Workshop",
    //       description: "A deep dive into React.js",
    //       location: "Online",
    //       capacity: 100,
    //       prerequisites: "Basic JavaScript",
    //     },
    //     // More events...
    //     {name: "React Workshop",
    //     description: "A deep dive into React.js",
    //     location: "Online",
    //     capacity: 100,
    //     prerequisites: "Basic JavaScript",
    //   },
    //   {name: "React Workshop",
    //     description: "A deep dive into React.js",
    //     location: "Online",
    //     capacity: 100,
    //     prerequisites: "Basic JavaScript",
    //   },
    //   {
    //     name: "React Workshop",
    //     description: "A deep dive into React.js",
    //     location: "Online",
    //     capacity: 100,
    //     prerequisites: "Basic JavaScript",
    //   },
      
     
    //   ];

    return(
       
            <>
              <p className="p-4 my-3 flex justify-between gap-8 flex-1 text-base">{heading}
              <Link to={link}>
              {<button className="text-pink-300">{text}</button>} </Link></p>
              <div className="events-chatroom-dynamic p-4 my-2 mx-2 overflow-y-auto bg-gray-300 text-white rounded-lg shadow-lg">
                <div className="card-box my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* {
                    // Map through the dynamic event data
                    events.map((event, index) => (
                      <div
                        key={index}
                        className="card-box p-4  bg-white text-black gap-4 rounded-lg shadow-xs flex-1 min-w-[180px] max-w-[250px]"
                      >
                        <div className="event-content">
                          <p className="text-xs text-left">Event</p>
                          <div className="text-center mb-2">
                            <img src={event.imageUrl} alt={event.name} className="w-full h-auto rounded-md" />
                          </div>
                          <p className="text-xl font-semibold">{event.name}</p>
                          <p className="text-xs">{event.location}</p>
                          <p className="text-xs">{event.capacity} seats</p>
                          <p className="text-xs">Prerequisites: {event.prerequisites}</p>
                          <button className="bg-black text-white rounded-lg shadow-sm py-2 px-4 mt-4">
                            Sign-up
                          </button>
                        </div>
                      </div>
                    ))
                  } */}

{data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="card-item p-4  bg-white text-black mb-4 rounded-lg shadow-sm">
              {
              heading === 'Upcoming Events' ? (
                <>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm">Location: {item.location}</p>
                  <p className="text-sm">Capacity: {item.capacity} seats</p>
                  <p className="text-sm">Prerequisites: {item.prerequisites}</p>
                  <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Sign Up</button>
                </>
              ) : heading === 'Chat Room' ? (
                <div>
                  <p className="text-lg font-semibold">{item.topic}</p>
                  <p className="text-sm">Tutor: {item.tutor}</p>
                  <p className="text-sm">{item.description}</p>
                  <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Join Chat</button>
                </div>
              ) : heading === 'News' ? (
                <div>
                <p className="text-lg font-semibold">{item.topic}</p>
                <p className="text-sm">Tutor: {item.tutor}</p>
                <p className="text-sm">{item.description}</p>
                <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Join News</button>
              </div>
              )
              : heading === 'Teaching Resources' ?(
                <div>
                  <p className="text-lg font-semibold">{item.topic}</p>
                  <p className="text-sm">Tutor: {item.tutor}</p>
                  <p className="text-sm">{item.description}</p>
                  <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Join Chat</button>
                </div>
              ) : heading ==='Getting Started' ?(
                <div>
                  <p className="text-lg font-semibold">{item.topic}</p>
                  <p className="text-sm">Tutor: {item.tutor}</p>
                  <p className="text-sm">{item.description}</p>
                  <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">Join Chat</button>
                </div>
              ) :null
              
              }
            </div>
          ))
        ) : (
          <p>No items to display</p> // Fallback message if the array is empty
        )}
                  
                </div>
              </div>
            </>
          );
        }