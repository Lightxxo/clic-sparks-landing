import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/12660c36-1b8c-4332-9c59-82d0869ab1f0.png"
              alt="CLIC Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#download"
              className="text-white/80 hover:text-white transition-colors"
            >
              Download
            </a>
            <Button
              variant="outline"
              className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 backdrop-blur-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
