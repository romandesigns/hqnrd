import { Loader } from "@/components/features/site/Loader";
import { LuLoaderCircle } from "@/components/icons";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{
    roomId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { roomId } = await params;

  return (
    <div>
      <p>Playgrond</p>
    </div>
  );
}
