import { Button } from '@renderer/components/ui/Button'
import { PageLayout } from '@renderer/components/ui/PageLayout'
import { PageTitle } from '@renderer/components/ui/PageTitle'
import { Paper } from '@renderer/components/ui/Paper'
import { DropdownMenu, Progress } from 'radix-ui'

import IconEllipsis from '../assets/images/icon-ellipsis.svg?react'

function PotsPage() {
  return (
    <PageLayout>
      <div className="flex justify-between items-center">
        <PageTitle>Pots</PageTitle>
        <AddNewPot />
      </div>

      <section className="grid grid-cols-2 gap-6">
        {[0, 1, 2, 3, 4, 5, 6].map((number, index) => {
          return <Pot key={index} />
        })}
      </section>
    </PageLayout>
  )
}

function AddNewPot() {
  return <h1>Button</h1>
}
export { PotsPage }

function Pot() {
  return (
    <Paper className="flex flex-col gap-8">
      {/* Title and Button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-green w-[16px] h-[16px] rounded-full"></div>
          <span className="text-preset-2">Christmas Gift</span>
        </div>
        <EditDeletePot />
      </div>

      {/* Total and Bar */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <span className="text-preset-4">Total Saved</span>
          <span className="text-preset-1">$40.00</span>
        </div>
        {/* Progress Bar */}
        <Progress.Root className="bg-beige rounded-full h-[8px] w-[500px]">
          {/* <Progress.Indicator className="w-[66%] h-full rounded-full bg-green" /> */}
        </Progress.Root>

        {/* Percentage and Target */}
        <div className="flex justify-between text-preset-5 font-bold text-grey-500">
          <span>66.6%</span>
          <span className="flex text-preset-5 text-grey-500">Target $60</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button variant="secondary" className="w-full">
            + Add Money
          </Button>
          <Button variant="secondary" className="w-full">
            Withdraw
          </Button>
        </div>
      </div>
    </Paper>
  )
}

function EditDeletePot() {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="w-[16px] h-[16px] rounded-full hover:cursor-pointer">
          <IconEllipsis />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="flex flex-col px-5 py-3 rounded-lg bg-white shadow-lg gap-3">
            <DropdownMenu.Item
              onSelect={(e) => e.preventDefault()}
              className="text-grey-900 hover:cursor-pointer"
            >
              Edit Pot
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-[1px] bg-grey-100" />
            <DropdownMenu.Item
              onSelect={(e) => e.preventDefault()}
              className="text-red hover:cursor-pointer"
            >
              {/* Delete Budget */}
              Delete Pot
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
