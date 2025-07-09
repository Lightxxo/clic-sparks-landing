"use client"

import { Smartphone, Star, Download, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

const AppDownload = () => {
  return (
    <section id="download" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-gold-200/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full px-6 py-3 border border-pink-200">
              <Smartphone className="w-5 h-5" style={{ color: "#F05A23" }} />
              <span style={{ color: "#031E59" }} className="font-medium">
                Download CLIC Today
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: "#031E59" }}>
              Ready to Find Your
              <br />
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #CDA0C3, #F05A23)`,
                }}
              >
                Perfect Match?
              </span>
            </h2>

            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#031E59" }}>
              Join the video-first dating revolution. Connect with real people through live virtual events and
              spontaneous video chats that feel natural and authentic.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div
              className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 border-2"
              style={{ borderColor: "#CDA0C3" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: `linear-gradient(to right, #CDA0C3, #F05A23)` }}
              >
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#031E59" }}>
                Live Events
              </h3>
              <p style={{ color: "#031E59" }}>Join virtual parties and meetups with real people in real-time.</p>
            </div>

            <div
              className="bg-gradient-to-br from-orange-50 to-gold-50 rounded-2xl p-6 border-2"
              style={{ borderColor: "#F05A23" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: `linear-gradient(to right, #F05A23, #B46E28)` }}
              >
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#031E59" }}>
                Video First
              </h3>
              <p style={{ color: "#031E59" }}>See and connect with people through spontaneous video chats.</p>
            </div>

            <div
              className="bg-gradient-to-br from-green-50 to-pink-50 rounded-2xl p-6 border-2"
              style={{ borderColor: "#005A2D" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: `linear-gradient(to right, #005A2D, #CDA0C3)` }}
              >
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#031E59" }}>
                Safe & Authentic
              </h3>
              <p style={{ color: "#031E59" }}>Human-reviewed profiles and double opt-in system for your safety.</p>
            </div>
          </div>

          {/* Download buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-white px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 min-w-[200px]"
                style={{ backgroundColor: "#031E59" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#041f5f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#031E59")}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs" style={{ color: "#C4C4C4" }}>
                    Download on the
                  </div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </Button>

              <Button
                size="lg"
                className="text-white px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 min-w-[200px]"
                style={{ backgroundColor: "#005A2D" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#006633")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#005A2D")}
              >
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span style={{ color: "#005A2D" }} className="font-bold text-xs">
                    ▶
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-green-100">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <p className="text-sm" style={{ color: "#C4C4C4" }}>
              Free download • Available on iOS and Android • Start connecting today
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
