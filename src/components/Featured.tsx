// src/components/About.tsx
import Image from 'next/image';

export default function Featured() {
    return (
      <section
        id="featured"
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/featured_project.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  
        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Project</h2>
          <p className="text-lg">
          Check out our latest commercial snow removal client in Aurora Colorado.
          </p>
        </div>
      </section>
    );
  }
  