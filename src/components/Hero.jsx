import React from 'react'


export default function Hero() {

    return(
        <div>
            <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to My QA Portfolio</h1>
                    <p className="text-xl mb-8">Showcasing my skills, projects, and experience in Quality Assurance.</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Explore My Work
                    </button>
                </div>
            </section>
        </div>
    )
}
