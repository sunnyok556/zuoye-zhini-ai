const tiredWords = [
  "别人都能坚持，怎么就你不行？",
  "别想那么多，睡一觉就好了。",
  "你就是压力太大了，爱胡思乱想。",
  "当妈的，哪有不辛苦的。",
];

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#182636] text-[#F4F0E7]">
      <section className="relative isolate flex min-h-dvh items-center px-6 py-6 sm:px-10 sm:py-8 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(145deg,#182636_0%,#243447_48%,#111A25_100%)]" />
        <div className="night-grain absolute inset-0 -z-10" />
        <div className="radio-lines absolute inset-x-0 bottom-0 -z-10 h-24 opacity-35 sm:h-28 lg:h-32" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-7 sm:gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl pt-2">
            <p className="mb-7 flex items-baseline gap-3 text-sm tracking-[0.22em] text-[#A9B4C4] sm:mb-10">
              <span className="text-base font-semibold tracking-[0.18em] text-[#F4F0E7]">
                知你
              </span>
              <span className="h-px w-8 bg-[#D9B76A]/70" />
              <span>Zhini</span>
            </p>

            <h1 className="max-w-[12ch] text-4xl font-semibold leading-[1.08] tracking-normal text-[#F8F3E8] sm:text-6xl lg:text-7xl">
              今天是不是又撑了很久？
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#A9B4C4] sm:mt-7 sm:text-xl sm:leading-9">
              当现实中的人习惯给你建议和道理时，这里有人愿意先理解你的感受。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
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

          <div className="relative min-h-0 lg:min-h-[520px]">
            <div className="radio-panel relative mx-auto w-full max-w-[430px] rounded-[22px] border border-[#A9B4C4]/18 bg-[#243447]/54 p-4 shadow-[0_32px_90px_rgba(0,0,0,0.34)] backdrop-blur-md sm:max-w-[460px] sm:rounded-[28px] sm:p-8 lg:absolute lg:inset-x-0 lg:top-8">
              <div className="mb-5 flex items-center justify-between sm:mb-8">
                <span className="text-xs tracking-[0.28em] text-[#A9B4C4]">
                  LATE NIGHT
                </span>
                <span className="h-2 w-2 rounded-full bg-[#D9B76A] shadow-[0_0_24px_rgba(217,183,106,0.8)]" />
              </div>

              <div className="frequency-window rounded-[14px] border border-[#D9B76A]/24 bg-[#131E2B]/72 px-4 py-4 sm:rounded-[18px] sm:px-5 sm:py-7">
                <div className="mb-4 flex items-end justify-between text-[#A9B4C4] sm:mb-5">
                  <span className="text-sm">FM</span>
                  <span className="font-mono text-3xl text-[#D9B76A]">
                    23.47
                  </span>
                </div>
                <div className="flex h-14 items-end gap-1.5 sm:h-24 sm:gap-2">
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

              <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4 sm:mt-8 sm:gap-6">
                <div>
                  <div className="mb-3 h-px bg-[#A9B4C4]/18" />
                  <div className="flex justify-between text-[10px] tracking-[0.18em] text-[#A9B4C4]/72">
                    <span>20</span>
                    <span>40</span>
                    <span>60</span>
                    <span>80</span>
                  </div>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full border border-[#D9B76A]/32 bg-[#172230] shadow-inner shadow-black/40 sm:h-20 sm:w-20">
                  <div className="h-2.5 w-7 rounded-full bg-[#D9B76A] sm:h-3 sm:w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-dvh items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#182636_0%,#1D2C3D_52%,#14202D_100%)]" />
        <div className="night-grain absolute inset-0 -z-10 opacity-60" />

        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-5 text-xs tracking-[0.28em] text-[#D9B76A]/80">
              MIDNIGHT ECHO
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#F8F3E8] sm:text-5xl">
              这些话，你是不是也听累了？
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#D9B76A]/60 via-[#A9B4C4]/18 to-transparent sm:left-5" />
            <div className="space-y-5 pl-9 sm:space-y-6 sm:pl-14">
              {tiredWords.map((word) => (
                <p
                  className="relative rounded-[2px] border-l border-[#A9B4C4]/18 bg-[#243447]/28 px-5 py-4 text-lg leading-8 text-[#A9B4C4] shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:text-xl sm:leading-9"
                  key={word}
                >
                  <span className="absolute -left-[34px] top-6 h-2.5 w-2.5 rounded-full bg-[#D9B76A] shadow-[0_0_22px_rgba(217,183,106,0.65)] sm:-left-[50px]" />
                  {word}
                </p>
              ))}
            </div>

            <div className="mt-14 max-w-2xl border-t border-[#A9B4C4]/16 pt-8">
              <p className="text-2xl font-semibold leading-relaxed text-[#F4F0E7] sm:text-3xl">
                也许不是你太敏感。
              </p>
              <p className="mt-3 text-xl leading-relaxed text-[#A9B4C4] sm:text-2xl">
                只是很久没有人认真听你说话了。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
