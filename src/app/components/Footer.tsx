import React from 'react'
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/', color: 'text-blue-400 hover:text-blue-300 hover:scale-150' },
        { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/', color: 'text-red-500 hover:text-red-400 hover:scale-150' },
        { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/barrerafernando54', color: 'text-blue-600 hover:text-blue-500 hover:scale-150' },
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/fernandobarreraa', color: 'text-blue-700 hover:text-blue-600 hover:scale-150' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ferjbadev', color: 'text-gray-400 hover:text-gray-300 hover:scale-150' },
    ]

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="w-full max-w-3xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${link.color} transition duration-300`}
                                aria-label={link.name}
                            >
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-white">
                        © {currentYear} Fernando Barrera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
