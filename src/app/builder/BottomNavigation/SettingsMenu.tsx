import { Clipboard, Copy, Flag, PenLine, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

interface SettingsMenuProps extends DropdownMenuTriggerProps {
  isOpen: boolean;
  openChange: DropdownMenuProps["onOpenChange"];
}

const settingsMenuItems = [
  {
    name: "Set as first page",
    Icon: Flag,
    iconColor: "text-[#2F72E2]",
    fillColor: "fill-[#2F72E2]",
  },
  {
    name: "Rename",
    Icon: PenLine,
    iconColor: "text-[#9DA4B2]",
    fillColor: "",
  },
  {
    name: "Copy",
    Icon: Clipboard,
    iconColor: "text-[#9DA4B2]",
    fillColor: "",
  },
  {
    name: "Duplicate",
    Icon: Copy,
    iconColor: "text-[#9DA4B2]",
    fillColor: "",
  },
];

export default function SettingsMenu({
  isOpen,
  openChange,
  children,
  ...props
}: SettingsMenuProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={openChange}>
      <DropdownMenuTrigger asChild {...props}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={15}
        className="p-0 min-w-[240px] bg-white rounded-[12px] border-[0.5px] border-solid border-[#e1e1e1] shadow-[0px_1px_3px_0px_#0000000A]"
      >
        <DropdownMenuLabel className="p-3 font-medium text-md text-[#1A1A1A] leading-6 bg-[#FAFBFC]">
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-0 bg-[#E1E1E1]" />
        <div className="px-3 py-1.5">
          {settingsMenuItems.map(({ name, Icon, iconColor, fillColor }) => (
            <DropdownMenuItem key={name} className="pl-1 py-2">
              <button className="cursor-pointer w-full inline-flex gap-1.5 font-medium leading-4 text-sm text-start text-[#1A1A1A]">
                <Icon className={cn(iconColor, fillColor)} />
                {name}
              </button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator className="mt-1.5 bg-[#E1E1E1]" />
          <DropdownMenuItem className="pl-1 py-3">
            <button className="cursor-pointer w-full inline-flex gap-1.5 font-medium leading-4 text-sm text-start text-[#EF494F]">
              <Trash2 className="text-[#EF494F]" />
              Delete
            </button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
