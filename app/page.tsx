"use client"

import { Github, Linkedin, Download, Mail, Globe, GraduationCap, Calendar, MapPin, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [activeProject, setActiveProject] = useState("safar")
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Madhumithraa_TS_Resume.pdf"
    link.download = "Madhumithraa_TS_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        .slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .slide-down {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 0.8s ease-out;
        }
        .slide-down.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-out;
        }
        .slide-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .skill-card {
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .skill-icon {
          transition: all 0.3s ease;
        }
        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .education-item {
          transition: all 0.3s ease;
        }
        .education-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .education-item:hover .education-content {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }

        .hero-fade-in {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .hero-fade-in.delay-1 {
          animation-delay: 0.3s;
        }
        .hero-fade-in.delay-2 {
          animation-delay: 0.6s;
        }
        .hero-fade-in.delay-3 {
          animation-delay: 0.9s;
        }
        .hero-fade-in.delay-4 {
          animation-delay: 1.2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          opacity: 0;
          animation: slideInScale 1.2s ease-out 0.3s forwards;
        }

        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .resume-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
        }
        .resume-btn:hover::before {
          transform: translateX(0);
        }
        .resume-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: transform 0.5s ease;
          transform: translateX(-100%);
        }
        .resume-btn:active {
          transform: translateY(0);
        }

        .contact-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }
        .contact-btn:hover::before {
          transform: translateX(0);
        }
        .contact-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: transform 0.5s ease;
          transform: translateX(-100%);
        }
        .contact-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          transition: all 0.3s ease;
        }
        .resume-btn:hover .btn-icon {
          transform: translateY(-1px) rotate(-5deg);
        }
        .contact-btn:hover .btn-icon {
          transform: translateY(-1px) scale(1.1);
        }

        .project-nav-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .project-nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);
        }
        .project-nav-btn.active {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
        }
        .project-nav-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: transform 0.5s ease;
          transform: translateX(-100%);
        }
        .project-nav-btn:hover::before {
          transform: translateX(0);
        }

        .project-content {
          opacity: 0;
          transform: translateY(30px);
          animation: projectFadeIn 0.6s ease-out forwards;
        }

        @keyframes projectFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-title {
          opacity: 0;
          transform: translateX(-30px);
          animation: titleSlideIn 0.8s ease-out 0.2s forwards;
        }

        @keyframes titleSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .project-description {
          opacity: 0;
          transform: translateY(20px);
          animation: descriptionFadeIn 0.8s ease-out 0.4s forwards;
        }

        @keyframes descriptionFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-btn {
          opacity: 0;
          transform: translateY(20px);
          animation: buttonFadeIn 0.8s ease-out 0.6s forwards;
          transition: all 0.3s ease;
        }
        .project-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.4);
        }

        @keyframes buttonFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-row {
          opacity: 0;
          transform: translateY(20px);
          animation: navRowFadeIn 0.6s ease-out forwards;
        }
        .nav-row.delay-1 {
          animation-delay: 0.2s;
        }
        .nav-row.delay-2 {
          animation-delay: 0.4s;
        }

        @keyframes navRowFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-cyan-500 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                EDUCATION
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Workspace with laptops and plants"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-90 hero-fade-in">Hi This is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6 hero-title">
              MADHUMITHRAA T S
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto hero-fade-in delay-2">
              A mind that never stops exploring and building
            </p>
            <div className="flex justify-center space-x-6 hero-fade-in delay-3">
              <Link
                href="https://github.com/MadhumithraaTS"
                target="_blank"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group social-icon"
              >
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/madhumithraa-ts-979156350"
                target="_blank"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group social-icon"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gray-50 slide-right ${visibleSections.has("about") ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/madhu-profile.jpg"
                alt="Madhumithraa T S"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hi Guys!</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This is Madhumithraa T S, an organized and hard-working computer science student aspiring to secure an
                internship or full-time position in software engineering. I aim to apply my academic knowledge,
                technical expertise, and problem-solving skills to contribute meaningfully to organizational success
                while nurturing my personal and professional growth. I have a strong interest in full-stack development
                and am eager to deepen my understanding of both front-end and back-end technologies. Additionally, I'm
                passionate about exploring the field of Artificial Intelligence and its real-world applications, and I'm
                actively looking for opportunities to integrate AI into modern software solutions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-cyan-500 mr-3" />
                  <span className="font-medium text-gray-700 w-20">Name:</span>
                  <span className="text-gray-600">Madhumithraa T S</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-cyan-500 mr-3" />
                  <span className="font-medium text-gray-700 w-20">Age:</span>
                  <span className="text-gray-600">19 Years</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-cyan-500 mr-3" />
                  <span className="font-medium text-gray-700 w-20">Country:</span>
                  <span className="text-gray-600">India</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-500 mr-3" />
                  <span className="font-medium text-gray-700 w-20">Location:</span>
                  <span className="text-gray-600">Tamil Nadu, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-500 mr-3" />
                  <span className="font-medium text-gray-700 w-20">E-mail:</span>
                  <span className="text-gray-600">madhumithraa.ts@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={downloadResume} className="bg-cyan-500 hover:bg-cyan-600 text-white resume-btn">
                  <Download className="w-4 h-4 mr-2 btn-icon" />
                  DOWNLOAD RESUME
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => scrollToSection("contact")}
                  className="bg-red-500 hover:bg-red-600 contact-btn"
                >
                  <Mail className="w-4 h-4 mr-2 btn-icon" />
                  CONTACT ME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-32 pb-52 bg-gray-100 slide-up ${visibleSections.has("skills") ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Front-End Development */}
            <Card className="text-center p-8 bg-white skill-card">
              <CardContent className="pt-6">
                {/* Front-End Development - Desktop Computer Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 rounded-lg flex items-center justify-center skill-icon">
                  <div className="relative">
                    {/* Monitor Screen */}
                    <div className="w-12 h-8 bg-cyan-500 rounded-sm border-2 border-cyan-600">
                      <div className="w-8 h-5 bg-cyan-400 rounded-sm m-1"></div>
                    </div>
                    {/* Monitor Stand */}
                    <div className="w-2 h-3 bg-gray-600 mx-auto"></div>
                    {/* Monitor Base */}
                    <div className="w-8 h-1 bg-gray-600 rounded mx-auto"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-500">Front-End Development</h3>
                <p className="text-gray-600">HTML, CSS</p>
              </CardContent>
            </Card>

            {/* Programming */}
            <Card className="text-center p-8 bg-white skill-card">
              <CardContent className="pt-6">
                {/* Programming - Laptop Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 rounded-lg flex items-center justify-center skill-icon">
                  <div className="relative">
                    {/* Laptop Screen */}
                    <div className="w-10 h-6 bg-cyan-500 rounded-t-sm border-2 border-cyan-600">
                      <div className="w-6 h-3 bg-cyan-400 rounded-sm m-1"></div>
                    </div>
                    {/* Laptop Base/Keyboard */}
                    <div className="w-12 h-2 bg-cyan-600 rounded-b-sm -mt-1">
                      <div className="flex justify-center space-x-1 pt-0.5">
                        <div className="w-1 h-0.5 bg-cyan-400 rounded"></div>
                        <div className="w-1 h-0.5 bg-cyan-400 rounded"></div>
                        <div className="w-1 h-0.5 bg-cyan-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-500">Programming</h3>
                <p className="text-gray-600">Python, Java, C, C++, Haskell</p>
              </CardContent>
            </Card>

            {/* Data Structures */}
            <Card className="text-center p-8 bg-white skill-card">
              <CardContent className="pt-6">
                {/* Data Structures - Brain/AI Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-pink-100 rounded-lg flex items-center justify-center skill-icon">
                  <div className="relative">
                    {/* Brain shape */}
                    <div className="w-12 h-10 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-full relative">
                      {/* Brain texture/pattern */}
                      <div className="absolute inset-1">
                        <div className="w-2 h-2 bg-pink-300 rounded-full absolute top-1 left-2 opacity-80"></div>
                        <div className="w-1.5 h-1.5 bg-pink-300 rounded-full absolute top-3 right-2 opacity-70"></div>
                        <div className="w-1 h-1 bg-pink-300 rounded-full absolute bottom-2 left-3 opacity-60"></div>
                        <div className="w-1 h-1 bg-pink-300 rounded-full absolute bottom-1 right-3 opacity-50"></div>
                        {/* Brain divisions */}
                        <div className="w-0.5 h-6 bg-pink-600 absolute top-1 left-1/2 transform -translate-x-1/2 rounded opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-500">Data Structures</h3>
                <p className="text-gray-600">Algorithm analysis and optimization</p>
              </CardContent>
            </Card>

            {/* Office Tools */}
            <Card className="text-center p-8 bg-white skill-card">
              <CardContent className="pt-6">
                {/* Office Tools - Document Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-lg flex items-center justify-center skill-icon">
                  <div className="relative">
                    {/* Document */}
                    <div className="w-8 h-11 bg-white border-2 border-gray-300 rounded-sm relative shadow-sm">
                      {/* Document corner fold */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-gray-200 border-l border-b border-gray-300"></div>
                      {/* Document lines */}
                      <div className="p-1 space-y-1 mt-2">
                        <div className="w-4 h-0.5 bg-purple-500 rounded"></div>
                        <div className="w-5 h-0.5 bg-gray-300 rounded"></div>
                        <div className="w-4 h-0.5 bg-gray-300 rounded"></div>
                        <div className="w-3 h-0.5 bg-gray-300 rounded"></div>
                        <div className="w-5 h-0.5 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-500">Office Tools</h3>
                <p className="text-gray-600">MS PowerPoint, MS Word, MS Excel</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-16 bg-gray-50 slide-right ${visibleSections.has("education") ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">EDUCATION</h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-200"></div>

              {/* B.Tech CSE */}
              <div className="relative flex items-start mb-6 education-item">
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute left-5 top-2 z-10"></div>
                <div className="ml-16 w-full max-w-5xl">
                  <div className="bg-white p-3 rounded-lg shadow-sm education-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      B.Tech CSE in Amrita Vishwa Vidyapeetham
                    </h3>
                    <p className="text-cyan-500 font-medium mb-1">2023 - 2027</p>
                    <p className="text-gray-600 mb-1">
                      Amrita School of Computing, Amrita Vishwa Vidyapeetham, Coimbatore. (Current)
                    </p>
                    <p className="text-gray-700 font-medium">CGPA: 8.52/10 (upto 4th Semester)</p>
                  </div>
                </div>
              </div>

              {/* AISSCE (12th) */}
              <div className="relative flex items-start mb-6 education-item">
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute left-5 top-2 z-10"></div>
                <div className="ml-16 w-full max-w-5xl">
                  <div className="bg-white p-3 rounded-lg shadow-sm education-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">AISSCE (12th)</h3>
                    <p className="text-cyan-500 font-medium mb-1">2022 - 2023</p>
                    <p className="text-gray-600 mb-1">
                      Stream/Subjects: Mathematics, Physics, Chemistry, Biology, English
                    </p>
                    <p className="text-gray-600 mb-1">Sri Chaitanya School, Coimbatore.</p>
                    <p className="text-gray-700 font-medium">Percentage: 90.2%</p>
                  </div>
                </div>
              </div>

              {/* AISSE (10th) */}
              <div className="relative flex items-start education-item">
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute left-5 top-2 z-10"></div>
                <div className="ml-16 w-full max-w-5xl">
                  <div className="bg-white p-3 rounded-lg shadow-sm education-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">AISSE (10th)</h3>
                    <p className="text-cyan-500 font-medium mb-1">2020 - 2021</p>
                    <p className="text-gray-600 mb-1">VAV International School, Udumalpet.</p>
                    <p className="text-gray-700 font-medium">Percentage: 94.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 bg-white slide-down ${visibleSections.has("projects") ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Remarkable Works</h2>
          </div>

          {/* Project Navigation Buttons */}
          <div className="mb-12">
            {/* First row - 3 projects */}
            <div className="flex flex-wrap justify-center gap-4 mb-4 nav-row delay-1">
              <button
                onClick={() => setActiveProject("safar")}
                className={`px-6 py-3 rounded-md font-medium project-nav-btn ${
                  activeProject === "safar"
                    ? "bg-cyan-500 text-white active"
                    : "bg-white text-cyan-500 border-2 border-cyan-500"
                }`}
              >
                SAFAR
              </button>
              <button
                onClick={() => setActiveProject("temperature")}
                className={`px-6 py-3 rounded-md font-medium project-nav-btn ${
                  activeProject === "temperature"
                    ? "bg-cyan-500 text-white active"
                    : "bg-white text-cyan-500 border-2 border-cyan-500"
                }`}
              >
                TEMPERATURE BASED FAN SPEED CONTROL
              </button>
              <button
                onClick={() => setActiveProject("phishing")}
                className={`px-6 py-3 rounded-md font-medium project-nav-btn ${
                  activeProject === "phishing"
                    ? "bg-cyan-500 text-white active"
                    : "bg-white text-cyan-500 border-2 border-cyan-500"
                }`}
              >
                PHISHING DETECTION SYSTEM
              </button>
            </div>

            {/* Second row - 2 projects */}
            <div className="flex flex-wrap justify-center gap-4 nav-row delay-2">
              <button
                onClick={() => setActiveProject("strings")}
                className={`px-6 py-3 rounded-md font-medium project-nav-btn ${
                  activeProject === "strings"
                    ? "bg-cyan-500 text-white active"
                    : "bg-white text-cyan-500 border-2 border-cyan-500"
                }`}
              >
                STRING ALGORITHMS
              </button>
              <button
                onClick={() => setActiveProject("irrigation")}
                className={`px-6 py-3 rounded-md font-medium project-nav-btn ${
                  activeProject === "irrigation"
                    ? "bg-cyan-500 text-white active"
                    : "bg-white text-cyan-500 border-2 border-cyan-500"
                }`}
              >
                SMART IRRIGATION SYSTEM
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto text-center">
            {activeProject === "safar" && (
              <div className="project-content">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 project-title">Safar</h3>
                <div className="text-left mb-6 project-description">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <span className="font-semibold">About:</span> Safar is a web-based travel platform designed to
                    inspire domestic exploration across India. It showcases curated journeys that highlight the
                    country's rich cultural heritage, diverse landscapes, and hidden gems. At Safar, our mission is to
                    inspire wanderlust and create meaningful connections through personalized travel experiences. We
                    believe in responsible tourism, sustainability, and fostering cultural appreciation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The platform features a clean, user-friendly interface built using modern web technologies. It
                    includes interactive destination pages, travel blogs, and visual storytelling to engage and inform
                    travelers. Safar serves as a digital guide that encourages conscious exploration and a deeper
                    connection to the soul of India.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Technology:</span> HTML, CSS, JavaScript
                  </p>
                </div>
                <Button
                  onClick={() => window.open("https://github.com/MadhumithraaTS/SAFAR", "_blank")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white project-btn"
                >
                  <Github className="w-4 h-4 mr-2" />
                  VIEW ON GITHUB
                </Button>
              </div>
            )}

            {activeProject === "temperature" && (
              <div className="project-content">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 project-title">
                  Temperature Based Fan Speed Control
                </h3>
                <div className="text-left mb-6 project-description">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <span className="font-semibold">About:</span> This Arduino-based temperature monitoring system reads
                    analog data from a temperature sensor and adjusts fan speed based on predefined thresholds. It
                    dynamically allocates memory to store multiple temperature readings and utilizes bitfields within a
                    union to control fan speed efficiently (low, medium, high). Real-time temperature data and fan
                    status are logged over the serial monitor for transparency and debugging. The system manages
                    hardware through digital pins and ensures clean memory deallocation after execution. Designed for
                    simplicity and modularity, it showcases core concepts like dynamic memory, bit-level control, and
                    sensor integration in embedded systems.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Technology:</span> C, Arduino
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.tinkercad.com/things/d3bbPWpjiOZ-c-project/editel?returnTo=%2Fthings%2Fd3bbPWpjiOZ-c-project&sharecode=c77IDsXkQksHDMziHAXBXfEhAORlcfaumIfNgQXOh1E",
                      "_blank",
                    )
                  }
                  className="bg-cyan-500 hover:bg-cyan-600 text-white project-btn"
                >
                  VIEW SIMULATION
                </Button>
              </div>
            )}

            {activeProject === "phishing" && (
              <div className="project-content">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 project-title">Phishing Detection System</h3>
                <div className="text-left mb-6 project-description">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <span className="font-semibold">About:</span> The Phishing Detection System is an advanced
                    Python-based application designed to detect, categorize, and prioritize phishing threats using
                    intelligent data structures and threat analysis techniques. It utilizes a Trie for efficient keyword
                    and email matching, and a Graph to model and analyze relationships between URLs for suspicious
                    patterns. Detected threats are categorized into types like phishing email, spear phishing, vishing,
                    and malware attachments using heuristic rules. A priority queue (max-heap) is used to assign
                    severity levels and retrieve threats in descending order of urgency. The system automatically
                    generates threat reports with categorized entries and real-time logging of suspicious links. With
                    modular design and clear time complexity analysis, it demonstrates core concepts in security, data
                    structures, and incident response automation.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Technology:</span> Python
                  </p>
                </div>
                <Button
                  onClick={() => window.open("https://github.com/MadhumithraaTS/Phishing-Detection-System", "_blank")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white project-btn"
                >
                  <Github className="w-4 h-4 mr-2" />
                  VIEW ON GITHUB
                </Button>
              </div>
            )}

            {activeProject === "strings" && (
              <div className="project-content">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 project-title">String Algorithms</h3>
                <div className="text-left mb-6 project-description">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <span className="font-semibold">About:</span> This case study explores and compares multiple string
                    matching algorithms—Brute Force, Rabin-Karp, KMP, Boyer-Moore, Suffix Trie, and Aho-Corasick—by
                    analyzing their logic, time complexity, and efficiency in various scenarios. Each algorithm is
                    evaluated based on its ability to optimize pattern searches using techniques like hashing,
                    preprocessing arrays, suffix structures, and finite automata. Real-world applications such as
                    plagiarism detection, DNA sequence analysis, text search in editors, and spam filtering demonstrate
                    their practical relevance. A Java-based implementation of the Boyer-Moore algorithm is included to
                    showcase fast pattern detection in text. The study also highlights trade-offs between simplicity and
                    speed, and emphasizes how the right choice of algorithm can significantly enhance performance in
                    large-scale string processing tasks.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Technology:</span> Java
                  </p>
                </div>
              </div>
            )}

            {activeProject === "irrigation" && (
              <div className="project-content">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 project-title">Smart Irrigation System</h3>
                <div className="text-left mb-6 project-description">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <span className="font-semibold">About:</span> This project showcases a smart irrigation system using
                    logic gates to automate watering based on environmental conditions—soil moisture, sunlight,
                    rainfall, and wind speed. A breadboard setup with switches and LEDs simulates sensor inputs and
                    displays irrigation status, using a logical expression to determine activation. The system promotes
                    efficient water use in gardens by activating irrigation only when needed. Though built without
                    sensors or microcontrollers, it demonstrates how hardware logic can support sustainability. Future
                    enhancements include sensor integration, mobile control, and weather-based automation.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Technology:</span> Tinkercad
                  </p>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.tinkercad.com/things/0n1kzzsZVKt-ece-home-assingment/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=0n1fCdc8Mp98lGFxtwZu-Zhi5zQQZCo64nm1aHncOMA",
                      "_blank",
                    )
                  }
                  className="bg-cyan-500 hover:bg-cyan-600 text-white project-btn"
                >
                  VIEW SIMULATION
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-50 slide-up ${visibleSections.has("contact") ? "visible" : ""}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600">Reach out for collaborations, queries, or just a quick chat.</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's the subject?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
