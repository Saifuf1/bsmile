import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, Activity } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Counselors
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Blog Posts
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">
              +5 this month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Scheduled Sessions
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              +12 this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Now
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Counselors online
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your counseling center
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New counselor added</p>
                  <p className="text-xs text-muted-foreground">Dr. Sarah Johnson joined the team</p>
                </div>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Blog post published</p>
                  <p className="text-xs text-muted-foreground">Understanding Anxiety in the Workplace</p>
                </div>
                <span className="text-xs text-muted-foreground">5h ago</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-cyber-teal rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Schedule updated</p>
                  <p className="text-xs text-muted-foreground">Dr. Mike Chen updated availability</p>
                </div>
                <span className="text-xs text-muted-foreground">1d ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/10 transition-colors">
                <div className="font-medium">Add New Counselor</div>
                <div className="text-sm text-muted-foreground">Register a new counselor in the system</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/10 transition-colors">
                <div className="font-medium">Create Blog Post</div>
                <div className="text-sm text-muted-foreground">Write and publish a new article</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/10 transition-colors">
                <div className="font-medium">Manage Schedules</div>
                <div className="text-sm text-muted-foreground">Update counselor availability</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};