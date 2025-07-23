"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { HeartCrack, HeartHandshake } from "lucide-react"
import "../styles/ProposalSection.css"

function ProposalSection() {
  const [showThanks, setShowThanks] = useState(false)
  const [trollMessage, setTrollMessage] = useState(null) // State for troll message
  const noButtonRef = useRef(null)
  const yesButtonRef = useRef(null)
  const containerRef = useRef(null) // Reference to the proposal-container
  const buttonsWrapperRef = useRef(null) // Reference to the buttons wrapper

  const handleNoInteraction = () => {
    setTrollMessage("Uy no programe esto :v, intenta de nuevo más tarde :3")
    setTimeout(() => {
      setTrollMessage(null)
    }, 3000) // Message disappears after 3 seconds
  }

  const handleYesClick = () => {
    setShowThanks(true)
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        gsap.fromTo(
          ".thanks-message",
          { opacity: 0, scale: 0.8, filter: "blur(10px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "back.out(1.7)" },
        )
      },
    })
  }

  useEffect(() => {
    // Initial animation for the question and buttons
    gsap.fromTo(
      ".proposal-question",
      { opacity: 0, y: -50, skewX: 10 },
      { opacity: 1, y: 0, skewX: 0, duration: 1.2, delay: 0.5, ease: "power3.out" },
    )
    gsap.fromTo(
      ".proposal-buttons button",
      { opacity: 0, scale: 0.5, filter: "blur(5px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, delay: 1, stagger: 0.2, ease: "back.out(1.7)" },
    )
  }, [])

  return (
    <section className="proposal-section">
      {!showThanks ? (
        <div className="proposal-container" ref={containerRef}>
          <h2 className="proposal-question">¿Puedo ser tu novio?</h2>
          <div className="proposal-buttons" ref={buttonsWrapperRef}>
            <button ref={yesButtonRef} className="proposal-button yes-button" onClick={handleYesClick}>
              <HeartHandshake size={28} /> SÍ
            </button>
            <button
              ref={noButtonRef}
              className="proposal-button no-button"
              onMouseEnter={handleNoInteraction} // Mantener para el mensaje al pasar el ratón
              onClick={handleNoInteraction} // Mantener para el mensaje al hacer clic (útil en móvil)
            >
              <HeartCrack size={28} /> NO
            </button>
          </div>
          {trollMessage && <p className="troll-message">{trollMessage}</p>} {/* Display troll message */}
        </div>
      ) : (
        <div className="thanks-message">
          <h2 className="thanks-title">¡Gracias!</h2>
          <p className="thanks-text">
            Tiamoooooo, sabes que siempre voy a estar para ti y que juntos podemos con todo. Te quiero mucho.
          </p>
          <HeartHandshake className="thanks-icon" size={80} />
        </div>
      )}
    </section>
  )
}

export default ProposalSection
