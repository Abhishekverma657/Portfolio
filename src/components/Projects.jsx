import React, { useEffect, useRef } from "react";

const Projects = () => {
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        videoRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            videoRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const projects = [
        {
            name: "Imagify -AI Image Generator",
            description:
                "Imagify is a text-to-image generation platform built using  React.js, Node.js, Express.js and  MongoDB integrated with the  ClipDrop API to convert user prompts into stunning images. The application features Razorpay integration for secure credit purchases, enabling users to access premium functionality. With its seamless design and efficient processing, Imagify transforms creative prompts into visually compelling results in real time ",
            video: "/imagify recording.mp4",
            Link: 'https://ai-image-generater-aoxo.onrender.com/'
        },
        {
            name: "Job Portal- Role-Based Job Portal for Students and Recruiters",
            description:
                "Job Portal  is a dynamic job portal tailored for students and recruiters. Students can filter and apply for jobs based on their preferences, while recruiters manage job postings, monitor applications, and update applicant statuses (e.g., selected/rejected) via an admin panel. Built with React.js, Node.js, Express.js, MongoDB and enhanced with  Framer Motion for smooth animations",
            video: "/job portal recording.mp4",
            Link: "https://jobportal-98ze.onrender.com/"
        },
        {
            name: "BlogX - AI-Powered Blogging Platform for Desktop",
            description:
                "A full-stack blogging platform built with  React.js, Node.js, Express.js and  MongoDB, featuring secure JWT-based authentication and password encryption. Users can create and manage posts, follow/unfollow others, and mention users in posts. Integrated Gemini AI API  enables automatic post generation with AI assistance. The platform supports real-time interactions, optimized data handling, and a seamless user experience.",
            video: "/BlogX recording.mp4",
            Link: "https://blogx-1ltm.onrender.com/"
        },
    ];

    return (
        <section className="bg-transparent p-6 md:p-12">
            <h1 className="text-3xl font-bold text-center mb-12 text-gray-400">
                Projects
            </h1>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-5xl mx-auto"
                    >
                        {/* Left Side: Project Info */}
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-gray-300 mb-4">
                                {index + 1}. {project.name}
                            </h2>
                            <p className="text-gray-600">{project.description}</p>
                            <a
                                href={project.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-orange-300 text-white font-medium px-6 py-1 rounded-full shadow-lg  mt-4 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* Right Side: Project Video */}
                        <div className="md:w-1/2 relative">
                            <video
                                ref={videoRefs[index]}
                                src={project.video}
                                className="rounded-lg shadow-md w-full h-auto max-h-[500px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                                loop
                                muted
                                playsInline
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-200 rounded-lg mix-blend-multiply"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
