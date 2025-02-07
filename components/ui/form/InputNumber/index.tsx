"use client";
import {
  FaChevronDown,
  FaChevronUp,
  FaChild,
  FaUser,
} from "@/components/icons";
import React from "react";
import { Button } from "../../button";
import { Input } from "../../input";

export function InputNumber({
  inputNumberLabel,
  name,
  iconName,
  iconSize,
}: {
  inputNumberLabel: string;
  name: string;
  iconName?: string;
  iconSize: number;
}) {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <div className="mt-0">
      <div className="flex items-center justify-start space-x-2 pb-2">
        {iconName === "FaUser" ? <FaUser size={iconSize} /> : null}
        {iconName === "FaChild" ? <FaChild size={iconSize} /> : null}
        <label className="leading-nonec text-xs text-muted-foreground">
          {inputNumberLabel}
        </label>
      </div>
      <div className="flex items-center justify-center rounded-md">
        <div className="flex">
          <Button
            size="icon"
            variant="outline"
            className="rounded-r-none bg-transparent"
            onClick={increment}
          >
            <FaChevronUp />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-l-none rounded-r-none bg-transparent"
            onClick={decrement}
          >
            <FaChevronDown />
          </Button>
        </div>
        <Input
          name="adults"
          value={count}
          readOnly
          onChange={() => {}}
          className={`rounded-l-none text-center ${count === 0 ? "text-muted-foreground" : ""}`}
        />
      </div>
    </div>
  );
}
