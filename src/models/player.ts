

export class VoleyPlayer { 
    public playerId: number                
    public inviterId: number
    public playerCat: number
    public username: string
    public gender: string
    public birth: string
    private password: string
    authenticated: boolean

    constructor(playerId: number, inviterId: number, playerCat: number, username: string, gender: string, birth: string, password: string, authenticated: boolean) {
      this.playerId = playerId
      this.inviterId = inviterId
      this.playerCat = playerCat
      this.username = username
      this.gender = gender
      this.birth = birth
      this.password = password
      this.authenticated = authenticated
    }

    get getPassword(): string {
      return this.password
    }

    set setPassword(newValue: string) {
      this.password = newValue
      console.log(this.password)
    }
    
}

const players: VoleyPlayer[] = [
  new VoleyPlayer(1, 1, 5, "Lucas Admin", "m", "16/07/1992", "farias", true),
  new VoleyPlayer(2, 1, 1, "Cebolinha Farias", "m", "14/03/2004", "anhilocebsairaf", false),
  new VoleyPlayer(3, 1, 2, "Cascão Santos", "m", "21/02/1999", "oacsacsotnas", false),
  new VoleyPlayer(4, 1, 3, "Mônica Sousa", "f", "02/10/1995", "acinomasuos", false),
  new VoleyPlayer(5, 2, 4, "Magali Farias", "f", "19/11/1990", "ilagamsairaf", false),

  new VoleyPlayer(6, 3, 1, "Scooby Santos", "m", "22/05/2005", "yboocssotnas", false),
  new VoleyPlayer(7, 4, 2, "Salsicha Sousa", "m", "15/01/2007", "ahcislasasuos", false),
  new VoleyPlayer(8, 2, 3, "Dafny Farias", "f", "03/04/2001", "ynfadsairaf", false),
  new VoleyPlayer(9, 3, 4, "Velma Santos", "f", "26/08/2004", "amlevsotnas", false),

  new VoleyPlayer(10, 4, 5, "Florzinha Sousa", "f", "09/02/1998", "anhizrolfasous", false),

  new VoleyPlayer(11, 2, 5, "Lindinha Farias", "f", "24/07/2004", "anhidnilsairaf", false),
]

/* module.exports = {
  jogadores: jogadores
} */

export {
  players
}
