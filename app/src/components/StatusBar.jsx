import React from 'react';
import { Signal, Wifi, BatteryFull } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-4 pb-2 bg-transparent absolute top-0 left-0 right-0 z-[100] text-slate-900 dark:text-slate-100">
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex gap-1.5 items-center">
         <Signal size={14} />
         <Wifi size={14} />
         <BatteryFull size={14} />
      </div>
    </div>
  );
};

export default StatusBar;
