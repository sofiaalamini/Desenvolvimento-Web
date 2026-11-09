interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  testimony: string;
  rating: number;
}

export default function TestimonialCard({ image, name, role, testimony, rating }: TestimonialCardProps) {
  return (
    <article className="carousel-card">
      <img src={image} alt={`Foto de ${name}`} />
      <p className="testimony">{testimony}</p>
      <span className="rating" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} aria-hidden="true" className={i < rating ? "filled" : ""}>★</span>
        ))}
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </article>
  );
}
