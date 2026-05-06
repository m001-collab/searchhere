const pages = [
  {
    title: "Tile Rescue Knowledge Base",
    url: "https://tilerescue.atlassian.net/wiki/external/MWQ5MzZiNGRiNDY2NGZmMWI2YTBjODIwZjFiYWQwMWM",
    tags: ["knowledge", "base", "overview", "home", "#TileRescue"]
  },
  {
    title: "Technical Advice Registry",
    url: "https://tilerescue.atlassian.net/wiki/external/YTY0ZWQ5MzUwYjE3NDI4ZThmMzg4MWU1Y2ZmOTE5MmE",
    tags: ["advice", "technical", "registry", "#TileRescue"]
  },
  {
    title: "Skills & Techniques",
    url: "https://tilerescue.atlassian.net/wiki/external/OTMzN2NiMjA3N2UwNDEzY2JlZTFkMWQxOTA3MzU3Njc",
    tags: ["skills", "techniques", "howto", "#TileRescue"]
  },
  {
    title: "Tools",
    url: "https://tilerescue.atlassian.net/wiki/external/OGQ2MWE1OGU4NjFlNDgyN2I3ODY1ZmIyZmM5M2NmMjU",
    tags: ["tools", "equipment", "#TileRescue"]
  },
  {
    title: "Dremel",
    url: "https://tilerescue.atlassian.net/wiki/external/ZTAzNmY1ZjgwMjIxNDNkN2FkZjU0N2IzMjQyNDZjYWI",
    tags: ["dremel", "tool", "howToDremel", "grinding", "rotary", "#TileRescue"]
  },
  {
    title: "Multi-tool",
    url: "https://tilerescue.atlassian.net/wiki/external/ZDYyODdiMGI2NDllNDhmYzhiYWU3NmY3YTQ4MWRiNjc",
    tags: ["multitool", "multi-tool", "tool", "cutting", "oscillating", "#TileRescue"]
  },
  {
    title: "Variable Speed Grinder",
    url: "https://tilerescue.atlassian.net/wiki/external/ZmIyNDNjZDA1YWM0NDE5MDlkYWMzMmZlZTA4ZjM4YmE",
    tags: ["grinder", "variable speed", "tool", "grinding", "vsg", "#TileRescue"]
  },
  {
    title: "Arbortech",
    url: "https://tilerescue.atlassian.net/wiki/external/MjMwNDBjYjQ5OGU0NDVhOGJhZjRjODQ0N2Q5MzY2NTM",
    tags: ["arbortech", "tool", "cutting", "carving", "#TileRescue"]
  },
  {
    title: "Burr Grinder",
    url: "https://tilerescue.atlassian.net/wiki/external/ZGQxZTljNjM1ODgxNDUwNjgxNzI2YTQwZjIyZjQ5NzQ",
    tags: ["burr", "grinder", "tool", "grinding", "#TileRescue"]
  },
  {
    title: "Turbo Vac",
    url: "https://tilerescue.atlassian.net/wiki/external/OTkzMTU0NjYzYzQ5NDZlYzhlYzcxNDUxYjM0ZDU2NGI",
    tags: ["turbo", "vac", "vacuum", "dust", "extraction", "#TileRescue"]
  },
  {
    title: "Setup and Packup",
    url: "https://tilerescue.atlassian.net/wiki/external/ZGRhZDE2NWQ5NGMwNDQ3NDk4ZjZmZDRhYTZlZTVhNzU",
    tags: ["setup", "packup", "preparation", "pack up", "#TileRescue"]
  },
  {
    title: "Rough Outdoor Tiles Setup",
    url: "https://tilerescue.atlassian.net/wiki/external/N2QyNWQxMjQ0N2VmNGRmODgxNTA2NGQ4NTRjZTRjMmY",
    tags: ["outdoor", "rough", "setup", "tiles", "exterior", "#TileRescue"]
  },
  {
    title: "Motor Replacement",
    url: "https://tilerescue.atlassian.net/wiki/external/N2ZhMDQyNGUzNTU5NGMxZThiMTBhZmI0ODA0Nzc5ZWE",
    tags: ["motor", "replacement", "repair", "maintenance", "#TileRescue"]
  },
  {
    title: "Silicone",
    url: "https://tilerescue.atlassian.net/wiki/external/MmE1Zjg3MGQ3NDYxNGMxY2FhMzExMTMwOTdiMjgyYjQ",
    tags: ["silicone", "seal", "sealant", "#TileRescue"]
  },
  {
    title: "Install Silicone Seal",
    url: "https://tilerescue.atlassian.net/wiki/external/NGU5ZTgxMTA3ZmEwNDUxMWE0OTc3N2RjNTJlNjZmMjQ",
    tags: ["silicone", "seal", "install", "howto", "application", "#TileRescue"]
  },
  {
    title: "Removing Silicone Seals from a Soft Surface",
    url: "https://tilerescue.atlassian.net/wiki/external/YWMwNWIyNzdjNmE5NDJiOWFjYTIzZTM2MzA3M2IwNzU",
    tags: ["silicone", "seal", "remove", "soft surface", "removal", "#TileRescue"]
  },
  {
    title: "Prepare Silicone Tube",
    url: "https://tilerescue.atlassian.net/wiki/external/MWM4NGE5NTEyNDRkNDBjMDgxZmVmOWQ3NDdjNWJlZTM",
    tags: ["silicone", "tube", "prepare", "preparation", "howto", "#TileRescue"]
  },
  {
    title: "Remove Seals with Blades",
    url: "https://tilerescue.atlassian.net/wiki/external/ZTZkMWQ4OTQ2MGE0NGI0ZGExNWQwMjRhN2UzMDFlYzY",
    tags: ["seal", "remove", "blades", "cutting", "scraper", "#TileRescue"]
  },
  {
    title: "Sealant Remover Spray",
    url: "https://tilerescue.atlassian.net/wiki/external/MTNmNzczNWE0ZTViNDg3MmExNTViMTM4ODdkOWRiM2I",
    tags: ["sealant", "remover", "spray", "chemical", "removal", "#TileRescue"]
  },
  {
    title: "Preparing for Silicone Seals",
    url: "https://tilerescue.atlassian.net/wiki/external/MmVjZmNiZDdmODBjNDQzNmFjYzU4ZTc3NmEzM2FkZjk",
    tags: ["silicone", "seal", "prepare", "preparation", "surface prep", "#TileRescue"]
  },
  {
    title: "Safety Tip",
    url: "https://tilerescue.atlassian.net/wiki/external/NGQ5YTZhZWQ4MGQyNGExMjkwOTU0ZWFjNDYzNzRhYzc",
    tags: ["safety", "tip", "whs", "warning", "#TileRescue"]
  },
  {
    title: "Tools Needed to Remove Silicone",
    url: "https://tilerescue.atlassian.net/wiki/external/Njg4MmEyNDVhOTY3NDFlNGE3MTIyNzA1NzY4ODliMGE",
    tags: ["silicone", "tools", "remove", "equipment", "removal", "#TileRescue"]
  },
  {
    title: "Epoxy",
    url: "https://tilerescue.atlassian.net/wiki/external/MWI1M2YxNzQ5ZjA3NDlhMzlmZjc4ZDZjYmVjZDBjMWI",
    tags: ["epoxy", "adhesive", "grout", "repair", "#TileRescue"]
  },
  {
    title: "Training Board - Epoxy Silicone Training Process",
    url: "https://tilerescue.atlassian.net/wiki/external/MDE4NzcwNTc0MmExNGI0NGE0YzA2YjIwMDY0Yjc2Y2I",
    tags: ["training", "epoxy", "silicone", "process", "practice", "board", "#TileRescue"]
  },
  {
    title: "Case Studies",
    url: "https://tilerescue.atlassian.net/wiki/external/YWFjYzIzNmE2MTJjNDg1MjhiMjQ0MjRkZmE5ZTI4M2E",
    tags: ["case studies", "examples", "real world", "jobs", "#TileRescue"]
  },
  {
    title: "Anti-Slip Floor Tiles",
    url: "https://tilerescue.atlassian.net/wiki/external/YjI4ZDQ4Yjk2NWVhNGFiOWE0NTY3OTc0MzdmYTA4ZWY",
    tags: ["anti-slip", "antislip", "floor", "tiles", "safety", "traction", "#TileRescue"]
  },
  {
    title: "Pre-Clean Process",
    url: "https://tilerescue.atlassian.net/wiki/external/NGEyNmM5YmE3ZmM3NGVhZmE5NzE3NWVjZTJlNDM1YzU",
    tags: ["pre-clean", "preclean", "clean", "process", "preparation", "howto", "#TileRescue"]
  },
  {
    title: "Anti-Slip Process",
    url: "https://tilerescue.atlassian.net/wiki/external/ZDRlYWM3YjI1NmZiNDkyMmI4YTU3YWUyNjhjZTg5OTU",
    tags: ["anti-slip", "antislip", "process", "howto", "application", "#TileRescue"]
  },
  {
    title: "Bathroom Repairs",
    url: "https://tilerescue.atlassian.net/wiki/external/OGQxZTQ2Yzc3NTIwNDcwMWE0NDUxNWRkNzdhOWIxNDk",
    tags: ["bathroom", "repairs", "repair", "renovation", "tiles", "#TileRescue"]
  },
  {
    title: "Work Health and Safety",
    url: "https://tilerescue.atlassian.net/wiki/external/ZTY2YjA5ZTlhY2FiNDllYzg0NGNhZmQ3NmY2M2IzMGE",
    tags: ["whs", "safety", "health", "work health", "#TileRescue"]
  },
  {
    title: "WHS Updates",
    url: "https://tilerescue.atlassian.net/wiki/external/ODRhZWI1MDc4ZjNkNDZhN2FiOTZmZjc3YjU5NjQwZjA",
    tags: ["whs", "updates", "safety", "news", "#TileRescue"]
  },
  {
    title: "Dust Containment",
    url: "https://tilerescue.atlassian.net/wiki/external/NDA0OTA2ZDIxYzA3NDMwZWExZDg5NjhmMzlmNTY3Y2M",
    tags: ["dust", "containment", "safety", "extraction", "silicosis", "#TileRescue"]
  },
  {
    title: "Silicosis Information & Mask Requirements",
    url: "https://tilerescue.atlassian.net/wiki/external/NDA0OTA2ZDIxYzA3NDMwZWExZDg5NjhmMzlmNTY3Y2M",
    tags: ["silicosis", "mask", "dust", "safety", "ppe", "respirator", "#TileRescue"]
  },
  {
    title: "Occupational Health & Safety",
    url: "https://tilerescue.atlassian.net/wiki/external/YWQwMDRiNzE3ZjI4NDFiNGJkMzA5ZGJkMzdlNDY1MTI",
    tags: ["ohs", "safety", "health", "occupational", "whs", "#TileRescue"]
  },
  {
    title: "Safety and Data Sheets (SDS)",
    url: "https://tilerescue.atlassian.net/wiki/external/YWQwMDRiNzE3ZjI4NDFiNGJkMzA5ZGJkMzdlNDY1MTI",
    tags: ["sds", "safety", "data sheets", "msds", "chemicals", "#TileRescue"]
  },
  {
    title: "Coronavirus (COVID-19)",
    url: "https://tilerescue.atlassian.net/wiki/external/YWQwMDRiNzE3ZjI4NDFiNGJkMzA5ZGJkMzdlNDY1MTI",
    tags: ["covid", "coronavirus", "health", "pandemic", "hygiene", "#TileRescue"]
  },
  {
    title: "Equipment & Safety",
    url: "https://tilerescue.atlassian.net/wiki/external/NjZhODU2YzY2MWVkNDA0ZDlkZGE3OWE1MDI1NTY4N2E",
    tags: ["equipment", "safety", "tools", "gear", "#TileRescue"]
  },
  {
    title: "Safe Work Method Statement (SWMS)",
    url: "https://tilerescue.atlassian.net/wiki/external/MDhhZDNhOWNiMGU1NDczZGIyYWZjMThjMzUzNzNmNWQ",
    tags: ["swms", "safety", "method statement", "procedure", "whs", "#TileRescue"]
  },
  {
    title: "Personal Protective Equipment - PPE",
    url: "https://tilerescue.atlassian.net/wiki/external/NWQ0ZmE5ODQ3MjA0NDM1YTgzMmE0ODFkYzZlMjVkZGU",
    tags: ["ppe", "protective", "equipment", "safety", "gear", "mask", "gloves", "#TileRescue"]
  },
  {
    title: "Mental Health Awareness",
    url: "https://tilerescue.atlassian.net/wiki/external/ZmJlMTUyZjNkYzEzNDBkNGI4MTdmMzFkMjRkZmQ1NDQ",
    tags: ["mental health", "awareness", "wellbeing", "health", "#TileRescue"]
  },
  {
    title: "Workers Compensation & Work Cover",
    url: "https://tilerescue.atlassian.net/wiki/external/YjA5MjlkZjU3OGQ4NGVmMmEzZmFmNjJiMzMyMjhlOGE",
    tags: ["workers compensation", "workcover", "insurance", "injury", "claim", "#TileRescue"]
  },
  {
    title: "Workplace Bullying & Harassment",
    url: "https://tilerescue.atlassian.net/wiki/external/MDdlOWJmZWFiODEwNDgxMmE0ODdlNDY2MTU2YmFlZjI",
    tags: ["bullying", "harassment", "workplace", "conduct", "hr", "#TileRescue"]
  },
  {
    title: "Organic Staining on Marble Stone (Wrong Chemical Diagnosis)",
    url: "https://tilerescue.atlassian.net/wiki/external/NTdiZDAxMzA4ZTFmNDM1NTk1OWVmZTEyZDdkMjI2MWQ",
    tags: ["#TileRescue #StoneCleaning #MarbleCare #NaturalStone #MossAndMould #OrganicStaining #SurfaceRestoration #TileCleaning #PressureCleaning #ExteriorCleaning #ChemicalSelection #RightChemicalRightJob #TestSpotFirst #AvoidAcidDamage #StoneProtection #CleaningMistakes #TradeTraining #OnSiteLessons #BeforeAndAfter #ProblemSolving"]
  },
  {
    title: "Cleaning Around a Pool Without Contaminating the Water",
    url: "https://tilerescue.atlassian.net/wiki/external/NGRlOGE2N2FiNTkzNDgzNjhiNTk3ZWQ0MzU4ODI4MDg",
    tags: ["#PoolCleaning #MossAndMouldRemoval #Actichem #ChemicalSafety #PressureCleaning #PoolMaintenance #CustomerEducation #SurfaceCleaning #OutdoorCleaning #FranchiseTraining #TileRescue #CleaningChemicals #TradeTips #ServiceExcellence #CustomerConfidence"]
  },
  {
    title: "Acid Damage to a Limestone Shower",
    url: "https://tilerescue.atlassian.net/wiki/external/ZjA5ZjE0NGMxNDA0NDc1ZGE0Njk0MjFiOTIwOGEwMzg",
    tags: ["#LimestoneDamage #AcidEtching #StoneRestoration #TileRescue #ShowerCleaning #NaturalStoneCare #FranchiseTraining #SurfaceProtection #DoItRight"]
  },
  {
    title: "Tiling Over Fresh Screed in Wet Conditions",
    url: "https://tilerescue.atlassian.net/wiki/external/MDBkNDkwY2I0NGFlNDFjM2JhOGRiNWY2NzRkNGM0ZTU",
    tags: ["#TileRescue #ScreedPrep #TilingBestPractice #AvoidCallbacks #ConstructionMistakes #TileAdhesive #Megapoxy #ExternalTiling #TradeTips #DoItOnceDoItRight #FranchiseTraining #SiteDecisions"]
  }
];
