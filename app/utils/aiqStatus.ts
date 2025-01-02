export const aiqStatus = (eco2: number, tvoc: number, pm: number) => {
  let ECO2I: number = 0,
    PMI: number = 0,
    TVOCI: number = 0
  switch (true) {
    case eco2 <= 650:
      ECO2I = 0
      break
    case eco2 > 650 && eco2 <= 1500:
      ECO2I = 1
      break
    case eco2 > 1500 && eco2 <= 2000:
      ECO2I = 2
      break
    case eco2 > 2000 && eco2 <= 2500:
      ECO2I = 3
      break
    case eco2 > 2500:
      ECO2I = 4
      break
  }
  switch (true) {
    case tvoc <= 220:
      TVOCI = 0
      break
    case tvoc > 220 && tvoc <= 660:
      TVOCI = 1
      break
    case tvoc > 660 && tvoc <= 1430:
      TVOCI = 2
      break
    case tvoc > 1430 && tvoc <= 2200:
      TVOCI = 3
      break
    case tvoc > 2200:
      TVOCI = 4
      break
  }
  switch (true) {
    case pm <= 12:
      PMI = 0
      break
    case pm > 12 && pm <= 35.4:
      PMI = 1
      break
    case pm > 35.4 && pm <= 55.4:
      PMI = 2
      break
    case pm > 55.4 && pm <= 150.4:
      PMI = 3
      break
    case pm > 150.4:
      PMI = 4
      break
  }
  let p = TVOCI
  if (ECO2I > TVOCI) p = ECO2I
  else if (PMI > p) p = PMI
  return p
}
