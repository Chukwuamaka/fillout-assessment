import { atom } from "jotai";
import { CircleCheck, Info, LucideIcon } from "lucide-react";

export enum FormContentTypes {
  HEADING = "heading",
  PARAGRAPH = "paragraph",
}

export interface PageDataItem {
  id: string;
  type: FormContentTypes;
  content: string;
}

export interface PageData {
  id: string;
  name: string;
  icon?: LucideIcon;
  data: PageDataItem[];
}

const INITIAL_FORM_DATA: PageData[] = [
  {
    id: "info",
    name: "Info",
    icon: Info,
    data: [
      {
        id: "info-content-1",
        type: FormContentTypes.HEADING,
        content: "Welcome to my test form",
      },
    ],
  },
  {
    id: "details",
    name: "Details",
    data: [
      {
        id: "details-content-1",
        type: FormContentTypes.PARAGRAPH,
        content: "This is a brief description of the purpose of this form",
      },
    ],
  },
  { id: "other", name: "Other", data: [] },
  {
    id: "ending",
    name: "Ending",
    icon: CircleCheck,
    data: [
      {
        id: "ending-content-1",
        type: FormContentTypes.PARAGRAPH,
        content: "You've reached the end of the form",
      },
    ],
  },
];

export const formDataAtom = atom(INITIAL_FORM_DATA);
formDataAtom.debugLabel = "form-data";
