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

function OverviewPage() {
  return (
    <PageLayout>
      <PageTitle>Overview</PageTitle>
      {/* Overview */}
      <section className="flex gap-6">
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
        <div className="min-w-[430px]"></div>
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

function SummaryHeader({ title, buttonLabel }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-preset-2">{title}</span>
      <Button variant="tertiary" Icon={IconCaretRight}>
        {buttonLabel}
      </Button>
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
    <Paper className="gap-5">
      <SummaryHeader title="Saving Pot" buttonLabel="See Details" />
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
          {pots.map((pot) => (
            <div className="flex gap-4">
              <div className={clsx('min-w-1 h-full rounded-full', getColorClass(pot.color))}></div>
              <div className="flex flex-col">
                <span className="text-preset-5 text-grey-500">{pot.name}</span>
                <Amount size="sm" value={pot.amount} decimals={0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  )
}

function TransactionsSummary() {
  return (
    <Paper className="gap-8">
      <SummaryHeader title="Transactions" buttonLabel="View All" />
      <div className="flex flex-col gap-5">
        {[500, 100, 300, 900, 25].map((transaction, index) => {
          return (
            <>
              <div key={index} className="flex justify-between py-1">
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

export { OverviewPage }
