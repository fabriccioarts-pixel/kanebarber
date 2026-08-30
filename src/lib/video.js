// Desktop com mouse => dá pra "raspar" o vídeo pelo scroll (setando currentTime).
// Touch / iOS => setar currentTime de vídeo pausado quase não renderiza frame,
// então usamos autoplay em loop (mudo + inline), que o iOS reproduz sem problema.
export function canScrubVideo() {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

// Garante que um <video> toque inline no iOS (mudo + playsInline + retry no 1º toque).
export function primeInlineVideo(video) {
  if (!video) return () => {};
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  tryPlay();
  const onFirstTouch = () => {
    tryPlay();
    window.removeEventListener("touchstart", onFirstTouch);
    window.removeEventListener("pointerdown", onFirstTouch);
  };
  window.addEventListener("touchstart", onFirstTouch, { passive: true });
  window.addEventListener("pointerdown", onFirstTouch, { passive: true });

  return () => {
    window.removeEventListener("touchstart", onFirstTouch);
    window.removeEventListener("pointerdown", onFirstTouch);
  };
}
