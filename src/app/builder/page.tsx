import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FormBuilder() {
  return (
    <div className="h-full flex items-center justify-center">
      <Button asChild>
        <Link href="/builder/info">Start Editing</Link>
      </Button>
    </div>
  );
}
