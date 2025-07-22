import { Heart, Sparkles, Star } from "lucide-react"
import "../styles/MessageSection.css"

function MessageSection() {
  const messages = [
    {
      icon: <Sparkles size={32} />,
      title: "Tu Magia",
      text: "Desde el primer día, tu luz ha iluminado mi mundo de una manera que nunca imaginé. Eres pura magia, y cada momento a tu lado es un regalo.",
    },
    {
      icon: <Heart size={32} />,
      title: "Mi Cariño",
      text: "Quiero que sepas que mi cariño por ti crece cada día. Eres una persona increíble, y te mereces toda la felicidad y el amor que el universo pueda ofrecerte.",
    },
    {
      icon: <Star size={32} />,
      title: "Tu Futuro",
      text: "Deseo que este nuevo año de vida esté lleno de éxitos, alegrías y que todos tus sueños, por grandes que sean, se hagan realidad. Siempre estaré aquí para apoyarte.",
    },
    {
      icon: <Heart size={32} />,
      title: "Mi Promesa",
      text: "Prometo seguir haciéndote sonreír, cuidarte y estar a tu lado en cada paso del camino. Eres muy especial para mí, mi niña de ojos bonitos.",
    },
  ]

  return (
    <section className="message-section">
      <h2 className="message-section-title animate-on-scroll">Palabras del Corazón</h2>
      <div className="messages-grid">
        {messages.map((msg, index) => (
          <div key={index} className="message-card animate-on-scroll">
            <div className="message-icon">{msg.icon}</div>
            <h3 className="message-card-title">{msg.title}</h3>
            <p className="message-card-text">{msg.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MessageSection
