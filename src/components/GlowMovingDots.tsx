const GlowMovingDots = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 bg-slate-500 rounded-full opacity-40 blur-3xl animate-glow-move`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 - 10}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GlowMovingDots;
