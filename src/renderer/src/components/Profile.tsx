function Profile({ name }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] rounded-full bg-yellow"></div>
      <span className="text-preset-4 font-bold">{name}</span>
    </div>
  )
}

export { Profile }
