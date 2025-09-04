import clsx from 'clsx'

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'tel'
  | 'url'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'file'
  | 'hidden'
  | 'range'
  | 'color'
  | 'submit'
  | 'reset'
  | 'button'

type InputProps = {
  id: string
  type: InputType
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  EndIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  StartIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  startDecorator?: string
  endDecorator?: string
  fullWidth?: boolean
}

function Input({
  id,
  type,
  label,
  value,
  onChange,
  placeholder,
  EndIcon,
  StartIcon,
  startDecorator,
  endDecorator,
  fullWidth
}: InputProps) {
  return (
    <div className={clsx('flex flex-col gap-1 h-fit', fullWidth && 'w-full')}>
      {label && (
        <label htmlFor={id} className="text-preset-5 font-bold text-grey-500">
          {label}
        </label>
      )}
      <div className="relative">
        {StartIcon && (
          <StartIcon className="w-[16px] h-[16px] absolute left-5 top-1/2 -translate-y-1/2" />
        )}
        {!StartIcon && startDecorator && (
          <span className="text-preset-4 text-beige-500 absolute left-5 top-1/2 -translate-y-1/2">
            {startDecorator}
          </span>
        )}
        <input
          id={id}
          name="foo"
          type={type}
          className={clsx(
            'w-[320px] h-[45px] rounded-lg px-5 py-3 border border-beige-500 hover:border-grey-500 text-grey-900 placeholder:text-beige-500',
            StartIcon && 'pl-10',
            startDecorator && 'pl-10',
            fullWidth && 'w-full'
          )}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
        {EndIcon && (
          <EndIcon className="w-[16px] h-[16px] absolute right-5 top-1/2 -translate-y-1/2" />
        )}

        {endDecorator && (
          <span className="text-preset-4 text-beige-500 absolute right-5 top-1/2 -translate-y-1/2">
            {endDecorator}
          </span>
        )}
      </div>
    </div>
  )
}

export { Input }
