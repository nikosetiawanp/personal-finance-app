import { DropdownMenu } from 'radix-ui'

import data from '../data.json'

import { Input } from '@renderer/components/ui/Input'
import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'

import IconSearch from '../assets/images/icon-search.svg?react'
import IconCaretDown from '../assets/images/icon-caret-down.svg?react'
import IconCaretLeft from '../assets/images/icon-caret-left.svg?react'
import IconCaretRight from '../assets/images/icon-caret-right.svg?react'

import { Divider } from '@renderer/components/Divider'
import React, { useEffect, useState } from 'react'
import { Profile } from '@renderer/components/Profile'
import { Amount } from '@renderer/components/Amount'
import { formatDate } from '@renderer/utils/format'
import clsx from 'clsx'

function TransactionsPage() {
  const [sort, setSort] = useState('Latest')
  const [category, setCategory] = useState('All Transactions')
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')

  const filteredTransactions = data.transactions.filter((transaction) => {
    return category === 'All Transactions' ? data : category === transaction.category
  })

  const sortedTransactions = filteredTransactions.sort((a, b): number => {
    if (sort === 'Oldest') return new Date(a.date).getTime() - new Date(b.date).getTime()
    if (sort === 'A to Z') return a.name.localeCompare(b.name)
    if (sort === 'Z to A') return b.name.localeCompare(a.name)
    if (sort === 'Highest') return b.amount - a.amount
    if (sort === 'Lowest') return a.amount - b.amount
    return new Date(b.date).getTime() - new Date(a.date).getTime() // default: 'Newest'
  })

  const searchResult = sortedTransactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  )

  const paginated = searchResult.slice((page - 1) * 10, page * 10)

  const numberOfPages =
    Math.floor(paginated.length / 10) > 0 ? Math.floor(sortedTransactions.length / 10) : 1

  useEffect(() => {
    setPage(1)
  }, [numberOfPages])

  return (
    <PageLayout>
      <PageTitle>Transactions</PageTitle>
      <Paper className="gap-5 min-w-[800px] h-auto overflow-x-hidden">
        {/* Filters */}

        <Toolbar
          sort={sort}
          setSort={setSort}
          category={category}
          setCategory={setCategory}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />

        {/* Table */}
        <table>
          <thead className="border-b border-grey-100 text-nowrap">
            <tr>
              <th className="px-4 py-3 text-left w-[420px]">Recipient / Sender</th>
              <th className="px-4 py-3 text-left w-[200px]">Category</th>
              <th className="px-4 py-3 text-left w-[200px]">Transaction Date</th>
              <th className="px-4 py-3 text-right min-w-[300px]">Transaction Amount</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((transaction, index) => {
              return (
                <tr key={index} className="border-b border-grey-100 text-nowrap">
                  {/* Profile */}
                  <td className="px-4 py-4">
                    <Profile name={transaction.name} imageUrl={''} />
                  </td>
                  <td className="px-4 py-4 text-grey-500">{transaction.category}</td>
                  <td className="px-4 py-4 text-grey-500">{formatDate(transaction.date)}</td>
                  <td className="px-4 py-4 text-right">
                    <Amount value={transaction.amount} highlight showPlus decimals={2} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <Pagination page={page} setPage={setPage} numberOfPages={numberOfPages} />
      </Paper>
    </PageLayout>
  )
}

type DropdownProps = {
  options: string[]
  value: string
  onChange
}
function Dropdown({ options, value, onChange }: DropdownProps) {
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
          {options.map((option, index) => {
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
                {index < options.length - 1 && <Divider orientation="horizontal" />}
              </React.Fragment>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

function Toolbar({ sort, setSort, category, setCategory, searchInput, setSearchInput }) {
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
    <div className="flex justify-between items-center gap-8">
      <Input
        id="search"
        type="search"
        placeholder="Search transaction"
        EndIcon={IconSearch}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="flex items-center gap-6">
        {/* Sort by */}
        <div className="flex items-center gap-2">
          <span className="text-beige-500 text-preset-4 text-nowrap">Sort by</span>
          <Dropdown options={sortOptions} value={sort} onChange={setSort} />
        </div>
        {/* Category */}
        <div className="flex items-center gap-2">
          <span className="text-beige-500 text-preset-4 text-nowrap">Category</span>
          <Dropdown options={categoryOptions} value={category} onChange={setCategory} />
        </div>
      </div>
    </div>
  )
}

function Pagination({ page, setPage, numberOfPages }) {
  function previous() {
    if (page <= 1) return
    setPage(page - 1)
  }

  function next() {
    if (page >= numberOfPages) return
    setPage(page + 1)
  }

  const pages = [...Array(numberOfPages)].map((_, i) => i + 1)
  return (
    <div className="flex justify-between items-center gap-4">
      <button
        className="group flex gap-4 items-center px-4 h-[40px] rounded-lg border border-beige-500 hover:bg-beige-500 hover:text-white hover:cursor-pointer"
        onClick={() => previous()}
      >
        <IconCaretLeft className="fill-grey-500 group-hover:fill-white" /> Prev
      </button>

      {/* Pages */}
      <div className="flex items-center gap-2">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={clsx(
              'w-[40px] h-[40px] rounded-lg border hover:cursor-pointer',
              page === pageNumber && 'border-grey-900 bg-grey-900 text-white',
              page !== pageNumber &&
                'border-beige-500 bg-white hover:bg-beige-500 hover:text-white text-grey-900'
            )}
            onClick={() => setPage(pageNumber)}
            disabled={page === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="group flex gap-4 items-center px-4 h-[40px] rounded-lg border border-beige-500 hover:bg-beige-500 hover:text-white hover:cursor-pointer"
        onClick={() => next()}
      >
        Next <IconCaretRight className="fill-grey-500 group-hover:fill-white" />
      </button>
    </div>
  )
}

export { TransactionsPage }
