import { useState } from "react";
import { Eye, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

enum Tabs {
  EDIT = "edit",
  INTEGRATE = "integrate",
  SHARE = "share",
  RESULTS = "results",
  SETTINGS = "settings",
}

const tabs = Object.values(Tabs);

export default function TopNavigation() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.EDIT);

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-gray-900">My Test Form</h1>

        <nav>
          <ul className="flex space-x-1">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-3 py-2 capitalize text-sm font-medium rounded-md transition-colors cursor-pointer",
                    activeTab === tab
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-orange-100 text-orange-700 text-sm font-medium">
              CO
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="cursor-pointer">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            size="sm"
            className="bg-black hover:bg-gray-800 cursor-pointer"
          >
            <Zap className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
