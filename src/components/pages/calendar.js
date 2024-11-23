import React, { useState } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to get the current month and year
    const getMonthName = (month) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return months[month];
    };

    // Function to generate the days in the month
    const generateDays = () => {
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        
        let days = [];
        // Empty divs for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div className="bg-transparent" key={`empty-${i}`}></div>);
        }
        
        // Actual days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2 hover:bg-gray-200 cursor-pointer" key={day}>
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <>
            <NavBar />
            <Sidebar content={<>

            <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="text-2xl font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                        &#8249;
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-700">
                        {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
                    </h2>
                    <button
                        className="text-2xl font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                        &#8250;
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                    {/* Days of the week header */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                        <div key={index} className="text-sm font-medium text-gray-600">
                            {day}
                        </div>
                    ))}

                    {/* Calendar Days */}
                    {generateDays()}
                </div>
            </div> </>} />
        </>
    );
}
