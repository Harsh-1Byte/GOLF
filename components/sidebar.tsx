"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { ChevronRight, Activity, BarChart2, Database, Cpu } from 'lucide-react'

const navItems = [
  { name: "System Health", icon: Activity, href: "http://localhost:3000/systemhealthpage" },
  { name: "GLOF Prediction Model-1", icon: BarChart2, href: "#glof-prediction-model" },
  { name: "Flood Path & Zone Mapping Model", icon: BarChart2, href: "#flood-path-model" },
  { name: "Sensor Data Overview", icon: Database, href: "#sensor-data-overview" },
  { name: "Edge Computing Devices Overview", icon: Cpu, href: "#edge-computing-overview" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 ease-in-out bg-gray-900 border-r border-gray-800",
        isCollapsed ? "w-[60px]" : "w-[240px]"
      )}
    >
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-cyan-700 hover:text-white transition-colors duration-200"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-all",
                  isCollapsed ? "rotate-0" : "rotate-180"
                )}
              />
              {!isCollapsed && <span className="ml-2">Collapse</span>}
            </Button>
          </div>
          <div className="px-3 py-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:bg-cyan-700 hover:text-white transition-colors duration-200"
                  asChild
                >
                  <a href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {!isCollapsed && <span className="truncate">{item.name}</span>}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

