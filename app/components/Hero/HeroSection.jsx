"use client"

import React from "react";
import { motion } from "framer-motion";

import {
    SiBilibili, SiYoutube,
    SiGithub, SiGmail
} from 'react-icons/si'
import {
    Java,
    Golang,
    Python,
    Docker,
    Gradle,
    K8S,
    Kafka,
    Maven,
    MySQL,
    Postgre,
    Prometheus,
    SpringBoot
} from "../icons/backend-icons"
import {
    HTML5,
    JS,
    TS,
    NodeJS,
    NPM,
    Vue,
    ReactIcon
} from "../icons/font-icons"
import {
    JetBrains,
    VsCode,
    Idea,
    GoLand,
    PyCharm,
    Clion
} from "../icons/tools"
import GithubHeatmap from '../githubheatmap/GithubHeatmap'

const HeroSection = () => {
    return (
        <section  className="w-screen flex flex-col md:flex-row justify-between p-10 max-w-6xl mx-auto space-y-10 md:space-y-0">
            {/* Left Content */}
            <motion.div
                className="max-w-lg space-y-4 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold flex justify-center md:justify-start items-center gap-2">
                    Hi! <span className="text-4xl">🖖</span>
                </h1>

                <p className="text-lg text-gray-600">
                    I'm a Java Developer<br />
                    Passionate about building scalable and efficient backend systems. Constantly learning and improving my skills.
                </p>
                <h2 className="text-5xl font-extrabold leading-tight">
                    <GithubHeatmap />
                </h2>
                <p className="italic text-gray-700">"Code with clarity, scale with confidence."</p>
                {/* Social Icons */}
                <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                    <a href="https://github.com/Kurok1" target="_blank" className="block font-semibold">
                        <SiGithub />
                    </a>
                    <a href="mailto:khanc.dev@gmail.com" target="_blank" className="block font-semibold">
                        <SiGmail />
                    </a>
                    <a href="https://bilibili.com" target="_blank" className="block font-semibold">
                        <SiBilibili />
                    </a>
                    <a href="https://www.youtube.com/channel/UCLwOOZE54csus9lrAMloIMQ" target="_blank" className="block font-semibold">
                        <SiYoutube />
                    </a>

                </div>
                {/* Tech Stack Icons */}
                <p className="text-gray-500">Tech Stacks : </p>
                <div className="grid grid-cols-4 md:grid-cols-12  gap-2 text-2xl justify-center md:justify-start">
                    <span><Java /></span>
                    <span><Golang /></span>
                    <span><Python /></span>
                    <span><SpringBoot /></span>
                    <span><Kafka /></span>
                    <span><MySQL /></span>
                    <span><Postgre /></span>
                    <span><Prometheus /></span>
                    <span><K8S /></span>
                    <span><Docker /></span>
                    <span><Maven /></span>
                    <span><Gradle /></span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-12  gap-2 text-2xl justify-center md:justify-start">
                    <span><HTML5 /></span>
                    <span><JS /></span>
                    <span><TS /></span>
                    <span><NPM /></span>
                    <span><NodeJS /></span>
                    <span><Vue /></span>
                    <span><ReactIcon /></span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-12  gap-2 text-2xl justify-center md:justify-start">
                    <span><JetBrains /></span>
                    <span><VsCode /></span>
                    <span><Idea /></span>
                    <span><GoLand /></span>
                    <span><Clion /></span>
                    <span><PyCharm /></span>
                </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
                className="relative w-100 h-120 hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full" style={{ borderRadius: '50% / 40%' }}></div>
                <img
                    src="/images/me.webp"
                    alt="Profile"
                    className="relative z-10 w-full h-full object-cover"
                    style={{ borderRadius: '60% / 50%' }}
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;