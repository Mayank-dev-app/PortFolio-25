import { Code2, Server, Layers } from "lucide-react";
import  image  from "../../../assets/myimage/image.png"

export default function Middle() {
    const services = [
        {
            title: "Frontend Development",
            desc: "Crafting responsive, interactive, and modern UIs using React.js, Tailwind CSS, and JavaScript.",
            icon: <Code2 className="w-10 h-10 text-yellow-400" />,
        },
        {
            title: "Backend Development",
            desc: "Building scalable APIs with Node.js, Express.js and integrating databases like MongoDB & MySQL.",
            icon: <Server className="w-10 h-10 text-yellow-400" />,
        },
        {
            title: "Full-Stack Projects",
            desc: "End-to-end web solutions with authentication, payments, dashboards, and deployment.",
            icon: <Layers className="w-10 h-10 text-yellow-400" />,
        },
    ];

    return (
        <section
            id="whatido"
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 px-6"
        >
            <div className="flex items-center flex-col">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6 font-poppins">
                    What I Do
                </h2>
                <p className="text-gray-300 mb-8">
                    I specialize in building modern, scalable, and user-friendly web
                    applications. From designing beautiful UIs to managing backends and
                    deploying full-stack solutions, I bring ideas to life.
                </p>
            </div>

                <div className="max-w-6xl mx-auto flex flex-row-reverse gap-12 items-center ">
                    {/* Left Side - Illustration / Image */}
                    <div className="md:flex hidden justify-center ">
                        <img
                            src={image} // apna ya illustration image dalna
                            alt="What I Do"
                            className="rounded-2xl shadow-lg border-4 border-yellow-400 w-72 sm:w-80 md:w-96 hover:scale-105 transition-all"
                        />
                    </div>

                    {/* Right Side - Services */}

                    {/* Services List */}
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 border border-yellow-400 rounded-xl hover:bg-yellow-400/10 hover:scale-105 transition-transform"
                            >
                                {service.icon}
                                <div>
                                    <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    );
}
