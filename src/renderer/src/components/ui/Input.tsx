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
  placeholder?: string
  EndIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  StartIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

function Input({ id, type, label, placeholder, EndIcon, StartIcon }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-fit h-fit">
      {label && (
        <label htmlFor={id} className="text-preset-5 font-bold text-grey-500">
          {label}
        </label>
      )}
      <div className="relative">
        {StartIcon && (
          <StartIcon className="w-[16px] h-[16px] absolute left-5 top-1/2 -translate-y-1/2" />
        )}
        <input
          id={id}
          name="foo"
          type={type}
          className={clsx(
            'w-[320px] h-[45px] rounded-lg px-5 py-3 border border-beige-500 hover:border-grey-500',
            StartIcon && 'pl-10'
          )}
          placeholder={placeholder}
          autoComplete="off"
        />
        {EndIcon && (
          <EndIcon className="w-[16px] h-[16px] absolute right-5 top-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  )
}

export { Input }
