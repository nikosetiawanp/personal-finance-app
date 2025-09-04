import { DropdownMenu } from 'radix-ui'

import { colors } from '@renderer/utils/color'
import { useState } from 'react'
import clsx from 'clsx'

import IconCaretDown from '../assets/images/icon-caret-down.svg?react'
import IconSelected from '../assets/images/icon-selected.svg?react'

import { Divider } from './Divider'

function SelectTheme() {
  const [selectedTheme, setSelectedTheme] = useState(0)

  return (
    <div className="relative w-full">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex justify-between items-center px-5 py-3 w-full rounded-lg border border-beige-500 gap-4 hover:cursor-pointer hover:border-grey-900">
          <div
            className={clsx(
              'w-[16px] h-[16px] rounded-full',
              Object.entries(colors)[selectedTheme]
            )}
          ></div>
          <span className="text-preset-4">{Object.entries(colors)[selectedTheme][0]}</span>
          <IconCaretDown className="ml-auto" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side="bottom"
            align="center"
            collisionPadding={0}
            className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white flex flex-col gap-3 rounded-lg px-5 py-3 z-60 shadow-2xl h-[200px] overflow-auto"
          >
            {Object.entries(colors).map(([key, value], index) => {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <DropdownMenu.Item
                    className="flex items-center gap-3 hover:cursor-pointer"
                    onClick={() => setSelectedTheme(index)}
                  >
                    <div className={clsx('w-[16px] h-[16px] rounded-full', value)}></div>
                    <span className="text-grey-500 text-preset-4">{key}</span>
                    <div className="flex items-center ml-auto">
                      {selectedTheme == index && <IconSelected />}
                      {/* <span className="text-grey-500 text-preset-5 ml-auto">Already used</span> */}
                    </div>
                  </DropdownMenu.Item>
                  {index < Object.entries(colors).length - 1 && (
                    <Divider orientation="horizontal" />
                  )}
                </div>
              )
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

export { SelectTheme }
