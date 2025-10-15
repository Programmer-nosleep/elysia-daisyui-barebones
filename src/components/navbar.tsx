import { Html } from "@elysiajs/html";
import { PropsWithChildren } from "@kitajs/html";
import ThemeToggle from "./theme-toggle";

export default function Navbar({ children }: PropsWithChildren) {
    return (
        <nav class="absolute left-1/2 -translate-x-1/2 top-4 z-50 w-11/12 sm:w-5/6 lg:w-[75vw] max-w-none p-3 md:p-4 lg:p-5 px-5 md:px-8 rounded-3xl shadow-2xl ring-1 ring-white/10 dark:bg-neutral-900/70 bg-white/70">
            <div class="flex items-center justify-between gap-3">
              <div class="flex-1">{ children }</div>
              <ThemeToggle />
            </div>
        </nav>
    );
}
