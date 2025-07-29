import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'destructive'

type ButtonProps = {
  variant?: Variant
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

function Button({ children, variant = 'primary', onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'p-4 rounded-lg text-preset-4 border flex items-center gap-2',
        variant === 'primary' &&
          'bg-grey-900 border-grey-900 hover:bg-grey-500 hover:border-grey-500 text-white font-bold',
        variant === 'secondary' &&
          'bg-beige-100 border-beige-100 text-grey-900 hover:bg-white hover:border-grey-500 font-bold',
        variant === 'tertiary' && 'bg-transparent border-none text-grey-500 hover:text-grey-900',
        variant === 'destructive' && 'bg-red bogder-red text-white font-bold hover:opacity-80',
        className
      )}
    >
      {children}
    </button>
  )
}

export { Button }
