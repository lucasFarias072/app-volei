

class MatchInvitation {
    // inclusion: true (from organizer to interested)
    // status: true (accepted)
    matchInvitationId: number
    interestedId: number
    organizerId: number
    matchId: number
    inclusion: boolean
    status: boolean

    constructor(
        matchInvitationId: number, 
        interestedId: number, organizerId: number, matchId: number, 
        inclusion: boolean, status: boolean
    ) {
        this.matchInvitationId = matchInvitationId
        this.interestedId = interestedId
        this.organizerId = organizerId
        this.matchId = matchId
        this.inclusion = inclusion
        this.status = status
    }
}
