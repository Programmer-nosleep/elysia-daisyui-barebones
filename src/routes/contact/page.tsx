import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import { Context } from "elysia";
import Navbar from "../../components/navbar";

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
          <div class="space-y-4">
            <h1 class="text-3xl md:text-5xl font-semibold leading-tight">Contact Us</h1>
            <p class="text-neutral-600 dark:text-neutral-300 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Email, call, or complete the form — we’ll get back to you.</p>
            <div class="grid grid-cols-2 gap-6 max-w-xl">
              <div>
                <div class="text-sm text-neutral-500 dark:text-neutral-400">Email</div>
                <div class="font-medium">hello@example.com</div>
              </div>
              <div>
                <div class="text-sm text-neutral-500 dark:text-neutral-400">Phone</div>
                <div class="font-medium">+62 812-3456-7890</div>
              </div>
              <div class="col-span-2">
                <div class="text-sm text-neutral-500 dark:text-neutral-400">Address</div>
                <div class="font-medium">Surabaya, Indonesia</div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl ring-1 ring-black/10 dark:ring-white/10 bg-white/70 dark:bg-neutral-900/70 shadow-2xl p-6 md:p-7 backdrop-blur">
              <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
              <form class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm mb-1 text-neutral-600 dark:text-neutral-300">Name</label>
                    <input type="text" placeholder="Your name" class="w-full rounded-xl bg-white/80 dark:bg-neutral-800/80 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/60 shadow-sm" />
                  </div>
                  <div>
                    <label class="block text-sm mb-1 text-neutral-600 dark:text-neutral-300">Email</label>
                    <input type="email" placeholder="you@email.com" class="w-full rounded-xl bg-white/80 dark:bg-neutral-800/80 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/60 shadow-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm mb-1 text-neutral-600 dark:text-neutral-300">Comment</label>
                  <textarea rows="5" placeholder="Write your message..." class="w-full rounded-2xl bg-white/80 dark:bg-neutral-800/80 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/60 shadow-sm"></textarea>
                </div>
                <div class="pt-2">
                  <button type="submit" class="btn rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-2xl w-full md:w-auto">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}