import { SplashCursor } from "@/components/ui/splash-cursor"

export function SplashDemo() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SplashCursor />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          Splash Cursor
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">
          Move your cursor around to create beautiful fluid dynamics. Click and drag to generate colorful particle effects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Interactive</h3>
            <p className="text-white/70">
              Responds to mouse movement and touch gestures with real-time physics simulation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">WebGL Powered</h3>
            <p className="text-white/70">
              High-performance fluid dynamics using advanced WebGL shaders and computations.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Customizable</h3>
            <p className="text-white/70">
              Adjust simulation parameters, colors, and effects to match your design needs.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-sm text-white/60">
          <p>Try clicking and dragging to create splashes • Mobile touch supported</p>
        </div>
      </div>
    </div>
  )
}