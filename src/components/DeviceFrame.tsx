import React from 'react';
import { DeviceType } from './PrototypeBar';
import { Wifi, Battery, Signal } from 'lucide-react';

interface DeviceFrameProps {
  device: DeviceType;
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ device, children }) => {
  if (device === 'desktop') {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  if (device === 'tablet') {
    return (
      <div className="py-10 px-4 flex justify-center bg-slate-900/40 min-h-screen overflow-x-auto">
        <div className="w-[768px] shrink-0 bg-slate-800 rounded-[38px] p-4 shadow-2xl border-4 border-slate-700/80 ring-1 ring-white/10 flex flex-col">
          {/* Tablet Camera & Speaker */}
          <div className="h-4 flex items-center justify-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-950/80 border border-slate-700" />
            <div className="w-8 h-1 rounded-full bg-slate-700/60" />
          </div>

          {/* Screen Content */}
          <div className="bg-[#FDFDFC] rounded-[24px] overflow-y-auto max-h-[920px] shadow-inner text-[#1A1E24]">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Mobile Device Frame (iPhone style, 390px width)
  return (
    <div className="py-10 px-4 flex justify-center bg-slate-900/40 min-h-screen overflow-x-auto">
      <div className="w-[390px] shrink-0 bg-[#1A1E24] rounded-[52px] p-3.5 shadow-2xl border-[5px] border-slate-700 ring-1 ring-white/20 flex flex-col">
        {/* Dynamic Island / Notch */}
        <div className="h-7 bg-transparent flex items-center justify-between px-6 text-[10px] text-white font-medium mb-1">
          <span>9:41</span>
          <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
          </div>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3 h-3 text-white" />
            <Wifi className="w-3 h-3 text-white" />
            <Battery className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Screen Container */}
        <div className="bg-[#FDFDFC] rounded-[38px] overflow-y-auto max-h-[820px] shadow-inner text-[#1A1E24] relative">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="h-4 flex items-center justify-center pt-2">
          <div className="w-32 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
