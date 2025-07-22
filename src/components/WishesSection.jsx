import { Gift, Sparkles, Cake, Star, Heart } from "lucide-react"
import "../styles/WishesSection.css"

function WishesSection() {
  const wishes = [
  {
    icon: <Gift size={36} />,
    title: "Un año increíble",
    text: "Espero que este nuevo año de vida te traiga cosas lindas Melita. Que vivas momentos que te hagan sonreír de verdad y que no te falten razones para sentirte feliz.",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Tus ojitos siempre brillando",
    text: "Deseo que nunca se apague esa chispa que tienes. Que sigas siendo tú, con esa energía que contagia, y que la vida te sorprenda con cosas buenas.",
  },
  {
    icon: <Cake size={36} />,
    title: "Risas y cosas ricas",
    text: "Que no te falten momentos simples pero bonitos, como reírte a carcajadas, comer lo que te gusta, y estar rodeada de la gente que te quiere bien.",
  },
  {
    icon: <Star size={36} />,
    title: "Lo que sueñas",
    text: "Ojalá todo lo que tienes en mente y en el corazón se te dé. Sé que puedes lograr lo que te propongas, solo no dejes de creer en ti.",
  },
  {
    icon: <Heart size={36} />,
    title: "Mucho amor",
    text: "Que siempre tengas amor a tu alrededor, del bueno, del que suma, del que te hace sentir tranquila. Te mereces mucho cariño sincero.",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Buena vibra siempre",
    text: "Te deseo toda la buena vibra del mundo princesita. Que nada ni nadie apague lo linda que eres ni la forma en que haces sentir a los demás.",
  },
];


  return (
    <section className="wishes-section">
      <h2 className="wishes-section-title animate-on-scroll">Se que no es mucho, pero te lo doy con todo mi corazón</h2>
      <p className="wishes-intro animate-on-scroll">
        En un día como hoy, solo quiero desearte lo mejor de corazón. Que la vida te regale cosas bonitas, tranquilidad, alegría y todo lo que realmente mereces. Que sigas rodeada de buena gente, momentos que sumen y razones para sonreír siempre.

        Y como ya te he dicho, voy a estar para apoyarte en todo lo que necesites. Cuenta conmigo siempre, para lo bueno, lo difícil y todo lo que venga.
      </p>
      <div className="wishes-grid">
        {wishes.map((wish, index) => (
          <div key={index} className="wish-card animate-on-scroll">
            <div className="wish-icon">{wish.icon}</div>
            <h3 className="wish-card-title">{wish.title}</h3>
            <p className="wish-card-text">{wish.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WishesSection
