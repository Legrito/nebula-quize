interface Props {
  text: string;
}

export default function Text({ text }: Props) {
  return <p className="text-sm text-secondary">{text}</p>;
}
