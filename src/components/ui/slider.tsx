import React from 'react';
import { cn } from '@/lib/utils';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  className,
  ...props
}: SliderProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <div className="flex justify-between">
          <label className="text-sm font-medium text-mint-700">{label}</label>
          <span className="text-sm text-mint-500">{value} miles</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-mint-200 rounded-lg appearance-none cursor-pointer accent-coral-500"
        {...props}
      />
      <div className="flex justify-between text-xs text-mint-500">
        <span>{min} miles</span>
        <span>{max} miles</span>
      </div>
    </div>
  );
}