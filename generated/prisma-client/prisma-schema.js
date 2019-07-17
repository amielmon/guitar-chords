module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChord {
  count: Int!
}

type AggregateFingering {
  count: Int!
}

type AggregateFretting {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chord {
  id: ID!
  rootNote: Note!
  chordSymbol: ChordSymbol!
  intervals: [Interval!]!
  fingerings(where: FingeringWhereInput, orderBy: FingeringOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fingering!]
}

type ChordConnection {
  pageInfo: PageInfo!
  edges: [ChordEdge]!
  aggregate: AggregateChord!
}

input ChordCreateInput {
  id: ID
  rootNote: Note!
  chordSymbol: ChordSymbol!
  intervals: ChordCreateintervalsInput
  fingerings: FingeringCreateManyInput
}

input ChordCreateintervalsInput {
  set: [Interval!]
}

type ChordEdge {
  node: Chord!
  cursor: String!
}

enum ChordOrderByInput {
  id_ASC
  id_DESC
  rootNote_ASC
  rootNote_DESC
  chordSymbol_ASC
  chordSymbol_DESC
}

type ChordPreviousValues {
  id: ID!
  rootNote: Note!
  chordSymbol: ChordSymbol!
  intervals: [Interval!]!
}

type ChordSubscriptionPayload {
  mutation: MutationType!
  node: Chord
  updatedFields: [String!]
  previousValues: ChordPreviousValues
}

input ChordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChordWhereInput
  AND: [ChordSubscriptionWhereInput!]
  OR: [ChordSubscriptionWhereInput!]
  NOT: [ChordSubscriptionWhereInput!]
}

enum ChordSymbol {
  Maj
  Maj6
  Maj7
  Maj9
  Min
  Min6
  Min7
  Min9
  Dom7
  Sus2
  Sus4
  Dim
}

input ChordUpdateInput {
  rootNote: Note
  chordSymbol: ChordSymbol
  intervals: ChordUpdateintervalsInput
  fingerings: FingeringUpdateManyInput
}

input ChordUpdateintervalsInput {
  set: [Interval!]
}

input ChordUpdateManyMutationInput {
  rootNote: Note
  chordSymbol: ChordSymbol
  intervals: ChordUpdateintervalsInput
}

input ChordWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rootNote: Note
  rootNote_not: Note
  rootNote_in: [Note!]
  rootNote_not_in: [Note!]
  chordSymbol: ChordSymbol
  chordSymbol_not: ChordSymbol
  chordSymbol_in: [ChordSymbol!]
  chordSymbol_not_in: [ChordSymbol!]
  fingerings_every: FingeringWhereInput
  fingerings_some: FingeringWhereInput
  fingerings_none: FingeringWhereInput
  AND: [ChordWhereInput!]
  OR: [ChordWhereInput!]
  NOT: [ChordWhereInput!]
}

input ChordWhereUniqueInput {
  id: ID
}

type Fingering {
  id: ID!
  fingering(where: FrettingWhereInput, orderBy: FrettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fretting!]
}

type FingeringConnection {
  pageInfo: PageInfo!
  edges: [FingeringEdge]!
  aggregate: AggregateFingering!
}

input FingeringCreateInput {
  id: ID
  fingering: FrettingCreateManyInput
}

input FingeringCreateManyInput {
  create: [FingeringCreateInput!]
  connect: [FingeringWhereUniqueInput!]
}

type FingeringEdge {
  node: Fingering!
  cursor: String!
}

enum FingeringOrderByInput {
  id_ASC
  id_DESC
}

type FingeringPreviousValues {
  id: ID!
}

input FingeringScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [FingeringScalarWhereInput!]
  OR: [FingeringScalarWhereInput!]
  NOT: [FingeringScalarWhereInput!]
}

type FingeringSubscriptionPayload {
  mutation: MutationType!
  node: Fingering
  updatedFields: [String!]
  previousValues: FingeringPreviousValues
}

input FingeringSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FingeringWhereInput
  AND: [FingeringSubscriptionWhereInput!]
  OR: [FingeringSubscriptionWhereInput!]
  NOT: [FingeringSubscriptionWhereInput!]
}

input FingeringUpdateDataInput {
  fingering: FrettingUpdateManyInput
}

input FingeringUpdateInput {
  fingering: FrettingUpdateManyInput
}

input FingeringUpdateManyInput {
  create: [FingeringCreateInput!]
  update: [FingeringUpdateWithWhereUniqueNestedInput!]
  upsert: [FingeringUpsertWithWhereUniqueNestedInput!]
  delete: [FingeringWhereUniqueInput!]
  connect: [FingeringWhereUniqueInput!]
  set: [FingeringWhereUniqueInput!]
  disconnect: [FingeringWhereUniqueInput!]
  deleteMany: [FingeringScalarWhereInput!]
}

input FingeringUpdateWithWhereUniqueNestedInput {
  where: FingeringWhereUniqueInput!
  data: FingeringUpdateDataInput!
}

input FingeringUpsertWithWhereUniqueNestedInput {
  where: FingeringWhereUniqueInput!
  update: FingeringUpdateDataInput!
  create: FingeringCreateInput!
}

input FingeringWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fingering_every: FrettingWhereInput
  fingering_some: FrettingWhereInput
  fingering_none: FrettingWhereInput
  AND: [FingeringWhereInput!]
  OR: [FingeringWhereInput!]
  NOT: [FingeringWhereInput!]
}

input FingeringWhereUniqueInput {
  id: ID
}

enum Fret {
  ONE
  TWO
  THREE
  FOUR
  FIVE
  SIX
  SEVEN
  EIGHT
  NINE
  TEN
  ELEVEN
  TWELVE
  THIRTEEN
  FOURTEEN
  FIFTEEN
  SIXTEEN
  SEVENTEEN
  EIGHTEEN
  NINETEEN
  TWENTY
  TWENTYONE
  TWENTYTWO
  TWENTYTHREE
  TWENTYFOUR
}

type Fretting {
  id: ID!
  fret: Fret!
  note: Note!
}

type FrettingConnection {
  pageInfo: PageInfo!
  edges: [FrettingEdge]!
  aggregate: AggregateFretting!
}

input FrettingCreateInput {
  id: ID
  fret: Fret!
  note: Note!
}

input FrettingCreateManyInput {
  create: [FrettingCreateInput!]
  connect: [FrettingWhereUniqueInput!]
}

type FrettingEdge {
  node: Fretting!
  cursor: String!
}

enum FrettingOrderByInput {
  id_ASC
  id_DESC
  fret_ASC
  fret_DESC
  note_ASC
  note_DESC
}

type FrettingPreviousValues {
  id: ID!
  fret: Fret!
  note: Note!
}

input FrettingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fret: Fret
  fret_not: Fret
  fret_in: [Fret!]
  fret_not_in: [Fret!]
  note: Note
  note_not: Note
  note_in: [Note!]
  note_not_in: [Note!]
  AND: [FrettingScalarWhereInput!]
  OR: [FrettingScalarWhereInput!]
  NOT: [FrettingScalarWhereInput!]
}

type FrettingSubscriptionPayload {
  mutation: MutationType!
  node: Fretting
  updatedFields: [String!]
  previousValues: FrettingPreviousValues
}

input FrettingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FrettingWhereInput
  AND: [FrettingSubscriptionWhereInput!]
  OR: [FrettingSubscriptionWhereInput!]
  NOT: [FrettingSubscriptionWhereInput!]
}

input FrettingUpdateDataInput {
  fret: Fret
  note: Note
}

input FrettingUpdateInput {
  fret: Fret
  note: Note
}

input FrettingUpdateManyDataInput {
  fret: Fret
  note: Note
}

input FrettingUpdateManyInput {
  create: [FrettingCreateInput!]
  update: [FrettingUpdateWithWhereUniqueNestedInput!]
  upsert: [FrettingUpsertWithWhereUniqueNestedInput!]
  delete: [FrettingWhereUniqueInput!]
  connect: [FrettingWhereUniqueInput!]
  set: [FrettingWhereUniqueInput!]
  disconnect: [FrettingWhereUniqueInput!]
  deleteMany: [FrettingScalarWhereInput!]
  updateMany: [FrettingUpdateManyWithWhereNestedInput!]
}

input FrettingUpdateManyMutationInput {
  fret: Fret
  note: Note
}

input FrettingUpdateManyWithWhereNestedInput {
  where: FrettingScalarWhereInput!
  data: FrettingUpdateManyDataInput!
}

input FrettingUpdateWithWhereUniqueNestedInput {
  where: FrettingWhereUniqueInput!
  data: FrettingUpdateDataInput!
}

input FrettingUpsertWithWhereUniqueNestedInput {
  where: FrettingWhereUniqueInput!
  update: FrettingUpdateDataInput!
  create: FrettingCreateInput!
}

input FrettingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fret: Fret
  fret_not: Fret
  fret_in: [Fret!]
  fret_not_in: [Fret!]
  note: Note
  note_not: Note
  note_in: [Note!]
  note_not_in: [Note!]
  AND: [FrettingWhereInput!]
  OR: [FrettingWhereInput!]
  NOT: [FrettingWhereInput!]
}

input FrettingWhereUniqueInput {
  id: ID
}

enum Interval {
  ONE
  TWO
  THREE
  FOUR
  FIVE
  SIX
  SEVEN
  EIGHT
}

scalar Long

type Mutation {
  createChord(data: ChordCreateInput!): Chord!
  updateChord(data: ChordUpdateInput!, where: ChordWhereUniqueInput!): Chord
  updateManyChords(data: ChordUpdateManyMutationInput!, where: ChordWhereInput): BatchPayload!
  upsertChord(where: ChordWhereUniqueInput!, create: ChordCreateInput!, update: ChordUpdateInput!): Chord!
  deleteChord(where: ChordWhereUniqueInput!): Chord
  deleteManyChords(where: ChordWhereInput): BatchPayload!
  createFingering(data: FingeringCreateInput!): Fingering!
  updateFingering(data: FingeringUpdateInput!, where: FingeringWhereUniqueInput!): Fingering
  upsertFingering(where: FingeringWhereUniqueInput!, create: FingeringCreateInput!, update: FingeringUpdateInput!): Fingering!
  deleteFingering(where: FingeringWhereUniqueInput!): Fingering
  deleteManyFingerings(where: FingeringWhereInput): BatchPayload!
  createFretting(data: FrettingCreateInput!): Fretting!
  updateFretting(data: FrettingUpdateInput!, where: FrettingWhereUniqueInput!): Fretting
  updateManyFrettings(data: FrettingUpdateManyMutationInput!, where: FrettingWhereInput): BatchPayload!
  upsertFretting(where: FrettingWhereUniqueInput!, create: FrettingCreateInput!, update: FrettingUpdateInput!): Fretting!
  deleteFretting(where: FrettingWhereUniqueInput!): Fretting
  deleteManyFrettings(where: FrettingWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

enum Note {
  A
  A_SHARP__B_FLAT
  B
  C
  C_SHARP__D_FLAT
  D
  D_SHARP__E_FLAT
  E
  F
  F_SHARP__G_FLAT
  G
  G_SHARP__A_FLAT
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  chord(where: ChordWhereUniqueInput!): Chord
  chords(where: ChordWhereInput, orderBy: ChordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chord]!
  chordsConnection(where: ChordWhereInput, orderBy: ChordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChordConnection!
  fingering(where: FingeringWhereUniqueInput!): Fingering
  fingerings(where: FingeringWhereInput, orderBy: FingeringOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fingering]!
  fingeringsConnection(where: FingeringWhereInput, orderBy: FingeringOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FingeringConnection!
  fretting(where: FrettingWhereUniqueInput!): Fretting
  frettings(where: FrettingWhereInput, orderBy: FrettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fretting]!
  frettingsConnection(where: FrettingWhereInput, orderBy: FrettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FrettingConnection!
  node(id: ID!): Node
}

type Subscription {
  chord(where: ChordSubscriptionWhereInput): ChordSubscriptionPayload
  fingering(where: FingeringSubscriptionWhereInput): FingeringSubscriptionPayload
  fretting(where: FrettingSubscriptionWhereInput): FrettingSubscriptionPayload
}
`
      }
    