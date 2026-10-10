import Card from "./Card";

export default function Board({
  Cards,
}: {
  Cards: { id: number; content: string }[];
}) {
  return (
    <div className="flex flex-col mx-7 p-2 border-2">
      {Cards.map((card) => (
        <Card key={card.id} content={card.content} />
      ))}
    </div>
  );
}
