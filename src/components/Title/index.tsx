interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return <h1 className="text-2xl font-bold">{text}</h1>;
}
