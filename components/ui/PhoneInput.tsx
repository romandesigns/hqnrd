"use client";

import {
  getPhoneData,
  PhoneInput,
} from "@/components/features/site/phone-input";
import { CountryCode } from "libphonenumber-js";
import * as React from "react";
import { Input } from "./input";

export function PhoneInputField({
  defaultCountry,
  defaultValue,
  name,
}: {
  defaultCountry: CountryCode;
  defaultValue?: string;
  name?: string;
}) {
  const [phone, setPhone] = React.useState(defaultValue || "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const phoneData = getPhoneData(phone);
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col gap-4">
        <PhoneInput
          name={name}
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
