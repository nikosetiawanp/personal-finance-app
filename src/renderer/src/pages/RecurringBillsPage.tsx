import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'
import { Divider } from '@renderer/components/Divider'
import { Input } from '@renderer/components/ui/Input'

import IconRecurringBills from '../assets/images/icon-recurring-bills.svg?react'
import IconSearch from '../assets/images/icon-search.svg?react'
import IconCaretDown from '../assets/images/icon-caret-down.svg?react'
import IconBillPaid from '../assets/images/icon-bill-paid.svg?react'
import IconBillDue from '../assets/images/icon-bill-due.svg?react'

import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'
import React from 'react'
import clsx from 'clsx'

import data from '../data.json'

import { Profile } from '@renderer/components/Profile'
import { formatCurrency, formatDate } from '@renderer/utils/format'

function RecurringBillsPage() {
  const [sort, setSort] = useState('Latest')
  const [searchInput, setSearchInput] = useState('')

  const paidBills = data.transactions.filter((transaction) => transaction.recurring === false)
  const recurringBills = data.transactions.filter((transaction) => transaction.recurring === true)
  const sumOfPaidBills = paidBills
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0)
  const sumOfRecurringBills = recurringBills
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0)

  const sortedRecurringBills = recurringBills.sort((a, b): number => {
    if (sort === 'Oldest') return new Date(a.date).getTime() - new Date(b.date).getTime()
    if (sort === 'A to Z') return a.name.localeCompare(b.name)
    if (sort === 'Z to A') return b.name.localeCompare(a.name)
    if (sort === 'Highest') return b.amount - a.amount
    if (sort === 'Lowest') return a.amount - b.amount
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const searchResult = sortedRecurringBills.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  )

  return (
    <PageLayout>
      <div className="flex justify-between items-center">
        <PageTitle>Recurring Bills</PageTitle>
      </div>

      <div className="flex gap-6">
        {/* Left */}
        <div className="flex flex-col gap-6 min-w-[420px]">
          {/* Black paper */}
          <div className="bg-grey-900 p-6 flex flex-col gap-8 rounded-xl w-full">
            <IconRecurringBills />
            <div className="flex flex-col gap-3">
              <span className="text-preset-4 text-white">Total Bills</span>
              <span className="text-preset-1 text-white">$384.98</span>
            </div>
          </div>

          {/* Summary */}
          <Paper>
            <div className="flex flex-col gap-5">
              <span className="text-preset-3">Summary</span>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="text-preset-5 text-grey-500">Paid Bills</span>
                  <span className="text-preset-5 font-bold">
                    {paidBills.length} ({formatCurrency(sumOfPaidBills)})
                  </span>
                </div>
                <Divider orientation="horizontal" />

                <div className="flex justify-between">
                  <span className="text-preset-5 text-grey-500">Total Upcoming</span>
                  <span className="text-preset-5 font-bold">
                    {recurringBills.length} ({formatCurrency(sumOfRecurringBills)})
                  </span>
                </div>
                <Divider orientation="horizontal" />

                <div className="flex justify-between">
                  <span className="text-preset-5 text-red">Due Soon</span>
                  <span className="text-preset-5 font-bold text-red">4 ($190)</span>
                </div>
              </div>
            </div>
          </Paper>
        </div>

        {/* Right */}
        <Paper className="min-w-[750px] w-full">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <Input
                id={'search'}
                type="text"
                value={''}
                placeholder="Searh Bills"
                EndIcon={IconSearch}
                onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }}
              />
              <span className="text-beige-500 text-preset-4 text-nowrap ml-auto">Sort by</span>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {/* Table */}
            <table>
              <thead className="border-b border-grey-100 text-nowrap">
                <tr>
                  <th className="px-4 py-3 text-left w-[420px]">Bill Title</th>
                  <th className="px-4 py-3 text-left w-[200px]">Due Date</th>
                  <th className="px-4 py-3 text-right w-[200px]">Amount</th>
                </tr>
              </thead>

              <tbody>
                {recurringBills.map((transaction, index) => {
                  const today = new Date().toISOString()
                  const overdue = transaction.date < today

                  return (
                    <tr key={index} className="border-b border-grey-100 text-nowrap">
                      {/* Profile */}
                      <td className="px-4 py-4">
                        <Profile name={transaction.name} imageUrl={''} />
                      </td>
                      <td
                        className={clsx(
                          'px-4 py-4',
                          overdue && 'text-red',
                          !overdue && 'text-grey-500'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {formatDate(transaction.date)}
                          {overdue ? <IconBillDue /> : <IconBillPaid />}
                        </div>
                      </td>
                      <td className={clsx('px-4 py-4 text-right text-preset-4 font-bold text-red')}>
                        ${transaction.amount}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Paper>
      </div>
    </PageLayout>
  )
}

export { RecurringBillsPage }

type DropdownProps = {
  value: string
  onChange
}
function SortDropdown({ value, onChange }: DropdownProps) {
  const sortOptions = ['Latest', 'Oldest', 'A to Z', 'Z to A', 'Highest', 'Lowest']
  const categoryOptions = [
    'All Transactions',
    'Bills',
    'Groceries',
    'Dining Out',
    'Transportation',
    'Personal Care'
  ]

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex justify-center items-center gap-4 px-5 py-3 border border-beige-500 text-nowrap text-preset-4 text-gray-900 rounded-lg hover:cursor-pointer">
          {value}
          <IconCaretDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white rounded-lg flex flex-col gap-3 px-5 py-3 shadow-lg">
          {sortOptions.map((option, index) => {
            const selected = option === value
            return (
              <React.Fragment key={index}>
                <DropdownMenu.Item
                  className={clsx(
                    'text-preset-4 text-grey-900 hover:cursor-pointer hover:text-grey-500',
                    selected && 'font-bold'
                  )}
                  onSelect={() => onChange(option)}
                  disabled={selected}
                >
                  {option}
                </DropdownMenu.Item>
                {index < categoryOptions.length - 1 && <Divider orientation="horizontal" />}
              </React.Fragment>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
