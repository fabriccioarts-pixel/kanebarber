import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const LINES = [
  { id: "g1", at: 0.14, side: "left", top: "20%", text: "Senta na cadeira" },
  { id: "g2", at: 0.36, side: "right", top: "66%", text: "e deixa com a gente" },
  { id: "g3", at: 0.58, side: "left", top: "26%", text: "Técnica e respeito" },
  { id: "g4", at: 0.8, side: "right", top: "62%", text: "pela sua identidade" },
];

export default function ShowcaseGrow() {
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

  // O vídeo cresce e aparece conforme o scroll avança.
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.42, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.82, 1], [0, 1, 1, 0.15]);
  const radius = useTransform(scrollYProgress, [0, 0.6], [28, 14]);
  // No fim do scroll o fundo escurece 100% junto com o vídeo.
  const darken = useTransform(scrollYProgress, [0.78, 0.94], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    targetRef.current = Math.min(Math.max(p, 0), 1);
  });

  useEffect(() => {
    if (reduce) return;
    const tick = () => {
      const v = videoRef.current;
      const d = durationRef.current;
      if (v && d) {
        const want = targetRef.current * d;
        const current = v.currentTime;
        if (Math.abs(want - current) > 0.01 && !v.seeking) {
          v.currentTime = current + (want - current) * 0.2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduce]);

  const onLoadedMetadata = (e) => {
    durationRef.current = e.currentTarget.duration || 0;
    e.currentTarget.pause();
    setReady(true);
  };

  if (reduce) {
    return (
      <section
        aria-label="A experiência Kane Barber Club"
        className="relative overflow-hidden border-y border-border py-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/showcase-bg.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/80" aria-hidden />
        <div className="container relative z-10 max-w-3xl">
          <video
            src="/showcase.mp4"
            controls
            muted
            playsInline
            className="mx-auto aspect-[9/16] max-h-[80vh] w-auto max-w-full rounded-xl border border-border bg-black object-contain"
          />
          <div className="mt-8 space-y-2 text-center">
            {LINES.map((l) => (
              <p
                key={l.id}
                className="font-display text-2xl uppercase leading-tight text-foreground"
              >
                {l.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="A experiência Kane Barber Club"
      className="relative h-[320vh] border-y border-border"
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {/* Fundo: parede listrada */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/showcase-bg.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[1px]" aria-hidden />

        {/* Vídeo central que cresce */}
        <motion.div
          style={{ scale, opacity, borderRadius: radius }}
          className="relative z-10 aspect-[9/16] w-[min(92vw,46vh)] overflow-hidden border border-border bg-black shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/showcase.mp4"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={onLoadedMetadata}
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Textos que passam pela esquerda e direita */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {LINES.map((l) => (
            <SideLine key={l.id} progress={scrollYProgress} {...l} />
          ))}
        </div>

        {/* Escurecimento final sobre fundo + vídeo */}
        <motion.div
          style={{ opacity: darken }}
          className="pointer-events-none absolute inset-0 z-30 bg-background"
          aria-hidden
        />

        {!ready && (
          <span className="absolute bottom-4 right-4 z-20 text-[10px] uppercase tracking-widest text-muted-foreground">
            carregando…
          </span>
        )}
      </div>
    </section>
  );
}

function SideLine({ progress, at, side, top, text }) {
  const w = 0.15;
  const fromLeft = side === "left";
  const opacity = useTransform(
    progress,
    [at - w, at - w * 0.4, at + w * 0.4, at + w],
    [0, 1, 1, 0]
  );
  const x = useTransform(
    progress,
    [at - w, at, at + w],
    fromLeft ? [-70, 0, 40] : [70, 0, -40]
  );

  return (
    <motion.p
      style={{ opacity, x, top }}
      className={cn(
        "absolute max-w-[42vw] -translate-y-1/2 px-4 font-display text-3xl uppercase leading-[1.05] text-foreground [text-shadow:0_2px_24px_rgba(0,0,0,0.7)] sm:text-5xl md:max-w-[34vw] md:text-6xl lg:px-10",
        fromLeft ? "left-0 text-left" : "right-0 text-right"
      )}
    >
      {text}
    </motion.p>
  );
}
