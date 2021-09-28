// 0: sunday, 6: saturday
const getDate = day => {
  let d = new Date()

  // If the prop day equals the current day, return the current day
  if (d.getDay() === day) return d

  d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7))
  console.log(d)
  return d
}

export const events = [
  {
    name: "Women's Pickleball",
    date: getDate(1),
    time: '',
    recurring: true,
    description: '',
  },
  {
    name: "Women's Bible Study",
    date: getDate(3),
    time: '7pm',
    recurring: true,
    description: '',
  },
  {
    name: "Men's Bible Study ",
    date: getDate(6),
    time: '8am',
    recurring: true,
    description: '',
  },
  {
    name: 'Mars Applefest',
    date: getDate(6),
    time: '11am-4pm',
    recurring: false,
    description: '',
  },
  {
    name: 'Sunday Service',
    date: getDate(0),
    time: '10am',
    recurring: true,
    description: '',
  },
  {
    name: '180 Youth Group',
    date: getDate(0),
    time: '6:30pm',
    recurring: true,
    description: '',
  },
]
