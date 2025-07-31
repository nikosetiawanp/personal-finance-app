import clsx from 'clsx'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'destructive'

type ButtonProps = {
  variant?: Variant
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

function Button({ children, variant = 'primary', onClick, className, Icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'group p-4 rounded-lg text-preset-4 border justify-center flex items-center gap-2 hover:cursor-pointer',
        variant === 'primary' &&
          'bg-grey-900 border-grey-900 hover:bg-grey-500 hover:border-grey-500 text-white font-bold',
        variant === 'secondary' &&
          'bg-beige-100 border-beige-100 text-grey-900 hover:bg-white hover:border-grey-500 font-bold',
        variant === 'tertiary' &&
          'px-0 py-0 bg-transparent border-none text-grey-500 hover:text-grey-900',
        variant === 'destructive' && 'bg-red bogder-red text-white font-bold hover:opacity-80',
        className
      )}
    >
      {children}
      {Icon && (
        <Icon
          className={clsx(
            variant === 'primary' && 'fill-white',
            variant === 'tertiary' && 'fill-grey-900',
            variant === 'tertiary' && 'fill-grey-500 group-hover:fill-grey-900',
            variant === 'destructive' && 'fill-white'
          )}
        />
      )}
    </button>
  )
}

export { Button }
