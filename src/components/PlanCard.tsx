import Button from "./Button";

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  unit: string;
  buttonText: string;
  features: string[];
  badge?: string;
  featured?: boolean;
}

export default function PlanCard({ name, description, price, unit, buttonText, features, badge, featured = false }: PlanCardProps) {
  return (
    <article className={featured ? "plan-card featured" : "plan-card"}>
      {badge && <span className="plan-badge">{badge}</span>}
      <h3>{name}</h3>
      <p className="plan-description">{description}</p>
      <p className="plan-price">
        {price}
        <span>{unit}</span>
      </p>
      <Button text={buttonText} secondary={!featured} href="#contact" />
      <hr />
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true">✓</span> {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
