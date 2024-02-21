import React from "react";
import { Button } from "rsuite";
import { RoomCard } from "../../ui/common/RoomCard";

export default function Page() {
  return (
    <section className="h-96 p-2">
      <Button appearance="default" active>
        Message
      </Button>
    </section>
  );
}
