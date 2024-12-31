import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sensorTypes = ["Water Level", "Temperature", "Seismic Shift"]

const generateSensorData = (type: string) => {
  return Array.from({ length: 20 }, (_, i) => ({
    lake: `Lake ${i + 1}`,
    status: Math.random() > 0.2 ? 'Active' : 'Inactive',
    lastReading: type === 'Water Level' ? `${(Math.random() * 10).toFixed(2)}m` :
                 type === 'Temperature' ? `${(Math.random() * 30).toFixed(1)}°C` :
                 `${(Math.random() * 5).toFixed(2)} Richter`
  }))
}

export function SensorDataSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Sensor Data Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {sensorTypes.map((type) => (
          <div key={type} className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-900 border-b border-gray-800">
                <TableRow className="bg-gray-900 border-b border-gray-800">
                  <TableHead colSpan={3} className="text-center text-cyan-400">{type} Sensors</TableHead>
                </TableRow>
                <TableRow className="bg-gray-900 border-b border-gray-800">
                  <TableHead className="text-gray-300">Lake</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Last Reading</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {generateSensorData(type).map((sensor, index) => (
                  <TableRow key={index} className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200">
                    <TableCell className="text-gray-300">{sensor.lake}</TableCell>
                    <TableCell className={sensor.status === 'Active' ? 'text-green-400' : 'text-red-400'}>{sensor.status}</TableCell>
                    <TableCell className="text-gray-300">{sensor.lastReading}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <Button className="bg-cyan-700 hover:bg-cyan-600 text-white transition-colors duration-200">Restart All Sensors</Button>
        <Button variant="outline" className="text-cyan-400 border-cyan-700 hover:bg-cyan-700 hover:text-white transition-colors duration-200">Sensor Manual Diagnosis</Button>
      </div>
    </section>
  )
}

