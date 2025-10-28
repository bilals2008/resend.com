// File: components/common/ScrollToImage.ts

function ScrollImage({
  src,
  direction,
  index,
}: {
  src: string;
  direction: "left" | "right";
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Scroll-based parallax movement (depth effect)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  return (
    <motion.div
      ref={ref}
      variants={slideInScroll(direction)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ y }}
      className={`relative ${
        index === 1
          ? "md:rotate-2 md:right-20 md:-top-20"
          : index === 2
          ? "md:rotate-2 md:-top-40 md:left-0"
          : index === 3
          ? "md:-rotate-3 md:-top-64 md:right-20"
          : ""
      }`}
    >
      <Image
        src={src}
        alt={`FeatureCard image ${index + 1}`}
        width={600}
        height={400}
        className="rounded-2xl object-cover max-w-full"
      />
    </motion.div>
  );
}