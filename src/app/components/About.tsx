import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaProjectDiagram } from 'react-icons/fa'

const About = () => {
    return (
        // Sección principal del componente
        <section id="about" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
            {/* Contenedor centrado horizontalmente con espaciado en los lados */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenedor para organizar el contenido en columnas para pantallas grandes */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Primer bloque: información personal y enlaces de contacto */}
                    <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                        {/* Título principal */}
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
                            Hi, I&apos;m Fernando Barrera
                        </h1>

                        {/* Párrafo de descripción */}
                        <p className="text-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
                            Always in constant learning, my journey is divided between studying programming, creating games with Python, and web development.
                            I am a big fan of anime and reading, which allows me to keep an open and creative mind.
                            I enjoy the perfect combination of the logic of programming and the imagination that storytelling awakens.
                            Ready for new challenges and opportunities in the world of development!
                        </p>

                        {/* Contenedor para los botones de contacto y proyectos */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                            {/* Botón de Contacto */}
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                {/* Icono de sobre para el botón de contacto */}
                                <FaEnvelope className="mr-2" />
                                Contact Me
                            </Link>

                            {/* Botón de Proyectos */}
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                {/* Icono de diagrama para el botón de proyectos */}
                                <FaProjectDiagram className="mr-2" />
                                View My Projects
                            </Link>
                        </div>
                    </div>

                    {/* Segundo bloque: Imagen de perfil */}
                    <div className="lg:w-1/2 flex justify-center">
                        {/* Contenedor de la imagen con tamaño y sombra */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden shadow-xl animate-fade-in-up delay-400">
                            {/* Componente de imagen */}
                            <Image
                                src="/foto.jpg"
                                alt="Fernando Barrera"
                                width={300} // Ancho de la imagen 
                                height={300} // Alto de la imagen 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
