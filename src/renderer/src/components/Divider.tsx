import clsx from 'clsx'

type DividerProps = {
  orientation: 'horizontal' | 'vertical'
}

function Divider({ orientation }: DividerProps) {
  return (
    <div
      className={clsx(
        'bg-grey-100',
        orientation == 'horizontal' && 'min-h-[1px] w-full',
        orientation == 'vertical' && 'min-w-[1px] h-full'
      )}
    ></div>
  )
}

export { Divider }
