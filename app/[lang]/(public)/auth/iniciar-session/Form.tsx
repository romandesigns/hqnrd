"use client";
import { InputPhone } from "@/app/[lang]/ui/common/Form";
import React from "react";
import { Country } from "react-phone-number-input";
import { DatePicker, Form, Input, Radio, RadioGroup } from "rsuite";

export function SignUpForm({
  lang,
  locale,
}: {
  lang: string;
  locale: Country;
}) {
  const [phone, setPhone] = React.useState<string>("");

  const phoneNumber = (phone: string) => {
    setPhone(phone);
  };

  return (
    <Form className="space-y-4">
      {/* User Name Field */}
      <Input name="name" type="text" placeholder="Name" required />
      {/* Last Name Field */}
      <Input name="lastName" type="text" placeholder="Last Name" required />
      {/* Date of Birdth Field */}
      <div>
        <DatePicker
          placeholder="Select Date of Birth"
          className="w-full"
          name="dateOfBirth"
          appearance="default"
        />
      </div>
      {/* Sex */}
      <Form.Group controlId="radioList">
        <RadioGroup name="radioList" inline>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
      </Form.Group>
      {/* Sex */}
      <Input name="email" type="email" placeholder="Email" required />
      <InputPhone
        phone={phone}
        phoneNumber={phoneNumber}
        locale={locale}
        placeholder="Phone Number"
      />
      <Input name="password" type="password" placeholder="password" required />
    </Form>
  );
}
