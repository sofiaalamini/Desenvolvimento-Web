import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  image: string;
  name: string;
  role: string;
  testimony: string;
  rating: number;
}

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // anda um card para o lado (direction: 1 = próximo, -1 = anterior)
  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement;
    const step = card.offsetWidth + 24; // largura do card + espaço entre eles
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  // passa sozinho a cada 4 segundos, a não ser que o mouse/dedo esteja em cima
  useEffect(() => {
    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track || paused.current) return;
      const chegouNoFim = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
      if (chegouNoFim) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        move(1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="carousel"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onTouchEnd={() => (paused.current = false)}
    >
      <button className="carousel-arrow" onClick={() => move(-1)} aria-label="Depoimento anterior">‹</button>

      <div className="carousel-track" ref={trackRef}>
        {items.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>

      <button className="carousel-arrow" onClick={() => move(1)} aria-label="Próximo depoimento">›</button>
    </div>
  );
}
