import Button from "./Button";

export default function Card({ content }: { content: string }) {
  return (
    <div
      className=" 
flex flex-row items-center justify-between bg-gray-500
min-w-lg rounded-md border-2 gap-2 p-1"
    >
      {content}
      <div className="flex gap-1.5">
        <Button label="Đánh dấu Xong" />
        <Button label="Xóa" />
      </div>
    </div>
  );
}
