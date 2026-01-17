import React from 'react';
import { Mic, MicOff, Settings, Power, Video, VideoOff, Hand, Lightbulb, Printer, Globe, Box } from 'lucide-react';

const ToolsModule = ({
    isConnected,
    isMuted,
    isVideoOn,
    isHandTrackingEnabled,
    showSettings,
    onTogglePower,
    onToggleMute,
    onToggleVideo,
    onToggleSettings,

    onToggleHand,
    onToggleKasa,
    showKasaWindow,
    onTogglePrinter,
    showPrinterWindow,
    onToggleCad,
    showCadWindow,
    onToggleBrowser,
    showBrowserWindow,
    activeDragElement,

    position,
    onMouseDown
}) => {
    return (
        <div
            id="tools"
            onMouseDown={onMouseDown}
            className={`absolute px-6 py-3 transition-all duration-200 
                        backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl rounded-full`}
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'auto'
            }}
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay rounded-full"></div>

            <div className="flex justify-center gap-4 relative z-10">
                {/* Power Button */}
                <button
                    onClick={onTogglePower}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${isConnected
                        ? 'border-green-500 bg-green-500/10 text-green-500 hover:bg-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                        : 'border-white/10 bg-white/5 text-white/30 hover:border-white/30 hover:text-white/60'
                        } `}
                >
                    <Power size={26} strokeWidth={2} />
                </button>

                {/* Mute Button */}
                <button
                    onClick={onToggleMute}
                    disabled={!isConnected}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${!isConnected
                        ? 'border-white/5 text-white/10 cursor-not-allowed'
                        : isMuted
                            ? 'border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                            : 'border-cyan-400 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                        } `}
                >
                    {isMuted ? <MicOff size={26} strokeWidth={2} /> : <Mic size={26} strokeWidth={2} />}
                </button>

                {/* Video Button */}
                <button
                    onClick={onToggleVideo}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${isVideoOn
                        ? 'border-purple-500 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-purple-400 hover:text-purple-400'
                        } `}
                >
                    {isVideoOn ? <Video size={26} strokeWidth={2} /> : <VideoOff size={26} strokeWidth={2} />}
                </button>

                {/* Settings Button */}
                <button
                    onClick={onToggleSettings}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${showSettings 
                        ? 'border-pink-500 text-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.4)]' 
                        : 'border-white/10 text-white/30 hover:border-pink-400 hover:text-pink-400'
                        } `}
                >
                    <Settings size={26} strokeWidth={2} />
                </button>

                {/* Hand Tracking Toggle */}
                <button
                    onClick={onToggleHand}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${isHandTrackingEnabled
                        ? 'border-orange-500 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-orange-400 hover:text-orange-400'
                        } `}
                >
                    <Hand size={26} strokeWidth={2} />
                </button>

                {/* Kasa Light Control */}
                <button
                    onClick={onToggleKasa}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${showKasaWindow
                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 shadow-[0_0_20px_rgba(250,204,21,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-yellow-400 hover:text-yellow-400'
                        } `}
                >
                    <Lightbulb size={26} strokeWidth={2} />
                </button>

                {/* 3D Printer Control */}
                <button
                    onClick={onTogglePrinter}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${showPrinterWindow
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-emerald-500 hover:text-emerald-500'
                        } `}
                >
                    <Printer size={26} strokeWidth={2} />
                </button>

                {/* CAD Agent Toggle */}
                <button
                    onClick={onToggleCad}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${showCadWindow
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-cyan-400 hover:text-cyan-400'
                        } `}
                >
                    <Box size={26} strokeWidth={2} />
                </button>

                {/* Web Agent Toggle */}
                <button
                    onClick={onToggleBrowser}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${showBrowserWindow
                        ? 'border-blue-500 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                        : 'border-white/10 text-white/30 hover:border-blue-500 hover:text-blue-500'
                        } `}
                >
                    <Globe size={26} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
};

export default ToolsModule;
