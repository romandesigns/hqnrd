export default function TeamCard() {
  return (
    <li
      className="rounded-md bg-secondary flex-1 min-w-[9rem] flex items-center justify-center flex-col"
    >
      <div className="p-1 w-full h-full">
        <div className="bg-green-200 aspect-square rounded-md w-full h-full block" />
      </div>
      <div className="flex items-start p-2 justify-center flex-col w-full pt-1">
        <h3 className="text-foreground font-semibold">Roman</h3>
        <p className="text-muted-foreground text-xs">Receptionist</p>
      </div>
    </li>
  );
}
