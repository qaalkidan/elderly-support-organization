export const serviceDetailsData = {
  en: {
    ui: {
      backToServices: 'Our Services',
      overviewTitle: 'Program Overview',
      offerTitle: 'What This Service Includes',
      howTitle: 'How to Receive Support',
      eligibilityTitle: 'Who Can Apply',
      allServicesTitle: 'All Support Services',
      requestTitle: 'Request This Service',
      requestSubtitle: 'Apply for yourself, an elderly family member, or a neighbor in need.',
      nameLabel: 'Full Name (Applicant or Elder)',
      namePlaceholder: 'Abebe Kebede',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+251 91 123 4567',
      subcityLabel: 'Sub-City / Woreda',
      subcityPlaceholder: 'Bole Woreda 03, Addis Ababa',
      notesLabel: 'Support Needed (Optional)',
      notesPlaceholder: 'Briefly share health, mobility, or household needs...',
      submitBtn: 'Submit Service Request',
      submittedMsg: 'Thank you, {name}. Your request for {service} has been received. Our coordinator will contact you within 24 hours.',
      needHelpTitle: 'Direct Assistance Desk',
      needHelpDesc: 'Need urgent assistance for an elderly person? Speak directly with our care team.',
      callNow: 'Call +251 11 123 4567',
      supportBtn: 'Donate to This Program',
      ctaTitle: 'Help Sustain This Vital Program',
      ctaSubtitle: 'Your contribution directly funds care, dignity, and daily essentials for elderly citizens.',
      ctaDonate: 'Donate Now',
      ctaVolunteer: 'Volunteer With Us'
    },
    items: {
      healthcare: {
        slug: 'healthcare',
        title: 'Healthcare Support',
        heroSecondary: 'Medical & Clinical Care',
        subtitle: 'Ensuring vulnerable elders receive regular checkups, essential medicines, and compassionate clinical follow-up.',
        image: '/images/service-healthcare.jpg',
        stats: [
          { value: '650+', label: 'Seniors Treated Yearly' },
          { value: '12', label: 'Partner Local Clinics' },
          { value: '100%', label: 'Free Prescriptions' }
        ],
        overview: [
          'Many older adults face untreated chronic illnesses such as hypertension, diabetes, arthritis, and vision loss due to high medical costs and difficulty traveling to clinics.',
          'In partnership with community doctors, nurses, and local clinics across Addis Ababa, we organize regular health screenings, cover essential prescriptions, and coordinate hospital referrals so no senior is left without medical dignity.'
        ],
        features: [
          {
            title: 'Preventive Health Screenings',
            description: 'Routine blood pressure, glucose, heart, and general physical examinations conducted monthly.'
          },
          {
            title: 'Essential Medication Access',
            description: 'Full financial coverage for vital ongoing prescriptions and chronic illness treatment.'
          },
          {
            title: 'Vision & Mobility Aids',
            description: 'Distribution of reading glasses, walking canes, walkers, and hearing assistance devices.'
          },
          {
            title: 'Hospital Referral & Escort',
            description: 'Coordinated specialist appointments with trained volunteer accompaniment from home to clinic.'
          }
        ],
        steps: [
          { step: '01', title: 'Register Request', desc: 'Submit our simple form or call our care desk to refer an elder in need.' },
          { step: '02', title: 'Nurse Assessment', desc: 'A qualified health coordinator evaluates medical records and immediate needs.' },
          { step: '03', title: 'Ongoing Clinical Care', desc: 'Receive free clinic checkups, prescribed medicines, and regular follow-ups.' }
        ],
        eligibility: [
          'Citizens aged 60 and above with limited income or no family medical coverage.',
          'Residents within Addis Ababa and surrounding outreach woredas.',
          'Seniors managing chronic conditions or post-hospital recovery.'
        ]
      },
      food: {
        slug: 'food',
        title: 'Food & Daily Assistance',
        heroSecondary: 'Nutrition & Household Security',
        subtitle: 'Providing consistent nutritious food packages, daily hot meals, and essential household supplies to elderly households.',
        image: '/images/service-food.jpg',
        stats: [
          { value: '380+', label: 'Households Monthly' },
          { value: '14,000+', label: 'Nutritious Meals' },
          { value: 'Weekly', label: 'Fresh Doorstep Delivery' }
        ],
        overview: [
          'Rising food prices leave many elderly citizens struggling to afford balanced daily meals, cooking oil, and basic sanitation items.',
          'Our Food & Daily Assistance program delivers monthly staple baskets directly to seniors’ homes while operating neighborhood meal outreach so every elder enjoys nourishment, strength, and peace of mind.'
        ],
        features: [
          {
            title: 'Monthly Dry Food Parcels',
            description: 'Teff flour, lentils, cooking oil, sugar, nutritious grains, and fortified staples tailored to elder dietary needs.'
          },
          {
            title: 'Hot Prepared Meal Delivery',
            description: 'Warm, freshly cooked Ethiopian meals prepared safely and brought to homebound seniors.'
          },
          {
            title: 'Essential Hygiene Supplies',
            description: 'Soap, laundry detergent, sanitary supplies, and clean household staples provided every month.'
          },
          {
            title: 'Special Holiday Food Drives',
            description: 'Festive meal baskets during Meskel, Genna, Eid, and Fasika so every elder celebrates with joy.'
          }
        ],
        steps: [
          { step: '01', title: 'Share Household Info', desc: 'Apply online or through local community leaders in your sub-city.' },
          { step: '02', title: 'Dietary & Home Check', desc: 'Our field team visits to verify living circumstances and any special nutrition needs.' },
          { step: '03', title: 'Scheduled Delivery', desc: 'Receive dependable monthly baskets and weekly meal support at your doorstep.' }
        ],
        eligibility: [
          'Low-income seniors aged 60+ living alone or caring for young grandchildren.',
          'Homebound elders unable to cook or travel to local markets safely.',
          'Priority given to households experiencing acute food insecurity.'
        ]
      },
      financial: {
        slug: 'financial',
        title: 'Financial Support',
        heroSecondary: 'Economic Stability & Housing Aid',
        subtitle: 'Direct stipends, rent relief, and emergency grants helping elderly citizens stay safe and independent in their homes.',
        image: '/images/service-financial.jpg',
        stats: [
          { value: '290+', label: 'Active Stipend Recipients' },
          { value: '100%', label: 'Direct Transparent Aid' },
          { value: 'Monthly', label: 'Consistent Disbursements' }
        ],
        overview: [
          'Without a sufficient pension or family breadwinner, sudden rent hikes, utility bills, or medical emergencies can push older citizens toward homelessness and distress.',
          'Through direct monthly cash stipends and landlord rent assistance funded by generous donors, we safeguard housing stability and empower elders to purchase urgent daily necessities with dignity.'
        ],
        features: [
          {
            title: 'Monthly Living Stipend',
            description: 'Predictable monthly financial allowances distributed transparently via bank transfer or mobile money.'
          },
          {
            title: 'Emergency Rent Protection',
            description: 'Targeted housing support to prevent eviction and keep elders safely sheltered in their neighborhoods.'
          },
          {
            title: 'Utility & Fuel Coverage',
            description: 'Support for water, electricity, and cooking fuel costs during difficult seasonal periods.'
          },
          {
            title: 'Small Micro-Enterprise Aid',
            description: 'Starter grants for active elders or caregivers wishing to sustain dignified home-based livelihoods.'
          }
        ],
        steps: [
          { step: '01', title: 'Submit Application', desc: 'Complete the request form alongside basic identification or woreda verification.' },
          { step: '02', title: 'Financial Review', desc: 'Our social worker confidentially reviews rent agreements and monthly living expenses.' },
          { step: '03', title: 'Direct Support Transfer', desc: 'Approved seniors receive scheduled monthly stipends and emergency bill coverage.' }
        ],
        eligibility: [
          'Older adults aged 60+ without a livable pension or reliable household income.',
          'Tenants facing documented housing cost burden or utility disconnection risks.',
          'Seniors raising orphaned dependents with no secondary income source.'
        ]
      },
      social: {
        slug: 'social',
        title: 'Social & Psychological Support',
        heroSecondary: 'Companionship & Emotional Care',
        subtitle: 'Fighting elder isolation through peer clubs, compassionate counseling, coffee ceremonies, and community belonging.',
        image: '/images/service-social.jpg',
        stats: [
          { value: '500+', label: 'Seniors Connected' },
          { value: 'Weekly', label: 'Community Coffee Circles' },
          { value: '45+', label: 'Trained Counselors & Peers' }
        ],
        overview: [
          'Loneliness and grief after losing loved ones deeply affect the mental and physical well-being of elderly citizens—often just as severely as economic hardship.',
          'Our Social & Psychological Support program creates warm neighborhood gathering spaces, traditional Buna (coffee) ceremonies, one-on-one counseling, and youth companionship visits that restore laughter and purpose.'
        ],
        features: [
          {
            title: 'Compassionate Counseling',
            description: 'One-on-one emotional support for grief, stress, anxiety, and life transitions in a safe environment.'
          },
          {
            title: 'Traditional Coffee Circles',
            description: 'Weekly neighborhood gatherings featuring Ethiopian coffee ceremonies, storytelling, and peer friendship.'
          },
          {
            title: 'Youth Intergenerational Bridges',
            description: 'Structured volunteer programs connecting university students and youth directly with elder mentors.'
          },
          {
            title: 'Arts, Wellness & Gentle Movement',
            description: 'Light stretching, choir, and memory-keeping workshops promoting active, joyful aging.'
          }
        ],
        steps: [
          { step: '01', title: 'Express Interest', desc: 'Let us know you or a loved one would enjoy group activities or a friendly counselor.' },
          { step: '02', title: 'Warm Welcome Call', desc: 'Our outreach coordinator introduces nearby groups and personal companions.' },
          { step: '03', title: 'Join Community Life', desc: 'Attend weekly gatherings or host welcoming volunteer conversations at home.' }
        ],
        eligibility: [
          'Any senior aged 60+ seeking friendship, grief support, or community connection.',
          'Isolated elders living alone after bereavement or family migration.',
          'Safe, accessible venues arranged near public transit in Addis Ababa.'
        ]
      },
      'home-visits': {
        slug: 'home-visits',
        title: 'Home Visits',
        heroSecondary: 'In-Home Personal Care & Safety',
        subtitle: 'Bringing attentive caregivers, companionship, light housekeeping, and health monitoring straight to homebound elders.',
        image: '/images/service-home-visits.jpg',
        stats: [
          { value: '420+', label: 'Monthly Home Visits' },
          { value: '85+', label: 'Vetted Caregivers' },
          { value: '10', label: 'Addis Sub-Cities Covered' }
        ],
        overview: [
          'Frailty, mobility impairments, or chronic illness keep many elderly residents confined inside their homes where simple daily tasks become exhausting or unsafe.',
          'Our trained, compassionate caregivers conduct scheduled weekly home visits—assisting with hygiene, cleaning, meal preparation, medication reminders, and heartfelt conversation.'
        ],
        features: [
          {
            title: 'Personal Care & Hygiene Aid',
            description: 'Respectful support with bathing, grooming, dressing, and safe mobility around the home.'
          },
          {
            title: 'Housekeeping & Laundry',
            description: 'Keeping living spaces clean, sanitary, hazard-free, and comfortable for daily rest.'
          },
          {
            title: 'Medication & Vitals Monitoring',
            description: 'Gentle daily pill organization, blood pressure checks, and coordination with our nurse team.'
          },
          {
            title: 'Companionship & Errands',
            description: 'Friendly conversation, reading aloud, and picking up groceries or pharmacy refills.'
          }
        ],
        steps: [
          { step: '01', title: 'Request a Home Visit', desc: 'Submit contact details and address for the senior needing in-home support.' },
          { step: '02', title: 'Care Plan Match', desc: 'We match a vetted caregiver from the same neighborhood and agree on weekly visit times.' },
          { step: '03', title: 'Consistent Weekly Visits', desc: 'Reliable caregivers arrive on schedule with supervisor oversight for safety and trust.' }
        ],
        eligibility: [
          'Elders aged 65+ or with limited mobility living alone or with frail spouses.',
          'Seniors recently discharged from hospital needing short- or long-term recovery care.',
          'Accessible residential locations within our Greater Addis Ababa service zones.'
        ]
      },
      other: {
        slug: 'other',
        title: 'Other Services & Community Activities',
        heroSecondary: 'Seasonal Relief & Community Programs',
        subtitle: 'Holistic support including winter clothing drives, legal guidance, family reconnection, and annual elders celebrations.',
        image: '/images/home-events-community.png',
        stats: [
          { value: '50+', label: 'Community Events Yearly' },
          { value: '1,200+', label: 'Blankets & Clothing Kits' },
          { value: '100%', label: 'Dignity-First Approach' }
        ],
        overview: [
          'True care goes beyond emergency food and medicine. From cold rainy season warmth to navigating pension paperwork or celebrating Elderly Day together, we address real needs wherever gaps appear.',
          'Our Other Services umbrella responds flexibly to seasonal hardships, advocacy needs, and joyful community events that uplift hundreds of elders across the city.'
        ],
        features: [
          {
            title: 'Warm Clothing & Blanket Drives',
            description: 'Distribution of heavy wool blankets, jackets, sweaters, and sturdy shoes before the Kiremt rainy season.'
          },
          {
            title: 'Legal & Pension Guidance',
            description: 'Free administrative guidance for ID renewals, pension claims, housing documentation, and elder rights.'
          },
          {
            title: 'Annual Elderly Day Festivals',
            description: 'Large city-wide cultural celebrations honoring senior wisdom with meals, music, and health booths.'
          },
          {
            title: 'Home Safety Minor Repairs',
            description: 'Volunteer repair teams fixing leaky roofs, broken door locks, steps, and lighting hazards.'
          }
        ],
        steps: [
          { step: '01', title: 'Tell Us What Is Needed', desc: 'Share seasonal relief requests, home repair issues, or documentation questions.' },
          { step: '02', title: 'Community Coordinator Match', desc: 'Our special-projects desk connects the right legal advisor, repair crew, or relief stock.' },
          { step: '03', title: 'Prompt Support & Inclusion', desc: 'Receive requested items or invitations to upcoming community celebrations.' }
        ],
        eligibility: [
          'Open to registered members and vulnerable elders recommended by community associations (Iddir).',
          'Warm clothing and blanket distributions prioritize unsheltered or poorly insulated homes.',
          'All cultural celebrations warmly welcome elders, families, and neighbors.'
        ]
      }
    }
  },
  am: {
    ui: {
      backToServices: 'አገልግሎቶቻችን',
      overviewTitle: 'የፕሮግራሙ አጠቃላይ መግለጫ',
      offerTitle: 'በዚህ አገልግሎት የሚካተቱ ድጋፎች',
      howTitle: 'ድጋፉን እንዴት ማግኘት ይቻላል?',
      eligibilityTitle: 'መስፈርቶችና ተጠቃሚዎች',
      allServicesTitle: 'ሁሉም የድጋፍ አገልግሎቶች',
      requestTitle: 'አገልግሎቱን ይጠይቁ',
      requestSubtitle: 'ለራስዎ፣ ለአረጋዊ ቤተሰብዎ ወይም ለጎረቤትዎ የአገልግሎት ጥያቄ ያቅርቡ።',
      nameLabel: 'ሙሉ ስም (የአመልካች ወይም የአረጋዊው)',
      namePlaceholder: 'አበበ ከበደ',
      phoneLabel: 'ስልክ ቁጥር',
      phonePlaceholder: '+251 91 123 4567',
      subcityLabel: 'ክፍለ ከተማ / ወረዳ',
      subcityPlaceholder: 'ቦሌ ወረዳ 03፣ አዲስ አበባ',
      notesLabel: 'የሚፈለገው ድጋፍ መግለጫ (አማራጭ)',
      notesPlaceholder: 'ስለ ጤና፣ የቤት ሁኔታ ወይም አስቸኳይ ፍላጎት በአጭሩ ይግለጹ...',
      submitBtn: 'የአገልግሎት ጥያቄ ይላኩ',
      submittedMsg: 'እናመሰግናለን፣ {name}። የ{service} ጥያቄዎ በተሳካ ሁኔታ ተመዝግቧል። አስተባባሪያችን በ24 ሰዓታት ውስጥ ያነጋግርዎታል።',
      needHelpTitle: 'ቀጥተኛ የእርዳታ መስመር',
      needHelpDesc: 'ለአረጋዊ ሰው አስቸኳይ እርዳታ ይፈልጋሉ? ከእንክብካቤ ቡድናችን ጋር በቀጥታ ይነጋገሩ።',
      callNow: 'ይደውሉ +251 11 123 4567',
      supportBtn: 'ይህንን ፕሮግራም ይደግፉ',
      ctaTitle: 'ይህንን ጠቃሚ አገልግሎት ለማስቀጠል ይርዱን',
      ctaSubtitle: 'ድጋፍዎ ለአረጋውያን ክብር፣ እንክብካቤ እና የዕለት ተዕለት ደህንነትን ያረጋግጣል።',
      ctaDonate: 'አሁን ይለግሱ',
      ctaVolunteer: 'በጎ ፈቃደኛ ይሁኑ'
    },
    items: {
      healthcare: {
        slug: 'healthcare',
        title: 'የጤና ድጋፍ',
        heroSecondary: 'የህክምና እና የጤና ክትትል',
        subtitle: 'አቅመ ደካማ አረጋውያን መደበኛ የጤና ምርመራ፣ ነፃ መድኃኒት እና አዛኝ የህክምና ክትትል እንዲያገኙ እናደርጋለን።',
        image: '/images/service-healthcare.jpg',
        stats: [
          { value: '650+', label: 'በዓመት የታከሙ አረጋውያን' },
          { value: '12', label: 'አጋር ክሊኒኮች' },
          { value: '100%', label: 'ነፃ የመድኃኒት ድጋፍ' }
        ],
        overview: [
          'በርካታ አረጋውያን ከፍተኛ የህክምና ወጪን መሸፈን ባለመቻላቸው እና ወደ ጤና ተቋማት ለመጓዝ በመቸገራቸው እንደ ደም ግፊት፣ ስኳር፣ አርትራይተስ እና የዓይን ችግር ያሉ ህመሞችን ሳይታከሙ ይቆያሉ።',
          'በአዲስ አበባ ከሚገኙ ሐኪሞች፣ ነርሶች እና አጋር ክሊኒኮች ጋር በመተባበር ወርሃዊ የጤና ምርመራ እናዘጋጃለን፣ መድኃኒቶችን በነፃ እናቀርባለን እንዲሁም የሆስፒታል ሪፈራል እናመቻቻለን።'
        ],
        features: [
          {
            title: 'መደበኛ የጤና ምርመራ',
            description: 'በየወሩ የሚደረግ የደም ግፊት፣ የስኳር መጠን፣ የልብ እና አጠቃላይ የጤና ምርመራ።'
          },
          {
            title: 'የመድኃኒት ድጋፍ',
            description: 'ለቋሚ እና ተላላፊ ላልሆኑ በሽታዎች የሚታዘዙ መድኃኒቶች ሙሉ ወጪ ሽፋን።'
          },
          {
            title: 'የዓይን መነጽርና የመንቀሳቀሻ መርጃ',
            description: 'የንባብ መነጽሮችን፣ ምርኩዞችን፣ የመራመጃ ድጋፎችን እና የመስሚያ መሳሪያዎችን ማቅረብ።'
          },
          {
            title: 'የሆስፒታል ሪፈራል እና አጃቢ',
            description: 'ከቤት እስከ ክሊኒክ በሰለጠኑ በጎ ፈቃደኞች አብሮነት ልዩ ህክምና ማመቻቸት።'
          }
        ],
        steps: [
          { step: '01', title: 'ጥያቄውን ያስመዝግቡ', desc: 'ቀላል ቅጽ በመሙላት ወይም በመደወል ድጋፍ የሚፈልገውን አረጋዊ ይጠቁሙ።' },
          { step: '02', title: 'የነርስ ግምገማ', desc: 'የጤና አስተባባሪያችን የህክምና ታሪክን እና አስቸኳይ ፍላጎትን ይገመግማል።' },
          { step: '03', title: 'ቀጣይነት ያለው እንክብካቤ', desc: 'ነፃ የክሊኒክ ምርመራ፣ መድኃኒት እና መደበኛ ክትትል ያግኙ።' }
        ],
        eligibility: [
          'ዕድሜያቸው 60 ዓመት እና ከዚያ በላይ የሆናቸው ዝቅተኛ ገቢ ያላቸው አረጋውያን።',
          'በአዲስ አበባ እና በአካባቢዋ ወረዳዎች ነዋሪ የሆኑ።',
          'የቋሚ ህመም ክትትል ወይም ከሆስፒታል መልስ እንክብካቤ የሚያስፈልጋቸው።'
        ]
      },
      food: {
        slug: 'food',
        title: 'ምግብ እና የዕለት እርዳታ',
        heroSecondary: 'የምግብ ዋስትና እና የቤት ፍላጎት',
        subtitle: 'ለአረጋውያን ቤተሰቦች ወርሃዊ የተመጣጠነ ምግብ፣ ትኩስ የዕለት ምግብ እና መሰረታዊ የንጽህና ቁሳቁሶችን እናቀርባለን።',
        image: '/images/service-food.jpg',
        stats: [
          { value: '380+', label: 'በየወሩ የሚደገፉ ቤተሰቦች' },
          { value: '14,000+', label: 'የቀረቡ ትኩስ ምግቦች' },
          { value: 'ሳምንታዊ', label: 'በር-ለበር ስርጭት' }
        ],
        overview: [
          'የኑሮ ውድነት እና የምግብ ዋጋ መናር በርካታ አረጋውያን የተመጣጠነ የዕለት ምግብ፣ የምግብ ዘይት እና መሰረታዊ የንጽህና መጠበቂያዎችን እንዳያገኙ ያደርጋቸዋል።',
          'የምግብ እና የዕለት እርዳታ ፕሮግራማችን ወርሃዊ የምግብ ጥቅሎችን በቀጥታ ወደ አረጋውያን ቤት በማድረስ እና ትኩስ ምግቦችን በማቅረብ ጤናማና ብርቱ እንዲሆኑ ያግዛል።'
        ],
        features: [
          {
            title: 'ወርሃዊ የደረቅ ምግብ ድጋፍ',
            description: 'ጤፍ፣ ምስር፣ ዘይት፣ ስኳር እና ለአረጋውያን ጤና ተስማሚ የሆኑ ጥራጥሬዎች አቅርቦት።'
          },
          {
            title: 'ትኩስ ምግብ አቅርቦት',
            description: 'ምግብ ማብሰል ለማይችሉ አረጋውያን በንጽህና የተዘጋጀ ትኩስ ምግብ በቤታቸው ይደርሳል።'
          },
          {
            title: 'መሰረታዊ የንጽህና ቁሳቁሶች',
            description: 'ሳሙና፣ የልብስ ማጠቢያ እና አስፈላጊ የቤት ንጽህና መጠበቂያዎች በየወሩ ይሰጣሉ።'
          },
          {
            title: 'የበዓላት ልዩ የምግብ ስጦታ',
            description: 'በመስቀል፣ ገና፣ ኢድ እና ፋሲካ ወቅቶች የደስታ የበዓል ማዕድ ማካፈል።'
          }
        ],
        steps: [
          { step: '01', title: 'መረጃ ያጋሩ', desc: 'በድረ-ገጻችን ወይም በአካባቢው ማህበረሰብ መሪዎች በኩል ይመዝገቡ።' },
          { step: '02', title: 'የቤት ሁኔታ ምልከታ', desc: 'የመስክ ቡድናችን የኑሮ ሁኔታን እና ልዩ የአመጋገብ ፍላጎቶችን ያረጋግጣል።' },
          { step: '03', title: 'መደበኛ የምግብ ርክክብ', desc: 'በየወሩ መደበኛ የምግብ ጥቅሎችን እና ሳምንታዊ ድጋፍን በቤትዎ ይቀበሉ።' }
        ],
        eligibility: [
          'ዕድሜያቸው 60+ የሆነ ዝቅተኛ ገቢ ያላቸው ወይም የልጅ ልጆችን የሚያሳድጉ አረጋውያን።',
          'ገበያ ወጥተው መሸመት ወይም ምግብ ማብሰል የማይችሉ አረጋውያን።',
          'ለከፋ የምግብ እጥረት ተጋላጭ ለሆኑ ቤተሰቦች ቅድሚያ ይሰጣል።'
        ]
      },
      financial: {
        slug: 'financial',
        title: 'የገንዘብ ድጋፍ',
        heroSecondary: 'ኢኮኖሚያዊ መረጋጋት እና የቤት ኪራይ እርዳታ',
        subtitle: 'አረጋውያን ከመኖሪያቸው ሳይፈናቀሉ በክብር እንዲኖሩ ወርሃዊ የገንዘብ ድጋፍ፣ የቤት ኪራይ እርዳታ እና የአደጋ ጊዜ ክፍያ እንሰጣለን።',
        image: '/images/service-financial.jpg',
        stats: [
          { value: '290+', label: 'ወርሃዊ ድጋፍ ተጠቃሚዎች' },
          { value: '100%', label: 'ግልጽ እና ቀጥተኛ ክፍያ' },
          { value: 'ወርሃዊ', label: 'ያልተቋረጠ ድጋፍ' }
        ],
        overview: [
          'በቂ ጡረታ ወይም ረዳት ቤተሰብ የሌላቸው አረጋውያን ድንገተኛ የቤት ኪራይ ጭማሪ፣ የውሃና መብራት ክፍያ ወይም የህክምና ወጪ ሲያጋጥማቸው ለከፍተኛ ጭንቀት ይዳረጋሉ።',
          'በለጋሾቻችን ድጋፍ የምንሰጠው ወርሃዊ የገንዘብ እርዳታ እና የቤት ኪራይ ሽፋን አረጋውያን በመኖሪያ ቤታቸው በሰላም እንዲቆዩ እና አስቸኳይ ፍላጎታቸውን በክብር እንዲያሟሉ ያስችላል።'
        ],
        features: [
          {
            title: 'ወርሃዊ የኑሮ መደጎሚያ',
            description: 'በባንክ ወይም በሞባይል ገንዘብ በየወሩ በቋሚነት የሚተላለፍ የገንዘብ ድጋፍ።'
          },
          {
            title: 'የቤት ኪራይ እርዳታ',
            description: 'አረጋውያን በኪራይ ምክንያት ከቤታቸው እንዳይፈናቀሉ የሚደረግ የመኖሪያ ዋስትና።'
          },
          {
            title: 'የውሃ፣ መብራትና ማገዶ ሽፋን',
            description: 'መሰረታዊ የቤት ውስጥ አገልግሎቶች እንዳይቋረጡ የሚደረግ ወርሃዊ ድጎማ።'
          },
          {
            title: 'አነስተኛ የገቢ ማስገኛ ድጋፍ',
            description: 'መሥራት ለሚችሉ አረጋውያን ወይም አሳዳጊዎች ቀላል የቤት ውስጥ ሥራ መነሻ ካፒታል።'
          }
        ],
        steps: [
          { step: '01', title: 'ማመልከቻ ያስገቡ', desc: 'መታወቂያ ወይም የወረዳ ማረጋገጫ ጋር የድጋፍ ጥያቄውን ያቅርቡ።' },
          { step: '02', title: 'የሁኔታ ማጣሪያ', desc: 'የማህበራዊ ጉዳይ ባለሙያችን የቤት ኪራይ እና የኑሮ ወጪዎችን በሚስጥር ይገመግማል።' },
          { step: '03', title: 'ቀጥተኛ ክፍያ', desc: 'የጸደቀላቸው አረጋውያን ወርሃዊ ድጋፋቸውን በሰዓቱ ይቀበላሉ።' }
        ],
        eligibility: [
          'በቂ የጡረታ ገቢ ወይም ረዳት የሌላቸው ዕድሜያቸው 60+ አረጋውያን።',
          'ከባድ የቤት ኪራይ ጫና ወይም የመቋረጥ አደጋ ያለባቸው ነዋሪዎች።',
          'ወላጅ አልባ ህጻናትን ያለ ሌላ ገቢ ምንጭ የሚያሳድጉ አረጋውያን።'
        ]
      },
      social: {
        slug: 'social',
        title: 'ማህበራዊ እና ስነ-ልቦናዊ ድጋፍ',
        heroSecondary: 'ወዳጅነት እና የስሜት እንክብካቤ',
        subtitle: 'ብቸኝነትን በመዋጋት፣ በቡና ስነ-ስርዓቶች፣ በስነ-ልቦና ምክር እና በወጣት ወዳጅነት አረጋውያን ደስታና ተስፋ እንዲያገኙ እናደርጋለን።',
        image: '/images/service-social.jpg',
        stats: [
          { value: '500+', label: 'የተሳተፉ አረጋውያን' },
          { value: 'ሳምንታዊ', label: 'የቡና እና የጨዋታ ጊዜ' },
          { value: '45+', label: 'የስነ-ልቦና አጋሮች' }
        ],
        overview: [
          'ብቸኝነት፣ የትዳር አጋር ወይም ቤተሰብ ማጣት የሚፈጥረው ሀዘን በአረጋውያን አካላዊ እና አእምሯዊ ጤና ላይ ልክ እንደ ኢኮኖሚያዊ ችግር ከባድ ተጽዕኖ ያሳድራል።',
          'የማህበራዊ እና ስነ-ልቦናዊ ድጋፍ ፕሮግራማችን የሰፈር የቡና መሰባሰቢያዎችን፣ የግል የምክር አገልግሎትን እና የበጎ ፈቃደኛ ወጣቶችን ጉብኝት በማመቻቸት ደስታን እና ማህበራዊ ትስስርን ይመልሳል።'
        ],
        features: [
          {
            title: 'የግል ስነ-ልቦናዊ ምክር',
            description: 'ሀዘንን፣ ጭንቀትን እና ብቸኝነትን ለማቃለል በባለሙያዎች የሚሰጥ ወዳጃዊ ምክር።'
          },
          {
            title: 'ባህላዊ የቡና ጊዜያት',
            description: 'አረጋውያን የሚገናኙበት፣ ልምድ የሚለዋወጡበት እና የሚደሰቱበት ሳምንታዊ ስብሰባ።'
          },
          {
            title: 'የትውልድ ትስስር ፕሮግራም',
            description: 'የዩኒቨርሲቲ ተማሪዎችን እና ወጣቶችን ከአረጋውያን ጋር በወዳጅነት ማገናኘት።'
          },
          {
            title: 'የጤና እና መዝናኛ እንቅስቃሴዎች',
            description: 'ቀላል የአካል ብቃት እንቅስቃሴ፣ ዜማ እና የባህል ውይይቶችን ማዘጋጀት።'
          }
        ],
        steps: [
          { step: '01', title: 'ፍላጎትዎን ያሳውቁን', desc: 'በቡድን ስብሰባዎች መሳተፍ ወይም በቤት ውስጥ ወዳጃዊ ጉብኝት መፈለግዎን ይግለጹ።' },
          { step: '02', title: 'የእንኳን ደህና መጡ ጥሪ', desc: 'አስተባባሪያችን በአቅራቢያዎ ካሉ የአረጋውያን ክበባት ጋር ያስተዋውቅዎታል።' },
          { step: '03', title: 'የማህበረሰብ አካል ይሁኑ', desc: 'ሳምንታዊ መሰባሰቢያዎችን ይቀላቀሉ ወይም በጎ ፈቃደኞችን በቤትዎ ይቀበሉ።' }
        ],
        eligibility: [
          'ወዳጅነት፣ የምክር አገልግሎት ወይም ማህበራዊ ግንኙነት የሚፈልጉ ዕድሜያቸው 60+ አረጋውያን።',
          'ብቻቸውን የሚኖሩ ወይም የቅርብ ዘመድ በማጣት የተገለሉ አረጋውያን።',
          'ለትራንስፖርት ምቹ በሆኑ የአዲስ አበባ ማዕከላት አገልግሎቱ ይሰጣል።'
        ]
      },
      'home-visits': {
        slug: 'home-visits',
        title: 'የቤት ጉብኝት',
        heroSecondary: 'የቤት ውስጥ ግል እንክብካቤ እና ክትትል',
        subtitle: 'ከቤት መውጣት ለማይችሉ አረጋውያን የሰለጠኑ ተንከባካቢዎች ሳምንታዊ የግል ንጽህና፣ የቤት ጽዳት እና የጤና ክትትል በቤታቸው ይሰጣሉ።',
        image: '/images/service-home-visits.jpg',
        stats: [
          { value: '420+', label: 'ወርሃዊ የቤት ጉብኝቶች' },
          { value: '85+', label: 'የሰለጠኑ ተንከባካቢዎች' },
          { value: '10', label: 'የሚሸፈኑ ክፍለ ከተሞች' }
        ],
        overview: [
          'የዕድሜ መግፋት፣ የመንቀሳቀስ ውስንነት ወይም ህመም በርካታ አረጋውያን ከቤት እንዳይወጡ በማድረግ ቀላል የዕለት ሥራዎችን እንኳን አድካሚ እና አደገኛ ያደርግባቸዋል።',
          'ታማኝ እና የሰለጠኑ ተንከባካቢዎቻችን በየሳምንቱ ወደ ቤታቸው በመሄድ በግል ንጽህና፣ በቤት ጽዳት፣ በልብስ እጥበት፣ በመድኃኒት አወሳሰድ እና በወዳጃዊ ጨዋታ ያግዟቸዋል።'
        ],
        features: [
          {
            title: 'የግል ንጽህና እና እንክብካቤ',
            description: 'በአክብሮት የሚሰጥ የገላ መታጠብ፣ ልብስ መልበስ እና የቤት ውስጥ ደህንነት ድጋፍ።'
          },
          {
            title: 'የቤት ጽዳት እና ልብስ እጥበት',
            description: 'መኖሪያ ቤቱ ንጹህ፣ ከአደጋ የጸዳ እና ለእረፍት ምቹ እንዲሆን ማጽዳት።'
          },
          {
            title: 'የመድኃኒት እና የጤና ክትትል',
            description: 'መድኃኒት በሰዓቱ መውሰዳቸውን ማረጋገጥ እና ከጤና ቡድናችን ጋር ማገናኘት።'
          },
          {
            title: 'ወዳጃዊ አብሮነት እና መላላክ',
            description: 'ትኩስ ዜና ማንበብ፣ ጨዋታ መጫወት እና ከሱቅ ወይም ፋርማሲ ቁሳቁስ ማምጣት።'
          }
        ],
        steps: [
          { step: '01', title: 'የቤት ጉብኝት ይጠይቁ', desc: 'እንክብካቤ የሚያስፈልገውን አረጋዊ አድራሻ እና የስልክ ቁጥር ያስመዝግቡ።' },
          { step: '02', title: 'የተንከባካቢ ምደባ', desc: 'በአካባቢው የሚኖር የታመነ ተንከባካቢ ተመድቦ የጉብኝት ቀን ይወሰናል።' },
          { step: '03', title: 'ቋሚ ሳምንታዊ ጉብኝት', desc: 'በተቆጣጣሪ ክትትል ታግዘው ተንከባካቢዎች በቋሚነት ቤት ድረስ ያገለግላሉ።' }
        ],
        eligibility: [
          'ብቻቸውን የሚኖሩ ወይም የመንቀሳቀስ ችግር ያለባቸው ዕድሜያቸው 65+ አረጋውያን።',
          'ከሆስፒታል ከወጡ በኋላ የአጭር ወይም የረጅም ጊዜ የቤት ውስጥ እርዳታ የሚያስፈልጋቸው።',
          'በአዲስ አበባ የአገልግሎት ክልሎች ውስጥ የሚገኙ መኖሪያ ቤቶች።'
        ]
      },
      other: {
        slug: 'other',
        title: 'ሌሎች አገልግሎቶች እና የማህበረሰብ እንቅስቃሴዎች',
        heroSecondary: 'ወቅታዊ እርዳታ እና የማህበረሰብ ፕሮግራሞች',
        subtitle: 'የክረምት ብርድ ልብስ ስርጭት፣ የህግ እና የጡረታ ምክር፣ የቤት ጥገና እና የአረጋውያን ቀን ክብረ በዓላትን ያካትታል።',
        image: '/images/home-events-community.png',
        stats: [
          { value: '50+', label: 'ዓመታዊ የማህበረሰብ ዝግጅቶች' },
          { value: '1,200+', label: 'ብርድ ልብስ እና አልባሳት' },
          { value: '100%', label: 'በክብር ላይ የተመሰረተ ድጋፍ' }
        ],
        overview: [
          'እውነተኛ እንክብካቤ ከምግብና መድኃኒት ባለፈ የአረጋውያንን የክረምት ሙቀት፣ የህግ መብት ጥበቃ እና ማህበራዊ ደስታን ማረጋገጥን ይጠይቃል።',
          'በዚህ ዘርፍ የክረምት አልባሳት ስርጭትን፣ የመታወቂያና የጡረታ ጉዳይ የምክር አገልግሎትን፣ ቀላል የቤት ጥገናን እና አረጋውያንን የሚያከብሩ የማህበረሰብ ፌስቲቫሎችን እናከናውናለን።'
        ],
        features: [
          {
            title: 'የክረምት አልባሳት እና ብርድ ልብስ',
            description: 'ከክረምት ወቅት በፊት ሙቅ ብርድ ልብሶችን፣ ጃኬቶችን እና ጫማዎችን ማከፋፈል።'
          },
          {
            title: 'የህግ እና የጡረታ ምክር',
            description: 'ለመታወቂያ እድሳት፣ ለጡረታ መብት እና ለመኖሪያ ሰነዶች ነፃ የምክር እርዳታ።'
          },
          {
            title: 'ዓመታዊ የአረጋውያን ቀን በዓል',
            description: 'የአረጋውያንን ጥበብ በጋራ ማዕድ፣ በባህላዊ ሙዚቃ እና በጤና አገልግሎት የምናከብርበት ቀን።'
          },
          {
            title: 'አነስተኛ የቤት ጥገና ድጋፍ',
            description: 'የሚያፈሱ ጣሪያዎችን፣ መዝጊያዎችን እና የደህንነት ስጋቶችን በበጎ ፈቃደኞች መጠገን።'
          }
        ],
        steps: [
          { step: '01', title: 'ፍላጎቱን ያሳውቁን', desc: 'የወቅታዊ ቁሳቁስ፣ የቤት ጥገና ወይም የሰነድ ምክር ጥያቄዎን ያቅርቡ።' },
          { step: '02', title: 'የልዩ ፕሮጀክት አገናኝ', desc: 'አስተባባሪያችን ከተገቢው የህግ አማካሪ፣ የጥገና ቡድን ወይም ድጋፍ ጋር ያገናኛል።' },
          { step: '03', title: 'ፈጣን ምላሽና ተሳትፎ', desc: 'የሚያስፈልጉ ቁሳቁሶችን ይቀበሉ ወይም በሚቀጥሉት የማህበረሰብ በዓላት ይሳተፉ።' }
        ],
        eligibility: [
          'ለተመዘገቡ አባላት እና በእድር ወይም በአካባቢው ማህበረሰብ ለተጠቆሙ አረጋውያን ክፍት ነው።',
          'የአልባሳት እና ብርድ ልብስ ስርጭት ለዝቅተኛ መጠለያ ሁኔታ ቅድሚያ ይሰጣል።',
          'ሁሉም የማህበረሰብ ዝግጅቶች ለአረጋውያን፣ ለቤተሰቦች እና ለጎረቤቶች ክፍት ናቸው።'
        ]
      }
    }
  }
};
