import clsx from 'clsx'
import { useState } from 'react'

import LogoSmall from '../assets/images/logo-small.svg'
import LogoLarge from '../assets/images/logo-large.svg'
import IconMinimizeMenu from '../assets/images/icon-minimize-menu.svg?react'

import IconNavOverview from '../assets/images/icon-nav-overview.svg?react'
import IconNavTransactions from '../assets/images/icon-nav-transactions.svg?react'
import IconNavBudgets from '../assets/images/icon-nav-budgets.svg?react'
import IconNavPots from '../assets/images/icon-nav-pots.svg?react'
import IconNavRecurringBills from '../assets/images/icon-nav-recurring-bills.svg?react'

const menus = [
  { title: 'Overview', icon: <IconNavOverview className="fill-grey-300 group-hover:fill-white" /> },
  {
    title: 'Transactions',
    icon: <IconNavTransactions className="fill-grey-300 group-hover:fill-white" />
  },
  { title: 'Budgets', icon: <IconNavBudgets className="fill-grey-300 group-hover:fill-white" /> },
  { title: 'Pots', icon: <IconNavPots className="fill-grey-300 group-hover:fill-white" /> },
  {
    title: 'Recurring bills',
    icon: <IconNavRecurringBills className="fill-grey-300 group-hover:fill-white" />
  }
]

function AppSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <aside
      className={clsx(
        'bg-grey-900 flex flex-col gap-6 h-screen fixed left-0 pb-14 transition-all',
        open && 'w-[300px] items-start',
        !open && 'w-[88px]'
      )}
    >
      <header className="flex justify-center items-center px-8 py-10">
        {open && <img className="h-[22px]" src={LogoLarge} alt="logo-large" />}
        {!open && <img className="h-[22px]" src={LogoSmall} alt="logo-small" />}
      </header>
      <main className={clsx('w-full', open && 'pr-6', !open && 'pr-2')}>
        <ul className="flex flex-col items-start justify-center gap-1 hover:text-white">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={clsx(
                'w-full group flex items-center gap-6 h-[56px] text-grey-300 py-4 px-8 rounded-r-xl hover:text-white hover:cursor-pointer text-nowrap'
              )}
            >
              {menu.icon}
              {open && menu.title}
            </li>
          ))}
        </ul>
      </main>
      <footer className="flex justify-left items-center mt-auto px-8">
        <button
          className="group flex justify-start items-center gap-6 w-auto text-preset-3 text-grey-300 h-[56px] hover:text-white hover:cursor-pointer text-nowrap"
          onClick={() => setOpen(!open)}
        >
          <IconMinimizeMenu
            className={clsx(!open && '-scale-x-100', 'fill-grey-300 group-hover:fill-white')}
          />
          {open && 'Minimize Menu'}
        </button>
      </footer>
    </aside>
  )
}

export { AppSidebar }
