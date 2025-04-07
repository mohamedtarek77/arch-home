"use client";

// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "./comps/Footer";
import About from "./comps/About";
import Mission from "./comps/Mission";
import Services from "./comps/Services";
import { translations } from "./constents";
import Clients from "./comps/Clients";
import Contact from "./comps/Contact";
import WhatsAppButton from "./comps/WhatsAppButton";
import Header from "./comps/Header";
export default function Home() {
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  // Initialize theme from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      const savedLanguage = localStorage.getItem("language") || "en";
      setTheme(savedTheme);
      setLanguage(savedLanguage);

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      if (savedLanguage === "ar") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Toggle language function
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    if (newLanguage === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-white to-gray-100 text-gray-900"
      }`}
    >

      <Head>
        <title>NextGen | Modern Solutions</title>
        <meta
          name="description"
          content="Arch-home"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WhatsAppButton
        phoneNumber="+971566636021" 
        message="Hello, I’m interested in your services!" 
      
      />

  
<Header heme={theme} language={language} ChangeLanguage={toggleLanguage} ChangeTheme={toggleTheme} />
      <main>
        {/* Hero Section */}


        
{/* 
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-8`}
            >
              {t.hero.subtitle}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder={t.hero.emailPlaceholder}
                className={`px-4 py-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "border border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className={`${
                  theme === "dark"
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white px-6 py-3 rounded-lg transition-colors`}
              >
                {t.hero.cta}
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-80">
              <div
                className={`w-full h-full ${
                  theme === "dark"
                    ? "bg-indigo-900 text-indigo-300"
                    : "bg-indigo-200 text-indigo-600"
                } rounded-xl flex items-center justify-center`}
              >
                <Image src={t.hero.image} alt="Hero Image" width={100} height={100}/>
              </div>
            </div>
          </div>
        </section> */}



        {/* About Section */}

        <About theme={theme} language={language} />

        {/* Vision Section */}

        <Mission theme={theme} language={language} />

        {/* Services Section */}

      <Services theme={theme} language={language} />


        {/* Clients Section */}

        <Clients theme={theme} language={language} />

        {/* Pricing Section */}

  

        <Contact theme={theme} language={language} />
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}

// export default function Home() {
//   const [email, setEmail] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Here you would typically handle the email submission
//     alert(`Thank you for subscribing with: ${email}`)
//     setEmail('')
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
//       <Head>
//         <title>NextGen | Modern Solutions</title>
//         <meta name="description" content="Next-generation solutions for modern businesses" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="container mx-auto px-4 py-6">
//         <nav className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-indigo-600">NextGen</div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
//             <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
//             <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
//             <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
//           </div>
//           <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
//             Get Started
//           </button>
//         </nav>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Elevate Your Business with Next-Gen Solutions
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Unlock the full potential of your business with our cutting-edge platform.
//               Streamline operations, boost productivity, and drive growth.
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Get Early Access
//               </button>
//             </form>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-lg h-80">
//               {/* Replace with your actual hero image */}
//               <div className="w-full h-full bg-indigo-200 rounded-xl flex items-center justify-center">
//                 <span className="text-indigo-600">Hero Image Placeholder</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Our platform is packed with everything you need to succeed in today's competitive landscape.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Cloud Integration",
//                   description: "Seamlessly connect with all major cloud services for maximum flexibility.",
//                   icon: "☁️"
//                 },
//                 {
//                   title: "Advanced Analytics",
//                   description: "Gain valuable insights with our powerful data analytics tools.",
//                   icon: "📊"
//                 },
//                 {
//                   title: "Secure Infrastructure",
//                   description: "Enterprise-grade security to keep your data safe and compliant.",
//                   icon: "🔒"
//                 }
//               ].map((feature, index) => (
//                 <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <div className="text-4xl mb-4">{feature.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Don't just take our word for it. Here's what our customers have to say.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {[
//                 {
//                   quote: "Implementing NextGen has completely transformed our workflow. We've seen a 40% increase in productivity.",
//                   author: "Sarah Johnson",
//                   position: "CTO, TechCorp"
//                 },
//                 {
//                   quote: "The customer support team is incredibly responsive. They helped us customize the platform to our specific needs.",
//                   author: "Mark Williams",
//                   position: "Operations Manager, Innovate Inc."
//                 }
//               ].map((testimonial, index) => (
//                 <div key={index} className="bg-gray-50 p-8 rounded-xl">
//                   <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
//                   <div>
//                     <p className="font-semibold">{testimonial.author}</p>
//                     <p className="text-gray-600">{testimonial.position}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Pricing Section */}
//         <section id="pricing" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Choose the plan that works best for your business needs.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   tier: "Starter",
//                   price: "$49",
//                   description: "Perfect for small businesses and startups.",
//                   features: [
//                     "Up to 5 users",
//                     "Basic analytics",
//                     "24/7 support",
//                     "Cloud storage: 10GB"
//                   ]
//                 },
//                 {
//                   tier: "Professional",
//                   price: "$99",
//                   description: "Ideal for growing businesses.",
//                   features: [
//                     "Up to 20 users",
//                     "Advanced analytics",
//                     "Priority support",
//                     "Cloud storage: 50GB",
//                     "API access"
//                   ],
//                   highlighted: true
//                 },
//                 {
//                   tier: "Enterprise",
//                   price: "$249",
//                   description: "For large organizations with complex needs.",
//                   features: [
//                     "Unlimited users",
//                     "Custom analytics",
//                     "Dedicated support team",
//                     "Cloud storage: 200GB",
//                     "Advanced API access",
//                     "Custom integrations"
//                   ]
//                 }
//               ].map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`bg-white p-8 rounded-xl shadow-sm ${
//                     plan.highlighted ? 'ring-2 ring-indigo-600 shadow-md' : ''
//                   }`}
//                 >
//                   <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
//                   <p className="text-gray-600 mb-4">{plan.description}</p>
//                   <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-600">/month</span></p>

//                   <ul className="mb-8 space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-center">
//                         <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <button
//                     className={`w-full py-3 rounded-lg ${
//                       plan.highlighted
//                         ? 'bg-indigo-600 text-white hover:bg-indigo-700'
//                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                     } transition-colors`}
//                   >
//                     Choose Plan
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-2xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//                 <p className="text-xl text-gray-600">
//                   Have questions? We're here to help.
//                 </p>
//               </div>

//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
//                   <input
//                     type="text"
//                     id="subject"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">NextGen</h3>
//               <p className="text-gray-400">
//                 Empowering businesses with next-generation solutions since 2023.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
//                 <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
//                 <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Legal</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">GitHub</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} NextGen. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
