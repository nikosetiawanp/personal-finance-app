import { AppSidebar } from './components/AppSidebar'
import { Button } from './components/ui/Button'
import { WindowFrame } from './components/WindowFrame'

function App(): React.JSX.Element {
  return (
    <main className="pt-[32px] bg-beige-100 h-full">
      <WindowFrame />
      <AppSidebar />
      {/* <Button variant="primary">Placeholder</Button> */}
    </main>
  )
}

export default App
