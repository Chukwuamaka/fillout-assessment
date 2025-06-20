import { Search, Wand2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { fieldTypes } from "./data";

export default function LeftSidebar() {
  return (
    <div className="w-90 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 flex gap-3 items-center">
        <div className="flex-1 relative bg-white">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search fields" className="pl-10 text-sm" />
        </div>
        <div className="bg-purple-200 p-[6px] rounded-sm">
          <Wand2 className="text-purple-500 w-4 h-4" />
        </div>
      </div>

      {/* Field Categories */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {fieldTypes.map((fieldType) => (
          <div key={fieldType.category}>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
              {fieldType.category}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {fieldType.fields.map((field) => (
                <button
                  key={field.name}
                  className="flex flex-col items-center p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${field.color}`}
                  >
                    <field.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-center text-gray-700 font-semibold leading-tight">
                    {field.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
