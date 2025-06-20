import { Fragment, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Clipboard,
  Copy,
  EllipsisVertical,
  FileText,
  Flag,
  LucideIcon,
  PenLine,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import styles from "./BottomNavigation.module.css";
import { useAtomValue } from "jotai";
import { formDataAtom } from "@/jotai/atoms/form-data";
import useFormGenerator from "@/hooks/useFormGenerator";

interface PageButtonProps {
  pageId: string;
  text: string;
  Icon: LucideIcon;
  isActive?: boolean;
}

interface PageButtonSeparatorProps {
  canExpand?: boolean;
  handleAddPage?: () => void;
}

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

function SettingsMenu({
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

function PageButton({ pageId, text, Icon, isActive }: PageButtonProps) {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handlePageNavigation = () => {
    router.push(`/builder/${pageId}`);
  };

  return (
    <div
      className={cn(
        "relative px-0 inline-flex items-center gap-2 max-h-8 rounded-md font-medium text-sm leading-5 -tracking-[1.5%] cursor-pointer transition-all transition-discrete group",
        styles.PageButton,
        isActive
          ? cn("hover:px-2.5", styles.Active, menuIsOpen ? "px-2.5" : "")
          : ""
      )}
    >
      <Button
        variant="default"
        size="sm"
        className={cn(
          "px-2.5 cursor-pointer shadow-none text-inherit bg-transparent hover:bg-transparent",
          isActive
            ? cn(
                "group-hover:px-0",
                menuIsOpen ? "padding-inline-0" : "",
                styles.MainButton
              )
            : ""
        )}
        onClick={handlePageNavigation}
      >
        <Icon
          className={cn(
            "size-5",
            isActive ? "text-[#F59D0E]" : "text-[#8C93A1]"
          )}
        />
        {text}
      </Button>

      <SettingsMenu isOpen={menuIsOpen} openChange={setMenuIsOpen}>
        <Button
          variant="default"
          size="sm"
          className={cn(
            "padding-inline-0 h-max hidden cursor-pointer bg-transparent hover:bg-transparent transition-all transition-discrete",
            isActive
              ? `group-hover:inline-flex ${menuIsOpen ? "inline-flex" : ""}`
              : ""
          )}
        >
          <EllipsisVertical className="size-4 text-[#9DA4B2]" />
        </Button>
      </SettingsMenu>
    </div>
  );
}

function PageButtonSeparator({
  handleAddPage,
  canExpand = true,
}: PageButtonSeparatorProps) {
  return (
    <div
      className={cn(
        "relative h-px w-5 cursor-pointer border-t-[1.5px] border-dashed border-[#C0C0C0] group",
        canExpand ? "hover:w-10" : "cursor-auto"
      )}
    >
      <Button
        size="sm"
        className={cn(
          "hidden absolute translate-x-2/3 -translate-y-1/2 size-4 px-[2px]! cursor-pointer bg-white hover:bg-white rounded-full border-[0.5px] border-solid border-[#E1E1E1] shadow-[0px_1px_3px_0px_#0000000A]",
          canExpand ? "group-hover:inline-flex" : ""
        )}
        onClick={handleAddPage}
      >
        <Plus className="text-black size-2.5" />
      </Button>
    </div>
  );
}

export default function BottomNavigation() {
  const { pageId } = useParams();
  const pages = useAtomValue(formDataAtom);
  const { createNewFormPage } = useFormGenerator();

  return (
    <div className={cn("flex items-center p-5", styles.BottomNav)}>
      {pages.map((page, index, pagesArray) => (
        <Fragment key={page.id}>
          <PageButton
            pageId={page.id}
            text={page.name}
            Icon={page.icon ?? FileText}
            isActive={page.id === pageId}
          />
          {
            <PageButtonSeparator
              canExpand={!(index === pagesArray.length - 1)}
              handleAddPage={() => createNewFormPage(index + 1)}
            />
          }
        </Fragment>
      ))}
      <Button
        size="sm"
        className="bg-white hover:bg-white py-1 px-2.5 font-medium text-sm text-[#1A1A1A] leading-5 cursor-pointer"
        onClick={() => createNewFormPage()}
      >
        <Plus className="text-[#1A1A1A]" />
        Add page
      </Button>
    </div>
  );
}
