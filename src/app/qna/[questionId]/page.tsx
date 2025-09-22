export default async function Page({
  params,
}: {
  readonly params: Promise<{ readonly questionId: string }>;
}) {
  const { questionId } = await params;
  if (!questionId) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h1>Missing Question ID</h1>
      </div>
    );
  }
}
