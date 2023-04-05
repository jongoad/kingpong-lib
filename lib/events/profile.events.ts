/** User online status */
export enum UserStatus {
  ONLINE,
  OFFLINE,
  AWAY
}

/** Basic Profile information */
export class Profile {
  username: string;
  avatar: string;
  status: UserStatus;
  createdAt: string;
}

/** Request for Profile of user of id */
export class FetchProfileEvent {
  id: string;
}

/** Reply containing Profile of requested user */
export class FetchProfileReply {
  profile: Profile;
}

/** Fetch match history of specified user */
export class FetchMatchHistoryEvent {
  id: string;
}

/** Item in a users match history */
export class MatchHistoryItem {
  match_type: string;
  players: string;
  results: string;
  date: string;
  winner: boolean;
}

/** Array of MatchHistoryItem*/
export class FetchMatchHistoryReply {
  matches: MatchHistoryItem[];
}

/**  */
export class CreateProfileEvent {}

/** */
export class CreateProfileReply {}

/**  */
export class UpdateProfileEvent {
	id: number;
}

/**  */
export class UpdateProfileReply {}
