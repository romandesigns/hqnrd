

interface Props {
  params: Promise<{
    roomId: string;
  }>;
}

export default async function Page({params}:Props) {
  const params = await params;
  console.log(params);

  return <p>Playground</p>;
}
