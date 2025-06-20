import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FormBuilder() {
  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <Button asChild>
        <Link href="/builder/info">Show form pages</Link>
      </Button>
    </div>
  );
}
