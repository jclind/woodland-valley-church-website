// 0: sunday, 6: saturday
const getDate = day => {
  let d = new Date()

  // If the prop day equals the current day, return the current day
  if (d.getDay() === day) return d

  d.setDate(d.getDate() + ((day + 7 - d.getDay()) % 7 || 7))
  return d
}

export const events = [
  {
    id: 1,
    name: "Women's Pickleball",
    date: getDate(1),
    time: '',
    recurring: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, turpis suscipit imperdiet tincidunt, ante neque malesuada leo, vitae cursus leo diam sit amet nibh. Curabitur accumsan suscipit dolor quis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis non ex efficitur nunc tincidunt porttitor sodales eget enim. Vivamus maximus aliquam turpis id accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum libero felis, convallis at auctor eu, fermentum non libero. Phasellus sit amet elementum ante, quis porta tortor. Donec eget faucibus ante. Nullam feugiat eget nisl in condimentum. Etiam eros tortor, egestas quis nulla vitae, euismod finibus purus. Ut a sodales dui. Vestibulum vitae lacus tristique orci mattis pharetra. Ut vitae eros finibus, commodo elit at, gravida risus. Nullam non suscipit urna.',
    img: 'https://i.ibb.co/0fptMxq/pickleball3.jpg',
  },
  {
    id: 2,
    name: "Women's Bible Study",
    date: getDate(3),
    time: '7pm',
    recurring: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, turpis suscipit imperdiet tincidunt, ante neque malesuada leo, vitae cursus leo diam sit amet nibh. Curabitur accumsan suscipit dolor quis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis non ex efficitur nunc tincidunt porttitor sodales eget enim. Vivamus maximus aliquam turpis id accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum libero felis, convallis at auctor eu, fermentum non libero. Phasellus sit amet elementum ante, quis porta tortor. Donec eget faucibus ante. Nullam feugiat eget nisl in condimentum. Etiam eros tortor, egestas quis nulla vitae, euismod finibus purus. Ut a sodales dui. Vestibulum vitae lacus tristique orci mattis pharetra. Ut vitae eros finibus, commodo elit at, gravida risus. Nullam non suscipit urna.',
    img: 'https://i.ibb.co/Brxz9K1/wv-womans-bible-study.jpg',
  },
  {
    id: 3,
    name: "Men's Bible Study ",
    date: getDate(6),
    time: '8am',
    recurring: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, turpis suscipit imperdiet tincidunt, ante neque malesuada leo, vitae cursus leo diam sit amet nibh. Curabitur accumsan suscipit dolor quis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis non ex efficitur nunc tincidunt porttitor sodales eget enim. Vivamus maximus aliquam turpis id accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum libero felis, convallis at auctor eu, fermentum non libero. Phasellus sit amet elementum ante, quis porta tortor. Donec eget faucibus ante. Nullam feugiat eget nisl in condimentum. Etiam eros tortor, egestas quis nulla vitae, euismod finibus purus. Ut a sodales dui. Vestibulum vitae lacus tristique orci mattis pharetra. Ut vitae eros finibus, commodo elit at, gravida risus. Nullam non suscipit urna.',
    img: 'https://i.ibb.co/GcRY0LY/wv-mens-bible-study.jpg',
  },
  {
    id: 5,
    name: 'Sunday Service',
    date: getDate(0),
    time: '10am',
    recurring: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, turpis suscipit imperdiet tincidunt, ante neque malesuada leo, vitae cursus leo diam sit amet nibh. Curabitur accumsan suscipit dolor quis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis non ex efficitur nunc tincidunt porttitor sodales eget enim. Vivamus maximus aliquam turpis id accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum libero felis, convallis at auctor eu, fermentum non libero. Phasellus sit amet elementum ante, quis porta tortor. Donec eget faucibus ante. Nullam feugiat eget nisl in condimentum. Etiam eros tortor, egestas quis nulla vitae, euismod finibus purus. Ut a sodales dui. Vestibulum vitae lacus tristique orci mattis pharetra. Ut vitae eros finibus, commodo elit at, gravida risus. Nullam non suscipit urna.',
    img: 'https://i.ibb.co/vmBH021/aaron-burden-UIib0b-Av-Wfs-unsplash.jpg',
  },
  {
    id: 6,
    name: '180 Youth Group',
    date: getDate(0),
    time: '6:30pm',
    recurring: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, turpis suscipit imperdiet tincidunt, ante neque malesuada leo, vitae cursus leo diam sit amet nibh. Curabitur accumsan suscipit dolor quis aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis non ex efficitur nunc tincidunt porttitor sodales eget enim. Vivamus maximus aliquam turpis id accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum libero felis, convallis at auctor eu, fermentum non libero. Phasellus sit amet elementum ante, quis porta tortor. Donec eget faucibus ante. Nullam feugiat eget nisl in condimentum. Etiam eros tortor, egestas quis nulla vitae, euismod finibus purus. Ut a sodales dui. Vestibulum vitae lacus tristique orci mattis pharetra. Ut vitae eros finibus, commodo elit at, gravida risus. Nullam non suscipit urna.',
    img: 'https://i.ibb.co/mDQzx61/wv-180.jpg',
  },
  {
    id: 7,
    name: 'How To Pray',
    date: 'Sun Oct 10 2021 10:00:00 GMT-0400 (Eastern Daylight Time)',
    time: '10am',
    recurring: false,
    description:
      'Prayer??? What in the world is it?  Well, first it is not of this world.  It is finite human beings communicating with the infinite God of all creation.  Yeah, that alone should take our breath away.  Yet, prayer is exactly what the LORD allows us access to and expects us to do every day.  In this 3-week series we will look at what prayer is, how to pray effectively, and how to literally put feet to our faith through prayer.  Join us beginning October 10th as we explore the transforming power of prayer.',
    img: 'https://i.ibb.co/Ln3qN27/ezgif-com-gif-maker.jpg',
    address: '225 Crowe Ave, Mars, PA 16046',
  },
]
