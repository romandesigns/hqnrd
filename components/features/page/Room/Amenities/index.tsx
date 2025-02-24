import { amenities } from "./ameneties";

export function Amenities() {
  return (
    <div className="w-full bg-secondary/20 p-3 rounded-md">
      <h3 className="font-bold text-xl mb-2">Amenities</h3>
      <ul className="my-3 grid w-full grid-cols-2 gap-6 py-4 sm:grid-cols-5 ">
        {amenities.map((amenity, idx) => (
          <li key={idx} className="flex items-center justify-start">
            <span className="order-2 text-[.8rem]">{amenity.label}</span>
            <span className="order-1 mr-1 h-5 w-5">
              <amenity.Icon size={18} className="text-muted-foreground" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
