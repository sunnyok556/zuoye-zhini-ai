export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#182636] text-[#F4F0E7]">
      <section className="relative isolate flex min-h-dvh items-center px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(145deg,#182636_0%,#243447_48%,#111A25_100%)]" />
        <div className="night-grain absolute inset-0 -z-10" />
        <div className="radio-lines absolute inset-x-0 bottom-0 -z-10 h-56 opacity-70" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl pt-2">
            <p className="mb-10 flex items-baseline gap-3 text-sm tracking-[0.22em] text-[#A9B4C4]">
              <span className="text-base font-semibold tracking-[0.18em] text-[#F4F0E7]">
                知你
              </span>
              <span className="h-px w-8 bg-[#D9B76A]/70" />
              <span>Zhini</span>
            </p>

            <h1 className="max-w-[12ch] text-5xl font-semibold leading-[1.08] tracking-normal text-[#F8F3E8] sm:text-6xl lg:text-7xl">
              今天是不是又撑了很久？
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#A9B4C4] sm:text-xl sm:leading-9">
              当现实中的人习惯给你建议和道理时，这里有人愿意先理解你的感受。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#D9B76A] px-7 text-base font-semibold text-[#172230] shadow-[0_16px_40px_rgba(217,183,106,0.18)] transition hover:bg-[#E3C77E] focus:outline-none focus:ring-2 focus:ring-[#D9B76A] focus:ring-offset-2 focus:ring-offset-[#182636]"
                href="#start"
              >
                开始陪伴
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#A9B4C4]/30 px-7 text-base font-semibold text-[#F4F0E7] transition hover:border-[#D9B76A]/70 hover:text-[#D9B76A] focus:outline-none focus:ring-2 focus:ring-[#A9B4C4] focus:ring-offset-2 focus:ring-offset-[#182636]"
                href="#companions"
              >
                认识他们
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]">
            <div className="radio-panel absolute inset-x-0 top-4 mx-auto w-full max-w-[460px] rounded-[28px] border border-[#A9B4C4]/18 bg-[#243447]/54 p-6 shadow-[0_32px_90px_rgba(0,0,0,0.34)] backdrop-blur-md sm:p-8 lg:top-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs tracking-[0.28em] text-[#A9B4C4]">
                  LATE NIGHT
                </span>
                <span className="h-2 w-2 rounded-full bg-[#D9B76A] shadow-[0_0_24px_rgba(217,183,106,0.8)]" />
              </div>

              <div className="frequency-window rounded-[18px] border border-[#D9B76A]/24 bg-[#131E2B]/72 px-5 py-7">
                <div className="mb-5 flex items-end justify-between text-[#A9B4C4]">
                  <span className="text-sm">FM</span>
                  <span className="font-mono text-3xl text-[#D9B76A]">
                    23.47
                  </span>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[
                    "30%",
                    "52%",
                    "40%",
                    "78%",
                    "55%",
                    "88%",
                    "46%",
                    "64%",
                    "36%",
                    "72%",
                    "48%",
                    "58%",
                  ].map((height, index) => (
                    <span
                      className="w-full rounded-t-full bg-[#A9B4C4]/55"
                      key={`${height}-${index}`}
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-[1fr_auto] items-end gap-6">
                <div>
                  <div className="mb-3 h-px bg-[#A9B4C4]/18" />
                  <div className="flex justify-between text-[10px] tracking-[0.18em] text-[#A9B4C4]/72">
                    <span>20</span>
                    <span>40</span>
                    <span>60</span>
                    <span>80</span>
                  </div>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-full border border-[#D9B76A]/32 bg-[#172230] shadow-inner shadow-black/40">
                  <div className="h-3 w-10 rounded-full bg-[#D9B76A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
