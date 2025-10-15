import { Html } from "@elysiajs/html";

export default function ThemeToggle() {
  return (
    <div class="theme-toggle">
      <button id="theme-toggle-btn" class="btn btn-sm rounded-xl border border-white/20 dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 text-current shadow-lg flex items-center gap-2">
        <span class="dark:inline hidden" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        </span>
        <span class="dark:hidden inline" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </span>
        <span class="text-xs">Theme</span>
      </button>
      <script>{`
        (function(){
          var btn = document.getElementById('theme-toggle-btn');
          if(!btn) return;
          function setTheme(mode){
            var root = document.documentElement;
            if(mode==='dark'){ root.classList.add('dark'); localStorage.setItem('theme','dark'); }
            else { root.classList.remove('dark'); localStorage.setItem('theme','light'); }
          }
          btn.addEventListener('click', function(){
            var isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
          });
        })();
      `}</script>
    </div>
  );
}
