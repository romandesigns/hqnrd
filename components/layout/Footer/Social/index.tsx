import { FaFacebookSquare, TiSocialInstagram } from "@/components/icons";

export function SocialInformation() {
  return (
    <ul className="mt-2 space-y-6 text-xs md:mt-10 md:py-10 md:text-[0.80rem]">
      <li className="flex items-center justify-start gap-2">
        <span>
          <FaFacebookSquare />
        </span>
        <span>Facebook</span>
      </li>
      <li className="flex items-center justify-start gap-2">
        <span>
          <TiSocialInstagram size={15} />
        </span>
        <span>Instagram</span>
      </li>
      <li className="mt-4 h-52 w-full overflow-hidden rounded-md lg:w-3/4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.735731141567!2d-70.4231043!3d19.3805922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae296e50e06303%3A0x4141e3bda5d73fec!2sHotel%20Quinto%20Nivel%20RD!5e0!3m2!1sen!2sus!4v1712705679198!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </li>
    </ul>
  );
}
