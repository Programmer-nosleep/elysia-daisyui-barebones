import { Html } from "@elysiajs/html";

type TerminalProps = {
  title?: string;
  colsClass?: string;
  rowsClass?: string;
  loginAt?: string;
  sequence?: {
    pre: Array<{
      prompt?: string;
      cmd?: string;
      cmdDelaySec?: number;
      cmdDurationSec?: number;
      holdSec?: number;
      caretHoldSec?: number;
      out?: Array<{ text: string; delaySec: number; durationSec?: number }>;
    }>;
    clearAtSec?: number;
    post?: Array<{
      prompt?: string;
      cmd?: string;
      cmdDelaySec?: number;
      cmdDurationSec?: number;
      holdSec?: number;
      caretHoldSec?: number;
      out?: Array<{ text: string; delaySec: number; durationSec?: number }>;
    }>;
  };
};

export default function Terminal({
  title = "ahmadzanisy — zsh — 80×24",
  colsClass = "cols-100",
  rowsClass = "rows-24",
  loginAt = Date.now().toString(),
  sequence,
}: TerminalProps) {
  const pre = sequence?.pre ?? [];
  const post = sequence?.post ?? [];
  const clearAt = sequence?.clearAtSec ?? 0;
  const preFadeOutDelay = clearAt > 0 ? `--d:${clearAt}s` : undefined;
  const postFadeInDelay = clearAt > 0 ? `--d:${clearAt + 0.2}s` : undefined;

  // compute total animation duration for auto-scroll window
  function calcTotalSec() {
    let maxSec = 0;
    const scan = (steps: Array<{ cmdDelaySec?: number; cmdDurationSec?: number; holdSec?: number; out?: Array<{ delaySec: number; durationSec?: number }>;}>) => {
      for (const s of steps) {
        const base = (s.cmdDelaySec ?? 0) + (s.cmdDurationSec ?? 1.2) + (s.holdSec ?? 0);
        maxSec = Math.max(maxSec, base);
        if (s.out) {
          for (const o of s.out) {
            const t = base + (o.delaySec ?? 0) + (o.durationSec ?? 0.6);
            maxSec = Math.max(maxSec, t);
          }
        }
      }
    };
    scan(pre);
    scan(post);
    // also account for clear switch if any
    maxSec = Math.max(maxSec, clearAt > 0 ? clearAt + 0.5 : 0);
    return maxSec;
  }
  const totalMs = Math.ceil(calcTotalSec() * 1000) + 800; // small buffer

  return (
    <div class="terminal">
      <div class="terminal-header">
        <div class="traffic-lights">
          <span class="red" />
          <span class="yellow" />
          <span class="green" />
        </div>
        <div class="terminal-title">{title}</div>
      </div>
      <div class={["terminal-body", colsClass, rowsClass, "overflow-y-auto"].join(" ")} data-autoscroll-ms={totalMs}>
        <div class={clearAt ? "pre-clear fade-out" : "pre-clear"} style={preFadeOutDelay ? preFadeOutDelay : undefined}>
          <div>Last login: {loginAt} on console</div>
          {pre.map((step) => {
            const cmdDelay = step.cmdDelaySec ?? 0;
            const cmdDur = step.cmdDurationSec ?? 1.2;
            const base = cmdDelay + cmdDur + (step.holdSec ?? 0); 
            const caretHide = cmdDur + (step.caretHoldSec ?? step.holdSec ?? 0);
            return (
              <>
                <div>
                  {step.prompt ? <span>{step.prompt} </span> : null}
                  {step.cmd ? (
                    <span
                      class="typewriter"
                      style={`--d:${cmdDelay}s; animation-duration:${cmdDur}s`}
                    >
                      {step.cmd}
                    </span>
                  ) : null}
                  {step.cmd ? (
                    <span class="caret caret-auto" style={`--start:${cmdDelay}s; --hide:${caretHide}s`} />
                  ) : null}
                </div>
                {(step.out ?? []).map((o) => (
                  <div>
                    <span
                      class="typewriter"
                      style={`--d:${base + (o.delaySec ?? 0)}s; animation-duration:${(o.durationSec ?? 0.6)}s`}
                    >
                      {o.text}
                    </span>
                  </div>
                ))}
              </>
            );
          })}
        </div>
        <div class={clearAt ? "post-clear fade-in" : "post-clear"} style={postFadeInDelay ? postFadeInDelay : undefined}>
          {post.map((step) => {
            const cmdDelay = step.cmdDelaySec ?? 0;
            const cmdDur = step.cmdDurationSec ?? 1.2;
            const base = cmdDelay + cmdDur + (step.holdSec ?? 0);
            const caretHide = cmdDur + (step.caretHoldSec ?? step.holdSec ?? 0);
            return (
              <>
                <div>
                  {step.prompt ? <span>{step.prompt} </span> : null}
                  {step.cmd ? (
                    <span
                      class="typewriter"
                      style={`--d:${cmdDelay}s; animation-duration:${cmdDur}s`}
                    >
                      {step.cmd}
                    </span>
                  ) : null}
                  {step.cmd ? (
                    <span class="caret caret-auto" style={`--start:${cmdDelay}s; --hide:${caretHide}s`} />
                  ) : null}
                </div>
                {(step.out ?? []).map((o) => (
                  <div>
                    <span
                      class="typewriter"
                      style={`--d:${base + (o.delaySec ?? 0)}s; animation-duration:${(o.durationSec ?? 0.6)}s`}
                    >
                      {o.text}
                    </span>
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
      <script>
        {`
          (function(){
            var root = (document.currentScript && document.currentScript.previousElementSibling) || null;
            if (!root) return;
            var body = root.querySelector('.terminal-body');
            if (!body) return;
            var endAt = Date.now() + (parseInt(body.getAttribute('data-autoscroll-ms')||'0',10) || 0);
            function tick(){
              try { body.scrollTop = body.scrollHeight; } catch(e){}
              if (Date.now() < endAt) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          })();
        `}
      </script>
    </div>
  );
}
