import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const devices = Array.from({ length: 21 }, (_, i) => ({
  name: `Beagle Bone Black-${i + 1}`,
  model: `BBB-${1234 + i}`,
  hardwareHealth: "Good",
  networkHealth: "Excellent",
  softwareHealth: "Good",
  security: "High",
  uptime: "99.9%",
  overallHealth: "Excellent",
  lastUpdated: `2024-03-07 ${14 + Math.floor(i / 60)}:${(30 + i % 60).toString().padStart(2, '0')}:00`,
}))

export function EdgeComputingSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Edge Computing Devices Overview</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-900 border-b border-gray-800">
            <TableRow className="bg-gray-900 border-b border-gray-800">
              <TableHead className="text-gray-300">Device Name</TableHead>
              <TableHead className="text-gray-300">Model Number</TableHead>
              <TableHead className="text-gray-300">Hardware Health</TableHead>
              <TableHead className="text-gray-300">Network Health</TableHead>
              <TableHead className="text-gray-300">Software Health</TableHead>
              <TableHead className="text-gray-300">Security</TableHead>
              <TableHead className="text-gray-300">Uptime</TableHead>
              <TableHead className="text-gray-300">Overall Health</TableHead>
              <TableHead className="text-gray-300">Last Updated</TableHead>
              <TableHead className="text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.name} className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200">
                <TableCell className="text-gray-300">{device.name}</TableCell>
                <TableCell className="text-gray-300">{device.model}</TableCell>
                <TableCell className="text-green-400">{device.hardwareHealth}</TableCell>
                <TableCell className="text-green-400">{device.networkHealth}</TableCell>
                <TableCell className="text-green-400">{device.softwareHealth}</TableCell>
                <TableCell className="text-green-400">{device.security}</TableCell>
                <TableCell className="text-green-400">{device.uptime}</TableCell>
                <TableCell className="text-green-400">{device.overallHealth}</TableCell>
                <TableCell className="text-gray-300">{device.lastUpdated}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-cyan-400 border-cyan-700 hover:bg-cyan-700 hover:text-black transition-colors duration-200">
                    Restart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

