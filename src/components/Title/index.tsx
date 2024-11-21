interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return <h1 className="text-lg font-bold">{text}</h1>;
}
