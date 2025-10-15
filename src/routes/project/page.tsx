import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import Navbar from "../../components/navbar";
import { Context } from "elysia";
import Terminal from "../../components/terminal";

export default async ( context: Context ) => {
  return (
    <DefaultLayout>
      <Navbar>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="size-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-2xl ring-1 ring-white/10" />
            <span class="font-semibold tracking-tight text-lg">Portfolio</span>
          </div>
          <div class="hidden md:flex items-center gap-2 text-sm">
            <a href="/" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Home</a>
            <a href="#projects" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Projects</a>
            <a href="/contact" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Contact</a>
          </div>
          <div class="flex items-center gap-3">
            <a href="#cv" class="btn btn-sm rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg">Download CV</a>
          </div>
        </div>
      </Navbar>

      <main class="mx-auto w-11/12 sm:w-5/6 lg:w-[75vw] max-w-none px-6 pb-16 pt-24 md:pt-28">
        <section class="relative grid items-center gap-8 md:gap-10 lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
          <div class="space-y-6">
            <h1 class="text-3xl md:text-5xl font-semibold leading-tight">
              Hi, I’m <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">Elysia</span> Developer
            </h1>
            <p class="text-neutral-300 max-w-xl">
              Building fast backends with Elysia and crafting smooth, ergonomic UIs with Tailwind and DaisyUI.
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <a href="#hire" class="btn rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-2xl">Hire Me</a>
              <a href="#projects" class="btn rounded-2xl bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-xl">View Projects</a>
            </div>
          </div>

          <div class="relative">
            <Terminal
              title="ahmadzanisy — zsh — 80×24"
              colsClass="cols-100"
              rowsClass="rows-24"
              loginAt="Wed Oct 15 08:17:50"
              sequence={{
                clearAtSec: 18.2,
                pre: [
                  {
                    prompt: "ahmadzanisy@neovecs-iMac-Pro ~ %",
                    cmd: "mkdir build && cd build",
                    cmdDelaySec: 0.8,
                    cmdDurationSec: 1.2,
                    holdSec: 0.6,
                    caretHoldSec: 0.6,
                  },
                  {
                    cmd: "cmake .. -DCMAKE_BUILD_TYPE=Release",
                    cmdDelaySec: 2.9,
                    cmdDurationSec: 1.8,
                    holdSec: 0.6,
                    caretHoldSec: 0.6,
                    out: [
                      { text: "-- Detecting C compiler ABI info - done", delaySec: 0.2, durationSec: 0.45 },
                      { text: "-- Found Clang: /usr/bin/clang (>= 15.0)", delaySec: 1.2, durationSec: 0.5 },
                      { text: "-- Configuring done", delaySec: 2.4, durationSec: 0.45 },
                      { text: "-- Generating done", delaySec: 3.2, durationSec: 0.45 },
                      { text: "-- Build files have been written to: ./build", delaySec: 4.0, durationSec: 0.55 },
                    ],
                  },
                  {
                    cmd: "make -j8",
                    cmdDelaySec: 9.6,
                    cmdDurationSec: 0.8,
                    holdSec: 0.6,
                    caretHoldSec: 0.6,
                    out: [
                      { text: "[ 25%] Compiling src/core/syscall.c", delaySec: 2.8, durationSec: 0.5 },
                      { text: "[ 50%] Compiling src/runtime/scheduler.c", delaySec: 4.0, durationSec: 0.5 },
                      { text: "[ 75%] Linking C executable app", delaySec: 5.2, durationSec: 0.5 },
                      { text: "[100%] Built target app", delaySec: 6.6, durationSec: 0.5 },
                      { text: "role: Software Engineer · Solo Low-Level", delaySec: 7.4, durationSec: 0.5 },
                    ],
                  },
                  {
                    cmd: "clear",
                    cmdDelaySec: 16.0,
                    cmdDurationSec: 0.6,
                    holdSec: 0.4,
                  },
                ],
                post: [
                  {
                    prompt: "ahmadzanisy@neovecs-iMac-Pro ~ %",
                    cmd: "echo \"Hello,  World!\"",
                    cmdDelaySec: 18.4,
                    cmdDurationSec: 1.0,
                    holdSec: 0.2,
                    out: [{ text: "Hello,  World!", delaySec: 0.2 }],
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};