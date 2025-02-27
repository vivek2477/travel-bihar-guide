
export interface Facility {
  name: string;
  description: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  imageAlt: string;
  location: string;
  directions: {
    byRoad: string;
    byRail: string;
    byAir: string;
  };
  facilities: Facility[];
  bestTimeToVisit: string;
  tags: string[];
}

const destinations: Destination[] = [
  {
    id: "bodh-gaya",
    name: "Bodh Gaya",
    shortDescription: "Sacred Buddhist pilgrimage site where Buddha attained enlightenment",
    fullDescription: "Bodh Gaya is a religious site and place of pilgrimage associated with the Mahabodhi Temple Complex in Gaya district in the Indian state of Bihar. It is famous as it is the place where Gautama Buddha is said to have attained Enlightenment under what became known as the Bodhi Tree. The site contains a descendant of the Bodhi Tree under which Buddha gained enlightenment, and has been a major pilgrimage destination for Buddhists for well over two thousand years, and some elements probably date to the period of Ashoka (died c.232 BCE).",
    imageSrc: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=2942&auto=format&fit=crop",
    imageAlt: "Mahabodhi Temple at Bodh Gaya",
    location: "Bodh Gaya, Gaya district, Bihar",
    directions: {
      byRoad: "Well-connected by road to Gaya (16 km), Patna (140 km), and other major cities in Bihar. Regular buses and taxis are available.",
      byRail: "Gaya Junction Railway Station (16 km) is the nearest railway station, well-connected to major cities.",
      byAir: "Gaya International Airport (GAY) is approximately 17 km away, with direct flights from several Asian countries and connections from major Indian cities."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Various hotels, guesthouses, and monasteries offering budget to luxury accommodations.",
        icon: "hotel"
      },
      {
        name: "Dining",
        description: "Multiple restaurants serving Indian, Tibetan, Thai, and international cuisine.",
        icon: "utensils"
      },
      {
        name: "Guided Tours",
        description: "Professional guides available for historical and spiritual tours of the temple complex and surrounding areas.",
        icon: "map"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 5°C to 27°C.",
    tags: ["Religious", "Buddhist", "Historical", "UNESCO World Heritage"]
  },
  {
    id: "nalanda",
    name: "Nalanda University Ruins",
    shortDescription: "Ancient center of learning and UNESCO World Heritage site",
    fullDescription: "Nalanda was an ancient Mahavihara, a large Buddhist monastery in the ancient kingdom of Magadha (modern-day Bihar) in India. It was a center of learning from the fifth century CE to c. 1200 CE. Today, it is a UNESCO World Heritage Site. The ruins of the ancient university at Nalanda are spread over an area of 14 hectares. The main stupa built by Emperor Ashoka was renovated multiple times and many small stupas and shrines were added over a period of time. Nalanda was one of the world's first residential universities with dormitories for students and was an architectural masterpiece.",
    imageSrc: "https://images.unsplash.com/photo-1623770789392-9e31e49fe15b?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Ancient ruins of Nalanda University",
    location: "Nalanda district, Bihar, approximately 90 km from Patna",
    directions: {
      byRoad: "Well-connected by road to Patna, Rajgir, and Bihar Sharif. Regular buses and taxis are available.",
      byRail: "Rajgir (12 km) and Bihar Sharif (13 km) are the nearest railway stations.",
      byAir: "Patna Airport (Jay Prakash Narayan International Airport) is the nearest airport, approximately 90 km away."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Several hotels and guesthouses in nearby Rajgir and Bihar Sharif.",
        icon: "hotel"
      },
      {
        name: "Museum",
        description: "Nalanda Archaeological Museum houses sculptures, coins, and pottery from the excavated site.",
        icon: "landmark"
      },
      {
        name: "Guided Tours",
        description: "Official guides approved by Archaeological Survey of India available.",
        icon: "map"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 8°C to 30°C.",
    tags: ["Historical", "UNESCO World Heritage", "Educational", "Archaeological"]
  },
  {
    id: "rajgir",
    name: "Rajgir",
    shortDescription: "Ancient city with hot springs and religious significance",
    fullDescription: "Rajgir is an ancient city in Bihar, famous for its association with Buddhism and Jainism. It was the first capital of the kingdom of Magadha, a state that would eventually evolve into the Mauryan Empire. Its date of origin is unknown, although ceramics dating to about 1000 BCE have been found in the city. The city was in a valley surrounded by five hills. The site is sacred to both Buddhists and Jains, as both religions trace back important founders to Rajgir. The place also has various hot springs which are believed to have medicinal properties that can cure many skin diseases.",
    imageSrc: "https://images.unsplash.com/photo-1588065394015-68bf7c64bc0d?q=80&w=2065&auto=format&fit=crop",
    imageAlt: "View of Rajgir with its surrounding hills",
    location: "Rajgir, Nalanda district, Bihar",
    directions: {
      byRoad: "Well-connected by road to Patna (110 km) and Nalanda (12 km). Regular buses and taxis are available.",
      byRail: "Rajgir has its own railway station, which is well-connected to major cities.",
      byAir: "Patna Airport (Jay Prakash Narayan International Airport) is the nearest airport, approximately 110 km away."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Several hotels, guesthouses, and Bihar State Tourism Development Corporation (BSTDC) hotels.",
        icon: "hotel"
      },
      {
        name: "Hot Springs",
        description: "Multiple hot springs with separate bathing areas for men and women.",
        icon: "hot-tub"
      },
      {
        name: "Ropeway",
        description: "Aerial ropeway to reach Vishwa Shanti Stupa on Ratnagiri Hill, offering panoramic views.",
        icon: "cable-car"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 8°C to 30°C.",
    tags: ["Religious", "Historical", "Hot Springs", "Scenic"]
  },
  {
    id: "gaya",
    name: "Gaya",
    shortDescription: "Important pilgrimage center for Hindus",
    fullDescription: "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It's known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. To the north, Hindu devotees perform rituals for the dead at a series of riverside ghats near a huge Banyan tree. Southwest of town, Bodh Gaya is a key Buddhist pilgrimage site, home to the Buddha's Bodhi Tree.",
    imageSrc: "https://media.tripinvites.com/places/bodh-gaya/vishnupad-temple/vishnupad-temple-a-wonder-featured.jpg",
    imageAlt: "Vishnupad Temple in Gaya",
    location: "Gaya district, Bihar",
    directions: {
      byRoad: "Well-connected by road to Patna (120 km) and other major cities in Bihar. Regular buses and taxis are available.",
      byRail: "Gaya Junction Railway Station is a major railway station, well-connected to major cities across India.",
      byAir: "Gaya International Airport (GAY) has direct flights to several Asian countries and connections from major Indian cities."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Several hotels, guesthouses, and dharamshalas (pilgrim rest houses) across various budget ranges.",
        icon: "hotel"
      },
      {
        name: "Dining",
        description: "Various restaurants serving traditional Bihari and North Indian cuisine.",
        icon: "utensils"
      },
      {
        name: "Priests",
        description: "Local priests (Pandas) available to guide pilgrims through various rituals.",
        icon: "user"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 5°C to 30°C.",
    tags: ["Religious", "Hindu Pilgrimage", "Historical", "Cultural"]
  },
  {
    id: "patna",
    name: "Patna",
    shortDescription: "Capital city with rich historical significance",
    fullDescription: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. The state capital, it's home to Bihar Museum, a contemporary landmark exhibiting bronze sculptures and old coins from the region. Nearby, Indo-Saracenic–style Patna Museum displays a casket believed to contain the Buddha's ashes. Close to the river, the Golghar is a domed colonial granary overlooking the city.",
    imageSrc: "https://images.unsplash.com/photo-1625730129339-4040b3410a2f?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Skyline of Patna city with the Ganges River",
    location: "Capital city of Bihar, located on the southern bank of the Ganges River",
    directions: {
      byRoad: "Well-connected by road to major cities in Bihar and neighboring states. NH 19, NH 30, and NH 31 pass through Patna.",
      byRail: "Patna Junction is a major railway station, well-connected to all major cities in India.",
      byAir: "Jay Prakash Narayan International Airport in Patna has regular flights to major Indian cities."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Numerous hotels across all budget ranges from luxury to economy.",
        icon: "hotel"
      },
      {
        name: "Dining",
        description: "Wide range of restaurants offering local Bihari cuisine, North Indian food, and international options.",
        icon: "utensils"
      },
      {
        name: "Shopping",
        description: "Modern malls and traditional markets offering local handicrafts, silk, and souvenirs.",
        icon: "shopping-bag"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 5°C to 25°C.",
    tags: ["Capital City", "Historical", "Cultural", "Urban"]
  },
  {
    id: "vaishali",
    name: "Vaishali",
    shortDescription: "Ancient city associated with Buddha and Lord Mahavira",
    fullDescription: "Vaishali is an ancient city in Bihar, India, and is one of the world's first examples of a republic. It is an important pilgrimage for both Buddhists and Jains alike. Buddha visited this place frequently and at Kolhua, close by, preached his last sermon. To commemorate the event, Emperor Ashoka, in the third century BC erected one of his famous lion pillars here. The Lion Pillar of Ashoka still stands in Vaishali. This city was also an important center for the Jain community, as Lord Mahavira, the last and 24th Tirthankara (enlightened spiritual teacher) of Jainism was born in this region.",
    imageSrc: "https://static2.tripoto.com/media/filter/nl/img/4866/TripDocument/1439483734_4.jpg",
    imageAlt: "Ashoka Pillar at Vaishali",
    location: "Vaishali district, Bihar, approximately 55 km from Patna",
    directions: {
      byRoad: "Well-connected by road to Patna (55 km) and other major cities in Bihar. Regular buses and taxis are available.",
      byRail: "Hajipur Junction (35 km) is the nearest major railway station. Vaishali has a small railway station as well.",
      byAir: "Jay Prakash Narayan International Airport in Patna is the nearest airport, approximately 55 km away."
    },
    facilities: [
      {
        name: "Accommodation",
        description: "Limited accommodations in Vaishali. Most visitors stay in Patna or Hajipur.",
        icon: "hotel"
      },
      {
        name: "Dining",
        description: "Small local eateries serving Bihari cuisine.",
        icon: "utensils"
      },
      {
        name: "Museum",
        description: "Archaeological Museum housing artifacts discovered from excavations.",
        icon: "landmark"
      }
    ],
    bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 5°C to 30°C.",
    tags: ["Historical", "Buddhist", "Jain", "Archaeological"]
  }
];

export default destinations;
