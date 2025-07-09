"use client"

import { Play, Users, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden pt-20"
      style={{
        background: `linear-gradient(to bottom right, #CDA0C3, #F05A23, #B46E28)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "#CDA0C3", opacity: 0.2 }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "#F05A23", opacity: 0.15 }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ backgroundColor: "#B46E28", opacity: 0.1 }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left side - Main content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" style={{ color: "#B46E28" }} />
              <span style={{ color: "#031E59" }}>The Future of Dating is Here</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg" style={{ color: "#FFFFFF" }}>
              Meet Real People,
              <br />
              <span style={{ color: "#FFFFFF" }}>Not Profiles</span>
            </h1>

            <p
              className="text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium drop-shadow-md"
              style={{ color: "rgba(255, 255, 255, 0.95)" }}
            >
              CLIC reimagines online dating with live virtual events and spontaneous video chats. Experience the magic
              of real connections, just like meeting someone at a party.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#031E59",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
                style={{
                  backgroundColor: "rgba(3, 30, 89, 0.9)",
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#031E59")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(3, 30, 89, 0.9)")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative max-w-md mx-auto">
              {/* Main phone mockup */}
              <div className="rounded-[3rem] p-2 shadow-2xl" style={{ backgroundColor: "#031E59" }}>
                {/* Phone screen - should be light like a real screen */}
                <div className="rounded-[2.5rem] p-6 relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
                  {/* App header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#CDA0C3" }}></div>
                      <span className="font-semibold text-sm" style={{ color: "#031E59" }}>
                        CLIC
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#C4C4C4" }}></div>
                  </div>

                  {/* Mock video chat interface */}
                  <div className="space-y-4">
                    {/* Coffee chat card - using brand colors with proper contrast */}
                    <div
                      className="rounded-2xl p-4 text-white shadow-lg"
                      style={{
                        background: `linear-gradient(to right, #CDA0C3, #F05A23)`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-8 h-8 rounded-full animate-pulse flex items-center justify-center"
                          style={{ backgroundColor: "#005A2D" }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFFFFF" }}></div>
                        </div>
                        <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                          Live Event: Coffee Chat
                        </span>
                      </div>
                      {/* Video area - darker but with proper contrast */}
                      <div
                        className="aspect-video rounded-xl flex items-center justify-center border-2"
                        style={{
                          backgroundColor: "rgba(3, 30, 89, 0.2)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <Users className="w-12 h-12 animate-pulse" style={{ color: "#FFFFFF" }} />
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="flex justify-center">
                      <Button
                        className="rounded-full w-16 h-16 p-0 shadow-lg transition-all duration-300"
                        style={{ backgroundColor: "#CDA0C3" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B888AA")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#CDA0C3")}
                      >
                        <Heart className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 rounded-full p-3 shadow-lg animate-bounce"
                style={{ backgroundColor: "#B46E28" }}
              >
                <Sparkles className="w-6 h-6" style={{ color: "#FFFFFF" }} />
              </div>
              <div
                className="absolute -bottom-4 -left-4 rounded-full p-3 shadow-lg animate-bounce delay-1000"
                style={{ backgroundColor: "#005A2D" }}
              >
                <Heart className="w-6 h-6" style={{ color: "#FFFFFF" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[1px]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
