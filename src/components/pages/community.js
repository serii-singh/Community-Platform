import React from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import Card from "./card";
// import EventPage from "./events";

export default function CommunityPage(){
    const events = [
        {
          name: "React Workshop",
          location: "Online",
          capacity: 100,
          prerequisites: "Basic JavaScript",
        },
        {
            name: "React Workshop",
            location: "Online",
            capacity: 100,
            prerequisites: "Basic JavaScript",
          },
          {
            name: "React Workshop",
            location: "Online",
            capacity: 100,
            prerequisites: "Basic JavaScript",
          },
        {
          name: "Vue.js Deep Dive",
          location: "Offline",
          capacity: 50,
          prerequisites: "Basic JavaScript",
        },
      ];
    
      // Tutor Chat data
      const chatRoom = [
        {
          topic: "React Basics",
          tutor: "John Doe",
          description: "Discuss the fundamentals of React.js and its ecosystem.",
        },
        {
          topic: "Advanced JavaScript",
          tutor: "Jane Smith",
          description: "A deep dive into JavaScript features and advanced concepts.",
        },
      ];


      const news= [
        {
          topic: "React Basics",
          tutor: "John Doe",
          description: "Discuss the fundamentals of React.js and its ecosystem.",
        },
        {
          topic: "Advanced JavaScript",
          tutor: "Jane Smith",
          description: "A deep dive into JavaScript features and advanced concepts.",
        },
      ];
    


    return(
<>
<NavBar/>
<Sidebar content={
    <>
<div className="header-top-box p-6 mx-2 bg-pink-600 text-white rounded-lg shadow-lg">
    <p>Welcome back</p>
    <span className="text-base">Catch up on latest updates , posts and events !</span>
    </div>
{/* <div className=""></div> */}
{/* <Card heading= {<>Events</>}/> */}
{/* <div className="h-screen overflow-auto">
  <EventPage />
</div> */}
<Card heading={"Upcoming Events"} text={"Click here"} data={events}  link={'/events'}/> 
<Card heading={"Chat Room"} text={"Open the space"} data={chatRoom} link={'/chatroom'}/>
<Card heading={"News"} text={"Open the space"} data={news} link={'/news'}/>
<Card heading={"Teaching Resources"} text={"Open the space"} data={chatRoom} link={'/teaching-resources'}/>
<Card heading={"Getting Started"} text={"Open the space"} data={chatRoom} link={'/getting-started'}/>


{/* <Card heading={"Tutor Chat"}/> */}

   </>
   
}
/>





 </>




    );
}

