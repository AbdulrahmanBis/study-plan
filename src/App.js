import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './auth/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState } from 'react';
// import { ChevronUpIcon, ClockIcon, AcademicCapIcon, PencilIcon } from '@heroicons/react/solid';

// const initialCourses = [
//   { id: 1, name: 'Introduction to Programming', hours: 3, difficulty: 2, prerequisite: null, level: 1 },
//   { id: 2, name: 'Web Development Fundamentals', hours: 3, difficulty: 2, prerequisite: null, level: 1 },
//   { id: 3, name: 'Data Structures and Algorithms', hours: 4, difficulty: 3, prerequisite: null, level: 2 },
//   { id: 4, name: 'Database Design', hours: 4, difficulty: 3, prerequisite: null, level: 2 },
//   { id: 5, name: 'Machine Learning Basics', hours: 5, difficulty: 4, prerequisite: 'Introduction to Programming', level: 3 },
//   { id: 6, name: 'Operating Systems', hours: 4, difficulty: 3, prerequisite: 'Introduction to Programming', level: 3 },
//   { id: 7, name: 'Artificial Intelligence Concepts', hours: 5, difficulty: 4, prerequisite: 'Machine Learning Basics', level: 3 },
//   { id: 8, name: 'Data Science Essentials', hours: 5, difficulty: 3, prerequisite: 'Data Structures and Algorithms', level: 3 },
//   { id: 9, name: 'Software Engineering Principles', hours: 3, difficulty: 2, prerequisite: null, level: 4 },
//   { id: 10, name: 'Computer Networks', hours: 4, difficulty: 3, prerequisite: 'Introduction to Programming', level: 5 },
//   { id: 11, name: 'Cybersecurity Fundamentals', hours: 3, difficulty: 2, prerequisite: null, level: 5 },
//   { id: 12, name: 'Advanced Web Development', hours: 4, difficulty: 3, prerequisite: 'Web Development Fundamentals', level: 6 },
//   { id: 13, name: 'Parallel Computing', hours: 4, difficulty: 3, prerequisite: 'Operating Systems', level: 6 },
//   { id: 14, name: 'Mobile App Development', hours: 4, difficulty: 3, prerequisite: 'Web Development Fundamentals', level: 7 },
//   { id: 15, name: 'Cloud Computing Basics', hours: 3, difficulty: 2, prerequisite: null, level: 8 }
// ];

// const difficultyColors = {
//   1: 'bg-green-100 text-green-800 border-green-200',
//   2: 'bg-blue-100 text-blue-800 border-blue-200',
//   3: 'bg-yellow-100 text-yellow-800 border-yellow-200',
//   4: 'bg-orange-100 text-orange-800 border-orange-200',
//   5: 'bg-red-100 text-red-800 border-red-200',
// };

// const difficultyWords = ['Trivial', 'Easy', 'Medium', 'Hard', 'Expert'];

// export default function App() {
//   const [courses, setCourses] = useState(initialCourses);
//   const [draggedCourse, setDraggedCourse] = useState(null);

//   const onDragStart = (e, courseId) => {
//     setDraggedCourse(courseId);
//     e.dataTransfer.effectAllowed = 'move';
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   };

//   const onDrop = (e, targetLevel) => {
//     e.preventDefault();
//     const updatedCourses = courses.map(course => 
//       course.id === draggedCourse ? { ...course, level: targetLevel } : course
//     );
//     setCourses(updatedCourses);
//     setDraggedCourse(null);
//   };

//   const handleLevelChange = (courseId, newLevel) => {
//     const updatedCourses = courses.map(course => 
//       course.id === courseId ? { ...course, level: newLevel } : course
//     );
//     setCourses(updatedCourses);
//   };

//   const coursesByLevel = courses.reduce((acc, course) => {
//     if (!acc[course.level]) acc[course.level] = [];
//     acc[course.level].push(course);
//     return acc;
//   }, {});

//   const getTotalHours = (level) => {
//     return coursesByLevel[level]?.reduce((sum, course) => sum + course.hours, 0) || 0;
//   };

//   const getAverageDifficulty = (level) => {
//     const courses = coursesByLevel[level] || [];
//     if (courses.length === 0) return 'N/A';
//     const avgDifficulty = courses.reduce((sum, course) => sum + course.difficulty, 0) / courses.length;
//     return difficultyWords[Math.round(avgDifficulty) - 1];
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Study Plan</h1>
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
//             <div key={level} className="mb-8">
//               <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg shadow-md">
//                 <h2 className="text-xl font-semibold text-white">Level {level}</h2>
//                 <ChevronUpIcon className="w-6 h-6 text-white" />
//               </div>
//               <div
//                 onDragOver={onDragOver}
//                 onDrop={(e) => onDrop(e, level)}
//                 className="flex flex-wrap bg-white p-6 rounded-b-lg shadow-md transition-all duration-200"
//               >
//                 {coursesByLevel[level]?.map((course) => (
//                   <div
//                     key={course.id}
//                     draggable
//                     onDragStart={(e) => onDragStart(e, course.id)}
//                     className={`p-4 m-2 rounded-lg shadow-md flex-grow border-2 transition-all duration-200 ${
//                       difficultyColors[course.difficulty]
//                     } ${draggedCourse === course.id ? 'opacity-50' : ''}`}
//                     style={{ minWidth: '400px', maxWidth: '400px' }}
//                   >
//                     <div className="flex justify-between items-start mb-5">
//                       <h3 className="font-semibold">{course.name}</h3>
//                       <div className="relative group">
//                         <PencilIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
//                           {[1, 2, 3, 4, 5, 6, 7, 8].map((newLevel) => (
//                             <button
//                               key={newLevel}
//                               onClick={() => handleLevelChange(course.id, newLevel)}
//                               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                               Move to Level {newLevel}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-sm flex items-center">
//                       <ClockIcon className="w-4 h-4 mr-1" /> Hours: {course.hours}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
//                 <div className="flex items-center">
//                   <ClockIcon className="w-5 h-5 mr-2 text-blue-500" />
//                   <p className="text-sm font-medium">Total Hours: {getTotalHours(level)}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-500" />
//                   <p className="text-sm font-medium">Average Difficulty: {getAverageDifficulty(level)}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }