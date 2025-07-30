import { Route, Routes } from 'react-router-dom'
import { AppSidebar } from './components/AppSidebar'
import { WindowFrame } from './components/WindowFrame'
import { OverviewPage } from './pages/OverviewPage'
import { TransactionsPage } from './pages/TransactionsPage'
import { BudgetsPage } from './pages/BudgetsPage'
import { PotsPage } from './pages/PotsPage'
import { RecurringBillsPage } from './pages/RecurringBillsPage'

function App(): React.JSX.Element {
  return (
    <main className="flex bg-beige-100 h-screen">
      <WindowFrame />
      <AppSidebar />
      <section className="w-full mt-8 overflow-y-auto no-scrollbar">
        <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/budgets" element={<BudgetsPage />} />
          <Route path="/pots" element={<PotsPage />} />
          <Route path="/recurring-bills" element={<RecurringBillsPage />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
