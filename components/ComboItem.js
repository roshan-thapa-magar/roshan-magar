import Image from "next/image";

export default function ComboItem({ item, className }) {
  return (
    <div
      key={item.id}
      className={`flex-shrink-0  border-2 border-gray-300 rounded-lg transition-all duration-300 ease-in-out hover:border-green-500 hover:shadow-lg cursor-pointer ${className}`}
    >
      <div className="relative w-full rounded-t-md h-32 md:h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          priority
        />
      </div>
      <div className="p-4">
        <span className="font-bold text-base block truncate-text ">{item.title}</span>
        <p className="text-xs text-gray-600 instruction-text">{item.description}</p>
        <span className="font-extrabold  block text-lg">RS. {item.price}</span>
      </div>
    </div>
  );
}
