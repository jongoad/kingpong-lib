export enum GameEvents {
  /** Client sent events */
  SendGameInvite = "sendGameInvite",
  JoinGameQueue = "joinGameQueue",
  LeaveGameQueue = "leaveGameQueue",
  PlayerReady = "playerReady",
  ClientGameStateUpdate = "clientGameStateUpdate",
  /** Server sent events */
  GameStarted = "gameStarted",
  GameEnded = "gameEnded",
  LobbyCreated = "lobbyCreated",
  ServerGameStateUpdate = "serverGameStateUpdate",
}

export class GameState {
    ball_x: number;
    ball_y: number;
    paddle_left_y: number;
    paddle_right_y: number;
    score_left: number;
    score_right: number;
}

export class JoinGameInviteRequest {
  opponent_username: string;
}

export class JoinGameQueueRequest {
  username: string;
  join_time: string;
}

export class LeaveGameQueueRequest {
  username: string;
}

export class PlayerReadyRequest {
  match_id: string;
  lobby_id: string;
  username: string;
  ready: boolean;
}

export class ClientGameStateUpdateRequest {
  match_id: string;
  lobby_id: string;
  username: string;
  paddle_position: number;
}

export class ServerGameStateUpdateEvent {
  game_state: GameState;
}

export class GameStartedEvent {
  match_id: string;
  lobby_id: string;
  game_state: GameState;
}

export class GameEndedEvent {
  match_id: string;
  lobby_id: string;
  game_state: GameState;
}

export class LobbyCreatedEvent {
  lobby_id: string;
  opponent_username: string;
  player_side: string;
}
