import clsx from 'clsx'

import { formatCurrency } from '@renderer/utils/format'

import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'
import { Button } from '@renderer/components/ui/Button'

import IconCaretRight from '../assets/images/icon-caret-right.svg?react'
import IconPot from '../assets/images/icon-pot.svg?react'
import { getColorClass } from '@renderer/utils/getColorClass'
import { Profile } from '@renderer/components/Profile'
import { Divider } from '@renderer/components/Divider'
import { Amount } from '@renderer/components/Amount'
import { Link } from 'react-router-dom'

function OverviewPage() {
  return (
    <PageLayout>
      <PageTitle>Overview</PageTitle>
      {/* Overview */}
      <section className="flex gap-6 w-full">
        <SummaryCard variant={'primary'} title={'Current Balance'} amount={4836} />
        <SummaryCard variant={'secondary'} title={'Income'} amount={1270.5} />
        <SummaryCard variant={'secondary'} title={'Expenses'} amount={3167.25} />
      </section>

      <section className="flex gap-6">
        {/* Left */}
        <div className="flex flex-col gap-6 min-w-[600px]">
          {/* Saving Pot */}
          <SavingPotSummary />
          <TransactionsSummary />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 w-full">
          <BudgetsSummary />
          <RecurringBillsSummary />
        </div>
      </section>
    </PageLayout>
  )
}

function SummaryCard({
  variant,
  title,
  amount
}: {
  variant: 'primary' | 'secondary'
  title: string
  amount: number
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-3 p-6 w-full rounded-xl',
        variant === 'primary' && 'bg-grey-900',
        variant === 'secondary' && 'bg-white'
      )}
    >
      <span
        className={clsx(
          'text-preset-4',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-grey-500'
        )}
      >
        {title}
      </span>
      <p
        className={clsx(
          'text-preset-1',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-grey-900'
        )}
      >
        {formatCurrency(amount)}
      </p>
    </div>
  )
}

function SummaryHeader({ title, buttonLabel, path }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-preset-2">{title}</span>
      <Button variant="tertiary" Icon={IconCaretRight}>
        <Link to={path}>{buttonLabel}</Link>
      </Button>
    </div>
  )
}

function MicroSummary({ name, amount, color }) {
  return (
    <div className="flex gap-4 h-[43px]">
      <div className={clsx('w-1 h-auto rounded-full', getColorClass(color))}></div>
      <div className="flex flex-col">
        <span className="text-preset-5 text-grey-500">{name}</span>
        <Amount size="sm" value={amount} decimals={0} />
      </div>
    </div>
  )
}

function SavingPotSummary() {
  const pots = [
    {
      name: 'Savings',
      amount: 159,
      color: 'green'
    },
    {
      name: 'Christmas Gift',
      amount: 40,
      color: 'cyan'
    },
    {
      name: 'Concert Ticket',
      amount: 110,
      color: 'navy'
    },
    {
      name: 'New Laptop',
      amount: 10,
      color: 'yellow'
    }
  ]
  return (
    <Paper className="gap-5 max-h-[220px]">
      <SummaryHeader title="Saving Pot" buttonLabel="See Details" path="/pots" />
      {/* Content */}
      <div className="flex gap-5">
        {/* Total Saved */}
        <div className="flex items-center bg-beige-100 p-4 rounded-xl gap-4  min-w-[250px]">
          <IconPot className="w-[40px]" />
          <div className="flex flex-col gap-3">
            <span className="text-preset-4 text-grey-500">Total Saved</span>
            <Amount value={850} size="xl" />
          </div>
        </div>
        {/* Pots */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {pots.map((pot, index) => (
            <MicroSummary key={index} name={pot.name} amount={pot.amount} color={pot.color} />
          ))}
        </div>
      </div>
    </Paper>
  )
}

function TransactionsSummary() {
  return (
    <Paper className="gap-8">
      <SummaryHeader title="Transactions" buttonLabel="View All" path="/transactions" />
      <div className="flex flex-col gap-5">
        {[500, 100, 300, 900, 25].map((transaction, index) => {
          return (
            <>
              <div key={index} className="flex justify-between">
                <Profile name="Bravo Zen Spa" />
                <div className="flex flex-col items-end gap-2">
                  <Amount value={transaction} highlight showPlus />
                  <p className="text-preset-5 font text-grey-500">29 Aug 2024, 21:45</p>
                </div>
              </div>
              {index < 4 && <Divider orientation="horizontal" />}
            </>
          )
        })}
      </div>
    </Paper>
  )
}

function BudgetsSummary() {
  const budgets = [
    {
      name: 'Entertainment',
      amount: 25,
      color: 'green'
    },
    {
      name: 'Bills',
      amount: 250,
      color: 'cyan'
    },
    {
      name: 'Personal Care',
      amount: 65,
      color: 'yellow'
    },
    {
      name: 'Dining Out',
      amount: 67,
      color: 'navyGray'
    }
  ]
  return (
    <Paper className="gap-5 h-full">
      <SummaryHeader title="My Budgets" buttonLabel="See Details" path="/budgets" />
      <div className="flex items-center gap-4 h-full">
        {/* Chart */}
        <div className="w-full min-h-[240px] bg-beige-100 rounded-xl"></div>
        <div className="flex flex-col gap-4">
          {budgets.map((budget, index) => {
            return (
              <MicroSummary
                key={index}
                name={budget.name}
                amount={budget.amount}
                color={budget.color}
              />
            )
          })}
        </div>
      </div>
    </Paper>
  )
}

function RecurringBillsSummary() {
  const bills = [
    {
      name: 'Paid Bills',
      amount: 190,
      color: 'green'
    },
    {
      name: 'Total Upcoming',
      amount: 194.98,
      color: 'yellow'
    },
    {
      name: 'Due Soon',
      amount: 59.98,
      color: 'cyan'
    }
  ]
  return (
    <Paper className="gap-5">
      <SummaryHeader title="Recurring Bills" buttonLabel="See Details" path="recurring-bills" />
      <div className="flex flex-col w-full gap-3">
        {bills.map((bill, index) => {
          return (
            <div key={index} className={clsx('rounded-lg pl-1', getColorClass(bill.color))}>
              <div className="flex justify-between items-center left-2 top-0 bg-beige-100 rounded-lg px-4 py-5">
                <span className="text-preset-4 text-grey-500">{bill.name}</span>
                <Amount value={bill.amount} />
              </div>
            </div>
          )
        })}
      </div>
    </Paper>
  )
}
export { OverviewPage }
