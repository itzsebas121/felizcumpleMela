"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Heart } from "lucide-react"
import "../styles/HeroSection.css"

function HeroSection() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const messageRef = useRef(null)
  const heartRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -80, skewX: 10 },
      { opacity: 1, y: 0, skewX: 0, duration: 1.8, ease: "elastic.out(1, 0.75)" },
    )
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, x: -80, skewX: -10 },
      { opacity: 1, x: 0, skewX: 0, duration: 1.2, delay: 0.5, ease: "power3.out" },
    )
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, scale: 0.7, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, delay: 1, ease: "back.out(1.7)" },
    )
    gsap.fromTo(
      heartRef.current,
      { opacity: 0, rotation: 360, scale: 0 },
      { opacity: 1, rotation: 0, scale: 1, duration: 1.5, delay: 1.5, ease: "power2.out" },
    )
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 ref={subtitleRef} className="hero-subtitle">
          Para mi ojitos bonitos,
        </h2>
        <h1 ref={titleRef} className="hero-title">
          ¡Feliz Cumpleaños #19!
        </h1>
        <p ref={messageRef} className="hero-message">
          Hoy solo quiero que sepas lo especial que eres y lo mucho que te quiero.
          Mereces sentirte muy querida, valorada y feliz, no solo hoy, sino siempre.

          Ojalá este nuevo año te regale momentos bonitos, mucha paz, sonrisas sinceras y todo lo que te haga bien.

          Sabes que siempre voy a estar para apoyarte en lo que necesites, en lo bueno y en lo difícil.
          Te mereces todo lo lindo de la vida.

          Disfruta mucho tu día, te lo mereces de verdad ❤️
        </p>
        <div className="hero-icon-container">
          <Heart ref={heartRef} className="hero-heart-icon" size={64} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
