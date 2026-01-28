import {
  Play,
  MessageSquare,
  Layers,
  ExternalLink,
  Pause,
  Download,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const steps = [
  {
    icon: MessageSquare,
    title: "Prompt",
    description: "Describe your app idea in plain English",
  },
  {
    icon: Layers,
    title: "Build in sandbox",
    description: "AI generates working code instantly",
  },
  {
    icon: ExternalLink,
    title: "Preview URL generated",
    description: "Share and test your live app",
  },
];

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // Formatting seconds to MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const onTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <section id="product" className="pb-32 pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See it in action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how ideas become apps in seconds
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className=" items-center flex justify-center w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-full mx-auto">
          {/* Video placeholder */}
          <div className="content-card p-2 glow-primary">
            <div className="aspect-video rounded-xl bg-card-foreground/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gradient-purple/10 to-gradient-pink/10 group" />
              {/* <Button
                variant="gradient"
                size="xl"
                className="rounded-full w-20 h-20 p-0"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Demo: Building a SaaS dashboard in 60 seconds
                  </p>
                </div>
              </div> */}
              <video
                ref={videoRef}
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
              />

              {/* THUMBNAIL OVERLAY (Shows when paused) */}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Dark tint on paused thumbnail to make play button pop */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* CENTRAL PLAY BUTTON (Visible when paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white scale-95 hover:scale-105 transition-transform duration-300">
                    <Play size={40} fill="white" className="ml-1" />
                  </div>
                </div>
              )}

              {/* HOVER PLAYER CONTROLS (Visible when playing or paused) */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* SCRUBBER BAR */}
                <div className="mb-4 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300 px-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    style={{
                      background: `linear-gradient(to right, #a855f7 ${(currentTime / duration) * 100}%, #334155 ${(currentTime / duration) * 100}%)`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all active:scale-90"
                    >
                      {isPlaying ? (
                        <Pause size={20} fill="white" />
                      ) : (
                        <Play size={20} fill="white" className="ml-0.5" />
                      )}
                    </button>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {"Building a SaaS dashboard in 60 seconds"}
                      </h4>
                      <p className="text-[10px] text-slate-300 uppercase tracking-widest">
                        AI Generated Scene
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - important cards get glow hover */}
          {/* <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 content-card p-6 glow-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        {/* Value cards - clear separation from background */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-32 animate-fade-in-up delay-500">
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <img
                  className="h-full w-6"
                  src="/images/sanbox.svg"
                  alt="sanbox"
                />
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Sandbox-first
            </h3>
            <p className="text-sm text-muted-foreground">
              No infrastructure needed to start. Build and iterate freely.
            </p>
          </div>
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <img
                  className="h-full w-6"
                  src="/images/workingprev.svg"
                  alt="working preview"
                />
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Working preview every time
            </h3>
            <p className="text-sm text-muted-foreground">
              Get a functional preview URL, not just code snippets.
            </p>
          </div>
          <div className="content-card p-6 text-center glow-hover">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">
                <img
                  className="h-full w-6"
                  src="/images/iterate.svg"
                  alt="iterate chat"
                />
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Iterate by chat
            </h3>
            <p className="text-sm text-muted-foreground">
              Refine your app through natural conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
