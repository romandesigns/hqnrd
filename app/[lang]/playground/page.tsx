"use client";
import { PhoneInputDefault } from "@/components/ui/phone-example/phone-input-default";

interface Props {
  params: Promise<{
    roomId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { roomId } = await params;

  return <PhoneInputDefault />;
}
