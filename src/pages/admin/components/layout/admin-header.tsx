import React from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';
import { GlobalSearch } from '../search/global-search';

export function AdminHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <GlobalSearch />
            
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5" />
            </button>
            
            <button className="flex items-center text-sm">
              <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-500" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}