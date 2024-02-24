import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <img src="/assets/self.png"  style={{ borderRadius: "50%", width: "300px", height: "300px" }}></img>
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1
            md:mb-3 font-bold">Joseph</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineering Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I currently study Computer Science at the University of Texas at Austin. I aspire to become a Software Engineer and have recently taken my first step into this path by getting an internship with Cisco. As a hobby, I play saxophone and piano where I mainly perform jazz charts and classical excerpts.</p>
        </div>
    )
}

export default Intro;