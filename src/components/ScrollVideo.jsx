import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { primeScrubVideo } from "@/lib/video";

const MESSAGES = [
  { id: "m1", at: 0.08, text: "Manter o visual alinhado não é apenas vaidade" },
  { id: "m2", at: 0.36, text: "É orgulho. É presença." },
  { id: "m3", at: 0.63, text: "É autoestima e respeito pela sua história" },
  { id: "m4", at: 0.9, text: "Kane Barber Club — Conceito e Cultura", logo: "/logo.png" },
];

export default function ScrollVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const durationRef = useRef(0);
  const rafRef = useRef(0);
  const targetRef = useRef(0);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Fade in do vídeo ao entrar na seção (e leve fade out no fim).
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.97, 1],
    [0, 1, 1, 0.35]
  );
  const videoScale = useTransform(scrollYProgress, [0, 0.12], [1.12, 1]);

  // Scrub o vídeo seguindo o progresso do scroll (com leve suavização).
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    targetRef.current = Math.min(Math.max(p, 0), 1);
  });

  // Raspa o vídeo seguindo o progresso do scroll (com leve suavização).
  useEffect(() => {
    if (reduce) return;
    const tick = () => {
      const v = videoRef.current;
      const d = durationRef.current;
      if (v && d) {
        const want = targetRef.current * d;
        const current = v.currentTime;
        const next = current + (want - current) * 0.2;
        if (Math.abs(want - current) > 0.01 && !v.seeking) {
          v.currentTime = next;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduce]);

  const onLoadedMetadata = (e) => {
    durationRef.current = e.currentTarget.duration || 0;
    primeScrubVideo(e.currentTarget);
    setReady(true);
  };

  if (reduce) {
    return (
      <section className="border-y border-border bg-card/40 py-20">
        <div className="container max-w-4xl">
          <video
            src="/manifesto.mp4"
            controls
            muted
            playsInline
            className="w-full rounded-xl border border-border"
          />
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            {MESSAGES.map((m) =>
              m.logo ? (
                <img
                  key={m.id}
                  src={m.logo}
                  alt="Kane Barber Club"
                  className="mt-2 h-16 w-auto sm:h-20"
                />
              ) : (
                <p
                  key={m.id}
                  className="font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl"
                >
                  {m.text}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Manifesto Kane Barber Club"
      className="relative h-[340vh] bg-background"
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: videoOpacity, scale: videoScale }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            src="/manifesto.mp4"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={onLoadedMetadata}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background/80"
          aria-hidden
        />

        <div className="relative mx-auto h-[9rem] w-full max-w-4xl px-6 text-center sm:h-[12rem]">
          {MESSAGES.map((m) => (
            <Line
              key={m.id}
              progress={scrollYProgress}
              at={m.at}
              text={m.text}
              logo={m.logo}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          role para continuar
        </motion.div>

        {!ready && (
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground">
            carregando…
          </span>
        )}
      </div>
    </section>
  );
}

function Line({ progress, at, text, logo }) {
  const w = 0.16;
  const opacity = useTransform(
    progress,
    [at - w, at - w * 0.4, at + w * 0.4, at + w],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [at - w, at, at + w], [48, 0, -48]);

  if (logo) {
    return (
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-4"
      >
        <img
          src={logo}
          alt="Kane Barber Club"
          className="h-20 w-auto drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] sm:h-28 md:h-36"
        />
      </motion.div>
    );
  }

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute inset-x-0 top-1/2 mx-auto -translate-y-1/2 px-4 font-display text-3xl uppercase leading-[1.05] text-foreground [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl"
    >
      {text}
    </motion.p>
  );
}
