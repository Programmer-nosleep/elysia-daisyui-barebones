import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import Navbar from "../../components/navbar";
import { Context } from "elysia";

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
            <a href="/projects" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Projects</a>
            <a href="/contact" class="btn btn-sm rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 shadow-lg">Contact</a>
          </div>
          <div class="flex items-center gap-3">
            <a href="#cv" class="btn btn-sm rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg">Download CV</a>
          </div>
        </div>
      </Navbar>

      <main class="mx-auto w-11/12 sm:w-5/6 lg:w-[75vw] max-w-none px-6 pb-16 pt-24 md:pt-28">
        <section class="mt-16">
          <header class="mb-6">
            <h2 class="text-2xl md:text-3xl font-semibold">Portfolio Website</h2>
            <p class="text-neutral-300 mt-2 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </header>

          <div class="masonry columns-1 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5">
            <article class="masonry-card">
              <div class="masonry-media h-72"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project A</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-[22rem]"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project B</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-64"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project C</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-[28rem]"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project D</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-80"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project E</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-[24rem]"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project F</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              </div>
            </article>
            <article class="masonry-card">
              <div class="masonry-media h-[30rem]"></div>
              <div class="masonry-body">
                <h3 class="font-medium mb-1">Project G</h3>
                <p class="text-sm text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};