// All Nba Teams

export interface Internal {
    pubDateTime: string;
    xslt: string;
    eventName: string;
}

export interface Standard {
    isNBAFranchise: boolean;
    isAllStar: boolean;
    city: string;
    altCityName: string;
    fullName: string;
    tricode: string;
    teamId: string;
    nickname: string;
    urlName: string;
    confName: string;
    divName: string;
}

export interface League {
    standard: Standard[];
}

export interface TeamsResponse {
    _internal: Internal;
    league: League;
}

// All Nba Players

export interface Internal {
    pubDateTime: string;
    xslt: string;
    eventName: string;
}

export interface Team {
    teamId: string;
    seasonStart: string;
    seasonEnd: string;
}

export interface Draft {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface Standard {
    firstName: string;
    lastName: string;
    personId: string;
    teamId: string;
    jersey: string;
    isActive: boolean;
    pos: string;
    heightFeet: string;
    heightInches: string;
    heightMeters: string;
    weightPounds: string;
    weightKilograms: string;
    dateOfBirthUTC: string;
    teams: Team[];
    draft: Draft;
    nbaDebutYear: string;
    yearsPro: string;
    collegeName: string;
    lastAffiliation: string;
    country: string;
}

export interface League {
    standard: Standard[];
}

export interface PlayerResponse {
    _internal: Internal;
    league: League;
}

// Nba Team Details

export interface Detail {
    Team_Id: number;
    Abbreviation: string;
    Nickname: string;
    YearFounded: number;
    YearActiveTill: string;
    City: string;
    Arena: string;
    ArenaCapacity: string;
    Owner: string;
    GeneralManager: string;
    HeadCoach: string;
    DLeagueAffiliation: string;
}

export interface History {
    Team_Id: number;
    City: string;
    Nickname: string;
    YearFounded: number;
    YearActiveTill: number;
}

export interface SocialSite {
    AccountType: string;
    WebSite_Link: string;
}

export interface Championship {
    YearAwarded: number;
    OppositeTeam: string;
}

export interface ConferenceTitle {
    YearAwarded: number;
    OppositeTeam?: any;
}

export interface DivitionalTitle {
    YearAwarded: number;
    OppositeTeam?: any;
}

export interface Award {
    Championships: Championship[];
    ConferenceTitles: ConferenceTitle[];
    DivitionalTitles: DivitionalTitle[];
}

export interface HallOfFameInductee {
    PlayerID: number;
    Player: string;
    Position: string;
    Jersey?: any;
    SeasonsWithTeam: string;
    Year: number;
}

export interface RetiredMember {
    PlayerID?: number;
    Player: string;
    Position: string;
    Jersey: string;
    SeasonsWithTeam: string;
    Year?: number;
}

export interface TeamDetail {
    Details: Detail[];
    History: History[];
    SocialSites: SocialSite[];
    Awards: Award[];
    HallOfFameInductees: HallOfFameInductee[];
    RetiredMembers: RetiredMember[];
}

export interface TeamDetailResponse {
    TeamDetails: TeamDetail[];
}

// Player Bio

export interface Bio {
    id: string;
    type: string;
    display_name: string;
    professional: string;
    college: string;
    highschool: string;
    twitter: string;
    other_label: string;
    other_text: string;
}

export interface RootObject {
    Bio: Bio;
}
