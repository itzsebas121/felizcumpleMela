"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "../styles/HeartBackground.css"

function HeartBackground() {
  const heartsRef = useRef([])

  useEffect(() => {
    // Initial animation for hearts to float in
    gsap.fromTo(
      heartsRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 0.1, // Even less opaque initially for darker theme
        scale: 1,
        duration: 2.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.5,
      },
    )

    // Continuous floating animation for each heart
    heartsRef.current.forEach((heart) => {
      gsap.to(heart, {
        y: "random(-50, 50)", // More pronounced float
        x: "random(-50, 50)", // More pronounced float
        rotation: "random(-30, 30)", // More rotation
        scale: "random(0.6, 1.4)", // More varied size change
        opacity: "random(0.08, 0.25)", // More varied opacity change
        duration: "random(10, 20)", // Longer duration for slower, more ethereal movement
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    })
  }, [])

  const hearts = Array.from({ length: 60 }).map((_, i) => (
    // Increased number of hearts for density
    <div
      key={i}
      className="heart-background-item"
      style={{
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 10}s`, // Stagger initial animation
        transform: `scale(${Math.random() * 0.8 + 0.2})`, // Random initial size (more varied)
      }}
      ref={(el) => (heartsRef.current[i] = el)}
    ></div>
  ))

  return <div className="heart-background">{hearts}</div>
}

export default HeartBackground
