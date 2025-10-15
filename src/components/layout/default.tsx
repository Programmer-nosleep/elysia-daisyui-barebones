import { Html } from "@elysiajs/html";
import { PropsWithChildren } from "@kitajs/html";

export default ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <meta name="description" content="Ban" />
        <link rel="stylesheet" href="/index.css" />
        <script>{`
          (function(){
            try {
              var ls = localStorage.getItem('theme');
              var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (ls === 'dark' || (!ls && prefersDark)) document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch(e) {}
          })();
        `}</script>
      </head>
      <body class="bg-white text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 antialiased min-h-screen">
        <div class="edge-stripes edge-left edge-align-left"></div>
        {/* layout frame borders (left, right, bottom) */}
        <div class="pointer-events-none fixed left-1/2 -translate-x-1/2 top-0 bottom-0 w-11/12 sm:w-5/6 lg:w-[75vw] max-w-none border-l border-r border-b border-gray-100 dark:border-white/10 rounded-b-1"></div>
        {children}
        <div class="edge-stripes edge-right edge-align-right"></div>
      </body>
    </html>
  );
};
