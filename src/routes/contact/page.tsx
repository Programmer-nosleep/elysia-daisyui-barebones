import { Html } from "@elysiajs/html";
import DefaultLayout from "../../components/layout/default";
import { Context } from "elysia";
import Navbar from "../../components/navbar";

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
        </DefaultLayout>
    );
}