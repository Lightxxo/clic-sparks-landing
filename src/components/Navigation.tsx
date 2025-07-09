import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Header_Logo.svg"
              alt="CLIC Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#download" className="text-white/90 hover:text-white transition-colors font-medium">
              Download
            </a>
            <Button
              variant="outline"
              className="bg-navy/90 border-2 border-white text-white hover:bg-navy px-6 py-2 font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
