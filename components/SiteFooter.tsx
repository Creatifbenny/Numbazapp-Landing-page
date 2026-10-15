// Site footer. Sizes and spacing were measured from desktop.png (1440px
// design at ~2.685x) and are APPROXIMATE. The frame also shows a rocket emoji
// after the right-hand text; it is left out (see OPEN DECISIONS in the
// step report).

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="flex items-center justify-between px-[53.6px] pt-[36.4px] pb-[34.6px]">
        <div className="flex items-center gap-[10px]">
          <span
            aria-hidden="true"
            className="flex size-[27px] items-center justify-center rounded-md bg-primary font-mono text-[13px] font-bold text-white"
          >
            N
          </span>
          <p className="text-[15.45px] text-light">
            © 2026 Numbaz. All rights reserved.
          </p>
        </div>
        <p className="text-[13.3px] text-faint">Built for everyday entrepreneurs</p>
      </div>
    </footer>
  );
}
