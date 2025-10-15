import { Html } from "@elysiajs/html";

export default function CMatrixBackground() {
  return (
    <div class="cmatrix-bg" aria-hidden="true">
      <canvas id="cmatrix-canvas"></canvas>
      <script>
        {`
          (function(){
            var root = document.currentScript && document.currentScript.parentElement; if(!root) return;
            var canvas = root.querySelector('#cmatrix-canvas'); if(!canvas) return;
            var ctx = canvas.getContext('2d'); if(!ctx) return;
            var dpr = Math.max(1, Math.min(2, window.devicePixelRatio||1));
            var stop = false;
            var columns = 0, drops = [];
            var chars = 'アカサタナハマヤラワｱｲｳｴｵABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            function size(){
              var w = root.clientWidth, h = root.clientHeight;
              canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
              canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
              ctx.setTransform(dpr,0,0,dpr,0,0);
              var fontSize = 14; ctx.font = fontSize+'px ui-monospace,monospace';
              columns = Math.ceil(w / fontSize);
              drops = Array.from({length: columns}, function(_,i){ return Math.floor(Math.random()*-40); });
            }
            function draw(){
              if (stop) return;
              ctx.fillStyle = 'rgba(2,6,23,0.20)';
              ctx.fillRect(0,0,canvas.width/dpr,canvas.height/dpr);
              ctx.save();
              ctx.shadowColor = 'rgba(34,197,94,0.35)';
              ctx.shadowBlur = 6;
              ctx.fillStyle = 'rgba(34,197,94,0.65)';
              var fontSize = 14; ctx.font = fontSize+'px ui-monospace,monospace';
              for (var i=0; i<drops.length; i++){
                var x = i * fontSize;
                var y = drops[i] * fontSize;
                var ch = chars[Math.floor(Math.random()*chars.length)];
                ctx.fillText(ch, x, y);
                if (y > (canvas.height/dpr) && Math.random() > 0.975) drops[i] = Math.floor(Math.random()*-30);
                drops[i]++;
              }
              ctx.restore();
              requestAnimationFrame(draw);
            }
            size();
            var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (!mq.matches) requestAnimationFrame(draw);
            window.addEventListener('resize', size);
            document.addEventListener('visibilitychange', function(){ stop = document.hidden; if(!stop) requestAnimationFrame(draw); });
          })();
        `}
      </script>
    </div>
  );
}
