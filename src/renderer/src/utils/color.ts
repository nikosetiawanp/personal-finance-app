const colors = {
  green: 'bg-green',
  yellow: 'bg-yellow',
  cyan: 'bg-cyan',
  navy: 'bg-navy',
  red: 'bg-red',
  purple: 'bg-purple',
  turqoise: 'bg-turqoise',
  brown: 'bg-brown',
  magenta: 'bg-magenta',
  blue: 'bg-blue',
  navyGray: 'bg-navy-gray',
  armyGreen: 'bg-army-green',
  gold: 'bg-gold',
  orange: 'bg-orange'
}
function getColorClass(color: string) {
  return colors[color]
}

export { getColorClass, colors }
