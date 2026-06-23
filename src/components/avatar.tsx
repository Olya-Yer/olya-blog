import Image from "next/image";

export function Avatar() {
  return (
    <div className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-0 -m-1 rounded-full bg-accent/40 blur-md"
      />
      <Image
        src="/profile.png"
        alt="Portrait of Olya Yeritspokhyan"
        width={144}
        height={144}
        priority
        className="relative size-36 rounded-full object-cover ring-4 ring-card outline-2 outline-offset-2 outline-accent"
      />
    </div>
  );
}
