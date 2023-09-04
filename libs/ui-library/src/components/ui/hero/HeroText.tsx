interface HeroTextProps {
  text: string
}

export function HeroText({ text }: HeroTextProps) {
  return <div>{text}</div>
}
