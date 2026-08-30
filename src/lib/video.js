// "Desbloqueia" um <video> para poder ser controlado por scroll (currentTime).
// No iOS, setar currentTime só renderiza frame DEPOIS que o vídeo tocou ao menos
// uma vez — então damos um play() mudo/inline e pausamos em seguida.
// Retorna uma função de cleanup.
export function primeScrubVideo(video) {
  if (!video) return () => {};

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");

  let done = false;
  const unlock = () => {
    if (done || !video) return;
    const p = video.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        // pausa no próximo frame para o iOS "aceitar" seeks depois
        requestAnimationFrame(() => {
          try {
            video.pause();
          } catch {
            /* noop */
          }
        });
        done = true;
      }).catch(() => {
        /* tenta de novo no primeiro toque */
      });
    } else {
      try {
        video.pause();
      } catch {
        /* noop */
      }
      done = true;
    }
  };

  unlock();

  const onGesture = () => {
    unlock();
    if (done) {
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pointerdown", onGesture);
    }
  };
  window.addEventListener("touchstart", onGesture, { passive: true });
  window.addEventListener("pointerdown", onGesture, { passive: true });

  return () => {
    window.removeEventListener("touchstart", onGesture);
    window.removeEventListener("pointerdown", onGesture);
  };
}
