"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, LogOut, Search } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md p-4 flex items-center justify-between sticky top-0 z-30 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        <a href="#system-health">System Health</a>
      </h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search page elements..."
            className="pl-10 pr-4 py-2 w-64 bg-black text-gray-300 border-gray-800 focus:border-cyan-400 transition-colors duration-200"
          />
        </div>
        <Button variant="outline" size="icon" className="text-gray-300 border-gray-800 hover:bg-cyan-700 hover:text-white transition-colors duration-200">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="text-gray-300 border-gray-800 hover:bg-red-700 hover:text-white transition-colors duration-200">
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}

