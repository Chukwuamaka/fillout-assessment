import { useState } from "react";
import { useRouter } from "next/navigation";
import { EllipsisVertical, LucideIcon, Plus } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import SettingsMenu from "./SettingsMenu";
import { cn } from "@/lib/utils";
import styles from "./BottomNavigation.module.css";

interface PageButtonProps {
  pageId: string;
  text: string;
  Icon: LucideIcon;
  isActive?: boolean;
  cursor?: string;
}

interface PageButtonSeparatorProps {
  canExpand?: boolean;
  handleAddPage?: () => void;
}

export function PageButtonSeparator({
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

function PageButton({
  pageId,
  text,
  Icon,
  isActive,
  cursor = "pointer",
}: PageButtonProps) {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handlePageNavigation = () => {
    router.push(`/builder/${pageId}`);
  };

  return (
    <div
      className={cn(
        "relative px-0 inline-flex items-center gap-2 max-h-8 rounded-md font-medium text-sm leading-5 -tracking-[1.5%] transition-all transition-discrete group",
        cursor,
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
          "px-2.5 shadow-none text-inherit bg-transparent hover:bg-transparent",
          cursor,
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
            "padding-inline-0 h-max hidden bg-transparent hover:bg-transparent transition-all transition-discrete",
            cursor,
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

export default function SortablePageButton(
  props: Omit<PageButtonProps, "cursor">
) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.pageId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <PageButton
        cursor={isDragging ? "cursor-grabbing" : "cursor-pointer"}
        {...props}
      />
    </div>
  );
}
