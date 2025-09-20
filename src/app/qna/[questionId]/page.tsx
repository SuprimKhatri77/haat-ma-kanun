export default async function Page({
  params,
}: {
  params: Promise<{ questionId: string }>;
}) {
  const { questionId } = await params;
  if (!questionId) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h1>Missing Question ID</h1>
      </div>
    );
  }
  return;
}
