import { PageDataItem, FormContentTypes } from "@/jotai/atoms/form-data";

export default function useFormRenderer() {
  const renderFormContent = (content: PageDataItem) => {
    switch (content.type) {
      case FormContentTypes.HEADING:
        return <h1>{content.content}</h1>;
      case FormContentTypes.PARAGRAPH:
        return <p>{content.content}</p>;
    }
  };

  return renderFormContent;
}
