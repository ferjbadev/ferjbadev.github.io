import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaProjectDiagram } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenedor para organizar el contenido en columnas para pantallas grandes */}
                <div className="flex lg:flex-row">
                    {/* Primer bloque: información personal y enlaces de contacto */}
                    <div className="lg:w-1/2 lg:pr-6 mb-12 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Hi, I&apos;m Fernando Barrera
                        </h1>

                        <p className="text-lg mb-8 leading-relaxed delay-200">
                            Always in constant learning, my journey is divided between studying programming, creating games with Python, and web development.
                            I am a big fan of anime and reading, which allows me to keep an open and creative mind.
                            I enjoy the perfect combination of the logic of programming and the imagination that storytelling awakens.
                            Ready for new challenges and opportunities in the world of development!
                        </p>

                        <div className="flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FaEnvelope className="mr-2" />
                                Contact Me
                            </Link>

                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <FaProjectDiagram className="mr-2" />
                                View My Projects
                            </Link>
                        </div>
                    </div>

                    {/* Segundo bloque: Imagen de perfil a la derecha */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative sm:w-80 sm:h-80 border border-white overflow-hidden shadow-xl hover:scale-105 transition duration-500 ease-in-out ">
                            <Image
                                src="/foto.jpg"
                                alt="Fernando Barrera"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
