import React from 'react';
import { Users, Briefcase, DollarSign, Activity } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,234"
          icon={Users}
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          title="Active Jobs"
          value="856"
          icon={Briefcase}
          trend="+23%"
          trendUp={true}
        />
        <StatCard
          title="Revenue"
          value="$12,345"
          icon={DollarSign}
          trend="+8%"
          trendUp={true}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={Activity}
          trend="-2%"
          trendUp={false}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recent Activity
          </h3>
          {/* Add activity list component here */}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: string;
  trendUp: boolean;
}

function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {value}
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                  trendUp ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trend}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}