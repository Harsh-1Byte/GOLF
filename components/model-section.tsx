import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ModelSectionProps {
  title: string
}

export function ModelSection({ title }: ModelSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-cyan-400">Model Data Health</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Data health indicators here</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-cyan-400">Model Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Accuracy: 95%</p>
            <p>Latency: 50ms</p>
            <p>Error Rate: 2%</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-cyan-400">Resource Usage</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Version: 2.1.0</p>
            <p>Memory Usage: 1.2GB</p>
          </CardContent>
        </Card>
      </div>
      <Button className="bg-cyan-700 hover:bg-cyan-600 text-white transition-colors duration-200">Run Manual Diagnostic</Button>
    </section>
  )
}

