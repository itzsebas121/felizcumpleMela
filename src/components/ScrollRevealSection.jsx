"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/ScrollRevealSection.css"

gsap.registerPlugin(ScrollTrigger)

function ScrollRevealSection() {
  const textRefs = useRef([])
  const containerRef = useRef(null)

  const revealTexts = [
    "Y tambien quiero preguntarte si...",
    "Si...",
    "Si......???",
    "Si...",
    "Si......???",
  ]

  useEffect(() => {
    // Clean up any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach((st) => st.kill())

    revealTexts.forEach((text, index) => {
      const textElement = textRefs.current[index]
      if (textElement) {
        // Animation for fading in
        gsap.fromTo(
          textElement,
          { opacity: 0, y: 100, filter: "blur(10px)" }, // Start further down and more blurred
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textElement,
              start: "top 95%", // Start appearing very late, when the text is almost at the bottom of the screen
              end: "center 60%", // Fully visible when the text is slightly above the center
              scrub: true,
              // markers: true, // Uncomment for debugging
            },
          },
        )

        // Animation for fading out
        gsap.to(textElement, {
          opacity: 0,
          y: -100, // Move further up as it fades out
          filter: "blur(10px)", // Blur as it fades out
          duration: 1,
          ease: "power3.in",
          scrollTrigger: {
            trigger: textElement,
            start: "top 20%", // Start fading out when the TOP of the element reaches 20% from the top of the viewport
            end: "top -50%", // Fully faded out when the TOP of the element is 50% above the viewport
            scrub: true,
            // markers: true, // Uncomment for debugging
          },
        })
      }
    })

    // Clean up ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section className="scroll-reveal-section" ref={containerRef}>
      <div className="scroll-reveal-content">
        {revealTexts.map((text, index) => (
          <p key={index} ref={(el) => (textRefs.current[index] = el)} className="reveal-text">
            {text}
          </p>
        ))}
        {/* Only show scroll indicator if there are texts to scroll through */}
        {revealTexts.length > 0 && (
          <div className="scroll-indicator animate-on-scroll">
            <span>Sigue bajando jaja</span>
            <div className="arrow-down"></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ScrollRevealSection
