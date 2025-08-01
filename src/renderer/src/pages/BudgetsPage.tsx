import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'

import data from '../data.json'
import { Divider } from '@renderer/components/Divider'
import { formatCurrency } from '@renderer/utils/format'
import { Progress } from 'radix-ui'
import { CategoryMarker } from '@renderer/components/CategoryMarker'
import { Button } from '@renderer/components/ui/Button'
import { Link } from 'react-router-dom'

import IconCaretRight from '../assets/images/icon-caret-right.svg?react'
import { Profile } from '@renderer/components/Profile'
import { Amount } from '@renderer/components/Amount'

function BudgetsPage() {
  return (
    <PageLayout>
      <PageTitle>Budgets</PageTitle>

      <section className="flex gap-6 w-full">
        {/* Left */}
        <div className="flex flex-col gap-6 min-w-[600px] w-full">
          <Paper className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-start gap-6 w-full">
              <span className="text-preset-2 text-grey-900">Spending Summary</span>
              <div className="flex flex-col w-full gap-4">
                {data.budgets.map((budget, index) => {
                  return (
                    <div key={index} className="flex flex-col w-full gap-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <CategoryMarker backgroundColor="bg-green" />
                          <span className="text-preset-4 text-grey-500">{budget.category}</span>
                        </div>

                        <div className="flex gap-2 items-center">
                          <p className="text-preset-3 text-grey-900">{formatCurrency(15)}</p>
                          <p className="text-preset-5 text-grey-500">
                            of {formatCurrency(budget.maximum)}
                          </p>
                        </div>
                      </div>
                      {index < data.budgets.length - 1 && <Divider orientation="horizontal" />}
                    </div>
                  )
                })}
              </div>
            </div>
          </Paper>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-6 w-full">
          <Paper className="gap-5">
            <div className="flex items-center gap-4 ">
              <div className="w-[16px] h-[16px] bg-green rounded-full"></div>
              <span className="text-preset-2 text-grey-900">Spending Summary</span>
            </div>

            {/* Progress Bar */}
            <div className="flex flex-col gap-4">
              <span className="text-preset-4 text-grey-500">Maximum of {formatCurrency(50)}</span>
              <Progress.Root className="bg-beige-100 rounded-sm p-1">
                <Progress.Indicator className="w-[20%] h-[24px] rounded-sm bg-green" />
              </Progress.Root>

              {/* Spending */}
              <div className="flex justify-between">
                {/* Spent */}
                <div className="flex gap-4">
                  <CategoryMarker backgroundColor="bg-green" />
                  <div className="flex flex-col">
                    <span className="text-preset-5 text-grey-500">Spent</span>
                    <p className="text-preset-4 font-bold">{formatCurrency(15)}</p>
                  </div>
                </div>
                {/* Remaining */}
                <div className="flex gap-4">
                  <CategoryMarker backgroundColor="bg-beige-100" />
                  <div className="flex flex-col">
                    <span className="text-preset-5 text-grey-500">Remaining</span>
                    <p className="text-preset-4 font-bold">{formatCurrency(35)}</p>
                  </div>
                </div>
                {/* Empty */}
                <div></div>
              </div>
            </div>

            <div className="flex flex-col gap-5 bg-beige-100 p-5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-preset-2">Latest Spending</span>
                <Button variant="tertiary" Icon={IconCaretRight}>
                  <Link to={'/'}>See All</Link>
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((spending, index) => {
                  return (
                    <div key={index} className="flex flex-col w-full gap-3">
                      <div className="flex justify-between">
                        <Profile name="James Thompson" />
                        <div className="flex flex-col items-end gap-1">
                          <Amount value={-15} size="xs" />
                          <p className="text-preset-5 text-grey-500">11 Aug 2024</p>
                        </div>
                      </div>
                      {index < [1, 2, 3].length - 1 && (
                        <div className="min-h-[1px] bg-grey-500/15"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </Paper>
        </div>
      </section>
    </PageLayout>
  )
}

export { BudgetsPage }
