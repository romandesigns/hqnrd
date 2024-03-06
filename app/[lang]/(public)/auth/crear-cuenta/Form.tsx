"use client";
import { InputPhone } from "@/app/[lang]/ui/common/Form";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import { Country } from "react-phone-number-input";
import { Button, DatePicker, Form, Input, Radio, RadioGroup } from "rsuite";
import { signUpUser } from "./actions";

const initialState = {
  message: "",
};

export function SignUpForm({
  lang,
  locale,
}: {
  lang: string;
  locale: Country;
}) {
  const [phone, setPhone] = React.useState<string>("");
  const [guestUserDate, setUserBirthDate] = React.useState<Date | null>(null);
  const createUserAction = signUpUser.bind(null, guestUserDate);

  const [state, formAction] = useFormState(createUserAction, initialState);
  const { pending } = useFormStatus();

  const phoneNumber = (phone: string) => {
    setPhone(phone);
  };

  return (
    <form className="space-y-3" action={createUserAction}>
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
          className="w-full [&_input]:placeholder:text-xs [&_input]:text-xs"
          name="myCalendar"
          appearance="default"
          color="blue"
          block={true}
          style={{ color: "red" }}
          onChange={(value) => setUserBirthDate(value)}
        />
      </div>
      {/* Sex */}
      <Form.Group controlId="radioList" className="!mb-0">
        <RadioGroup name="sex" inline>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>
      </Form.Group>
      {/* Sex */}
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="placeholder:text-xs !mt-6"
      />
      <InputPhone
        phone={phone}
        phoneNumber={phoneNumber}
        locale={locale}
        placeholder="Phone Number"
        className="placeholder:text-xs bg-white"
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        required
        className="placeholder:text-xs"
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="confirm password"
        required
        className="placeholder:text-xs"
      />
      <br className="my-8" />
      <Button
        appearance="primary"
        color="blue"
        active
        size="md"
        block
        type="submit"
        aria-disabled={pending}
      >
        REGISTER
      </Button>
    </form>
  );
}
