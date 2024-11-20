import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaProjectDiagram } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenedor para organizar el contenido en columnas para pantallas grandes */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Primer bloque: información personal y enlaces de contacto */}
                    <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 ml-20">
                            Hi, I&apos;m Fernando Barrera
                        </h1>

                        <p className="text-base sm:text-lg mb-2 leading-relaxed ml-20">
                            Always in constant learning, I am passionate about developing modern web applications using technologies like Next.js, databases (Firebase, PostgreSQL, MongoDB), and Tailwind CSS to create functional and visually appealing interfaces. My goal is to deliver digital experiences that are fast, responsive, and visually impactful.
                            I am a big fan of anime and reading, which inspires me to keep an open and creative mind. I enjoy combining the logic of programming with the imagination that storytelling awakens, creating innovative solutions that make a difference.
                            I am ready to take on new challenges in the world of development, collaborating with dynamic teams and contributing my expertise in modern tools to create impactful and effective projects
                        </p>

                        {/* Botones */}
                        <div className="sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start ml-44">
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
                        <div className="relative rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-white overflow-hidden shadow-xl hover:scale-105 transition duration-500 ease-in-out">
                            <Image
                                src="/foto.png"
                                alt="Fernando Barrera"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
