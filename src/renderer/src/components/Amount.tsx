import clsx from 'clsx'

type AmountProps = {
  value: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  highlight?: boolean
  showPlus?: boolean
  decimals?: number
}

function Amount({ value, size, highlight, showPlus, decimals }: AmountProps) {
  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals ? decimals : 2,
      maximumFractionDigits: decimals ? decimals : 2
    }).format(amount)
  }

  return (
    <p
      className={clsx(
        'font-bold',
        !highlight && 'text-grey-900',
        value < 0 && highlight && 'text-grey-900',
        value > 0 && highlight && 'text-green',
        size === 'xs' && 'text-preset-5',
        size === 'sm' && 'text-preset-4',
        size === 'md' && 'text-preset-3',
        size === 'lg' && 'text-preset-2',
        size === 'xl' && 'text-preset-1',
        !size && 'text-preset-4'
      )}
    >
      {value > 0 && showPlus && '+'}
      {formatCurrency(value)}
    </p>
  )
}

export { Amount }
