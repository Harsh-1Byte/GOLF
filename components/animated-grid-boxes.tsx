"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const gridItems = [
  { title: "Active Sensors", value: "85%", color: "group-hover:text-green-400" },
  { title: "GLOF Occurrence", value: "15%", color: "group-hover:text-yellow-400" },
  { title: "Location & Lake", value: "Site A, Lake 3", color: "group-hover:text-blue-400" },
  { title: "Flood Area Extent", value: "12.5 km²", color: "group-hover:text-purple-400" },
]

export function AnimatedGridBoxes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {gridItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Card className="bg-gray-900 border-gray-800 group hover:bg-gray-800 transition-colors duration-200">
            <CardHeader>
              <CardTitle className={`text-gray-300 transition-colors duration-200 ${item.color}`}>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-3xl font-bold transition-colors duration-200 ${item.color}`}>{item.value}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

