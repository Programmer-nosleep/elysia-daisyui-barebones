import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import { Context } from "elysia";
import Navbar from "../../components/navbar";
import Terminal from "../../components/terminal";

export default async ( context: Context ) => {
  return (
    <DefaultLayout>
      <div class="app-loader"></div>
      <Navbar>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="size-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-2xl ring-1 ring-white/10" />
            <span class="font-semibold tracking-tight text-lg">Portfolio</span>
          </div>
          <div class="hidden md:flex items-center gap-2 text-sm">
            <a href="/" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Home</a>
            <a href="/projects" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Projects</a>
            <a href="/contact" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Contact</a>
          </div>
          <div class="flex items-center gap-3">
            <a href="#cv" class="btn btn-sm rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg">Download CV</a>
          </div>
        </div>
      </Navbar>

      <main class="mx-auto w-11/12 sm:w-5/6 lg:w-[75vw] max-w-none px-6 pb-16 pt-24 md:pt-28">
        <section class="relative grid items-center gap-8 md:gap-10 xl:grid-cols-2 min-h-[calc(100vh-6rem)]">

          <div class="space-y-6 relative z-10">
            <h1 class="text-3xl md:text-5xl font-semibold leading-tight reveal">
              Hi, I’m <span class="text-silver">Ahmad Zani Syechkar</span>
            </h1>
            <p class="text-neutral-300 max-w-xl reveal reveal-delay-1">
              I’m a web developer building full‑stack applications end‑to‑end. In my spare time, I study low‑level topics and operating system internals.
            </p>
            <div class="flex flex-wrap items-center gap-3 reveal reveal-delay-2">
              <a href="#hire" class="btn rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-2xl">Hire Me</a>
              <a href="#projects" class="btn rounded-2xl bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-xl">View Projects</a>
            </div>
          </div>

          <div class="relative z-10 reveal reveal-delay-3">
            <Terminal
              title="ahmadzanisy — zsh — 80×24"
              colsClass="cols-100"
              rowsClass="rows-24"
              loginAt="Wed Oct 15 08:17:50"
              sequence={{
                clearAtSec: 0,
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
                      { text: "-- Detecting C compiler ABI info - done", delaySec: 0.2 },
                      { text: "-- Found Clang: /usr/bin/clang (>= 15.0)", delaySec: 1.2 },
                      { text: "-- Configuring done", delaySec: 2.4 },
                      { text: "-- Generating done", delaySec: 3.2 },
                      { text: "-- Build files have been written to: ./build", delaySec: 4.0 },
                    ],
                  },
                  {
                    cmd: "make -j8",
                    cmdDelaySec: 9.2,
                    cmdDurationSec: 0.8,
                    holdSec: 0.6,
                    caretHoldSec: 0.6,
                    out: [
                      { text: "[ 25%] Compiling src/core/syscall.c", delaySec: 2.8 },
                      { text: "[ 50%] Compiling src/runtime/scheduler.c", delaySec: 4.0 },
                      { text: "[ 75%] Linking C executable app", delaySec: 5.2 },
                      { text: "[100%] Built target app", delaySec: 6.6 },
                      { text: "role: Software Engineer · Solo Low-Level", delaySec: 7.4 },
                    ],
                  },
                  {
                    cmd: "./app --demo",
                    cmdDelaySec: 18.2,
                    cmdDurationSec: 1.0,
                    holdSec: 0.8,
                    caretHoldSec: 0.8,
                    out: [
                      { text: "Starting app...", delaySec: 0.2 },
                      { text: "Listening on http://localhost:3000", delaySec: 1.2 },
                      { text: "Hello from app!", delaySec: 2.2 },
                    ],
                  },
                ],
              }}
            />
          </div>
        </section>

        <section id="projects" class="mt-14 grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl p-5 bg-white/5 ring-1 ring-white/10 shadow-2xl">
            <h3 class="font-semibold mb-1">Featured Project</h3>
            <p class="text-sm text-neutral-300">Elysia + Bun API with blazing fast response time.</p>
          </div>
          <div class="rounded-3xl p-5 bg-white/5 ring-1 ring-white/10 shadow-2xl">
            <h3 class="font-semibold mb-1">UI Kit</h3>
            <p class="text-sm text-neutral-300">DaisyUI components with Level 3 visual style.</p>
          </div>
        </section>
      </main>

      <script>
        {`
          document.addEventListener('DOMContentLoaded', function () {
            requestAnimationFrame(function(){
              document.body.classList.add('is-ready');
            });
          });
        `}
      </script>
    </DefaultLayout>
  );
};

