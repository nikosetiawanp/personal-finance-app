import { DropdownMenu } from 'radix-ui'

import { Input } from '@renderer/components/ui/Input'
import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'

import IconSearch from '../assets/images/icon-search.svg?react'
import IconCaretDown from '../assets/images/icon-caret-down.svg?react'
import { Divider } from '@renderer/components/Divider'
import React, { useState } from 'react'

const sortOptions = ['Latest', 'Oldest', 'A to Z', 'Z to A', 'Highest', 'Lowest']
const categoryOptions = [
  'All Transactions',
  'Bills',
  'Groceries',
  'Dining Out',
  'Transportation',
  'Personal Care'
]

const tableStyle = {
  thead: 'px-4 py-3'
}

const tableHeaders = ['Recipient / Sender', 'Category', 'Transaction Date', 'Amount']

function TransactionsPage() {
  const [sort, setSort] = useState('Latest')
  const [category, setCategory] = useState('Latest')

  return (
    <PageLayout>
      <PageTitle>Transactions</PageTitle>
      <Paper className="gap-5 h-auto">
        {/* Filters */}
        <div className="flex justify-between items-center">
          <Input id="search" type="search" placeholder="Search transaction" EndIcon={IconSearch} />
          <div className="flex items-center gap-6">
            {/* Sort by */}
            <div className="flex items-center gap-2">
              <span className="text-beige-500 text-preset-4">Sort by</span>
              <Dropdown options={sortOptions} value={sort} onChange={setSort} />
            </div>
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-beige-500 text-preset-4">Category</span>
              <Dropdown options={categoryOptions} value={category} onChange={setCategory} />
            </div>
          </div>
        </div>

        {/* Table */}
        <table>
          <thead className="text-left border-b border-grey-100">
            <tr className="">
              {tableHeaders.map((tableHeader, index) => {
                return (
                  <th key={index} className="px-4 py-3">
                    {tableHeader}
                  </th>
                )
              })}
            </tr>
          </thead>
        </table>
      </Paper>
    </PageLayout>
  )
}

export { TransactionsPage }

type DropdownProps = {
  options: string[]
  value: string
  onChange
}
function Dropdown({ options, value, onChange }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex justify-center items-center gap-4 px-5 py-3 border border-beige-500 text-preset-4 text-gray-900 rounded-lg hover:cursor-pointer">
          {value}
          <IconCaretDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white rounded-lg flex flex-col gap-3 px-5 py-3 shadow-lg">
          {options.map((option, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownMenu.Item
                  className="text-preset-4 text-grey-900 hover:cursor-pointer"
                  onSelect={() => onChange(option)}
                >
                  {option}
                </DropdownMenu.Item>
                {index < options.length - 1 && <Divider orientation="horizontal" />}
              </React.Fragment>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
