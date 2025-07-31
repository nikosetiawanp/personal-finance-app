type ProfileProps = {
  name: string
  imageUrl?: string
}

function Profile({ name, imageUrl }: ProfileProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] rounded-full bg-beige-100">
        {imageUrl && <img src={imageUrl} alt={'image-' + name} />}
      </div>
      <span className="text-preset-4 font-bold">{name}</span>
    </div>
  )
}

export { Profile }
