/** Fetch match history of specified user */
export class FetchMatchHistoryEvent {
  id: number;
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

/**  */
export class Profile {}
