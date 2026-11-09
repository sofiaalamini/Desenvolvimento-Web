import type { ReactNode } from "react";

interface CardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export default function Card({ icon, title, children }: CardProps) {
  return (
    <article className="card">
      <img src={icon} alt="" width={64} height={64} />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
