import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="w-full max-w-3xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-center">
                {/* Seprador */}
                <div className="mt-4 pt-4 border-t border-white">
                    <p className="text-white">
                        © {currentYear} Fernando Barrera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
