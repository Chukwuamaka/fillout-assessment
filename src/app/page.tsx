import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <Button asChild>
        <Link href="/builder/info">Go to Form Builder</Link>
      </Button>
    </div>
  );
}
