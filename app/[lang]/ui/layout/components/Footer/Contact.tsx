import {
  BUSINESS_ADDRESS,
  BUSINESS_DEVELOPER_EMAIL,
  BUSINESS_EMAIL,
  BUSINESS_WEB_DOMAIN,
} from "@/constants";
import { ShareDataPropTypes } from "../../../../../../types";
import { ExLink, ShareBtn } from "../../../common";
import {
  AiFillPhone,
  FaInternetExplorer,
  FaLocationDot,
  MdEmail,
} from "../../../icons";

export const Contact = ({ data }: ShareDataPropTypes) => {
  return (
    <ul className="text-white text-sm w-full">
      <li className="w-full border-t border-primary-600 flex items-start">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Contact Us</h3>
        </div>
      </li>
      <li>
        <ExLink
          href="//wa.link/hotelquintonivelrd"
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <AiFillPhone />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                Phone Number
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">+1809-753-7500</span>
          </>
        </ExLink>
      </li>
      <li>
        <ExLink
          href="mailto:hotelquintonivelrd@gmail.com?cc=roman@wavystyle.io, ayelin.delacruz@gmail.com&subject=HQNRD Website Visitor"
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <MdEmail />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_EMAIL}
            </span>
          </>
        </ExLink>
      </li>
      <li className="flex items-center justify-between my-2 md:justify-start md:space-x-10">
        <ExLink
          href="//hotelquintonivelrd.com"
          className="flex flex-col items-start justify-center"
        >
          <span className="flex items-baseline justify-start">
            <FaInternetExplorer />
            <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
              Website
            </strong>
          </span>
          <span className="flex items-baseline justify-between w-full">
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_WEB_DOMAIN}
            </span>
          </span>
        </ExLink>
        <ShareBtn data={data} />
      </li>
      <li>
        <ExLink
          href="//www.google.com/maps/place/Hotel+Quinto+Nivel+RD/@19.3805972,-70.4256792,17z/data=!3m1!4b1!4m9!3m8!1s0x8eae296e50e06303:0x4141e3bda5d73fec!5m2!4m1!1i2!8m2!3d19.3805922!4d-70.4231043!16s%2Fg%2F11h18w_m9k?entry=ttu"
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <FaLocationDot />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                Address
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem] text-left">
              {BUSINESS_ADDRESS}
            </span>
          </>
        </ExLink>
      </li>
      <li className="w-full border-t border-primary-600 flex items-start mt-6">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Technical Support</h3>
        </div>
      </li>
      <li>
        <ExLink
          href="mailto:roman@wavystyle.io?cc=trfm1987@gmail.com&subject=HQNRD Support Request"
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <MdEmail />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_DEVELOPER_EMAIL}
            </span>
          </>
        </ExLink>
      </li>
    </ul>
  );
};
