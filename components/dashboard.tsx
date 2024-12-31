"use client"

import { ReactNode, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Maximize2, Download } from 'lucide-react'
/*add krna he backend se ye sari values*/
const gridData = [
  { title: "Active Sensors", value: "85%", color: "#FF6384" },
  { title: "GLOF Occurrence", value: "12%", color: "#36A2EB" },
  { title: "Location", value: "Lake 127", color: "#FFCE56" },
  { title: "Flood Area", value: "450 km²", color: "#4BC0C0" },
]

const MapBox = ({ title, children }: { title: string, children: ReactNode }) => {
  return (
    <Dialog>
      <Card className="h-[400px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">{title}</CardTitle>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardHeader>
        <CardContent className="h-[calc(100%-4rem)] bg-white-100 flex items-center justify-center">
          {children}
        </CardContent>
      </Card>
      <DialogContent className="max-w-[90vw] w-[800px] h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="h-full bg-white-100 flex items-center justify-center">
          Fullscreen {title} Placeholder
        </div>
      </DialogContent>
    </Dialog>
  )
}

const ChartBox = ({ title }: { title: string }) => {
  return (
    <Card className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] bg-gray-100 flex items-center justify-center">
        {title} Placeholder
      </CardContent>
    </Card>
  )
}

export function Dashboard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="p-6 space-y-6">
      <section id="overview" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gridData.map((item, index) => (
          <Card 
            key={item.title} 
            className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
            <div className={`text-2xl font-bold ${hoveredIndex === index ? 'scale-110' : ''} transition-transform duration-300`}
            style={{ color: hoveredIndex === index ? item.color : 'inherit' }}
>           {item.value}
            </div>
      
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="maps" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MapBox title="Flood Path">
          <>
            <iframe
              width="600"
              height="300"
              src="https://leafletjs.com/examples/quick-start/">
            </iframe>
          </>
        </MapBox>
        <MapBox title="Zone Mapping">
        <iframe
              width="600"
              height="300"
              src="https://leafletjs.com/examples/quick-start/">
        </iframe>
        </MapBox>
      </section>

      <section id="glof-analysis">
        <ChartBox title="Varition In Senor Data Over time" />
      </section>

      <section id="historical-current" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartBox title="Historical vs. Current GLOF Trends" />
        <ChartBox title="Satellite Image Analysis" />
      </section>

      <section className="flex justify-center mt-6">
        <Button size="lg" className="transition-all duration-300 ease-in-out hover:shadow-lg">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </section>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Geology Department of India. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="hover:underline ml-2">Terms of Service</a> | 
          <a href="#" className="hover:underline ml-2">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

