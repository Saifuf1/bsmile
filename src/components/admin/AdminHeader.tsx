import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

export const AdminHeader: React.FC = () => {
  const { user } = useAdminAuth();

  return (
    <header className="h-16 flex items-center gap-4 px-6 border-b border-border bg-card/50 backdrop-blur-sm">
      <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Welcome, {user?.email}
        </span>
      </div>
    </header>
  );
};