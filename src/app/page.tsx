import Board from "./_components/Board";

export default function Home() {
  const cards = [
    { id: 1, content: "Học Next" },
    { id: 2, content: "Học SYSTEM DESIGN" },
    { id: 3, content: "Học làm test" },
  ];
  return (
    <div className="flex flex-col">
      To do app
      <Board Cards={cards} />
    </div>
  );
}
