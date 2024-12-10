import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const styles = {
  success: 'bg-mint-50 text-mint-800 border-mint-200',
  error: 'bg-coral-50 text-coral-800 border-coral-200',
  info: 'bg-sunshine-50 text-sunshine-800 border-sunshine-200',
};

export function Toast({ message, type = 'info', onClose }: ToastProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 flex items-center p-4 rounded-lg border shadow-sm',
        styles[type]
      )}
    >
      <Icon className="h-5 w-5 mr-2" />
      <span className="text-sm">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-mint-400 hover:text-mint-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}