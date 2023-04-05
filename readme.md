
# Event Naming
Event names are defined in an enum at the top of their respective `.events.ts` file. ex. `ProfileEvents`

## Request
User sent queries. ex. `GetProfileRequest`

## Prisma Type
Intermediate composite type from database tables, used in interservice communication. ex `MessagePrismaType`

## Entities
Request return types. ex. `ProfileEntity`

## Items
For objects that are transported in an array, their single type is an item. ex. `MatchHistoryItem`

## Events
Server sent messages. ex. `NewMessageEvent`
