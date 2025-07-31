function PageLayout({ children }) {
  return (
    // <section className="flex flex-col items-center">
    <div className="flex flex-col gap-8 py-8 px-10 w-full">{children}</div>
    // </section>
  )
}

export { PageLayout }
