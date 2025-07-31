function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

function formatDate(dateString: string) {
  const date = new Date(dateString)

  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date)
  return formatted
}

export { formatCurrency, formatDate }
