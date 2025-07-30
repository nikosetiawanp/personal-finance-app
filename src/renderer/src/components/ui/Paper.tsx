import clsx from 'clsx'

type PaperProps = {
  children: React.ReactNode
  className?: string
}

function Paper({ children, className }: PaperProps) {
  return <div className={clsx('bg-white rounded-xl flex flex-col p-8', className)}>{children}</div>
}

export { Paper }
