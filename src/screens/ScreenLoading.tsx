export function ScreenLoading() {
  return (
    <div className="flex h-full min-h-svh flex-col items-center justify-center bg-white px-6">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[var(--color-accent)]" />
    </div>
  );
}
