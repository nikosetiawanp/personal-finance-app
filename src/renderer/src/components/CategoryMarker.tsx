import clsx from 'clsx'

type CategoryMarkerProps = {
  backgroundColor: string
}

function CategoryMarker({ backgroundColor }: CategoryMarkerProps) {
  return <div className={clsx('rounded-full min-w-1 h-auto', backgroundColor)}></div>
}

export { CategoryMarker }
