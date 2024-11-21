import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await fetch('https://api.github.com/users/AmanSuryavanshi-1');
            const userJson = await userResponse.json();
            setUserData(userJson);
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto my-20 bg-white border-2 border-bg rounded-xl">
            <div className="mx-12 overflow-hidden">
                <div className="md:flex">
                    <div className="flex items-center justify-center px-10 py-8 md:flex-shrink-0 ">
                        <a href="https://github.com/AmanSuryavanshi-1" className="relative group">
                            <img
                                src={userData?.avatar_url}
                                loading='lazy'
                                alt="Avatar"
                                className="w-48 h-48 transition-all duration-300 border-4 rounded-full shadow-bg border-bgVariant group-hover:border-primary"
                            />
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-full opacity-0 bg-bgVariant bg-opacity-70 group-hover:opacity-100">
                                <FaGithub className="text-2xl text-primary-yellow" />
                            </div>
                        </a>
                    </div>
                    <div className="p-6 md:p-8 lg:p-8">
                        <div className="text-sm font-semibold tracking-wide uppercase text-bgVariant">GitHub Profile</div>
                        <h2 className="mt-2 font-serif text-3xl font-bold leading-8 tracking-tight text-bg">
                            Aman Suryavanshi
                        </h2>
                        <p className="mt-2 text-md text-bgVariant">
                            <span>{userData?.public_repos}</span> Repos | 
                            <span className="ml-2">{userData?.followers}</span> Followers
                        </p>
                        <p className="pl-1 mt-2 font-sans leading-7 text-md text-textColor">
                            {userData?.bio}
                        </p>
                        <div className="mt-3">
                           <a 
                                href="https://github.com/AmanSuryavanshi-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 border-2 rounded-full shadow-lg text-bg border-bg bg-primary hover:bg-primaryVariant hover:text-bg hover:scale-105 focus:outline-none">
                                Github Profile
                                <FaGithub className="ml-2 text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GithubProfile;