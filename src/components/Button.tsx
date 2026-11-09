interface ButtonProps {
  text: string;
  secondary?: boolean;
  href?: string; // se tiver href, vira um link que rola até a seção
  submit?: boolean; // se for true, envia o formulário
  disabled?: boolean;
}

export default function Button({ text, secondary = false, href, submit = false, disabled = false }: ButtonProps) {
  const className = secondary ? "btn-secondary" : "btn-primary";

  if (href) {
    return <a className={className} href={href}>{text}</a>;
  }

  return (
    <button type={submit ? "submit" : "button"} className={className} disabled={disabled}>
      {text}
    </button>
  );
}
