"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaSpinner, FaExclamationTriangle } from "react-icons/fa"

// Definición de la interfaz del repositorio
interface Repo {
    id: number // ID único del repositorio
    name: string // Nombre del repositorio
    description: string | null // Descripción del repositorio, puede ser null
    language: string | null // Lenguaje principal del repositorio, puede ser null
    html_url: string // URL del repositorio en GitHub
    stargazers_count: number // Número de estrellas del repositorio
}

// Componente principal que muestra los repositorios de GitHub
export default function Projects() {
    // Estado que guarda los repositorios
    const [repos, setRepos] = useState<Repo[]>([])
    // Estado para indicar si se están cargando los repositorios
    const [isLoading, setIsLoading] = useState(true)
    // Estado para manejar errores de carga de repositorios
    const [error, setError] = useState<string | null>(null)

    // Nombre de usuario de GitHub 
    const githubUsername = "ferjbadev"

    // Hook useEffect para obtener los repositorios al montar el componente
    useEffect(() => {
        // Función asincrónica para buscar los repositorios desde la API de GitHub
        const fetchRepos = async () => {
            try {
                // Petición a la API de GitHub 
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories') // Error si la respuesta no es exitosa
                }
                const data = await response.json() // Conversión de la respuesta en JSON
                setRepos(data) // Guardado de los datos de los repositorios en el estado
                setIsLoading(false) // Cambia el estado de carga a falso
            } catch (error) {
                console.error("Error fetching repos:", error)
                // Guardado del mensaje de error en el estado y fin de la carga
                setError('Failed to load repositories. Please try again later.')
                setIsLoading(false)
            }
        }

        fetchRepos() // Llamado a la función de carga de repositorios
    }, [])

    // Renderizado condicional si los repositorios están cargando
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900">
                {/* Icono de carga */}
                <FaSpinner className="animate-spin text-4xl text-blue-500" />
            </div>
        )
    }

    // Renderizado condicional en caso de error
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
                {/* Icono de advertencia y mensaje de error */}
                <FaExclamationTriangle className="text-4xl text-yellow-500 mb-4" />
                <p>{error}</p>
            </div>
        )
    }

    // Renderizado de la lista de proyectos 
    return (
        <section id="projects" className="bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                {/* Título y subtítulo de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">My GitHub Projects</h2>
                    <p className="text-xl text-gray-400">Check out some of my recent work</p>
                </div>
                {/* Grid de repositorios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Mapeo de los repositorios para crear un enlace de cada uno */}
                    {repos.map((repo) => (
                        <a
                            href={repo.html_url} // Enlace al repositorio en GitHub
                            key={repo.id}
                            className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
                                {/* Descripción del repositorio, se muestra texto alternativo si no hay descripción */}
                                <p className="text-gray-400 mb-4 h-20 overflow-hidden">
                                    {repo.description || "No description available"}
                                </p>
                                {/* Lenguaje y número de estrellas */}
                                <div className="flex justify-between items-center">
                                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                                        {repo.language || "N/A"}
                                    </span>
                                    <div className="flex items-center text-gray-400">
                                        <FaGithub className="mr-2" />
                                        <span>{repo.stargazers_count} stars</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
