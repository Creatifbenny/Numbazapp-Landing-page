import {
  BatteryFull,
  ChartColumn,
  ChevronRight,
  CircleAlert,
  House,
  Lightbulb,
  Minus,
  Package,
  Plus,
  Settings,
  Signal,
  TrendingUp,
  User,
  Users,
  Wifi,
} from "lucide-react";

// Decorative marketing mockup. Every position and size below was measured
// from desktop.png (1440px design at ~2.685x) and is APPROXIMATE. The screen
// is positioned relative to the phone; screen children are positioned
// relative to the screen.

const TABS = [
  { label: "Home", x: 40.1, Icon: House, active: true },
  { label: "Items", x: 85.3, Icon: Package, active: false },
  { label: "Reports", x: 131.5, Icon: ChartColumn, active: false },
  { label: "Customers", x: 178.5, Icon: Users, active: false },
  { label: "Settings", x: 224.3, Icon: Settings, active: false },
];

export default function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Numbaz app home screen showing today's sales and customers owing"
      className="relative h-[656px] w-[292px] shrink-0"
    >
      <div aria-hidden="true" className="absolute inset-0">
        {/* Device body */}
        <div className="absolute inset-0 rounded-[39px] border-[1.5px] border-device-edge bg-device shadow-[0_40px_80px_-10px_rgba(0,0,0,0.55)]" />
        {/* Dynamic island */}
        <div className="absolute top-[13px] left-[96px] h-6 w-[100px] rounded-full bg-black" />
        {/* Home indicator */}
        <div className="absolute top-[633px] left-[101px] h-[5px] w-[90px] rounded-full bg-device-bar" />

        {/* Screen */}
        <div className="absolute top-[37px] left-[13.4px] h-[582px] w-[265.6px] overflow-hidden rounded-[22px] bg-screen-bottom bg-[linear-gradient(to_bottom,var(--color-screen-top)_0px,var(--color-screen-bottom)_300px)] text-ink">
          {/* Status bar */}
          <span className="absolute top-[9.5px] left-[16.8px] text-[11.5px] leading-[14px] font-semibold">
            9:41
          </span>
          <span className="absolute top-[10px] left-[198px] flex items-center gap-[3px]">
            <Signal className="size-3.5" strokeWidth={2.5} />
            <Wifi className="size-3.5" strokeWidth={2.5} />
            <BatteryFull className="size-[18px]" strokeWidth={2} />
          </span>

          {/* Header */}
          <span className="absolute top-[38.7px] left-[13.5px] flex size-8 items-center justify-center rounded-full bg-background text-[12px] leading-none font-semibold text-white">
            E
          </span>
          <span className="absolute top-[38.7px] left-[54.9px] text-[10px] leading-[13px] font-semibold">
            Emeka shops
          </span>
          <span className="absolute top-[53.2px] left-[54.1px] flex h-[16.4px] w-[63px] items-center justify-center gap-[2px] rounded-full border border-screen-green bg-screen-green text-[5.5px] leading-none font-semibold">
            <User className="size-[5px]" strokeWidth={3} />
            Business Owner
          </span>

          {/* Today's sales panel */}
          <div className="absolute top-[82.3px] left-[10.5px] h-[219.4px] w-[244.7px] rounded-2xl border border-screen-green bg-background text-screen-bottom">
            <span className="absolute top-[23px] left-[17.4px] text-[10px] leading-[14px]">
              Today&apos;s Sales
            </span>
            <TrendingUp
              className="absolute top-[18px] left-[97.6px] size-3.5"
              strokeWidth={2}
            />
            <span className="absolute top-[42.7px] left-[17.4px] text-[20px] leading-7 font-semibold tracking-[-0.035em]">
              ₦2,000,000.00
            </span>

            <span className="absolute top-[88.8px] left-[18.3px] flex h-[30px] w-[96.8px] items-center justify-center gap-3 rounded-lg bg-screen-btn text-[8.5px] font-semibold">
              <Plus className="size-3" strokeWidth={2.5} />
              Add Sale
            </span>
            <span className="absolute top-[88.8px] left-[127.4px] flex h-[30px] w-[96.8px] items-center justify-center gap-3 rounded-lg bg-screen-btn text-[8.5px] font-semibold">
              <Minus className="size-3" strokeWidth={2.5} />
              Add Expense
            </span>

            <div className="absolute top-[135.3px] left-[18.3px] h-[53.3px] w-[206px] rounded-lg bg-screen-green text-ink">
              <Lightbulb
                className="absolute top-[11px] left-[12px] size-3.5"
                strokeWidth={2}
              />
              <span className="absolute top-[7.4px] left-[38.4px] text-[9px] leading-3 italic">
                Daily Tip
              </span>
              <span className="absolute top-[23px] left-[38.4px] w-[150px] text-[8px] leading-[10px] font-medium italic">
                Record your first sale today to start tracking your business
                growth.
              </span>
            </div>

            <span className="absolute top-[203.8px] left-[104.4px] size-[3.2px] rounded-full bg-screen-bottom" />
            <span className="absolute top-[203.8px] left-[110.5px] size-[3.2px] rounded-full bg-screen-bottom" />
            <span className="absolute top-[203.8px] left-[116.5px] size-[3.2px] rounded-full bg-screen-bottom" />
            <span className="absolute top-[203.8px] left-[120.4px] h-[3.2px] w-[17.5px] rounded-full bg-screen-green" />
          </div>

          {/* Customers owing */}
          <div className="absolute top-[313.6px] left-[10.5px] h-[51px] w-[244.7px] rounded-[14px] bg-screen-green">
            <span className="absolute top-[9.5px] left-[13.8px] flex size-8 items-center justify-center rounded-full bg-background text-white">
              <CircleAlert className="size-4" strokeWidth={1.75} />
            </span>
            <span className="absolute top-[13.8px] left-[57.3px] text-[6.5px] leading-[9px] font-medium text-background">
              Customers Owing
            </span>
            <span className="absolute top-[22.3px] left-[57.3px] text-[15px] leading-[18px] font-semibold tracking-[-0.03em] text-background">
              ₦12,500
            </span>
            <span className="absolute top-4 right-[13.4px] flex h-[19.4px] w-[22.3px] items-center justify-center rounded-full bg-gradient-to-b from-badge-top to-badge-bottom text-[9px] leading-none font-bold text-white">
              3
            </span>
          </div>

          {/* Recent actions */}
          <span className="absolute top-[378px] left-[10.5px] text-[9px] leading-3 text-background">
            Recent Actions
          </span>
          <div className="absolute top-[396.7px] left-[10.5px] h-[58.4px] w-[244.7px] rounded-[14px] border border-screen-row-border bg-white/70">
            <span className="absolute top-[10.5px] left-[10.2px] flex size-[27px] items-center justify-center rounded-full bg-background text-white">
              <Package className="size-3" strokeWidth={2} />
            </span>
            <span className="absolute top-[11.7px] left-[45.9px] text-[10.5px] leading-[14px] font-semibold text-background">
              1 item
            </span>
            <span className="absolute top-[25.6px] left-[45.9px] text-[8.5px] leading-[11px] text-muted">
              11:25 AM
            </span>
            <span className="absolute top-[37.4px] left-[45.9px] text-[9.5px] leading-3 text-muted">
              1× Noodles
            </span>
            <span className="absolute top-[17.3px] right-[28.4px] text-[10.5px] leading-[14px] font-bold tracking-[-0.02em] text-background">
              ₦1,500
            </span>
            <ChevronRight
              className="absolute top-[24px] right-[14px] size-2.5 text-body"
              strokeWidth={2}
            />
          </div>

          {/* Tab bar */}
          <div className="absolute top-[524px] right-0 left-0 h-[58px] bg-background text-white">
            {TABS.map(({ label, x, Icon, active }) => (
              <span
                key={label}
                className={`absolute top-0 flex h-full -translate-x-1/2 flex-col items-center ${active ? "text-screen-green" : ""}`}
                style={{ left: `${x}px` }}
              >
                <span
                  className={`mt-[11px] flex size-[25px] items-center justify-center rounded-full ${active ? "bg-screen-green text-background" : ""}`}
                >
                  <Icon className="size-3.5" strokeWidth={1.75} />
                </span>
                <span className="mt-[5px] text-[8.3px] leading-[11px]">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Floating card: top right */}
        <div className="absolute top-[80.8px] left-[168.4px] flex h-[54.4px] w-[155.3px] items-center gap-2.5 rounded-2xl border border-float-green-border bg-background px-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <span className="flex size-[31px] shrink-0 items-center justify-center rounded-lg bg-float-green-tile text-primary">
            <TrendingUp className="size-3.5" strokeWidth={2} />
          </span>
          <span>
            <span className="block font-mono text-[13px] leading-4 font-bold text-white">
              ₦120,000
            </span>
            <span className="block text-[13px] leading-4 text-muted">
              Today&apos;s sales
            </span>
          </span>
        </div>

        {/* Floating card: bottom left */}
        <div className="absolute top-[492.7px] left-[-35.7px] flex h-[55.1px] w-[179.5px] items-center gap-2.5 rounded-2xl border border-float-blue-border bg-background px-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <span className="flex size-[31px] shrink-0 items-center justify-center rounded-lg bg-float-blue-tile text-blue">
            <Users className="size-3.5" strokeWidth={2} />
          </span>
          <span>
            <span className="block font-mono text-[13px] leading-4 font-bold text-white">
              ₦12,500
            </span>
            <span className="block text-[13px] leading-4 text-muted">
              Customers owing
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
