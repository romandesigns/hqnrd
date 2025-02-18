import { Locale } from "@/i18n-config";

export default async function Page({params}:{params: Promise<{roomId:string, lang:Locale}>}) {
  const foo = await params;

  return <p>Page ID: 44</p>;
}
