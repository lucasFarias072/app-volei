

export class VolleyPlayer { 
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

const players: VolleyPlayer[] = [
  new VolleyPlayer(1, 1, 5, "Lucas Admin", "m", "16/07/1992", "farias", true),
  new VolleyPlayer(2, 1, 1, "Cebolinha Farias", "m", "14/03/2004", "@cC010101001!", false),
  new VolleyPlayer(3, 1, 2, "Cascão Santos", "m", "21/02/1999", "@cC010011!", false),
  new VolleyPlayer(4, 1, 3, "Mônica Sousa", "f", "02/10/1995", "@mM010101#!", false),
  new VolleyPlayer(5, 2, 4, "Magali Farias", "f", "19/11/1990", "@mM010101!!#", false),

  new VolleyPlayer(6, 3, 1, "Scooby Santos", "m", "22/05/2005", "@sS001100", false),
  new VolleyPlayer(7, 4, 2, "Salsicha Sousa", "m", "15/01/2007", "@sS01001001!#!", false),
  new VolleyPlayer(8, 2, 3, "Dafny Farias", "f", "03/04/2001", "@dD01000!", false),
  new VolleyPlayer(9, 3, 4, "Velma Santos", "f", "26/08/2004", "@vV01001@!", false),

  new VolleyPlayer(10, 4, 5, "Florzinha Sousa", "f", "09/02/1998", "@fF001001001#!", false),
  new VolleyPlayer(11, 2, 4, "Lindinha Farias", "f", "24/07/2004", "@lL01001001##!", false),
  new VolleyPlayer(12, 1, 1, "Docinho Santos", "f", "22/10/2008", "@dD0101001#", false),

  new VolleyPlayer(13, 5, 3, "Ash Farias", "m", "02/02/1997", "@aA100!", false),
  new VolleyPlayer(14, 6, 4, "Misty Santos", "f", "13/12/1999", "@mM01000#", false),
  new VolleyPlayer(15, 7, 3, "Brock Sousa", "m", "17/04/1990", "@bB00100", false)
]

/* module.exports = {
  jogadores: jogadores
} */

export {
  players
}
