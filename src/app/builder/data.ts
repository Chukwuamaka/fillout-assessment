import {
  Type,
  AlignLeft,
  ImageIcon,
  ChevronDown,
  Grid3X3,
  CheckSquare,
  ToggleLeft,
  Calendar,
  Clock,
  CalendarDays,
  Star,
  FileText,
} from "lucide-react";

export const fieldTypes = [
  {
    category: "Frequently used",
    fields: [
      {
        name: "Short answer",
        icon: Type,
        color: "bg-green-100 text-green-600",
      },
      {
        name: "Multiple choice",
        icon: CheckSquare,
        color: "bg-green-100 text-green-600",
      },
      {
        name: "Email input",
        icon: AlignLeft,
        color: "bg-green-100 text-green-600",
      },
    ],
  },
  {
    category: "Display text",
    fields: [
      { name: "Heading", icon: Type, color: "bg-gray-100 text-gray-600" },
      {
        name: "Paragraph",
        icon: FileText,
        color: "bg-gray-100 text-gray-600",
      },
      { name: "Banner", icon: ImageIcon, color: "bg-gray-100 text-gray-600" },
    ],
  },
  {
    category: "Choices",
    fields: [
      {
        name: "Dropdown",
        icon: ChevronDown,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Picture choice",
        icon: ImageIcon,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Multiselect",
        icon: Grid3X3,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Switch",
        icon: ToggleLeft,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Multiple choice",
        icon: CheckSquare,
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        name: "Checkbox",
        icon: CheckSquare,
        color: "bg-yellow-100 text-yellow-600",
      },
    ],
  },
  {
    category: "Time",
    fields: [
      {
        name: "Date picker",
        icon: Calendar,
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Date time picker",
        icon: CalendarDays,
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Time picker",
        icon: Clock,
        color: "bg-purple-100 text-purple-600",
      },
      {
        name: "Date range",
        icon: Calendar,
        color: "bg-purple-100 text-purple-600",
      },
    ],
  },
  {
    category: "Rating & Ranking",
    fields: [
      { name: "Rating", icon: Star, color: "bg-orange-100 text-orange-600" },
    ],
  },
];
