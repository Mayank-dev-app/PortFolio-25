import tr1 from "../TravelImage/Screenshots/AboutUs.png";
import tr2 from "../TravelImage/Screenshots/Contact.png";
import tr3 from "../TravelImage/Screenshots/Footer.png";
import bkhome from "../BackryImage/BackeryHome.PNG";
import bkfeature from "../BackryImage/BackeryHome2.PNG";
import bkcontact from "../BackryImage/Contact.PNG";
import bkmenu from "../BackryImage/Menu.PNG";

import pf from "../pfAbout.PNG";

export const projects = [
  {
    id: 1,
    title: "Bakery Web App",
    description: "This project is a Bakery Management Web Application built using React.js for the frontend. It allows users to browse bakery items, add them to the cart, and place orders, while the admin can manage products, view orders, and handle inventory.",
    image: [bkhome, bkfeature, bkcontact, bkmenu],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "User authentication & session management",
      "Secure payments via Stripe integration",
      "Admin dashboard for product and order management",
      "Add to Cart functionality"
    ],
    link: "https://backery-web.netlify.app/",
    github: "https://github.com/Mayank-dev-app/BackeryWeb/tree/main",
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    description: "A comprehensive tour booking system for users to discover and book travel packages.",
    image: [tr1, tr2, tr3],
    tech: ["React", "React-Router", "Tailwind CSS"],
    features: [
      "Dashboard for users to track bookings",
      "Rating and review system for tour packages",
      "Interactive map for exploring destinations",
      "Admin panel for package and user management"
    ],
    link: "https://uptours.netlify.app/",
    github: "https://github.com/Mayank-dev-app/Travel-Website-Only-Frontend-",
  },
  {
    id: 4,
    title: "My Old Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and achievements.",
    image: [pf],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design with animations",
      "Projects showcase with filters",
      "Downloadable resume",
      "Contact form with email integration"
    ],
    link: "https://my-ft-portfolio.netlify.app/",
    github: "https://github.com/Mayank-dev-app/PortFolio",
  }
]