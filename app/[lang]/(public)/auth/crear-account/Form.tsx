"use client";
import { InputPhone } from "@/app/[lang]/ui/common/Form";
import React from "react";
import { Country } from "react-phone-number-input";
import { DatePicker, Form, Input, Radio, RadioGroup, Button } from "rsuite";

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
    <Form>
      <fieldset className="space-y-3">
        <legend>Personal Details</legend>
        {/* User Name Field */}
        <Input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="placeholder:text-xs"
        />
        {/* Last Name Field */}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
          className="placeholder:text-xs"
        />
        {/* Date of Birdth Field */}
        <div className="dateOfBirthPicker">
          <DatePicker
            placeholder="Select Date of Birth"
            className="w-full [&_input]:placeholder:text-xs"
            name="dateOfBirth"
            appearance="default"
            color="blue"
          />
        </div>
        {/* Sex */}
        <Form.Group controlId="radioList">
          <RadioGroup name="radioList" inline>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>
        </Form.Group>
      </fieldset>

      <fieldset className="space-y-3 mb-6">
        <legend>Account</legend>
        {/* Sex */}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="placeholder:text-xs"
        />
        <InputPhone
          phone={phone}
          phoneNumber={phoneNumber}
          locale={locale}
          placeholder="Phone Number"
          className="placeholder:text-xs"
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          required
          className="placeholder:text-xs"
        />
        <Input
          name="password"
          type="password"
          placeholder="confirm password"
          required
          className="placeholder:text-xs"
        />
      </fieldset>
      <Button
        appearance="primary"
        color="blue"
        active
        size="md"
        block
        type="submit"
      >
        REGISTER
      </Button>
    </Form>
  );
}
