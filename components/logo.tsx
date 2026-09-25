export function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6">
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          className="fill-fd-primary"
        />
        <circle
          cx="14"
          cy="15"
          r="6.5"
          fill="none"
          strokeWidth="3"
          className="stroke-fd-primary-foreground"
        />
        <path
          d="M18.8 19.8 L24 25"
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-fd-primary-foreground"
        />
        <path
          d="M11.2 15.2 l2 2 l3.8-4.2"
          fill="none"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-fd-primary-foreground"
        />
      </svg>
      <span className="font-mono text-[1.05rem]">ocra</span>
    </span>
  );
}
