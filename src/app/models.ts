// Nba Teams

export interface SeasonMeta {
    calendar_date: number;
    season_year: number;
    stats_season_year: number;
    stats_season_id: number;
    stats_season_stage: number;
    roster_season_year: number;
    schedule_season_year: number;
    standings_season_year: number;
    season_id: number;
    display_year: string;
    display_season: string;
    season_stage: number;
}

export interface Next {
    url: string;
}

export interface SportsMeta {
    date_time: string;
    season_meta: SeasonMeta;
    next: Next;
}

export interface Team {
    is_nba_team: boolean;
    team_name: string;
    team_nickname: string;
    team_code: string;
    team_abbrev: string;
    city: string;
    state: string;
    team_short_name: string;
    team_id: number;
    conference: string;
    division_id: string;
}

export interface Teams {
    season_year: number;
    team: Team[];
}

export interface SportsContent {
    sports_meta: SportsMeta;
    teams: Teams;
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

// Team Roster

export interface Internal {
    pubDateTime: string;
    xslt: string;
    eventName: string;
}

export interface Draft {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface AllPlayers {
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
    standard: AllPlayers[];
}

export interface AllPlayersRoot {
    _internal: Internal;
    league: League;
}

// Player Profile

export interface Latest {
    seasonYear: number;
    seasonStageId: number;
    ppg: string;
    rpg: string;
    apg: string;
    mpg: string;
    topg: string;
    spg: string;
    bpg: string;
    tpp: string;
    ftp: string;
    fgp: string;
    assists: string;
    blocks: string;
    steals: string;
    turnovers: string;
    offReb: string;
    defReb: string;
    totReb: string;
    fgm: string;
    fga: string;
    tpm: string;
    tpa: string;
    ftm: string;
    fta: string;
    pFouls: string;
    points: string;
    gamesPlayed: string;
    gamesStarted: string;
    plusMinus: string;
    min: string;
    dd2: string;
    td3: string;
}

export interface CareerSummary {
    tpp: string;
    ftp: string;
    fgp: string;
    ppg: string;
    rpg: string;
    apg: string;
    bpg: string;
    mpg: string;
    spg: string;
    assists: string;
    blocks: string;
    steals: string;
    turnovers: string;
    offReb: string;
    defReb: string;
    totReb: string;
    fgm: string;
    fga: string;
    tpm: string;
    tpa: string;
    ftm: string;
    fta: string;
    pFouls: string;
    points: string;
    gamesPlayed: string;
    gamesStarted: string;
    plusMinus: string;
    min: string;
    dd2: string;
    td3: string;
}

export interface Team {
    teamId: string;
    ppg: string;
    rpg: string;
    apg: string;
    mpg: string;
    topg: string;
    spg: string;
    bpg: string;
    tpp: string;
    ftp: string;
    fgp: string;
    assists: string;
    blocks: string;
    steals: string;
    turnovers: string;
    offReb: string;
    defReb: string;
    totReb: string;
    fgm: string;
    fga: string;
    tpm: string;
    tpa: string;
    ftm: string;
    fta: string;
    pFouls: string;
    points: string;
    gamesPlayed: string;
    gamesStarted: string;
    plusMinus: string;
    min: string;
    dd2: string;
    td3: string;
}

export interface Total {
    ppg: string;
    rpg: string;
    apg: string;
    mpg: string;
    topg: string;
    spg: string;
    bpg: string;
    tpp: string;
    ftp: string;
    fgp: string;
    assists: string;
    blocks: string;
    steals: string;
    turnovers: string;
    offReb: string;
    defReb: string;
    totReb: string;
    fgm: string;
    fga: string;
    tpm: string;
    tpa: string;
    ftm: string;
    fta: string;
    pFouls: string;
    points: string;
    gamesPlayed: string;
    gamesStarted: string;
    plusMinus: string;
    min: string;
    dd2: string;
    td3: string;
}

export interface Season {
    seasonYear: number;
    teams: Team[];
    total: Total;
}

export interface RegularSeason {
    season: Season[];
}

export interface Stats {
    latest: Latest;
    careerSummary: CareerSummary;
    regularSeason: RegularSeason;
}

export interface Standard {
    teamId: string;
    stats: Stats;
}

export interface League {
    standard: AllPlayers[];
}

export interface RootObject {
    _internal: Internal;
    league: League;
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
