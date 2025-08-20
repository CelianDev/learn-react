import type { TravelCardProps } from "../types/TravelCardProps";

function TravelCard({
  img,
  title,
  country,
  googleMapsLink,
  dates,
  description,
}: TravelCardProps) {
  return (
    <article className="m-4 flex items-center gap-4">
      <div className="sm:w-1/6 w-1/3 h-48 overflow-hidden rounded-md flex-none">
        <img className="size-full object-cover" src={img.src} alt={img.alt}></img>
      </div>
      <div>
        <div className="flex flex-row items-center flew-grow">
          <img className="size-4" src="./src/assets/geolocation.png"></img>
          <span className="ms-2 me-4 font-medium uppercase">{country}</span>
          <a className="text-sm text-gray-400 underline" href={googleMapsLink}>View on Google Maps</a>
        </div>
        <h1 className="md:text-3xl text-xl font-bold mb-4">{title}</h1>
        <span className="font-bold text-sm">{dates}</span>
        <p className="md:text-sm text-xs font-light mt-1">{description}</p>
      </div>
    </article>
  );
}

export default TravelCard;
