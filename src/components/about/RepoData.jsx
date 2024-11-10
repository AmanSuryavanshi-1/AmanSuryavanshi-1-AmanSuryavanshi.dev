// import React, { useEffect, useState } from 'react';
// import { FaCalendarAlt, FaCodeBranch, FaGithub, FaStar, FaCode } from 'react-icons/fa';
// import Skills from './Skills'
// const RepoData = () => {
//   const [repoData, setRepoData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.github.com/repos/AmanSuryavanshi-1/TextWise-TextUtilityAPP');
//         const data = await response.json();
//         setRepoData(data);
//       } catch (error) {
//         console.error('Error fetching repo data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!repoData) {
//     return (
//       <div className="p-8 mt-8 text-center rounded-lg bg-primaryVariant shadow-custom">
//         <p className="text-lg font-semibold text-bg">Loading repository data...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//          <div className="my-20">
//             <Skills />
//         </div>
        
//         <div className="p-8 mt-20 bg-white border-2 rounded-xl border-bg">
//           <h2 className="mb-6 font-serif text-3xl font-bold text-center text-bg">
//             Featured Repository: TextWise
//           </h2>
//           {repoData ? (
//             <div className="flex flex-col items-center space-y-4">
//               <p className="text-lg text-center text-textColor">{repoData.description}</p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <div className="flex items-center">
//                   <FaCode className="mr-2 text-primary" />
//                   <span>Language: {repoData.language}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaStar className="mr-2 text-primary" />
//                   <span>Stars: {repoData.stargazers_count}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCodeBranch className="mr-2 text-primary" />
//                   <span>Forks: {repoData.forks_count}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="mr-2 text-primary" />
//                   <span>Last Updated: {new Date(repoData.updated_at).toLocaleDateString()}</span>
//                 </div>
//               </div>
//               <a
//                 href={repoData.html_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 mt-4 font-semibold text-white transition-all duration-300 rounded-full bg-bg hover:bg-primary"
//               >
//                 <FaGithub className="mr-2" />
//                 View Repository
//               </a>
//             </div>
//           ) : (
//             <p className="text-center">Loading repository data...</p>
//           )}
//         </div>
//     </>
//   );
// };

// export default RepoData;


