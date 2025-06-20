import { Fragment } from "react";
import { useParams } from "next/navigation";
import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAtom } from "jotai";
import { formDataAtom } from "@/jotai/atoms/form-data";
import useFormGenerator from "@/hooks/useFormGenerator";
import { cn } from "@/lib/utils";
import SortablePageButton, { PageButtonSeparator } from "./PageButton";
import styles from "./BottomNavigation.module.css";

export default function BottomNavigation() {
  const { pageId } = useParams();
  const [pages, setPages] = useAtom(formDataAtom);
  const { createNewFormPage } = useFormGenerator();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((p) => p.id === active.id);
      const newIndex = pages.findIndex((p) => p.id === over?.id);
      const reorderedPages = arrayMove(pages, oldIndex, newIndex);
      setPages(reorderedPages);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      id="dnd-context"
    >
      <SortableContext
        items={pages.map((page) => page.id)}
        strategy={verticalListSortingStrategy}
        id="sortable-context"
      >
        <div className={cn("flex items-center p-5", styles.BottomNav)}>
          {pages.map((page, index, pagesArray) => (
            <Fragment key={page.id}>
              <SortablePageButton
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
      </SortableContext>
    </DndContext>
  );
}
