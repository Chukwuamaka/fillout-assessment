import { PropsWithChildren } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Canvas({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg border border-gray-200 h-full relative">
      <div className="absolute top-4 right-4">
        <Button variant="outline" size="sm">
          <Wand2 className="w-4 h-4 mr-2" />
          Theme
        </Button>
      </div>

      {children}
    </div>
  );
}
