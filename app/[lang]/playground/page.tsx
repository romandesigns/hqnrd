interface Props {
  params: Promise<{
    roomId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { roomId } = await params;
  return <p>{roomId}</p>;
}
