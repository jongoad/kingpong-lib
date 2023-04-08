
export enum ProfileEvents {
  GetProfile = "GetProfileRequest",
  GetMatchHistory = "getMatchHistoryRequest",
  GetFriends = "getFriendsRequest",
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

/** Request for Profile of user of username */
export class GetProfileRequest {
  username: string;
}

/** Fetch match history of specified user */
export class GetMatchHistoryRequest {
  username: string;
  number_of_items: number;
}

/** Item in a users match history */
export class MatchHistoryItem {
  game_type: string;
  player1: string;
  player2: string;
  score_player1: number;
  score_player2: number;
  date: string;
}

/** Request for friends of username */
export class GetFriendsRequest {
  username: string;
}

/**  */
export class UpdateProfileRequest {
	username: number;
}
