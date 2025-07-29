import clsx from 'clsx'
import { useState } from 'react'

import LogoSmall from '../assets/images/logo-small.svg'
import LogoLarge from '../assets/images/logo-large.svg'
import IconMinimizeMenu from '../assets/images/icon-minimize-menu.svg'

import IconNavOverview from '../assets/images/icon-nav-overview.svg'
import IconNavTransactions from '../assets/images/icon-nav-transactions.svg'
import IconNavBudgets from '../assets/images/icon-nav-budgets.svg'
import IconNavPots from '../assets/images/icon-nav-pots.svg'
import IconNavRecurringBills from '../assets/images/icon-nav-recurring-bills.svg'

const menus = [
  { title: 'Overview', icon: IconNavOverview },
  { title: 'Transactions', icon: IconNavTransactions },
  { title: 'Budgets', icon: IconNavBudgets },
  { title: 'Pots', icon: IconNavPots },
  { title: 'Recurring bills', icon: IconNavRecurringBills }
]

function AppSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <aside
      className={clsx(
        'bg-grey-900 flex flex-col gap-6 h-screen fixed left-0 px-8 pb-14 transition-all',
        open && 'w-[300px] items-start',
        !open && 'w-[88px]'
      )}
    >
      <header className="flex justify-center items-center py-10">
        {open && <img className="h-[22px]" src={LogoLarge} alt="logo-large" />}
        {!open && <img className="h-[22px]" src={LogoSmall} alt="logo-small" />}
      </header>
      <main>
        <ul className="flex flex-col items-start justify-center gap-1">
          {menus.map((menu, index) => (
            <li
              className="flex items-center gap-6 h-[56px] text-grey-300 py-4 hover:text-white hover:cursor-pointer text-nowrap"
              key={index}
            >
              <img src={menu.icon} alt="" />
              {open && menu.title}
            </li>
          ))}
        </ul>
      </main>
      <footer className="flex justify-center items-center mt-auto">
        <button
          className="flex items-center gap-6 w-auto text-preset-3 text-grey-300 h-[56px] hover:text-white hover:cursor-pointer text-nowrap"
          onClick={() => setOpen(!open)}
        >
          <img
            className={clsx(!open && '-scale-x-100')}
            src={IconMinimizeMenu}
            alt="icon-minimize-menu"
          />
          {open && 'Minimize Menu'}
        </button>
      </footer>
    </aside>
  )
}

export { AppSidebar }
