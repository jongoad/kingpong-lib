
export enum ProfileEvents {
  GetProfile = "GetProfileRequest",
  GetMatchHistory = "getMatchHistoryRequest",
  UpdateProfile = "updateProfileRequest"
}

/** User online status */
export enum UserStatus {
  ONLINE,
  OFFLINE,
  AWAY
}

/** Basic Profile information */
export class ProfileEntity {
  username: string;
  avatar: string;
  status: UserStatus;
  createdAt: string;
}

/** Request for Profile of user of id */
export class GetProfileRequest {
  id: string;
}

/** Fetch match history of specified user */
export class GetMatchHistoryRequest {
  id: string;
  number_of_items: number;
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
export class MatchHistoryEntity {
  matches: MatchHistoryItem[];
}

/**  */
export class UpdateProfileRequest {
	id: number;
}
