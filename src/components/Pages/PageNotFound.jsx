import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 gap-8 p-10 border border-white/10"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <span className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 font-semibold w-fit mb-4">
            Error 404
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Page Not Found</h1>
          <p className="text-gray-400 mb-6 max-w-md">
            Oops! The page you are looking for doesn’t exist or may have been
            moved. Try returning to the homepage or checking the URL.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg"
            >
              <Home className="w-5 h-5" /> Home
            </Link>
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition">
              <AlertCircle className="w-5 h-5" /> Report Issue
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">Tip: Press ESC to return home</p>
        </div>

        {/* Right Section (Animation) */}
        <div className="relative flex items-center justify-center">
          {/* Floating Blobs */}
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />

          {/* Astronaut / Rocket illustration */}
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/4144/4144407.png"
            alt="Astronaut floating"
            className="relative w-48 h-48 object-contain drop-shadow-2xl"
            animate={{ y: [0, -20, 0], rotate: [0, -2, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
