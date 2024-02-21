import Image from "next/image";

export function WeatherWidget() {
  return (
    <div className="hidden text-white relative md:block">
      <p className="text-xs mb-4">Weather in Salcedo City:</p>
      <div className="flex space-x-6">
        <span>
          <p className="text-xs font-regular">Today</p>
          <span className="flex items-center justify-center">
            <Image
              width={12}
              height={12}
              src="/assets/weather-icons/drop-33486.svg"
              alt="drop icon"
            />
          </span>
        </span>
        <span>
          <p className="text-xs font-regular">Tomorrow</p>
          <span className="flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src="/assets/weather-icons/brightness-33474.svg"
              alt="drop icon"
            />
          </span>
        </span>
        <span>
          <p className="text-xs font-regular">The Day After</p>
          <span className="flex items-center justify-center">
            <Image
              width={22}
              height={22}
              src="/assets/weather-icons/cloud-33472.svg"
              alt="drop icon"
            />
          </span>
        </span>
      </div>
    </div>
  );
}
