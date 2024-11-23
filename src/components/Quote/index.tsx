export default function QuoteBox({ text }: { text: string }) {
  return (
    <blockquote className="font-bold text-lg text-blockquote before:content-['“'] after:content-['”']">
      {text}
    </blockquote>
  );
}
