import { useState } from "react";
import { Music, Youtube, Music2, Apple } from "lucide-react";

interface Link {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

export default function Home() {
  const [links] = useState<Link[]>([
    {
      id: "youtube",
      title: "YouTube",
      url: "https://www.youtube.com/watch?v=DDgzMvgweEg&list=RDDDgzMvgweEg&start_radio=1",
      icon: <Youtube className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800",
    },
    {
      id: "spotify",
      title: "Spotify",
      url: "https://open.spotify.com/intl-pt/track/2rtju9I726vEcTAsTBaqO8?si=698e2a23e42b48a8",
      icon: <Music2 className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      hoverColor: "hover:from-green-700 hover:to-green-800",
    },
    {
      id: "apple",
      title: "Apple Music",
      url: "https://music.apple.com/br/album/let-me-be-afro-house-remix-single/6768119149",
      icon: <Apple className="w-6 h-6" />,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
    },
    {
      id: "deezer",
      title: "Deezer",
      url: "https://link.deezer.com/s/33i00LTskdmG2mjTEASK4",
      icon: <Music className="w-6 h-6" />,
      color: "from-orange-600 to-orange-700",
      hoverColor: "hover:from-orange-700 hover:to-orange-800",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-50" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-5xl font-black text-black">Z</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">
            ZAHRO
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest">
            MUSIC
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6" />
        </div>

        {/* Links Grid */}
        <div className="w-full max-w-md space-y-4 mb-12">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative w-full
                bg-gradient-to-r ${link.color} ${link.hoverColor}
                rounded-xl p-4 md:p-5
                flex items-center justify-between
                transition-all duration-300 ease-out
                transform hover:scale-105 hover:shadow-2xl
                border border-white/10 hover:border-white/30
                overflow-hidden
              `}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 w-full">
                <div className="flex-shrink-0 text-white">
                  {link.icon}
                </div>
                <span className="text-lg md:text-xl font-semibold text-white flex-1">
                  {link.title}
                </span>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Conecte-se com ZAHRO MUSIC</p>
          <p className="mt-2 text-xs">© 2026 ZAHRO MUSIC. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
