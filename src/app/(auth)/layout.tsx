import { Toaster } from "sonner"

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="auth-layout">
      { children }
      <Toaster />
    </section>
  )
}

export default authLayout