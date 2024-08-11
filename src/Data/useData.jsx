/* eslint-disable max-statements */
/* eslint-disable max-lines */

const useData = () => {
  const user = {
    id: "user_1",
    firstname: "Harry",
    lastname: "Potter",
    username: "harry_potter",
    posts: ["post_1234", "post_5678", "post_91011"],
    cover_photo: "https://example.com/harry_cover.jpg",
    gender: {
      value: "male",
      visibility: "global",
    },
    interests: {
      visibility: "global",
      intrests: ["Quidditch", "Defense Against the Dark Arts", "Wizard Chess"],
    },
    privacy_settings: {
      message_privacy: "friends",
      profile_visibility: "friends",
      timeline_post_privacy: "friends",
    },
    websites: [
      {
        id: "websites_id_1",
        visibility: "global",
        link: "https://harrypotter.example.com",
      },
    ],
    subscriptions: [
      {
        post_id: "post_5678",
        created_at: "2023-01-02",
        post_description: "A day at the Forbidden Forest",
      },
    ],
    events: [
      {
        id: "event_1234",
        name: "Yule Ball",
        date: "2023-12-25",
        status: "attending",
        location: "Hogwarts Great Hall",
      },
    ],
    account_settings: {
      language: "en-US",
      sms_notifications: false,
      email_notifications: true,
      time_zone: "America/New_York",
      two_factor_authentication: true,
    },
    blocked_users: [
      {
        id: "user_5",
        firstname: "Tom",
        lastname: "Riddle",
        username: "voldemort",
        profile_picture: "https://example.com/voldemort_profile.jpg",
      },
    ],
    friend_requests: [
      {
        id: "user_4",
        firstname: "Draco",
        lastname: "Malfoy",
        username: "draco_malfoy",
        mutual_friends_count: 50,
        profile_picture: "https://example.com/draco_profile.jpg",
      },
    ],
    places: [
      {
        id: "place_id_1",
        current: true,
        visibility: "global",
        location: {
          id: "location_id_1",
          state: "",
          country: "India",
          city: "Hyderabad",
          coOrdinates: {
            lat: "",
            long: "",
          },
        },
      },
    ],
    notifications: [
      {
        id: "notif_1234",
        read: false,
        type: "comment",
        created_at: "2023-01-01",
        content: "Hermione Granger commented on your post",
      },
      {
        id: "notif_1235",
        read: true,
        type: "reaction",
        created_at: "2023-01-01",
        content: "Ron Weasley liked your post",
      },
    ],
    friends: [
      {
        id: "user_2",
        firstname: "Ron",
        lastname: "Weasley",
        username: "ron_weasley",
        mutual_friends_count: 100,
        friendship_status: "friends",
        profile_picture: "https://example.com/ron_profile.jpg",
      },
      {
        id: "user_3",
        lastname: "Granger",
        firstname: "Hermione",
        mutual_friends_count: 150,
        username: "hermione_granger",
        friendship_status: "friends",
        profile_picture: "https://example.com/hermione_profile.jpg",
      },
    ],
    info: {
      birthdate: {
        visibility: "global",
        date: "1997-11-11T14:10:30Z",
      },
      relationship: {
        status: "Single",
        relationId: "single",
        visibility: "global",
      },
      hobbies: {
        visibility: "friends",
        hobbies: ["Reading", "Traveling", "Photography", "Cooking"],
      },
      languages: {
        visibility: "public",
        // icon: LanguageOutlinedIcon,
        value: ["English", "Spanish", "French"],
      },
      email: [
        {
          id: "email_id_1",
          primary: true,
          verified: false,
          visibility: "global",
          email: "narayana@example.com",
        },
      ],
      phone: [
        {
          id: "phone_id_1",
          country: "IN",
          primary: true,
          verified: false,
          phone: "34567890",
          countryCode: "+91",
          visibility: "global",
        },
      ],
    },
    work: [
      {
        id: "workplace_item_1",
        current: false,
        city: "Bangalore",
        company: "Amazon",
        visibility: "global",
        position: "Software Engineer",
        endDate: "2019-05-18T14:10:30Z",
        startDate: "2018-05-18T14:10:30Z",
        description: "Working on cloud computing technologies.",
      },
      {
        id: "workplace_item_2",
        current: false,
        company: "Google",
        city: "San Francisco",
        visibility: "friends",
        endDate: "2021-05-18T14:10:30Z",
        startDate: "2019-05-18T14:10:30Z",
        position: "Senior Software Engineer",
        description: "Leading the development of scalable web applications.",
      },
      {
        id: "workplace_item_3",
        endDate: "",
        current: true,
        city: "New York",
        company: "Facebook",
        visibility: "public",
        position: "Frontend Developer",
        startDate: "2021-05-18T14:10:30Z",
        description:
          "Developed interactive user interfaces for Facebook's web applications.",
      },
    ],
    education: [
      {
        id: "school_id_1",
        endDate: "",
        city: "London",
        graduated: false,
        visibility: "public",
        attendedFor: "University",
        startDate: "2022-05-18T14:10:30Z",
        school: "Hogwarts School of Witchcraft and Wizardry",
        description: "Studied various computer science subjects.",
        courses: [
          {
            grade: "A",
            name: "Defense Against the Dark Arts",
          },
          {
            grade: "A+",
            name: "Potions",
          },
        ],
      },
      {
        id: "school_id_2",
        city: "London",
        graduated: true,
        visibility: "public",
        endDate: "2023-05-18T14:10:30Z",
        startDate: "2022-05-18T14:10:30Z",
        attendedFor: "University(postgraduate)",
        school: "Hogwarts School of Witchcraft and Wizardry",
        description: "Studied various computer science subjects.",
        courses: [
          {
            grade: "A",
            name: "Defense Against the Dark Arts",
          },
          {
            grade: "A+",
            name: "Potions",
          },
        ],
      },
      {
        id: "school_id_3",
        city: "London",
        graduated: true,
        visibility: "public",
        attendedFor: "High School",
        endDate: "2019-05-18T14:10:30Z",
        startDate: "2018-05-18T14:10:30Z",
        school: "Hogwarts School of Witchcraft and Wizardry",
        description: "Studied various computer science subjects.",
      },
    ],
    pages: [
      {
        id: "page_91011",
        privacy: "public",
        liked_at: "2023-03-15",
        followers_count: 350000,
        name: "The Daily Prophet",
        category: "Media/News Company",
        website: "https://www.dailyprophet.com",
        description:
          "Official page for The Daily Prophet, the most widely read daily newspaper in Britain's wizard community.",
        contact_info: {
          phone: "+44 1234 567892",
          email: "editor@dailyprophet.com",
          address: "Diagon Alley, London, UK",
        },
        social_links: {
          twitter: "https://twitter.com/dailyprophet",
          facebook: "https://www.facebook.com/dailyprophet",
          instagram: "https://www.instagram.com/dailyprophet",
        },
      },
      {
        id: "page_121314",
        privacy: "public",
        liked_at: "2023-04-20",
        followers_count: 150000,
        category: "Pet Services",
        name: "Magical Menagerie",
        website: "https://www.magicalmenagerie.com",
        description:
          "Official page for Magical Menagerie, the best place to find magical pets and supplies in Diagon Alley.",
        contact_info: {
          phone: "+44 1234 567893",
          email: "info@magicalmenagerie.com",
          address: "Diagon Alley, London, UK",
        },
        social_links: {
          twitter: "https://twitter.com/magicalmenagerie",
          facebook: "https://www.facebook.com/magicalmenagerie",
          instagram: "https://www.instagram.com/magicalmenagerie",
        },
      },
    ],
    groups: [
      {
        id: "group_1234",
        role: "Member",
        members_count: 28,
        privacy: "private",
        max_members_count: 1000,
        joined_at: "2023-01-01",
        name: "Dumbledore's Army",
        activity_status: "active",
        icon: "https://example.com/dumbledores_army_icon.jpg",
        description:
          "A secret student organization founded by Harry Potter to stand against the Dark Arts.",
      },
      {
        id: "group_5678",
        role: "Admin",
        members_count: 15,
        privacy: "private",
        max_members_count: 1000,
        joined_at: "2022-05-15",
        activity_status: "active",
        name: "Order of the Phoenix",
        icon: "https://example.com/order_of_phoenix_icon.jpg",
        description:
          "A group of wizards and witches dedicated to fighting Lord Voldemort.",
      },
      {
        id: "group_91011",
        role: "Moderator",
        privacy: "public",
        members_count: 2000,
        max_members_count: 1000,
        joined_at: "2021-08-10",
        name: "Hogwarts Alumni",
        activity_status: "active",
        icon: "https://example.com/hogwarts_alumni_icon.jpg",
        description:
          "A group for all the alumni of Hogwarts School of Witchcraft and Wizardry to reconnect.",
      },
      {
        id: "group_121314",
        role: "Member",
        privacy: "public",
        members_count: 500,
        name: "Quidditch Fans",
        max_members_count: 1000,
        joined_at: "2023-02-25",
        activity_status: "active",
        icon: "https://example.com/quidditch_fans_icon.jpg",
        description:
          "A group for all Quidditch enthusiasts to discuss matches and share their love for the sport.",
      },
      {
        id: "group_151617",
        role: "Member",
        privacy: "public",
        members_count: 150,
        max_members_count: 1000,
        joined_at: "2022-11-05",
        name: "Wizard Chess Club",
        activity_status: "active",
        icon: "https://example.com/wizard_chess_club_icon.jpg",
        description:
          "A group for those who enjoy playing and discussing Wizard Chess.",
      },
      {
        id: "group_181920",
        role: "Member",
        members_count: 75,
        privacy: "private",
        max_members_count: 1000,
        joined_at: "2021-12-12",
        activity_status: "active",
        name: "Magical Creatures Enthusiasts",
        icon: "https://example.com/magical_creatures_icon.jpg",
        description:
          "A group dedicated to the study and care of magical creatures.",
      },
      {
        id: "group_212223",
        role: "Member",
        privacy: "public",
        members_count: 220,
        name: "Potion Masters",
        max_members_count: 1000,
        joined_at: "2023-04-18",
        activity_status: "active",
        icon: "https://example.com/potion_masters_icon.jpg",
        description:
          "A group for those who love brewing potions and sharing recipes.",
      },
      {
        id: "group_242526",
        role: "Member",
        privacy: "public",
        members_count: 300,
        max_members_count: 1000,
        joined_at: "2022-09-29",
        activity_status: "inactive",
        name: "Defense Against the Dark Arts Study Group",
        icon: "https://example.com/dada_study_group_icon.jpg",
        description:
          "A study group focused on learning and mastering Defense Against the Dark Arts.",
      },
      {
        id: "group_272829",
        role: "Member",
        privacy: "private",
        members_count: 100,
        max_members_count: 1000,
        joined_at: "2023-03-17",
        activity_status: "active",
        name: "Hogsmeade Weekend Trips",
        icon: "https://example.com/hogsmeade_trips_icon.jpg",
        description:
          "Organizing weekend trips to Hogsmeade for all interested students.",
      },
      {
        id: "group_303132",
        role: "Moderator",
        members_count: 50,
        privacy: "private",
        max_members_count: 1000,
        joined_at: "2021-10-20",
        activity_status: "active",
        name: "Hogwarts Professors' Forum",
        icon: "https://example.com/professors_forum_icon.jpg",
        description:
          "A forum for Hogwarts professors to discuss academic matters and share knowledge.",
      },
    ],
  };
  const countries = [
    { id: 4, alpha2: "af", alpha3: "afg", name: "Afghanistan" },
    { id: 8, alpha2: "al", alpha3: "alb", name: "Albania" },
    { id: 12, alpha2: "dz", alpha3: "dza", name: "Algeria" },
    { id: 20, alpha2: "ad", alpha3: "and", name: "Andorra" },
    { id: 24, alpha2: "ao", alpha3: "ago", name: "Angola" },
    { id: 28, alpha2: "ag", alpha3: "atg", name: "Antigua and Barbuda" },
    { id: 32, alpha2: "ar", alpha3: "arg", name: "Argentina" },
    { id: 51, alpha2: "am", alpha3: "arm", name: "Armenia" },
    { id: 36, alpha2: "au", alpha3: "aus", name: "Australia" },
    { id: 40, alpha2: "at", alpha3: "aut", name: "Austria" },
    { id: 31, alpha2: "az", alpha3: "aze", name: "Azerbaijan" },
    { id: 44, alpha2: "bs", alpha3: "bhs", name: "Bahamas" },
    { id: 48, alpha2: "bh", alpha3: "bhr", name: "Bahrain" },
    { id: 50, alpha2: "bd", alpha3: "bgd", name: "Bangladesh" },
    { id: 52, alpha2: "bb", alpha3: "brb", name: "Barbados" },
    { id: 112, alpha2: "by", alpha3: "blr", name: "Belarus" },
    { id: 56, alpha2: "be", alpha3: "bel", name: "Belgium" },
    { id: 84, alpha2: "bz", alpha3: "blz", name: "Belize" },
    { id: 204, alpha2: "bj", alpha3: "ben", name: "Benin" },
    { id: 64, alpha2: "bt", alpha3: "btn", name: "Bhutan" },
    {
      id: 68,
      alpha2: "bo",
      alpha3: "bol",
      name: "Bolivia, Plurinational State of",
    },
    {
      id: 70,
      alpha2: "ba",
      alpha3: "bih",
      name: "Bosnia and Herzegovina",
    },
    { id: 72, alpha2: "bw", alpha3: "bwa", name: "Botswana" },
    { id: 76, alpha2: "br", alpha3: "bra", name: "Brazil" },
    { id: 96, alpha2: "bn", alpha3: "brn", name: "Brunei Darussalam" },
    { id: 100, alpha2: "bg", alpha3: "bgr", name: "Bulgaria" },
    { id: 854, alpha2: "bf", alpha3: "bfa", name: "Burkina Faso" },
    { id: 108, alpha2: "bi", alpha3: "bdi", name: "Burundi" },
    { id: 132, alpha2: "cv", alpha3: "cpv", name: "Cabo Verde" },
    { id: 116, alpha2: "kh", alpha3: "khm", name: "Cambodia" },
    { id: 120, alpha2: "cm", alpha3: "cmr", name: "Cameroon" },
    { id: 124, alpha2: "ca", alpha3: "can", name: "Canada" },
    {
      id: 140,
      alpha2: "cf",
      alpha3: "caf",
      name: "Central African Republic",
    },
    { id: 148, alpha2: "td", name: "Chad", alpha3: "tcd" },
    { id: 152, alpha2: "cl", alpha3: "chl", name: "Chile" },
    { id: 156, alpha2: "cn", alpha3: "chn", name: "China" },
    { id: 170, alpha2: "co", alpha3: "col", name: "Colombia" },
    { id: 174, alpha2: "km", alpha3: "com", name: "Comoros" },
    { id: 178, alpha2: "cg", alpha3: "cog", name: "Congo" },
    {
      id: 180,
      alpha2: "cd",
      alpha3: "cod",
      name: "Congo, Democratic Republic of the",
    },
    { id: 188, alpha2: "cr", alpha3: "cri", name: "Costa Rica" },
    { id: 384, alpha2: "ci", alpha3: "civ", name: "Côte d'Ivoire" },
    { id: 191, alpha2: "hr", alpha3: "hrv", name: "Croatia" },
    { id: 192, alpha2: "cu", name: "Cuba", alpha3: "cub" },
    { id: 196, alpha2: "cy", alpha3: "cyp", name: "Cyprus" },
    { id: 203, alpha2: "cz", alpha3: "cze", name: "Czechia" },
    { id: 208, alpha2: "dk", alpha3: "dnk", name: "Denmark" },
    { id: 262, alpha2: "dj", alpha3: "dji", name: "Djibouti" },
    { id: 212, alpha2: "dm", alpha3: "dma", name: "Dominica" },
    { id: 214, alpha2: "do", alpha3: "dom", name: "Dominican Republic" },
    { id: 218, alpha2: "ec", alpha3: "ecu", name: "Ecuador" },
    { id: 818, alpha2: "eg", alpha3: "egy", name: "Egypt" },
    { id: 222, alpha2: "sv", alpha3: "slv", name: "El Salvador" },
    { id: 226, alpha2: "gq", alpha3: "gnq", name: "Equatorial Guinea" },
    { id: 232, alpha2: "er", alpha3: "eri", name: "Eritrea" },
    { id: 233, alpha2: "ee", alpha3: "est", name: "Estonia" },
    { id: 748, alpha2: "sz", alpha3: "swz", name: "Eswatini" },
    { id: 231, alpha2: "et", alpha3: "eth", name: "Ethiopia" },
    { id: 242, alpha2: "fj", name: "Fiji", alpha3: "fji" },
    { id: 246, alpha2: "fi", alpha3: "fin", name: "Finland" },
    { id: 250, alpha2: "fr", alpha3: "fra", name: "France" },
    { id: 266, alpha2: "ga", alpha3: "gab", name: "Gabon" },
    { id: 270, alpha2: "gm", alpha3: "gmb", name: "Gambia" },
    { id: 268, alpha2: "ge", alpha3: "geo", name: "Georgia" },
    { id: 276, alpha2: "de", alpha3: "deu", name: "Germany" },
    { id: 288, alpha2: "gh", alpha3: "gha", name: "Ghana" },
    { id: 300, alpha2: "gr", alpha3: "grc", name: "Greece" },
    { id: 308, alpha2: "gd", alpha3: "grd", name: "Grenada" },
    { id: 320, alpha2: "gt", alpha3: "gtm", name: "Guatemala" },
    { id: 324, alpha2: "gn", alpha3: "gin", name: "Guinea" },
    { id: 624, alpha2: "gw", alpha3: "gnb", name: "Guinea-Bissau" },
    { id: 328, alpha2: "gy", alpha3: "guy", name: "Guyana" },
    { id: 332, alpha2: "ht", alpha3: "hti", name: "Haiti" },
    { id: 340, alpha2: "hn", alpha3: "hnd", name: "Honduras" },
    { id: 348, alpha2: "hu", alpha3: "hun", name: "Hungary" },
    { id: 352, alpha2: "is", alpha3: "isl", name: "Iceland" },
    { id: 356, alpha2: "in", alpha3: "ind", name: "India" },
    { id: 360, alpha2: "id", alpha3: "idn", name: "Indonesia" },
    {
      id: 364,
      alpha2: "ir",
      alpha3: "irn",
      name: "Iran, Islamic Republic of",
    },
    { id: 368, alpha2: "iq", name: "Iraq", alpha3: "irq" },
    { id: 372, alpha2: "ie", alpha3: "irl", name: "Ireland" },
    { id: 376, alpha2: "il", alpha3: "isr", name: "Israel" },
    { id: 380, alpha2: "it", alpha3: "ita", name: "Italy" },
    { id: 388, alpha2: "jm", alpha3: "jam", name: "Jamaica" },
    { id: 392, alpha2: "jp", alpha3: "jpn", name: "Japan" },
    { id: 400, alpha2: "jo", alpha3: "jor", name: "Jordan" },
    { id: 398, alpha2: "kz", alpha3: "kaz", name: "Kazakhstan" },
    { id: 404, alpha2: "ke", alpha3: "ken", name: "Kenya" },
    { id: 296, alpha2: "ki", alpha3: "kir", name: "Kiribati" },
    {
      id: 408,
      alpha2: "kp",
      alpha3: "prk",
      name: "Korea, Democratic People's Republic of",
    },
    { id: 410, alpha2: "kr", alpha3: "kor", name: "Korea, Republic of" },
    { id: 414, alpha2: "kw", alpha3: "kwt", name: "Kuwait" },
    { id: 417, alpha2: "kg", alpha3: "kgz", name: "Kyrgyzstan" },
    {
      id: 418,
      alpha2: "la",
      alpha3: "lao",
      name: "Lao People's Democratic Republic",
    },
    { id: 428, alpha2: "lv", alpha3: "lva", name: "Latvia" },
    { id: 422, alpha2: "lb", alpha3: "lbn", name: "Lebanon" },
    { id: 426, alpha2: "ls", alpha3: "lso", name: "Lesotho" },
    { id: 430, alpha2: "lr", alpha3: "lbr", name: "Liberia" },
    { id: 434, alpha2: "ly", alpha3: "lby", name: "Libya" },
    { id: 438, alpha2: "li", alpha3: "lie", name: "Liechtenstein" },
    { id: 440, alpha2: "lt", alpha3: "ltu", name: "Lithuania" },
    { id: 442, alpha2: "lu", alpha3: "lux", name: "Luxembourg" },
    { id: 450, alpha2: "mg", alpha3: "mdg", name: "Madagascar" },
    { id: 454, alpha2: "mw", alpha3: "mwi", name: "Malawi" },
    { id: 458, alpha2: "my", alpha3: "mys", name: "Malaysia" },
    { id: 462, alpha2: "mv", alpha3: "mdv", name: "Maldives" },
    { id: 466, alpha2: "ml", name: "Mali", alpha3: "mli" },
    { id: 470, alpha2: "mt", alpha3: "mlt", name: "Malta" },
    { id: 584, alpha2: "mh", alpha3: "mhl", name: "Marshall Islands" },
    { id: 478, alpha2: "mr", alpha3: "mrt", name: "Mauritania" },
    { id: 480, alpha2: "mu", alpha3: "mus", name: "Mauritius" },
    { id: 484, alpha2: "mx", alpha3: "mex", name: "Mexico" },
    {
      id: 583,
      alpha2: "fm",
      alpha3: "fsm",
      name: "Micronesia, Federated States of",
    },
    {
      id: 498,
      alpha2: "md",
      alpha3: "mda",
      name: "Moldova, Republic of",
    },
    { id: 492, alpha2: "mc", alpha3: "mco", name: "Monaco" },
    { id: 496, alpha2: "mn", alpha3: "mng", name: "Mongolia" },
    { id: 499, alpha2: "me", alpha3: "mne", name: "Montenegro" },
    { id: 504, alpha2: "ma", alpha3: "mar", name: "Morocco" },
    { id: 508, alpha2: "mz", alpha3: "moz", name: "Mozambique" },
    { id: 104, alpha2: "mm", alpha3: "mmr", name: "Myanmar" },
    { id: 516, alpha2: "na", alpha3: "nam", name: "Namibia" },
    { id: 520, alpha2: "nr", alpha3: "nru", name: "Nauru" },
    { id: 524, alpha2: "np", alpha3: "npl", name: "Nepal" },
    { id: 528, alpha2: "nl", alpha3: "nld", name: "Netherlands" },
    { id: 554, alpha2: "nz", alpha3: "nzl", name: "New Zealand" },
    { id: 558, alpha2: "ni", alpha3: "nic", name: "Nicaragua" },
    { id: 562, alpha2: "ne", alpha3: "ner", name: "Niger" },
    { id: 566, alpha2: "ng", alpha3: "nga", name: "Nigeria" },
    { id: 807, alpha2: "mk", alpha3: "mkd", name: "North Macedonia" },
    { id: 578, alpha2: "no", alpha3: "nor", name: "Norway" },
    { id: 512, alpha2: "om", name: "Oman", alpha3: "omn" },
    { id: 586, alpha2: "pk", alpha3: "pak", name: "Pakistan" },
    { id: 585, alpha2: "pw", alpha3: "plw", name: "Palau" },
    { id: 591, alpha2: "pa", alpha3: "pan", name: "Panama" },
    { id: 598, alpha2: "pg", alpha3: "png", name: "Papua New Guinea" },
    { id: 600, alpha2: "py", alpha3: "pry", name: "Paraguay" },
    { id: 604, alpha2: "pe", name: "Peru", alpha3: "per" },
    { id: 608, alpha2: "ph", alpha3: "phl", name: "Philippines" },
    { id: 616, alpha2: "pl", alpha3: "pol", name: "Poland" },
    { id: 620, alpha2: "pt", alpha3: "prt", name: "Portugal" },
    { id: 634, alpha2: "qa", alpha3: "qat", name: "Qatar" },
    { id: 642, alpha2: "ro", alpha3: "rou", name: "Romania" },
    { id: 643, alpha2: "ru", alpha3: "rus", name: "Russian Federation" },
    { id: 646, alpha2: "rw", alpha3: "rwa", name: "Rwanda" },
    {
      id: 659,
      alpha2: "kn",
      alpha3: "kna",
      name: "Saint Kitts and Nevis",
    },
    { id: 662, alpha2: "lc", alpha3: "lca", name: "Saint Lucia" },
    {
      id: 670,
      alpha2: "vc",
      alpha3: "vct",
      name: "Saint Vincent and the Grenadines",
    },
    { id: 882, alpha2: "ws", alpha3: "wsm", name: "Samoa" },
    { id: 674, alpha2: "sm", alpha3: "smr", name: "San Marino" },
    {
      id: 678,
      alpha2: "st",
      alpha3: "stp",
      name: "Sao Tome and Principe",
    },
    { id: 682, alpha2: "sa", alpha3: "sau", name: "Saudi Arabia" },
    { id: 686, alpha2: "sn", alpha3: "sen", name: "Senegal" },
    { id: 688, alpha2: "rs", alpha3: "srb", name: "Serbia" },
    { id: 690, alpha2: "sc", alpha3: "syc", name: "Seychelles" },
    { id: 694, alpha2: "sl", alpha3: "sle", name: "Sierra Leone" },
    { id: 702, alpha2: "sg", alpha3: "sgp", name: "Singapore" },
    { id: 703, alpha2: "sk", alpha3: "svk", name: "Slovakia" },
    { id: 705, alpha2: "si", alpha3: "svn", name: "Slovenia" },
    { id: 90, alpha2: "sb", alpha3: "slb", name: "Solomon Islands" },
    { id: 706, alpha2: "so", alpha3: "som", name: "Somalia" },
    { id: 710, alpha2: "za", alpha3: "zaf", name: "South Africa" },
    { id: 728, alpha2: "ss", alpha3: "ssd", name: "South Sudan" },
    { id: 724, alpha2: "es", alpha3: "esp", name: "Spain" },
    { id: 144, alpha2: "lk", alpha3: "lka", name: "Sri Lanka" },
    { id: 729, alpha2: "sd", alpha3: "sdn", name: "Sudan" },
    { id: 740, alpha2: "sr", alpha3: "sur", name: "Suriname" },
    { id: 752, alpha2: "se", alpha3: "swe", name: "Sweden" },
    { id: 756, alpha2: "ch", alpha3: "che", name: "Switzerland" },
    {
      id: 760,
      alpha2: "sy",
      alpha3: "syr",
      name: "Syrian Arab Republic",
    },
    { id: 762, alpha2: "tj", alpha3: "tjk", name: "Tajikistan" },
    {
      id: 834,
      alpha2: "tz",
      alpha3: "tza",
      name: "Tanzania, United Republic of",
    },
    { id: 764, alpha2: "th", alpha3: "tha", name: "Thailand" },
    { id: 626, alpha2: "tl", alpha3: "tls", name: "Timor-Leste" },
    { id: 768, alpha2: "tg", name: "Togo", alpha3: "tgo" },
    { id: 776, alpha2: "to", alpha3: "ton", name: "Tonga" },
    { id: 780, alpha2: "tt", alpha3: "tto", name: "Trinidad and Tobago" },
    { id: 788, alpha2: "tn", alpha3: "tun", name: "Tunisia" },
    { id: 792, alpha2: "tr", alpha3: "tur", name: "Türkiye" },
    { id: 795, alpha2: "tm", alpha3: "tkm", name: "Turkmenistan" },
    { id: 798, alpha2: "tv", alpha3: "tuv", name: "Tuvalu" },
    { id: 800, alpha2: "ug", alpha3: "uga", name: "Uganda" },
    { id: 804, alpha2: "ua", alpha3: "ukr", name: "Ukraine" },
    {
      id: 784,
      alpha2: "ae",
      alpha3: "are",
      name: "United Arab Emirates",
    },
    {
      id: 826,
      alpha2: "gb",
      alpha3: "gbr",
      name: "United Kingdom of Great Britain and Northern Ireland",
    },
    {
      id: 840,
      alpha2: "us",
      alpha3: "usa",
      name: "United States of America",
    },
    { id: 858, alpha2: "uy", alpha3: "ury", name: "Uruguay" },
    { id: 860, alpha2: "uz", alpha3: "uzb", name: "Uzbekistan" },
    { id: 548, alpha2: "vu", alpha3: "vut", name: "Vanuatu" },
    {
      id: 862,
      alpha2: "ve",
      alpha3: "ven",
      name: "Venezuela, Bolivarian Republic of",
    },
    { id: 704, alpha2: "vn", alpha3: "vnm", name: "Viet Nam" },
    { id: 887, alpha2: "ye", alpha3: "yem", name: "Yemen" },
    { id: 894, alpha2: "zm", alpha3: "zmb", name: "Zambia" },
    { id: 716, alpha2: "zw", alpha3: "zwe", name: "Zimbabwe" },
  ];
  const notification = {
    id: "notification_1",
    read: false,
    type: "comment",
    created_at: "2023-07-23T12:00:00Z",
    content: "Harry Potter has commented on your post: 'Nice Place..!'",
    target: {
      id: "post_5678",
      type: "post",
      created_at: "2023-07-22T10:00:00Z",
      content: "Visiting the beautiful landscapes of Scotland.",
    },
    user: {
      id: "user_1234",
      lastname: "Doe",
      firstname: "John",
      username: "john_doe",
      mutual_friends_count: 5,
      friendship_status: "friends",
      profile_picture: "https://example.com/profile.jpg",
    },
  };
  const notifications = [
    {
      id: "notification_1",
      read: false,
      type: "comment",
      created_at: "2023-07-23T12:00:00Z",
      content: "Harry Potter has commented on your post: 'Nice Place..!'",
      target: {
        id: "post_5678",
        type: "post",
        created_at: "2023-07-22T10:00:00Z",
        content: "Visiting the beautiful landscapes of Scotland.",
      },
      user: {
        id: "user_1234",
        lastname: "Potter",
        firstname: "Harry",
        username: "harry_potter",
        mutual_friends_count: 10,
        friendship_status: "friends",
        profile_picture: "https://example.com/harry_profile.jpg",
      },
    },
    {
      id: "notification_2",
      read: true,
      type: "like",
      created_at: "2023-07-23T14:00:00Z",
      content: "Ron Weasley liked your photo.",
      target: {
        id: "photo_1234",
        type: "photo",
        created_at: "2023-07-21T15:00:00Z",
        content: "At the Quidditch World Cup!",
      },
      user: {
        id: "user_5678",
        firstname: "Ron",
        lastname: "Weasley",
        username: "ron_weasley",
        mutual_friends_count: 8,
        friendship_status: "friends",
        profile_picture: "https://example.com/ron_profile.jpg",
      },
    },
    {
      id: "notification_3",
      read: false,
      target: null,
      type: "friend_request",
      created_at: "2023-07-23T16:00:00Z",
      content: "Hermione Granger sent you a friend request.",
      user: {
        id: "user_91011",
        lastname: "Granger",
        firstname: "Hermione",
        mutual_friends_count: 15,
        username: "hermione_granger",
        friendship_status: "not_friends",
        profile_picture: "https://example.com/hermione_profile.jpg",
      },
    },
  ];
  const hours = [
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 AM",
  ];

  return {
    user,
    hours,
    countries,
    notification,
    notifications,
  };
};

export default useData;
