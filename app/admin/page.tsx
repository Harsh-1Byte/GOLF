import { Navbar } from "@/components/navbar"
import { AnimatedGridBoxes } from "@/components/animated-grid-boxes"
import { ModelSection } from "@/components/model-section"
import { SensorDataSection } from "@/components/sensor-data-section"
import { EdgeComputingSection } from "@/components/edge-computing-section"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[240px]">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <section id="system-health">
            <AnimatedGridBoxes />
          </section>
          <section id="glof-prediction-model">
            <ModelSection title="GLOF Prediction Model-1" />
          </section>
          <section id="flood-path-model">
            <ModelSection title="Flood Path & Zone Mapping Model" />
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

