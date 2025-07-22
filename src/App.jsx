"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "./components/HeroSection"
import PhotoGallery from "./components/PhotoGallery"
import WishesSection from "./components/WishesSection"
import ScrollRevealSection from "./components/ScrollRevealSection"
import ProposalSection from "./components/ProposalSection"
import HeartBackground from "./components/HeartBackground"
import "./styles/global.css"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    // General animation for elements to appear on scroll
    gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Animation for background hearts based on scroll
    gsap.to(".heart-background-item", {
      scale: 1.3,
      opacity: 0.5,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: appRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="app-container" ref={appRef}>
      <HeartBackground />
      <HeroSection />
      <PhotoGallery />
      <WishesSection />
      <ScrollRevealSection />
      <ProposalSection />
      {/* Audio para música de fondo - sin controles visibles */}
      <audio
        src="/audio/background-music.mp3"
        autoPlay
        loop
        aria-label="Música de fondo para cumpleaños"
        className="sr-only" // Añadido para asegurar que esté oculto y sea accesible para lectores de pantalla
      />
    </div>
  )
}

export default App
