import { Heart } from "lucide-react"
import "../styles/PhotoGallery.css"

function PhotoGallery() {
  const photos = [
    {
      src: "/1.jpg",
      alt: "Jaja sales muy bien",
      description: `Esa sonrisa que ilumina todo.
      No hay nada más lindo que verte así, tranquila, feliz.
      Tu forma de sonreír tiene algo especial… transmite paz, alegría y esa energía bonita que siempre dejas donde vas.
      Ojalá nunca pierdas esa luz que llevas dentro ✨
      `,
    },
    {
      src: "/2.jpeg",
      alt: "Jajaja que random",
      description: `Esta foto es súper random jaja, pero tus ojitos tienen algo que te hacen ver increíble. Tienen una mirada tranquila y sincera que siempre me gusta.

Aunque la foto sea casual y sin poses, tu mirada transmite algo auténtico. No necesitas sonreír mucho, tus ojos hablan por ti y le dan todo el encanto.

Ojalá sigas siendo siempre esa niña de ojos bonitos que tanto me gusta.`,
    },
    {
      src: "/3.jpeg",
      alt: "Legos chuecos",
      description: `Esta foto es de esa tarde que pasamos armando legos. Tu estabas súper concentrada armando tu muñequito, pero yo te fui quitando piezas, y al final nos quedaron los dos legos medios chuecos porque a los dos nos faltaron piezas JAJAJA, que caso, pero estos momentos son los que terminan siendo los mejores recuerdos.
                  Me encantó cómo nos reímos sin preocuparnos por hacerlo perfecto, solo disfrutando el momento juntos y la tontera que hicimos. A veces no importa que salga bien, sino que lo que hagas tenga ese sabor de diversión y compañía.
                  Una de las mejores tardes que hemos tenido para recordar y que me hizo querer seguir creando más momentos así contigo.`,
    },
    {
      src: "/4.jpeg",
      alt: "Foto randoooom",
      description: `Esta foto es solo de tu carita, media random, pero me encanta esa cara que haces jaja. Es una mirada tan unica que no se puede dejar de ver, y por eso me gusta tanto.

Es un momento simple que muestra cómo eres de verdad. A veces las mejores fotos son las que salen sin querer.`,
    },
    {
      src: "/8.jpg",
      alt: "Persona con flores",
      description: `Esta foto del atardecer la tomaste tú y, como siempre, te quedo linda. Ese día la pasamos súper chévere, tranquilos, riéndonos, y tú comiéndote 2 bolones jajajaja. No sé, fue de esos momentos simples pero que se quedan.

Cada vez que veo esta foto me acuerdo de lo bien que se sintió todo… como que todo estaba en su lugar. Y la verdad, ojalá vengan más atardeceres así contigo, con esa misma calma, risas y buena compañía.`,
    },
    {
      src: "/5.jpeg",
      alt: "Noche de Hamburguesitas",
      description:
        `Es del dia que fuimos por hamburguesas y terminamos comiendo en tu casa. Fue algo simple, pero de esos ratos que me gusta muchisimo compartir contigo.

No tengo mucho que ofrecer, pero todo lo que te doy es de corazón. Y esos momentos así, tranquilos, conversando, riéndonos y comiendo rico, para mí valen un montón.

Ojalá vengan muchos más así.`,
    },
    {
      src: "/6.jpeg",
      alt: "Fotitooooooo",
      description:
        `Ese día no hicimos gran cosa, solo pasamos durmiendo como vagos como casi siempre :v 😴. Pero igual, fue bonito. A veces no hace falta hacer mucho para que el rato sea bueno.

Solo estar contigo ya hace que todo se sienta más tranqui.`,
    },
    {
      src: "/7.jpeg",
      alt: "Foto random",
      description: `Y esta es otra foto random jajaja, pero me gusta mucho porque te muestras tal como eres. Eso es lo que más me encanta, que seas tú misma conmigo.
      Quiero que te sientas feliz a mi lado, que sepas que siempre voy a estar para apoyarte en todo, en lo bueno y en lo difícil. Voy a hacer lo posible por verte bien, por hacerte sonreír, y por crecer juntos, paso a paso.`,
    },
  ]

  return (
    <section className="photo-gallery">
      <h2 className="gallery-title animate-on-scroll">Cada momento junto a ti es muy especial</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className={`gallery-item animate-on-scroll ${index % 2 === 0 ? "even" : "odd"}`}>
            <div className="gallery-image-wrapper">
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="gallery-image" />
              <Heart className="gallery-heart-overlay" size={32} />
            </div>
            <div className="gallery-description-wrapper">
              <p className="gallery-description">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhotoGallery
