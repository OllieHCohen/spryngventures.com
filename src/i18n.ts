export type Lang = 'en' | 'cy'

export type Stat = { num: string; label: string }
export type Pillar = { num: string; text: string }
export type SectorText = { title: string; blurb: string; bullets: string[] }
export type ModelCol = { label: string; big: string; hint: string }
export type LookItem = { title: string; body: string }

export type Translation = {
  // meta
  htmlLang: string
  docTitle: string
  metaDescription: string
  switchTo: { label: string; aria: string }

  // nav
  nav: {
    story: string
    thesis: string
    sectors: string
    model: string
    vision: string
    contact: string
  }

  // hero
  hero: {
    eyebrow: string
    titleStart: string
    titleGradient: string
    titleEnd: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    stats: [Stat, Stat, Stat]
  }

  // story / video
  story: {
    kicker: string
    title: string
    lede: string
    playAria: string
  }

  // thesis / why
  thesis: {
    kicker: string
    title: string
    introBoldLead: string
    introBold: string
    introBoldTrail: string
    introBody: string
    pillars: [Pillar, Pillar, Pillar]
    close: string
  }

  // sectors
  sectors: {
    kicker: string
    title: string
    lede: string
    items: [SectorText, SectorText, SectorText, SectorText]
  }

  // model
  model: {
    kicker: string
    titleStart: string
    titleGradient: string
    titleEnd: string
    cols: [ModelCol, ModelCol, ModelCol]
    plus: string
    equals: string
    foot: string
  }

  // look for
  look: {
    kicker: string
    title: string
    items: [LookItem, LookItem, LookItem, LookItem, LookItem]
    belief: string
  }

  // vision
  vision: {
    kicker: string
    title: string
    items: [string, string, string, string]
  }

  // close
  close: {
    kicker: string
    line: string
  }

  // contact
  contact: {
    kicker: string
    title: string
    lede: string
    email: string
  }

  // footer
  footer: {
    name: string
    tag: string
    meta: string
  }
}

export const translations: Record<Lang, Translation> = {
  en: {
    htmlLang: 'en',
    docTitle: 'Spryng Ventures — Investing in the future of Wales',
    metaDescription:
      'A collective of Welsh angel investors backing early-stage founders building education, wellbeing, enterprise, and sustainability solutions for children and young people.',
    switchTo: { label: 'Cymraeg', aria: 'Newid i Gymraeg' },

    nav: {
      story: 'Story',
      thesis: 'Thesis',
      sectors: 'What we back',
      model: 'Investment',
      vision: 'Vision',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'Wales-based angel syndicate',
      titleStart: 'Investing in the',
      titleGradient: 'future of Wales',
      titleEnd:
        '— by backing those building a better world for young people today.',
      sub: 'We are a collective of angel investors empowering the next generation through enterprise, education, wellbeing, and sustainable innovation.',
      ctaPrimary: 'Read our thesis',
      ctaSecondary: 'How we invest',
      stats: [
        { num: '£350k', label: 'Angel equity per deal' },
        { num: '£350k', label: 'Match from Dev Bank of Wales' },
        { num: '£700k', label: 'Total early-stage capital' },
      ],
    },

    story: {
      kicker: 'Watch our story',
      title: 'A short film on what we believe — and who we exist to back.',
      lede: 'Two minutes on why we’re investing in the next generation of Welsh founders.',
      playAria: 'Play Spryng Ventures story',
    },

    thesis: {
      kicker: 'Why we exist',
      title:
        'Wales has extraordinary talent. The capital to back it doesn’t always arrive in time.',
      introBoldLead:
        'We are a collective of angel investors united by a single belief: ',
      introBold:
        'the future prosperity of Wales depends on empowering the next generation through enterprise, education, wellbeing, and sustainable innovation.',
      introBoldTrail: '',
      introBody:
        'Wales has an extraordinary depth of talent, creativity, and community-minded ambition. Yet early-stage founders working to improve the lives and futures of children and young people often struggle to access aligned, values-driven capital at the moment they need it most.',
      pillars: [
        { num: '01', text: 'We exist to close that gap.' },
        { num: '02', text: 'We exist to support those founders.' },
        {
          num: '03',
          text: 'We exist to build a Wales where every young person under 18 has the opportunity, tools, and environment to thrive.',
        },
      ],
      close:
        'Our mission is to invest in visionary entrepreneurs who are reimagining education, wellbeing, and sustainable impact — while creating high-growth companies that contribute to the long-term economic strength of Wales.',
    },

    sectors: {
      kicker: 'What we invest in',
      title: 'Four sectors. One generation. Children and young people aged 0–18.',
      lede: 'We back Wales-based early-stage startups building solutions for young people across one or more of the following areas.',
      items: [
        {
          title: 'Education Services & EdTech',
          blurb:
            'Innovations supporting learning, teaching, skills development, creativity, and access to high-quality education for all young people.',
          bullets: [
            'Technology-enabled learning platforms',
            'Assessment and cognitive development tools',
            'Early years and SEN solutions',
            'Career readiness, enterprise skills, and STEM pathways',
          ],
        },
        {
          title: 'Enterprise & Future Skills',
          blurb:
            'Companies helping children and young people build the foundations of the workforce — and the entrepreneurs — of tomorrow.',
          bullets: [
            'Entrepreneurial skills',
            'Financial literacy',
            'Digital capability',
            'Creative and problem-solving competencies',
          ],
        },
        {
          title: 'Sustainability for Communities',
          blurb:
            'Startups enabling young people to live in, learn from, and shape a cleaner, greener, more resilient world.',
          bullets: [
            'Environmental education technology',
            'Youth-centred climate action platforms',
            'Tools for schools and families reducing carbon footprint',
            'Sustainable resource solutions for children’s environments',
          ],
        },
        {
          title: 'Wellbeing & Child Development',
          blurb:
            'Founders safeguarding the emotional, psychological, and physical wellbeing of young people across Wales.',
          bullets: [
            'Mental health platforms and early-intervention tools',
            'Physical activity and healthy lifestyle apps',
            'Behavioural and developmental support',
            'Inclusive wellbeing solutions for all children',
          ],
        },
      ],
    },

    model: {
      kicker: 'Our investment model',
      titleStart: 'Up to',
      titleGradient: '£700,000',
      titleEnd:
        'of early-stage capital, matched alongside the Development Bank of Wales.',
      cols: [
        {
          label: 'Angel syndicate',
          big: '£350k',
          hint: 'Equity investment from our members',
        },
        {
          label: 'Development Bank of Wales',
          big: '£350k',
          hint: 'Matched alongside our investment',
        },
        {
          label: 'Total available',
          big: '£700k',
          hint: 'To fuel ambitious growth from day one',
        },
      ],
      plus: '+',
      equals: '=',
      foot: 'Qualifying Welsh startups can secure meaningful capital at the earliest stages of development — the moment it matters most.',
    },

    look: {
      kicker: 'What we look for',
      title:
        'Founders who are mission-led, ambitious, and deeply Welsh in character.',
      items: [
        {
          title: 'Clear mission',
          body: 'Aligned to improving outcomes for children under 18.',
        },
        {
          title: 'High-growth potential',
          body: 'Commercially compelling, with scalable delivery.',
        },
        {
          title: 'Authenticity & insight',
          body: 'Passion for the sector and a deep understanding of it.',
        },
        {
          title: 'Rooted in Wales',
          body: 'Committed to operating here and contributing to local talent.',
        },
        {
          title: 'Ethics & impact',
          body: 'Responsibility built in, with measurable outcomes.',
        },
      ],
      belief:
        'We believe that companies improving the lives and futures of children are not only socially transformative — they represent some of the most compelling long-term commercial opportunities of our time.',
    },

    vision: {
      kicker: 'Our vision',
      title:
        'Wales as a global centre of excellence for education innovation, youth wellbeing, and sustainable child-focused technology.',
      items: [
        'A more skilled generation',
        'A greener and healthier future',
        'A thriving Welsh innovation ecosystem',
        'Companies that scale beyond Wales to create global impact',
      ],
    },

    close: {
      kicker: 'In short',
      line: 'We invest in the future — by investing in those building a better world for young people today.',
    },

    contact: {
      kicker: 'Contact us',
      title:
        'Building something for the next generation of Wales? We’d love to hear from you.',
      lede: 'Drop us a line and tell us about your company, your founders, and the young people you’re building for.',
      email: 'contact@spryngventures.com',
    },

    footer: {
      name: 'Spryng Ventures',
      tag: 'An angel syndicate for Wales.',
      meta: 'Backing the next generation of Welsh founders.',
    },
  },

  cy: {
    htmlLang: 'cy',
    docTitle: 'Spryng Ventures — Buddsoddi yn nyfodol Cymru',
    metaDescription:
      'Grŵp o angylion-fuddsoddwyr Cymreig sy’n cefnogi sylfaenwyr cam cynnar sy’n adeiladu atebion addysg, lles, menter, a chynaliadwyedd i blant a phobl ifanc.',
    switchTo: { label: 'English', aria: 'Switch to English' },

    nav: {
      story: 'Stori',
      thesis: 'Thesis',
      sectors: 'Beth rydyn ni’n cefnogi',
      model: 'Buddsoddi',
      vision: 'Gweledigaeth',
      contact: 'Cysylltu',
    },

    hero: {
      eyebrow: 'Grŵp angylion-fuddsoddi yng Nghymru',
      titleStart: 'Buddsoddi yn',
      titleGradient: 'nyfodol Cymru',
      titleEnd:
        '— drwy gefnogi’r rhai sy’n adeiladu byd gwell i bobl ifanc heddiw.',
      sub: 'Rydyn ni’n grŵp o angylion-fuddsoddwyr yn grymuso’r genhedlaeth nesaf trwy fenter, addysg, lles, ac arloesedd cynaliadwy.',
      ctaPrimary: 'Darllen ein thesis',
      ctaSecondary: 'Sut rydyn ni’n buddsoddi',
      stats: [
        { num: '£350k', label: 'Ecwiti gan ein hangylion' },
        { num: '£350k', label: 'Cyfatebol gan Banc Datblygu Cymru' },
        { num: '£700k', label: 'Cyfanswm cyfalaf cam cynnar' },
      ],
    },

    story: {
      kicker: 'Gwyliwch ein stori',
      title:
        'Ffilm fer am yr hyn rydyn ni’n credu — a phwy rydyn ni’n bodoli i’w gefnogi.',
      lede: 'Dau funud ar pam rydyn ni’n buddsoddi yng nghenhedlaeth nesaf sylfaenwyr Cymru.',
      playAria: 'Chwarae stori Spryng Ventures',
    },

    thesis: {
      kicker: 'Pam rydyn ni’n bodoli',
      title:
        'Mae gan Gymru dalent eithriadol. Nid yw’r cyfalaf i’w gefnogi bob amser yn cyrraedd mewn pryd.',
      introBoldLead:
        'Rydyn ni’n grŵp o angylion-fuddsoddwyr yn unedig gan un gred: ',
      introBold:
        'mae ffyniant Cymru yn y dyfodol yn dibynnu ar rymuso’r genhedlaeth nesaf trwy fenter, addysg, lles, ac arloesedd cynaliadwy.',
      introBoldTrail: '',
      introBody:
        'Mae gan Gymru ddyfnder anhygoel o dalent, creadigrwydd, ac uchelgais cymunedol. Eto i gyd, mae sylfaenwyr cam cynnar sy’n gweithio i wella bywydau a dyfodol plant a phobl ifanc yn aml yn ei chael yn anodd cael at gyfalaf cydnaws, gwerth-arweiniedig ar yr union foment maen nhw ei angen fwyaf.',
      pillars: [
        { num: '01', text: 'Rydyn ni’n bodoli i gau’r bwlch hwnnw.' },
        { num: '02', text: 'Rydyn ni’n bodoli i gefnogi’r sylfaenwyr hynny.' },
        {
          num: '03',
          text: 'Rydyn ni’n bodoli i adeiladu Cymru lle mae gan bob person ifanc dan 18 oed y cyfle, yr offer, a’r amgylchedd i ffynnu.',
        },
      ],
      close:
        'Ein cenhadaeth yw buddsoddi mewn entrepreneuriaid gweledigaethol sy’n ailddychmygu addysg, lles, ac effaith gynaliadwy — wrth greu cwmnïau twf uchel sy’n cyfrannu at gryfder economaidd hirdymor Cymru.',
    },

    sectors: {
      kicker: 'Yr hyn rydyn ni’n buddsoddi ynddo',
      title:
        'Pedwar sector. Un genhedlaeth. Plant a phobl ifanc 0–18 oed.',
      lede: 'Rydyn ni’n cefnogi cwmnïau cychwynnol cam cynnar wedi’u lleoli yng Nghymru sy’n adeiladu atebion i bobl ifanc ar draws un neu fwy o’r meysydd canlynol.',
      items: [
        {
          title: 'Gwasanaethau Addysg ac EdTech',
          blurb:
            'Arloesi sy’n cefnogi dysgu, addysgu, datblygu sgiliau, creadigrwydd, a mynediad at addysg o ansawdd uchel i bob person ifanc.',
          bullets: [
            'Llwyfannau dysgu wedi’u galluogi gan dechnoleg',
            'Offer asesu a datblygu gwybyddol',
            'Atebion blynyddoedd cynnar ac AAA (Anghenion Addysgol Arbennig)',
            'Parodrwydd gyrfa, sgiliau menter, a llwybrau STEM',
          ],
        },
        {
          title: 'Menter a Sgiliau’r Dyfodol',
          blurb:
            'Cwmnïau sy’n helpu plant a phobl ifanc i adeiladu sylfeini’r gweithlu — ac entrepreneuriaid — yfory.',
          bullets: [
            'Sgiliau entrepreneuraidd',
            'Llythrennedd ariannol',
            'Gallu digidol',
            'Cymwyseddau creadigol a datrys problemau',
          ],
        },
        {
          title: 'Cynaliadwyedd i Gymunedau',
          blurb:
            'Cwmnïau cychwynnol sy’n galluogi pobl ifanc i fyw mewn, dysgu o, a llunio byd glanach, gwyrddach, mwy gwydn.',
          bullets: [
            'Technoleg addysg amgylcheddol',
            'Llwyfannau gweithredu hinsawdd sy’n canolbwyntio ar ieuenctid',
            'Offer i ysgolion a theuluoedd leihau eu hôl-troed carbon',
            'Atebion adnoddau cynaliadwy ar gyfer amgylcheddau plant',
          ],
        },
        {
          title: 'Lles a Datblygiad Plant',
          blurb:
            'Sylfaenwyr sy’n diogelu lles emosiynol, seicolegol, a chorfforol pobl ifanc ar draws Cymru.',
          bullets: [
            'Llwyfannau iechyd meddwl ac offer ymyrraeth gynnar',
            'Apiau gweithgaredd corfforol a ffordd o fyw iach',
            'Cefnogaeth ymddygiad a datblygiad',
            'Atebion lles cynhwysol i bob plentyn',
          ],
        },
      ],
    },

    model: {
      kicker: 'Ein model buddsoddi',
      titleStart: 'Hyd at',
      titleGradient: '£700,000',
      titleEnd:
        'o gyfalaf cam cynnar, wedi’i gyfateb ochr yn ochr â Banc Datblygu Cymru.',
      cols: [
        {
          label: 'Grŵp angylion',
          big: '£350k',
          hint: 'Buddsoddiad ecwiti gan ein haelodau',
        },
        {
          label: 'Banc Datblygu Cymru',
          big: '£350k',
          hint: 'Wedi’i gyfateb ochr yn ochr â’n buddsoddiad',
        },
        {
          label: 'Cyfanswm sydd ar gael',
          big: '£700k',
          hint: 'I yrru twf uchelgeisiol o’r diwrnod cyntaf',
        },
      ],
      plus: '+',
      equals: '=',
      foot: 'Gall busnesau newydd Cymreig cymwys sicrhau cyfalaf ystyrlon ar y camau cynharaf o ddatblygu — yr eiliad pan mae’n bwysicaf.',
    },

    look: {
      kicker: 'Yr hyn rydyn ni’n chwilio amdano',
      title:
        'Sylfaenwyr sy’n arwain â chenhadaeth, yn uchelgeisiol, ac yn ddwfn Gymreig eu cymeriad.',
      items: [
        {
          title: 'Cenhadaeth glir',
          body: 'Yn cyd-fynd â gwella canlyniadau i blant dan 18 oed.',
        },
        {
          title: 'Potensial twf uchel',
          body: 'Yn fasnachol gymhellol, gyda darparu graddadwy.',
        },
        {
          title: 'Dilysrwydd a mewnwelediad',
          body: 'Angerdd am y sector a dealltwriaeth ddofn ohono.',
        },
        {
          title: 'Gwreiddiau yng Nghymru',
          body: 'Wedi ymrwymo i weithredu yma a chyfrannu at dalent leol.',
        },
        {
          title: 'Moeseg ac effaith',
          body: 'Cyfrifoldeb wedi’i gynnwys, gyda chanlyniadau mesuradwy.',
        },
      ],
      belief:
        'Rydyn ni’n credu bod cwmnïau sy’n gwella bywydau a dyfodol plant nid yn unig yn drawsnewidiol yn gymdeithasol — maen nhw’n cynrychioli rhai o’r cyfleoedd masnachol hirdymor mwyaf cymhellol o’n hoes.',
    },

    vision: {
      kicker: 'Ein gweledigaeth',
      title:
        'Cymru fel canolfan ragoriaeth fyd-eang ar gyfer arloesi addysg, lles ieuenctid, a thechnoleg gynaliadwy sy’n canolbwyntio ar blant.',
      items: [
        'Cenhedlaeth fwy medrus',
        'Dyfodol gwyrddach ac iachach',
        'Ecosystem arloesi ffyniannus yng Nghymru',
        'Cwmnïau sy’n graddio y tu hwnt i Gymru i greu effaith fyd-eang',
      ],
    },

    close: {
      kicker: 'Yn fyr',
      line: 'Rydyn ni’n buddsoddi yn y dyfodol — drwy fuddsoddi yn y rhai sy’n adeiladu byd gwell i bobl ifanc heddiw.',
    },

    contact: {
      kicker: 'Cysylltwch â ni',
      title:
        'Adeiladu rhywbeth ar gyfer cenhedlaeth nesaf Cymru? Byddai’n wych clywed gennych.',
      lede: 'Anfonwch neges atom a dweud wrthym am eich cwmni, eich sylfaenwyr, a’r bobl ifanc rydych chi’n adeiladu ar eu cyfer.',
      email: 'contact@spryngventures.com',
    },

    footer: {
      name: 'Spryng Ventures',
      tag: 'Grŵp angylion-fuddsoddi ar gyfer Cymru.',
      meta: 'Yn cefnogi’r genhedlaeth nesaf o sylfaenwyr Cymreig.',
    },
  },
}
