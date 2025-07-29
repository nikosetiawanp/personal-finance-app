import { AppSidebar } from './components/AppSidebar'
import { WindowFrame } from './components/WindowFrame'

function App(): React.JSX.Element {
  return (
    <main className="pt-[32px] bg-beige-100 h-full">
      <WindowFrame />
      <AppSidebar />
    </main>
  )
}

export default App
