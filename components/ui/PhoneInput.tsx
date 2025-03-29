import {
  getPhoneData,
  PhoneInput,
} from "@/components/features/site/phone-input";
import { CountryCode } from "libphonenumber-js";
import * as React from "react";
import { Input } from "./input";

export function PhoneInputField({
  defaultCountry,
}: {
  defaultCountry: CountryCode;
}) {
  const [phone, setPhone] = React.useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const phoneData = getPhoneData(phone);
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col gap-4">
        <PhoneInput
          value={phone}
          onChange={handleOnChange}
          defaultCountry={defaultCountry}
        />
        <Input
          className="hidden"
          name="phoneCountryCode"
          readOnly
          defaultValue={phoneData.countryCode}
        />
      </div>
    </div>
  );
}
