import { FaBrain, FaCode, FaLanguage, FaCheckCircle } from 'react-icons/fa'

export default function Skills() {
    const skills = [
        {
            category: "Soft Skills",
            icon: FaBrain,
            items: [
                "Effective communication",
                "Teamwork",
                "Adaptability",
                "Critical thinking",
                "Time mMnagement"
            ]
        },
        {
            category: "Technical Skills",
            icon: FaCode,
            items: [
                "JavaScript/TypeScript",
                "React/Next.js",
                "Node.js",
                "Databases (MongoDB/ProstgreSQL)",
                "Tailwind CSS/Daisy UI",
                "Git/GitHub"
            ]
        },
        {
            category: "Languages",
            icon: FaLanguage,
            items: [
                { language: "Spanish - Native" },
                { language: "English - Intermediate (B1)" },
            ]
        }
    ]

    return (
        <section id="skills" className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-800 py-5 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-2">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillSet, index) => (
                        <div key={index} className="bg-gray-800 border border-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="flex items-center mb-2">
                                <skillSet.icon className="text-3xl text-white mr-2" />
                                <h3 className="text-2xl font-semibold text-white">{skillSet.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {skillSet.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center text-white">
                                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                        {typeof item === 'string' ? (
                                            <span>{item}</span>
                                        ) : (
                                            <div>
                                                <span className="font-medium">{item.language}</span>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}