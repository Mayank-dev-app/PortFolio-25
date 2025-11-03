import { Sprout, Rocket, Lightbulb, Target, BookOpen } from "lucide-react";

export default function Story() {
    return (
        <section
            id="story"
            className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <BookOpen className="w-10 h-10 text-yellow-400" />
                    <h2 className="text-4xl font-bold text-yellow-400 font-poppins">
                        My Journey
                    </h2>
                </div>

                {/* Intro */}
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Hi, I’m <span className="text-yellow-400 font-semibold">Mayank Sharma</span>.
                    My journey into web development started with curiosity about how websites
                    actually work. Over time, that curiosity turned into passion, and passion
                    into a mission — to build applications that are both{" "}
                    <span className="text-yellow-300">beautiful and impactful</span>.
                </p>

                {/* Story Timeline */}
                <div className="space-y-8 text-left">
                    {/* Beginning */}
                    <div className="p-6 border-l-4 border-yellow-400 flex items-start gap-4">
                        <Sprout className="text-yellow-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                                The Beginning
                            </h3>
                            <p className="text-gray-400">
                                I wrote my first HTML & CSS code during my{" "}
                                <span className="text-yellow-400">BCA (Bachelor of Computer Applications)</span> studies.
                                Seeing my first webpage come alive gave me the excitement to dive deeper
                                into coding. That was the spark that started my journey into web development.
                            </p>
                        </div>
                    </div>

                    {/* Growth */}
                    <div className="p-6 border-l-4 border-yellow-400 flex items-start gap-4">
                        <Rocket className="text-yellow-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                                Learning & Growth
                            </h3>
                            <p className="text-gray-400">
                                I explored JavaScript, mastered React.js, and started building
                                real-world projects. Each bug and error taught me something new about
                                <span className="text-yellow-400"> problem-solving and persistence</span>.
                            </p>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="p-6 border-l-4 border-yellow-400 flex items-start gap-4">
                        <Lightbulb className="text-yellow-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                                Building Projects
                            </h3>
                            <p className="text-gray-400">
                                From e-commerce apps to booking platforms, I’ve built projects that
                                combine <span className="text-yellow-400">frontend creativity</span> with
                                <span className="text-yellow-400"> backend logic</span>. These projects
                                reflect my growth as a full-stack developer.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="p-6 border-l-4 border-yellow-400 flex items-start gap-4">
                        <Target className="text-yellow-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                                The Mission
                            </h3>
                            <p className="text-gray-400">
                                My goal is to keep learning, keep building, and contribute to
                                <span className="text-yellow-400"> innovative solutions</span> that make
                                life easier and businesses smarter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
