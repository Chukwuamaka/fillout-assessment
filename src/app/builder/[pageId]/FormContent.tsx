"use client";

import { Fragment, useMemo } from "react";
import { MousePointer2 } from "lucide-react";
import { useAtomValue } from "jotai";
import { formDataAtom } from "@/jotai/atoms/form-data";
import useFormRenderer from "@/hooks/useFormRenderer";
import { cn } from "@/lib/utils";

function EmptyFormContent() {
  return (
    <div className="bg-white rounded-lg p-2 w-[70%] max-w-[650px] h-50 flex flex-col items-center justify-center">
      <MousePointer2 className="w-6 h-6 text-gray-300 mb-4" />
      <p className="text-gray-500">
        <span className="font-bold">Drag and drop</span> questions from the
        left-hand side to build your form.
      </p>
    </div>
  );
}

export default function FormContent({ pageId }: { pageId: string }) {
  const pages = useAtomValue(formDataAtom);
  const renderFormContent = useFormRenderer();
  const pageFormData = useMemo(
    () => pages.find((page) => page.id === pageId)?.data ?? [],
    [pageId, pages]
  );

  return (
    <div
      className={cn(
        "flex justify-center h-full",
        !pageFormData.length ? "items-center" : "items-start pt-[10vh]"
      )}
    >
      {!pageFormData.length ? (
        <EmptyFormContent />
      ) : (
        <div className="bg-white rounded-lg p-7 min-w-[80%] min-h-[70%] flex flex-col gap-2 justify-start items-center">
          {pageFormData.map((item) => (
            <Fragment key={item.id}>{renderFormContent(item)}</Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
