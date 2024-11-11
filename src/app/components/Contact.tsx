"use client"

import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)) // Simula una llamada a la API
            setSubmitMessage('Thank you for your message. I will get back to you soon!')
            setFormData({ name: '', email: '', message: '' })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitMessage('Oops! There was an error sending your message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 py-5 px-4 sm:px-8 lg:px-16 xl:px-32">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Información de contacto con iconos */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold">Location</h3>
                                    <p className="text-gray-300">Maracaibo, Venezuela</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-green-500 text-2xl mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <a href="mailto:barrerafernando54@gmail.com" className="text-gray-300 hover:text-green-500 transition duration-300">barrerafernando54@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-green-500 text-2xl mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold">Phone</h3>
                                    <p className="text-gray-300">+58 - 412 - 4389712</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Formulario de contacto */}
                    <div className="lg:w-1/2 border border-white">
                        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-white px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-white text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 border border-white text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            {/* Botón de envío */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-green-500 border border-white text-white font-bold py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {/* Mensaje de confirmación o error */}
                            {submitMessage && (
                                <p className={`mt-4 text-center ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
