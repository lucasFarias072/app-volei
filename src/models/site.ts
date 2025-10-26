

export class Site {
  siteId: number
  description: string

  constructor(siteId: number, description: string) {
    this.siteId = siteId
   this.description = description
  } 
}

const sites: Site[] = [
  new Site(1, 'Arena Antônio'),
  new Site(2, 'Arena Bento'),
  new Site(3, 'Arena Chico'),
  new Site(4, 'Arena Daniel'),
  new Site(5, 'Arena Edgar'),
  new Site(6, 'Arena Fernando'),
  new Site(7, 'Arena Gabriel'),
]

export {
  sites
}