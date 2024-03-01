import PhoneInput, { Country } from "react-phone-number-input";
import { twMerge } from "tailwind-merge";

export function InputPhone({
  phoneNumber,
  phone,
  locale,
  placeholder,
  className,
}: {
  phoneNumber: (phone: string) => void;
  phone: string;
  locale: Country;
  placeholder: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `border-neutral-100/50 focus-within:ring-[.18rem] focus-within:border-brand_accent focus-within:ring-brand_accent/30 inline-block w-full border rounded-md ${
          className ? className : ""
        }`
      )}
    >
      <PhoneInput
        placeholder={placeholder}
        onChange={phoneNumber}
        value={phone}
        defaultCountry={locale as Country}
        name="tel"
        className="focus:outline-none focus:ring-primary-100 flex"
      />
    </div>
  );
}
