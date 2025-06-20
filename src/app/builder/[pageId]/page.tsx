import FormContent from "./FormContent";

export default async function FormPageContent({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const { pageId } = await params;
  return <FormContent pageId={pageId} />;
}
