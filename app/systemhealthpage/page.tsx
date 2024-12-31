import { Navbar } from "@/components/navbar"
import { ModelSection } from "@/components/model-section"
import { SensorDataSection } from "@/components/sensor-data-section"
import { EdgeComputingSection } from "@/components/edge-computing-section"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[240px] pt-[64px]">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search models, sensors, or devices..."
              className="pl-10 pr-4 py-2 w-full bg-gray-900 text-gray-300 border-gray-800 focus:border-cyan-400 transition-colors duration-200"
            />
          </div>
          <section id="glof-prediction-model">
            <ModelSection title="GLOF Prediction Model-1" />
          </section>
          <section id="flood-path-model">
            <ModelSection title="Flood Path and Flood Zone Mapping Model" />
          </section>
          <section id="sensor-data-overview">
            <SensorDataSection />
          </section>
          <section id="edge-computing-overview">
            <EdgeComputingSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

