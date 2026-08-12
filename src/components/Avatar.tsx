export function Avatar({
  photoUrl,
  initials,
  size = 96,
}: {
  photoUrl: string | null;
  initials: string;
  size?: number;
}) {
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt=""
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full bg-[var(--color-accent)]/10 font-semibold text-[var(--color-accent)]"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}
