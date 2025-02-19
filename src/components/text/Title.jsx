export default function Title({ children, className = '' }) {
  return (
      <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-[Pixelify_Sans] ${className}`}>
          {children}
      </h1>
  );
}
