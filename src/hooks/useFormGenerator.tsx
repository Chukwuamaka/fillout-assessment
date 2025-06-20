import { useAtom } from "jotai";
import { formDataAtom, PageData } from "@/jotai/atoms/form-data";
import { useRouter } from "next/navigation";

export default function useFormGenerator() {
  const router = useRouter();
  const [pages, setPages] = useAtom(formDataAtom);

  const generateFormData = () => {
    const newData: PageData = {
      id: `${Date.now()}`,
      name: `Page ${pages.length + 1}`,
      data: [],
    };
    return newData;
  };

  const createNewFormPage = (indexToInsert?: number) => {
    const newData = generateFormData();
    if (!indexToInsert) {
      setPages((prevPages) => [...prevPages, newData]);
    } else {
      setPages((prevPages) => prevPages.toSpliced(indexToInsert, 0, newData));
    }
    router.push(`/builder/${newData.id}`);
  };

  return {
    createNewFormPage,
  };
}
