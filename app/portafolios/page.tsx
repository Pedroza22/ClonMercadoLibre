import Navbar from "@/components/navbar"
import DeveloperPortfolio from "@/components/developer-portfolio"
import Footer from "@/components/footer"

export default function PortafoliosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <DeveloperPortfolio />
      </main>
      <Footer />
    </div>
  )
}
