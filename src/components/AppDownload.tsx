
import { Smartphone, Star, Download, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppDownload = () => {
  return (
    <section id="download" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3">
              <Smartphone className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Download CLIC Today</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ready to Find Your
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Match?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join the video-first dating revolution. Connect with real people through live virtual events and spontaneous video chats that feel natural and authentic.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Events</h3>
              <p className="text-gray-600">Join virtual parties and meetups with real people in real-time.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video First</h3>
              <p className="text-gray-600">See and connect with people through spontaneous video chats.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Authentic</h3>
              <p className="text-gray-600">Human-reviewed profiles and double opt-in system for your safety.</p>
            </div>
          </div>

          {/* Download buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 min-w-[200px]"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 min-w-[200px]"
              >
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-green-100">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Free download • Available on iOS and Android • Start connecting today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
