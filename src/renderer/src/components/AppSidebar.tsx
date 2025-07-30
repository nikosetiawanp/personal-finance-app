import clsx from 'clsx'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import LogoSmall from '../assets/images/logo-small.svg'
import LogoLarge from '../assets/images/logo-large.svg'
import IconMinimizeMenu from '../assets/images/icon-minimize-menu.svg?react'

import IconNavOverview from '../assets/images/icon-nav-overview.svg?react'
import IconNavTransactions from '../assets/images/icon-nav-transactions.svg?react'
import IconNavBudgets from '../assets/images/icon-nav-budgets.svg?react'
import IconNavPots from '../assets/images/icon-nav-pots.svg?react'
import IconNavRecurringBills from '../assets/images/icon-nav-recurring-bills.svg?react'

const menus = [
  { title: 'Overview', Icon: IconNavOverview, path: '/overview' },
  {
    title: 'Transactions',
    Icon: IconNavTransactions,
    path: '/transactions'
  },
  { title: 'Budgets', Icon: IconNavBudgets, path: '/budgets' },
  { title: 'Pots', Icon: IconNavPots, path: '/pots' },
  {
    title: 'Recurring bills',
    Icon: IconNavRecurringBills,
    path: '/recurring-bills'
  }
]

function AppSidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <aside
      className={clsx(
        'bg-grey-900 flex flex-col gap-6 h-screen pt-8 pb-14 transition-all',
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
          {menus.map((menu, index) => {
            return (
              <li key={index} className="w-full">
                <Link
                  className={clsx(
                    'relative w-full group flex items-center gap-6 h-[56px] text-grey-300 py-4 px-8 rounded-r-xl hover:cursor-pointer text-nowrap transition-all',
                    location.pathname === menu.path && 'bg-white text-grey-900 hover:text-grey-900',
                    location.pathname !== menu.path && 'border-l-grey-900 hover:text-white'
                  )}
                  to={menu.path}
                >
                  <div
                    className={clsx(
                      'absolute h-full left-0 top-0 w-1',
                      location.pathname === menu.path && 'bg-green',
                      location.pathname !== menu.path && 'bg-grey-900'
                    )}
                  ></div>
                  <menu.Icon
                    className={clsx(
                      'min-w-6',
                      location.pathname === menu.path && 'fill-green',
                      location.pathname !== menu.path && 'fill-grey-300 group-hover:fill-white'
                    )}
                  />
                  {open && menu.title}
                </Link>
              </li>
            )
          })}
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
