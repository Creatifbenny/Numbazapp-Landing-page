import Image from "next/image";

// Site footer. Sizes and spacing were measured from desktop.png (1440px
// design at ~2.685x) and are APPROXIMATE. The frame also shows a rocket emoji
// after the right-hand text; it is left out (see OPEN DECISIONS in the
// step report).

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="flex flex-col items-center gap-3 px-5 pt-[36.4px] pb-[34.6px] sm:flex-row sm:justify-between sm:px-8 xl:px-[53.6px]">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={138}
            height={138}
            className="size-[27px] shrink-0"
          />
          <p className="text-left text-[15.45px] text-light">
            © 2026 Numbaz. All rights reserved.
          </p>
        </div>
        <p className="text-center text-sm text-faint sm:text-[13.3px]">
          Built for everyday entrepreneurs
        </p>
      </div>
    </footer>
  );
}
