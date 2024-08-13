/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  date: { input: any; output: any };
  float8: { input: any; output: any };
  json: { input: any; output: any };
  name: { input: any; output: any };
  time: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

export type AccountBalanceResponse = {
  __typename?: "AccountBalanceResponse";
  availableBalance?: Maybe<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
};

export type Address = {
  __typename?: "Address";
  location?: Maybe<GeoCoords>;
  placeId?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type BasicUserInfoResponse = {
  __typename?: "BasicUserInfoResponse";
  birthdate?: Maybe<Scalars["String"]["output"]>;
  family_name?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  given_name?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _eq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _gt?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _gte?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _in?: InputMaybe<Array<Array<Scalars["Boolean"]["input"]>>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _lte?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _neq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _nin?: InputMaybe<Array<Array<Scalars["Boolean"]["input"]>>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type CreateAccessTokenResponse = {
  __typename?: "CreateAccessTokenResponse";
  expires_in?: Maybe<Scalars["Int"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type DirectionLeg = {
  __typename?: "DirectionLeg";
  distance?: Maybe<LegDistance>;
  duration?: Maybe<LegDuration>;
};

export type DirectionRoute = {
  __typename?: "DirectionRoute";
  legs?: Maybe<Array<Maybe<DirectionLeg>>>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Directions = {
  __typename?: "Directions";
  endLocation?: Maybe<GeoCoords>;
  routes?: Maybe<DirectionRoute>;
  startLocation?: Maybe<GeoCoords>;
};

export type GeoCoords = {
  __typename?: "GeoCoords";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

export type InsertBusinessOrderAddressesAggregateBoolExp = {
  avg?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpAvg>;
  corr?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpCorr>;
  count?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpCount>;
  covar_samp?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpCovarSamp>;
  max?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpMax>;
  min?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpSum>;
  var_samp?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExpVarSamp>;
};

export type InsertBusinessOrderAddressesAggregateBoolExpAvg = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpCorr = {
  arguments: InsertBusinessOrderAddressesAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpCorrArguments = {
  X: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns;
  Y: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns;
};

export type InsertBusinessOrderAddressesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderAddressesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpCovarSamp = {
  arguments: InsertBusinessOrderAddressesAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpCovarSampArguments = {
  X: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns;
  Y: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns;
};

export type InsertBusinessOrderAddressesAggregateBoolExpMax = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpMin = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpStddevSamp = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpSum = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesAggregateBoolExpVarSamp = {
  arguments: InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  predicate: InsertBusinessOrderFloat8ComparisonExp;
};

export type InsertBusinessOrderAddressesArrRelInsertInput = {
  data: Array<InsertBusinessOrderAddressesInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderAddressesOnConflict>;
};

export type InsertBusinessOrderAddressesBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderAddressesBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderAddressesBoolExp>>;
  business?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  business_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  city?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  latitude?: InputMaybe<InsertBusinessOrderFloat8ComparisonExp>;
  longitude?: InputMaybe<InsertBusinessOrderFloat8ComparisonExp>;
  street_address?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  updated_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
};

export enum InsertBusinessOrderAddressesConstraint {
  /** unique or primary key constraint on columns "id" */
  AddressesPkey = "addresses_pkey",
}

export type InsertBusinessOrderAddressesInsertInput = {
  business?: InputMaybe<InsertBusinessOrderBusinessObjRelInsertInput>;
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
  street_address?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type InsertBusinessOrderAddressesOnConflict = {
  constraint: InsertBusinessOrderAddressesConstraint;
  update_columns: Array<InsertBusinessOrderAddressesUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
};

export enum InsertBusinessOrderAddressesSelectColumn {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesSelectColumnAddressesAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum InsertBusinessOrderAddressesUpdateColumn {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertBusinessOrderAgentBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderAgentBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderAgentBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderAgentBoolExp>>;
  active?: InputMaybe<InsertBusinessOrderBooleanComparisonExp>;
  agent_type?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  on_duty?: InputMaybe<InsertBusinessOrderBooleanComparisonExp>;
};

export enum InsertBusinessOrderAgentConstraint {
  /** unique or primary key constraint on columns "id" */
  AgentPkey = "agent_pkey",
}

export type InsertBusinessOrderAgentInsertInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  agent_type?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  on_duty?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InsertBusinessOrderAgentObjRelInsertInput = {
  data: InsertBusinessOrderAgentInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderAgentOnConflict>;
};

export type InsertBusinessOrderAgentOnConflict = {
  constraint: InsertBusinessOrderAgentConstraint;
  update_columns: Array<InsertBusinessOrderAgentUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderAgentBoolExp>;
};

export enum InsertBusinessOrderAgentUpdateColumn {
  /** column name */
  Active = "active",
  /** column name */
  AgentType = "agent_type",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OnDuty = "on_duty",
}

export type InsertBusinessOrderBooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type InsertBusinessOrderBusinessAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderBusinessAggregateBoolExpCount>;
};

export type InsertBusinessOrderBusinessAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderBusinessSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderBusinessArrRelInsertInput = {
  data: Array<InsertBusinessOrderBusinessInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderBusinessOnConflict>;
};

export type InsertBusinessOrderBusinessBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderBusinessBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderBusinessBoolExp>>;
  addresses?: InputMaybe<InsertBusinessOrderAddressesBoolExp>;
  addresses_aggregate?: InputMaybe<InsertBusinessOrderAddressesAggregateBoolExp>;
  agent?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
  business_type?: InputMaybe<InsertBusinessOrderBusinessTypeBoolExp>;
  contactEmail?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  contactName?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  description?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  orders?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  orders_aggregate?: InputMaybe<InsertBusinessOrderOrdersAggregateBoolExp>;
  owner?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
  owner_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  phoneNumber?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  registeration_channel_type?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeBoolExp>;
  registered_by?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  registration_channel?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeEnumComparisonExp>;
  type?: InputMaybe<InsertBusinessOrderBusinessTypeEnumComparisonExp>;
  updated_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
};

export enum InsertBusinessOrderBusinessConstraint {
  /** unique or primary key constraint on columns "id" */
  BusinessPkey = "business_pkey",
}

export type InsertBusinessOrderBusinessInsertInput = {
  addresses?: InputMaybe<InsertBusinessOrderAddressesArrRelInsertInput>;
  agent?: InputMaybe<InsertBusinessOrderUsersObjRelInsertInput>;
  business_type?: InputMaybe<InsertBusinessOrderBusinessTypeObjRelInsertInput>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orders?: InputMaybe<InsertBusinessOrderOrdersArrRelInsertInput>;
  owner?: InputMaybe<InsertBusinessOrderUsersObjRelInsertInput>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  registeration_channel_type?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeObjRelInsertInput>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeEnum>;
  type?: InputMaybe<InsertBusinessOrderBusinessTypeEnum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type InsertBusinessOrderBusinessObjRelInsertInput = {
  data: InsertBusinessOrderBusinessInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderBusinessOnConflict>;
};

export type InsertBusinessOrderBusinessOnConflict = {
  constraint: InsertBusinessOrderBusinessConstraint;
  update_columns: Array<InsertBusinessOrderBusinessUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
};

export enum InsertBusinessOrderBusinessSelectColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertBusinessOrderBusinessTypeBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderBusinessTypeBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderBusinessTypeBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderBusinessTypeBoolExp>>;
  businesses?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  businesses_aggregate?: InputMaybe<InsertBusinessOrderBusinessAggregateBoolExp>;
  type?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export enum InsertBusinessOrderBusinessTypeConstraint {
  /** unique or primary key constraint on columns "type" */
  BusinessTypePkey = "business_type_pkey",
}

export enum InsertBusinessOrderBusinessTypeEnum {
  Bar = "bar",
  Hotel = "hotel",
  Restaurant = "restaurant",
}

export type InsertBusinessOrderBusinessTypeEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderBusinessTypeEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderBusinessTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderBusinessTypeEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderBusinessTypeEnum>>;
};

export type InsertBusinessOrderBusinessTypeInsertInput = {
  businesses?: InputMaybe<InsertBusinessOrderBusinessArrRelInsertInput>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderBusinessTypeObjRelInsertInput = {
  data: InsertBusinessOrderBusinessTypeInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderBusinessTypeOnConflict>;
};

export type InsertBusinessOrderBusinessTypeOnConflict = {
  constraint: InsertBusinessOrderBusinessTypeConstraint;
  update_columns: Array<InsertBusinessOrderBusinessTypeUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderBusinessTypeBoolExp>;
};

export enum InsertBusinessOrderBusinessTypeUpdateColumn {
  /** column name */
  Type = "type",
}

export enum InsertBusinessOrderBusinessUpdateColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertBusinessOrderCourierRidesAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderCourierRidesAggregateBoolExpCount>;
};

export type InsertBusinessOrderCourierRidesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderCourierRidesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderCourierRidesArrRelInsertInput = {
  data: Array<InsertBusinessOrderCourierRidesInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderCourierRidesOnConflict>;
};

export type InsertBusinessOrderCourierRidesBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderCourierRidesBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderCourierRidesBoolExp>>;
  color?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  courier?: InputMaybe<InsertBusinessOrderCouriersBoolExp>;
  courier_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  license_plate_number?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  model?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  ride_status?: InputMaybe<InsertBusinessOrderRideStatusBoolExp>;
  ride_type?: InputMaybe<InsertBusinessOrderRideTypeBoolExp>;
  status?: InputMaybe<InsertBusinessOrderRideStatusEnumComparisonExp>;
  type?: InputMaybe<InsertBusinessOrderRideTypeEnumComparisonExp>;
  updated_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
};

export enum InsertBusinessOrderCourierRidesConstraint {
  /** unique or primary key constraint on columns "id" */
  CourierRidesPkey = "courier_rides_pkey",
}

export type InsertBusinessOrderCourierRidesInsertInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  courier?: InputMaybe<InsertBusinessOrderCouriersObjRelInsertInput>;
  courier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  license_plate_number?: InputMaybe<Scalars["String"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  ride_status?: InputMaybe<InsertBusinessOrderRideStatusObjRelInsertInput>;
  ride_type?: InputMaybe<InsertBusinessOrderRideTypeObjRelInsertInput>;
  status?: InputMaybe<InsertBusinessOrderRideStatusEnum>;
  type?: InputMaybe<InsertBusinessOrderRideTypeEnum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type InsertBusinessOrderCourierRidesOnConflict = {
  constraint: InsertBusinessOrderCourierRidesConstraint;
  update_columns: Array<InsertBusinessOrderCourierRidesUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
};

export enum InsertBusinessOrderCourierRidesSelectColumn {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export enum InsertBusinessOrderCourierRidesUpdateColumn {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertBusinessOrderCouriersBoolExp = {
  DOB?: InputMaybe<InsertBusinessOrderDateComparisonExp>;
  _and?: InputMaybe<Array<InsertBusinessOrderCouriersBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderCouriersBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderCouriersBoolExp>>;
  assigned?: InputMaybe<InsertBusinessOrderBooleanComparisonExp>;
  avatar?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  deliveries?: InputMaybe<InsertBusinessOrderDeliveryBoolExp>;
  deliveries_aggregate?: InputMaybe<InsertBusinessOrderDeliveryAggregateBoolExp>;
  email?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  gender?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  phoneNumber?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  rides?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
  rides_aggregate?: InputMaybe<InsertBusinessOrderCourierRidesAggregateBoolExp>;
};

export enum InsertBusinessOrderCouriersConstraint {
  /** unique or primary key constraint on columns "id" */
  CouriersPkey = "couriers_pkey",
}

export type InsertBusinessOrderCouriersInsertInput = {
  DOB?: InputMaybe<Scalars["date"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deliveries?: InputMaybe<InsertBusinessOrderDeliveryArrRelInsertInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  rides?: InputMaybe<InsertBusinessOrderCourierRidesArrRelInsertInput>;
};

export type InsertBusinessOrderCouriersObjRelInsertInput = {
  data: InsertBusinessOrderCouriersInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderCouriersOnConflict>;
};

export type InsertBusinessOrderCouriersOnConflict = {
  constraint: InsertBusinessOrderCouriersConstraint;
  update_columns: Array<InsertBusinessOrderCouriersUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderCouriersBoolExp>;
};

export enum InsertBusinessOrderCouriersUpdateColumn {
  /** column name */
  Dob = "DOB",
  /** column name */
  Assigned = "assigned",
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
}

export type InsertBusinessOrderDateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

export type InsertBusinessOrderDeliveryAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderDeliveryAggregateBoolExpCount>;
};

export type InsertBusinessOrderDeliveryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderDeliverySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderDeliveryBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderDeliveryArrRelInsertInput = {
  data: Array<InsertBusinessOrderDeliveryInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderDeliveryOnConflict>;
};

export type InsertBusinessOrderDeliveryBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderDeliveryBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderDeliveryBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderDeliveryBoolExp>>;
  courier?: InputMaybe<InsertBusinessOrderCouriersBoolExp>;
  courierId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  order?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  orderId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  status?: InputMaybe<InsertBusinessOrderDeliveryStatusEnumComparisonExp>;
};

export enum InsertBusinessOrderDeliveryConstraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryPkey = "delivery_pkey",
}

export type InsertBusinessOrderDeliveryInsertInput = {
  courier?: InputMaybe<InsertBusinessOrderCouriersObjRelInsertInput>;
  courierId?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<InsertBusinessOrderOrdersObjRelInsertInput>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<InsertBusinessOrderDeliveryStatusEnum>;
};

export type InsertBusinessOrderDeliveryOnConflict = {
  constraint: InsertBusinessOrderDeliveryConstraint;
  update_columns: Array<InsertBusinessOrderDeliveryUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderDeliveryBoolExp>;
};

export enum InsertBusinessOrderDeliverySelectColumn {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

export enum InsertBusinessOrderDeliveryStatusEnum {
  Active = "active",
  Pending = "pending",
}

export type InsertBusinessOrderDeliveryStatusEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderDeliveryStatusEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderDeliveryStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderDeliveryStatusEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderDeliveryStatusEnum>>;
};

export enum InsertBusinessOrderDeliveryUpdateColumn {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

export type InsertBusinessOrderFloat8ComparisonExp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

export type InsertBusinessOrderIntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export enum InsertBusinessOrderOrderFulfillmentTypeEnum {
  Full = "full",
  Partial = "partial",
}

export type InsertBusinessOrderOrderFulfillmentTypeEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderOrderFulfillmentTypeEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderOrderFulfillmentTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderOrderFulfillmentTypeEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderOrderFulfillmentTypeEnum>>;
};

export type InsertBusinessOrderOrderItemAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderOrderItemAggregateBoolExpCount>;
};

export type InsertBusinessOrderOrderItemAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderOrderItemSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderOrderItemBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderOrderItemArrRelInsertInput = {
  data: Array<InsertBusinessOrderOrderItemInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderOrderItemOnConflict>;
};

export type InsertBusinessOrderOrderItemBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderOrderItemBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderOrderItemBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderOrderItemBoolExp>>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  order?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  orderId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  price?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
  product?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  productId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  quantity?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
};

export enum InsertBusinessOrderOrderItemConstraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = "order_items_pkey",
}

export type InsertBusinessOrderOrderItemInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<InsertBusinessOrderOrdersObjRelInsertInput>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  product?: InputMaybe<InsertBusinessOrderProductsObjRelInsertInput>;
  productId?: InputMaybe<Scalars["uuid"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type InsertBusinessOrderOrderItemOnConflict = {
  constraint: InsertBusinessOrderOrderItemConstraint;
  update_columns: Array<InsertBusinessOrderOrderItemUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderOrderItemBoolExp>;
};

export enum InsertBusinessOrderOrderItemSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

export enum InsertBusinessOrderOrderItemUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

export type InsertBusinessOrderOrderStatusBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderOrderStatusBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderOrderStatusBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderOrderStatusBoolExp>>;
  orders?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  orders_aggregate?: InputMaybe<InsertBusinessOrderOrdersAggregateBoolExp>;
  status?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export enum InsertBusinessOrderOrderStatusConstraint {
  /** unique or primary key constraint on columns "status" */
  OrderStatusPkey = "order_status_pkey",
}

export enum InsertBusinessOrderOrderStatusEnum {
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Enroute = "ENROUTE",
  Fulfilled = "FULFILLED",
  Pending = "PENDING",
}

export type InsertBusinessOrderOrderStatusEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderOrderStatusEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderOrderStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderOrderStatusEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderOrderStatusEnum>>;
};

export type InsertBusinessOrderOrderStatusInsertInput = {
  orders?: InputMaybe<InsertBusinessOrderOrdersArrRelInsertInput>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderOrderStatusObjRelInsertInput = {
  data: InsertBusinessOrderOrderStatusInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderOrderStatusOnConflict>;
};

export type InsertBusinessOrderOrderStatusOnConflict = {
  constraint: InsertBusinessOrderOrderStatusConstraint;
  update_columns: Array<InsertBusinessOrderOrderStatusUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderOrderStatusBoolExp>;
};

export enum InsertBusinessOrderOrderStatusUpdateColumn {
  /** column name */
  Status = "status",
}

export type InsertBusinessOrderOrderSupplierAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderOrderSupplierAggregateBoolExpCount>;
};

export type InsertBusinessOrderOrderSupplierAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderOrderSupplierSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderOrderSupplierBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderOrderSupplierArrRelInsertInput = {
  data: Array<InsertBusinessOrderOrderSupplierInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderOrderSupplierOnConflict>;
};

export type InsertBusinessOrderOrderSupplierBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderOrderSupplierBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderOrderSupplierBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderOrderSupplierBoolExp>>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  order?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  order_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersBoolExp>;
  supplierId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
};

export enum InsertBusinessOrderOrderSupplierConstraint {
  /** unique or primary key constraint on columns "id" */
  OrderSupplierPkey = "order_supplier_pkey",
}

export type InsertBusinessOrderOrderSupplierInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<InsertBusinessOrderOrdersObjRelInsertInput>;
  order_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersObjRelInsertInput>;
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type InsertBusinessOrderOrderSupplierOnConflict = {
  constraint: InsertBusinessOrderOrderSupplierConstraint;
  update_columns: Array<InsertBusinessOrderOrderSupplierUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderOrderSupplierBoolExp>;
};

export enum InsertBusinessOrderOrderSupplierSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

export enum InsertBusinessOrderOrderSupplierUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

export type InsertBusinessOrderOrdersAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderOrdersAggregateBoolExpCount>;
};

export type InsertBusinessOrderOrdersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderOrdersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderOrdersArrRelInsertInput = {
  data: Array<InsertBusinessOrderOrdersInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderOrdersOnConflict>;
};

export type InsertBusinessOrderOrdersBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderOrdersBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderOrdersBoolExp>>;
  agent?: InputMaybe<InsertBusinessOrderAgentBoolExp>;
  business?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  customerId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  deliveries?: InputMaybe<InsertBusinessOrderDeliveryBoolExp>;
  deliveries_aggregate?: InputMaybe<InsertBusinessOrderDeliveryAggregateBoolExp>;
  destination?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  fulfillment_type?: InputMaybe<InsertBusinessOrderOrderFulfillmentTypeEnumComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  orderId?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  order_items?: InputMaybe<InsertBusinessOrderOrderItemBoolExp>;
  order_items_aggregate?: InputMaybe<InsertBusinessOrderOrderItemAggregateBoolExp>;
  order_status?: InputMaybe<InsertBusinessOrderOrderStatusBoolExp>;
  order_suppliers?: InputMaybe<InsertBusinessOrderOrderSupplierBoolExp>;
  order_suppliers_aggregate?: InputMaybe<InsertBusinessOrderOrderSupplierAggregateBoolExp>;
  origin?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  processedBy?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  status?: InputMaybe<InsertBusinessOrderOrderStatusEnumComparisonExp>;
};

export enum InsertBusinessOrderOrdersConstraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = "orders_pkey",
}

export type InsertBusinessOrderOrdersInsertInput = {
  agent?: InputMaybe<InsertBusinessOrderAgentObjRelInsertInput>;
  business?: InputMaybe<InsertBusinessOrderBusinessObjRelInsertInput>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  deliveries?: InputMaybe<InsertBusinessOrderDeliveryArrRelInsertInput>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  fulfillment_type?: InputMaybe<InsertBusinessOrderOrderFulfillmentTypeEnum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  order_items?: InputMaybe<InsertBusinessOrderOrderItemArrRelInsertInput>;
  order_status?: InputMaybe<InsertBusinessOrderOrderStatusObjRelInsertInput>;
  order_suppliers?: InputMaybe<InsertBusinessOrderOrderSupplierArrRelInsertInput>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<InsertBusinessOrderOrderStatusEnum>;
};

export type InsertBusinessOrderOrdersObjRelInsertInput = {
  data: InsertBusinessOrderOrdersInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderOrdersOnConflict>;
};

export type InsertBusinessOrderOrdersOnConflict = {
  constraint: InsertBusinessOrderOrdersConstraint;
  update_columns: Array<InsertBusinessOrderOrdersUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderOrdersBoolExp>;
};

export enum InsertBusinessOrderOrdersSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

export enum InsertBusinessOrderOrdersUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

export type InsertBusinessOrderOutput = {
  __typename?: "InsertBusinessOrderOutput";
  order?: Maybe<OrderPayload>;
};

export type InsertBusinessOrderProductsAggregateBoolExp = {
  bool_and?: InputMaybe<InsertBusinessOrderProductsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<InsertBusinessOrderProductsAggregateBoolExpBoolOr>;
  count?: InputMaybe<InsertBusinessOrderProductsAggregateBoolExpCount>;
};

export type InsertBusinessOrderProductsAggregateBoolExpBoolAnd = {
  arguments: InsertBusinessOrderProductsSelectColumnProductsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  predicate: InsertBusinessOrderBooleanComparisonExp;
};

export type InsertBusinessOrderProductsAggregateBoolExpBoolOr = {
  arguments: InsertBusinessOrderProductsSelectColumnProductsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  predicate: InsertBusinessOrderBooleanComparisonExp;
};

export type InsertBusinessOrderProductsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderProductsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderProductsArrRelInsertInput = {
  data: Array<InsertBusinessOrderProductsInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderProductsOnConflict>;
};

export type InsertBusinessOrderProductsBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderProductsBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderProductsBoolExp>>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  description?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  discount?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  inStock?: InputMaybe<InsertBusinessOrderBooleanComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  order_items?: InputMaybe<InsertBusinessOrderOrderItemBoolExp>;
  order_items_aggregate?: InputMaybe<InsertBusinessOrderOrderItemAggregateBoolExp>;
  price?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
  quantity?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersBoolExp>;
  supplier_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
};

export enum InsertBusinessOrderProductsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = "products_pkey",
}

export type InsertBusinessOrderProductsInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_items?: InputMaybe<InsertBusinessOrderOrderItemArrRelInsertInput>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersObjRelInsertInput>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type InsertBusinessOrderProductsObjRelInsertInput = {
  data: InsertBusinessOrderProductsInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderProductsOnConflict>;
};

export type InsertBusinessOrderProductsOnConflict = {
  constraint: InsertBusinessOrderProductsConstraint;
  update_columns: Array<InsertBusinessOrderProductsUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
};

export enum InsertBusinessOrderProductsSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

export enum InsertBusinessOrderProductsSelectColumnProductsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  InStock = "inStock",
}

export enum InsertBusinessOrderProductsSelectColumnProductsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  InStock = "inStock",
}

export enum InsertBusinessOrderProductsUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

export type InsertBusinessOrderRegisterationChannelTypeBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderRegisterationChannelTypeBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderRegisterationChannelTypeBoolExp>>;
  businesses?: InputMaybe<InsertBusinessOrderBusinessBoolExp>;
  businesses_aggregate?: InputMaybe<InsertBusinessOrderBusinessAggregateBoolExp>;
  channel?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export enum InsertBusinessOrderRegisterationChannelTypeConstraint {
  /** unique or primary key constraint on columns "channel" */
  RegisterationChannelPkey = "registeration_channel_pkey",
}

export enum InsertBusinessOrderRegisterationChannelTypeEnum {
  Agent = "AGENT",
  App = "APP",
  Ussd = "USSD",
}

export type InsertBusinessOrderRegisterationChannelTypeEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderRegisterationChannelTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderRegisterationChannelTypeEnum>>;
};

export type InsertBusinessOrderRegisterationChannelTypeInsertInput = {
  businesses?: InputMaybe<InsertBusinessOrderBusinessArrRelInsertInput>;
  channel?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderRegisterationChannelTypeObjRelInsertInput = {
  data: InsertBusinessOrderRegisterationChannelTypeInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeOnConflict>;
};

export type InsertBusinessOrderRegisterationChannelTypeOnConflict = {
  constraint: InsertBusinessOrderRegisterationChannelTypeConstraint;
  update_columns: Array<InsertBusinessOrderRegisterationChannelTypeUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderRegisterationChannelTypeBoolExp>;
};

export enum InsertBusinessOrderRegisterationChannelTypeUpdateColumn {
  /** column name */
  Channel = "channel",
}

export type InsertBusinessOrderRideStatusBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderRideStatusBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderRideStatusBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderRideStatusBoolExp>>;
  courier_rides?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
  courier_rides_aggregate?: InputMaybe<InsertBusinessOrderCourierRidesAggregateBoolExp>;
  status?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export enum InsertBusinessOrderRideStatusConstraint {
  /** unique or primary key constraint on columns "status" */
  RideStatusPkey = "ride_status_pkey",
}

export enum InsertBusinessOrderRideStatusEnum {
  Active = "Active",
  Inactive = "Inactive",
  Maintenance = "Maintenance",
}

export type InsertBusinessOrderRideStatusEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderRideStatusEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderRideStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderRideStatusEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderRideStatusEnum>>;
};

export type InsertBusinessOrderRideStatusInsertInput = {
  courier_rides?: InputMaybe<InsertBusinessOrderCourierRidesArrRelInsertInput>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderRideStatusObjRelInsertInput = {
  data: InsertBusinessOrderRideStatusInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderRideStatusOnConflict>;
};

export type InsertBusinessOrderRideStatusOnConflict = {
  constraint: InsertBusinessOrderRideStatusConstraint;
  update_columns: Array<InsertBusinessOrderRideStatusUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderRideStatusBoolExp>;
};

export enum InsertBusinessOrderRideStatusUpdateColumn {
  /** column name */
  Status = "status",
}

export type InsertBusinessOrderRideTypeBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderRideTypeBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderRideTypeBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderRideTypeBoolExp>>;
  courier_rides?: InputMaybe<InsertBusinessOrderCourierRidesBoolExp>;
  courier_rides_aggregate?: InputMaybe<InsertBusinessOrderCourierRidesAggregateBoolExp>;
  type?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export enum InsertBusinessOrderRideTypeConstraint {
  /** unique or primary key constraint on columns "type" */
  RideTypePkey = "ride_type_pkey",
}

export enum InsertBusinessOrderRideTypeEnum {
  Bike = "Bike",
  Car = "Car",
}

export type InsertBusinessOrderRideTypeEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderRideTypeEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderRideTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderRideTypeEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderRideTypeEnum>>;
};

export type InsertBusinessOrderRideTypeInsertInput = {
  courier_rides?: InputMaybe<InsertBusinessOrderCourierRidesArrRelInsertInput>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderRideTypeObjRelInsertInput = {
  data: InsertBusinessOrderRideTypeInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderRideTypeOnConflict>;
};

export type InsertBusinessOrderRideTypeOnConflict = {
  constraint: InsertBusinessOrderRideTypeConstraint;
  update_columns: Array<InsertBusinessOrderRideTypeUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderRideTypeBoolExp>;
};

export enum InsertBusinessOrderRideTypeUpdateColumn {
  /** column name */
  Type = "type",
}

export type InsertBusinessOrderStringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderSupplierCategoriesEnumBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderSupplierCategoriesEnumBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderSupplierCategoriesEnumBoolExp>>;
  description?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  suppliers_categories?: InputMaybe<InsertBusinessOrderSuppliersCategoriesBoolExp>;
  suppliers_categories_aggregate?: InputMaybe<InsertBusinessOrderSuppliersCategoriesAggregateBoolExp>;
};

export enum InsertBusinessOrderSupplierCategoriesEnumConstraint {
  /** unique or primary key constraint on columns "name" */
  SupplierCategoriesEnumPkey = "supplier_categories_enum_pkey",
}

export enum InsertBusinessOrderSupplierCategoriesEnumEnum {
  /** Tools, seeds, and equipment for farmers, supporting agricultural productivity and local food production. */
  AgriculturalSupplies = "agricultural_supplies",
  /** Cosmetics, skincare products, grooming essentials, and personal care items, supporting local beauty entrepreneurs and promoting self-care. */
  BeautyAndCare = "beauty_and_care",
  /** Apparel, fabrics, and textiles, empowering local tailors and designers, fostering the textile industry */
  ClothingAndTextiles = "clothing_and_textiles",
  /** Essential materials like cement, steel, and bricks for construction projects, fostering infrastructure development. */
  ConstructionMaterials = "construction_materials",
  /** Books, educational tools, and e-learning resources, promoting education and literacy in the community. */
  EducationalMaterials = "educational_materials",
  /** Electronic devices, wiring, and appliances, promoting technological access and local electronic businesses */
  ElectronicsAppliances = "electronics_appliances",
  /** Solar panels, wind turbines, and energy-efficient appliances, promoting sustainable energy use and reducing the carbon footprint. */
  EnergySolutions = "energy_solutions",
  /** Fresh produce, packaged foods, beverages, and culinary supplies, supporting local agriculture and culinary enterprises. */
  FoodAndBeverages = "food_and_beverages",
  /** Medical supplies, safety equipment, and personal protective gear, ensuring the well-being of workers and communities. */
  HealthAndSafety = "health_and_safety",
  /** Furniture, home appliances, decor items, and household essentials, improving living standards and supporting local artisans. */
  HomeAndLiving = "home_and_living",
  /** Stationery, office materials, and supplies, supporting administrative functions of businesses and organizations. */
  OfficeSupplies = "office_supplies",
  /** Vehicles, spare parts, and transportation services, enhancing mobility and logistics for businesses and individuals. */
  TransportationSolutions = "transportation_solutions",
  /** Recycling equipment, waste bins, and eco-friendly products, encouraging responsible waste management practices. */
  WasteAndRecycling = "waste_and_recycling",
  /** Water filters, sanitation kits, and plumbing supplies, ensuring access to clean water and promoting hygiene. */
  WaterAndSanitation = "water_and_sanitation",
}

export type InsertBusinessOrderSupplierCategoriesEnumEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderSupplierCategoriesEnumEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderSupplierCategoriesEnumEnum>>;
};

export type InsertBusinessOrderSupplierCategoriesEnumInsertInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  suppliers_categories?: InputMaybe<InsertBusinessOrderSuppliersCategoriesArrRelInsertInput>;
};

export type InsertBusinessOrderSupplierCategoriesEnumObjRelInsertInput = {
  data: InsertBusinessOrderSupplierCategoriesEnumInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumOnConflict>;
};

export type InsertBusinessOrderSupplierCategoriesEnumOnConflict = {
  constraint: InsertBusinessOrderSupplierCategoriesEnumConstraint;
  update_columns: Array<InsertBusinessOrderSupplierCategoriesEnumUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumBoolExp>;
};

export enum InsertBusinessOrderSupplierCategoriesEnumUpdateColumn {
  /** column name */
  Description = "description",
  /** column name */
  Name = "name",
}

export type InsertBusinessOrderSupplierServiceZoneAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderSupplierServiceZoneAggregateBoolExpCount>;
};

export type InsertBusinessOrderSupplierServiceZoneAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<InsertBusinessOrderSupplierServiceZoneSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderSupplierServiceZoneBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderSupplierServiceZoneArrRelInsertInput = {
  data: Array<InsertBusinessOrderSupplierServiceZoneInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderSupplierServiceZoneOnConflict>;
};

export type InsertBusinessOrderSupplierServiceZoneBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderSupplierServiceZoneBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderSupplierServiceZoneBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderSupplierServiceZoneBoolExp>>;
  coverage_area_radius?: InputMaybe<InsertBusinessOrderIntComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  location_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  supplier_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
};

export enum InsertBusinessOrderSupplierServiceZoneConstraint {
  /** unique or primary key constraint on columns "id" */
  SupplierServiceZonePkey = "supplier_service_zone_pkey",
}

export type InsertBusinessOrderSupplierServiceZoneInsertInput = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  location_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type InsertBusinessOrderSupplierServiceZoneOnConflict = {
  constraint: InsertBusinessOrderSupplierServiceZoneConstraint;
  update_columns: Array<InsertBusinessOrderSupplierServiceZoneUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderSupplierServiceZoneBoolExp>;
};

export enum InsertBusinessOrderSupplierServiceZoneSelectColumn {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum InsertBusinessOrderSupplierServiceZoneUpdateColumn {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

export type InsertBusinessOrderSuppliersBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderSuppliersBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderSuppliersBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderSuppliersBoolExp>>;
  categories?: InputMaybe<InsertBusinessOrderSuppliersCategoriesBoolExp>;
  categories_aggregate?: InputMaybe<InsertBusinessOrderSuppliersCategoriesAggregateBoolExp>;
  contactEmail?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  contactName?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  description?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  order_suppliers?: InputMaybe<InsertBusinessOrderOrderSupplierBoolExp>;
  order_suppliers_aggregate?: InputMaybe<InsertBusinessOrderOrderSupplierAggregateBoolExp>;
  phoneNumber?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  products?: InputMaybe<InsertBusinessOrderProductsBoolExp>;
  products_aggregate?: InputMaybe<InsertBusinessOrderProductsAggregateBoolExp>;
  service_zones?: InputMaybe<InsertBusinessOrderSupplierServiceZoneBoolExp>;
  service_zones_aggregate?: InputMaybe<InsertBusinessOrderSupplierServiceZoneAggregateBoolExp>;
  streetAddress?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  user_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  zone?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
};

export type InsertBusinessOrderSuppliersCategoriesAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderSuppliersCategoriesAggregateBoolExpCount>;
};

export type InsertBusinessOrderSuppliersCategoriesAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<InsertBusinessOrderSuppliersCategoriesSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderSuppliersCategoriesBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderSuppliersCategoriesArrRelInsertInput = {
  data: Array<InsertBusinessOrderSuppliersCategoriesInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderSuppliersCategoriesOnConflict>;
};

export type InsertBusinessOrderSuppliersCategoriesBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderSuppliersCategoriesBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderSuppliersCategoriesBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderSuppliersCategoriesBoolExp>>;
  category_name?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumEnumComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersBoolExp>;
  supplier_categories_enum?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumBoolExp>;
  supplier_id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
};

export enum InsertBusinessOrderSuppliersCategoriesConstraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersCategoriesPkey = "suppliers_categories_pkey",
}

export type InsertBusinessOrderSuppliersCategoriesInsertInput = {
  category_name?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumEnum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<InsertBusinessOrderSuppliersObjRelInsertInput>;
  supplier_categories_enum?: InputMaybe<InsertBusinessOrderSupplierCategoriesEnumObjRelInsertInput>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type InsertBusinessOrderSuppliersCategoriesOnConflict = {
  constraint: InsertBusinessOrderSuppliersCategoriesConstraint;
  update_columns: Array<InsertBusinessOrderSuppliersCategoriesUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderSuppliersCategoriesBoolExp>;
};

export enum InsertBusinessOrderSuppliersCategoriesSelectColumn {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum InsertBusinessOrderSuppliersCategoriesUpdateColumn {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum InsertBusinessOrderSuppliersConstraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersPkey = "suppliers_pkey",
}

export type InsertBusinessOrderSuppliersInsertInput = {
  categories?: InputMaybe<InsertBusinessOrderSuppliersCategoriesArrRelInsertInput>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_suppliers?: InputMaybe<InsertBusinessOrderOrderSupplierArrRelInsertInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<InsertBusinessOrderProductsArrRelInsertInput>;
  service_zones?: InputMaybe<InsertBusinessOrderSupplierServiceZoneArrRelInsertInput>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  zone?: InputMaybe<Scalars["String"]["input"]>;
};

export type InsertBusinessOrderSuppliersObjRelInsertInput = {
  data: InsertBusinessOrderSuppliersInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderSuppliersOnConflict>;
};

export type InsertBusinessOrderSuppliersOnConflict = {
  constraint: InsertBusinessOrderSuppliersConstraint;
  update_columns: Array<InsertBusinessOrderSuppliersUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderSuppliersBoolExp>;
};

export enum InsertBusinessOrderSuppliersUpdateColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  StreetAddress = "streetAddress",
  /** column name */
  UserId = "user_id",
  /** column name */
  Zone = "zone",
}

export type InsertBusinessOrderTimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

export type InsertBusinessOrderUserRoleBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderUserRoleBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderUserRoleBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderUserRoleBoolExp>>;
  role?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  users?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
  users_aggregate?: InputMaybe<InsertBusinessOrderUsersAggregateBoolExp>;
};

export enum InsertBusinessOrderUserRoleConstraint {
  /** unique or primary key constraint on columns "role" */
  UserRolePkey = "user_role_pkey",
}

export enum InsertBusinessOrderUserRoleEnum {
  Admin = "admin",
  Agent = "agent",
  Customer = "customer",
  Supplier = "supplier",
}

export type InsertBusinessOrderUserRoleEnumComparisonExp = {
  _eq?: InputMaybe<InsertBusinessOrderUserRoleEnum>;
  _in?: InputMaybe<Array<InsertBusinessOrderUserRoleEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<InsertBusinessOrderUserRoleEnum>;
  _nin?: InputMaybe<Array<InsertBusinessOrderUserRoleEnum>>;
};

export type InsertBusinessOrderUserRoleInsertInput = {
  role?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<InsertBusinessOrderUsersArrRelInsertInput>;
};

export type InsertBusinessOrderUserRoleObjRelInsertInput = {
  data: InsertBusinessOrderUserRoleInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderUserRoleOnConflict>;
};

export type InsertBusinessOrderUserRoleOnConflict = {
  constraint: InsertBusinessOrderUserRoleConstraint;
  update_columns: Array<InsertBusinessOrderUserRoleUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderUserRoleBoolExp>;
};

export enum InsertBusinessOrderUserRoleUpdateColumn {
  /** column name */
  Role = "role",
}

export type InsertBusinessOrderUsersAggregateBoolExp = {
  count?: InputMaybe<InsertBusinessOrderUsersAggregateBoolExpCount>;
};

export type InsertBusinessOrderUsersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InsertBusinessOrderUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
  predicate: InsertBusinessOrderIntComparisonExp;
};

export type InsertBusinessOrderUsersArrRelInsertInput = {
  data: Array<InsertBusinessOrderUsersInsertInput>;
  on_conflict?: InputMaybe<InsertBusinessOrderUsersOnConflict>;
};

export type InsertBusinessOrderUsersBoolExp = {
  _and?: InputMaybe<Array<InsertBusinessOrderUsersBoolExp>>;
  _not?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
  _or?: InputMaybe<Array<InsertBusinessOrderUsersBoolExp>>;
  created_at?: InputMaybe<InsertBusinessOrderTimestamptzComparisonExp>;
  id?: InputMaybe<InsertBusinessOrderUuidComparisonExp>;
  name?: InputMaybe<InsertBusinessOrderStringComparisonExp>;
  role?: InputMaybe<InsertBusinessOrderUserRoleEnumComparisonExp>;
  user_role?: InputMaybe<InsertBusinessOrderUserRoleBoolExp>;
};

export enum InsertBusinessOrderUsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

export type InsertBusinessOrderUsersInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<InsertBusinessOrderUserRoleEnum>;
  user_role?: InputMaybe<InsertBusinessOrderUserRoleObjRelInsertInput>;
};

export type InsertBusinessOrderUsersObjRelInsertInput = {
  data: InsertBusinessOrderUsersInsertInput;
  on_conflict?: InputMaybe<InsertBusinessOrderUsersOnConflict>;
};

export type InsertBusinessOrderUsersOnConflict = {
  constraint: InsertBusinessOrderUsersConstraint;
  update_columns: Array<InsertBusinessOrderUsersUpdateColumn>;
  where?: InputMaybe<InsertBusinessOrderUsersBoolExp>;
};

export enum InsertBusinessOrderUsersSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export enum InsertBusinessOrderUsersUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export type InsertBusinessOrderUuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LegDistance = {
  __typename?: "LegDistance";
  text?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type LegDuration = {
  __typename?: "LegDuration";
  text?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type LocationByCoords = {
  __typename?: "LocationByCoords";
  location?: Maybe<GeoCoords>;
  placeId?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type OrderItemData = {
  __typename?: "OrderItemData";
  price?: Maybe<Scalars["Int"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
};

export type OrderItems = {
  __typename?: "OrderItems";
  data?: Maybe<Array<Maybe<OrderItemData>>>;
};

export type OrderPayload = {
  __typename?: "OrderPayload";
  customerId?: Maybe<Scalars["String"]["output"]>;
  order_items?: Maybe<OrderItems>;
};

export type PayerInput = {
  partyId: Scalars["String"]["input"];
  partyIdType: Scalars["String"]["input"];
};

export type PaymentStatusResponse = {
  __typename?: "PaymentStatusResponse";
  financialTransactionId?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  referenceId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type Places = {
  __typename?: "Places";
  address?: Maybe<Scalars["String"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type PreApprovalStatusResponse = {
  __typename?: "PreApprovalStatusResponse";
  expirationDateTime?: Maybe<Scalars["String"]["output"]>;
  payer?: Maybe<Scalars["String"]["output"]>;
  payerCurrency?: Maybe<Scalars["String"]["output"]>;
  payerMessage?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type RegisterBusinessActionAddressesAggregateBoolExp = {
  avg?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpAvg>;
  corr?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpCorr>;
  count?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpCount>;
  covar_samp?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpCovarSamp>;
  max?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpMax>;
  min?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpStddevSamp>;
  sum?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpSum>;
  var_samp?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExpVarSamp>;
};

export type RegisterBusinessActionAddressesAggregateBoolExpAvg = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpCorr = {
  arguments: RegisterBusinessActionAddressesAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpCorrArguments = {
  X: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns;
  Y: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns;
};

export type RegisterBusinessActionAddressesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionAddressesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpCovarSamp = {
  arguments: RegisterBusinessActionAddressesAggregateBoolExpCovarSampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpCovarSampArguments =
  {
    X: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns;
    Y: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns;
  };

export type RegisterBusinessActionAddressesAggregateBoolExpMax = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpMin = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpStddevSamp = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpStddevSampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpSum = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesAggregateBoolExpVarSamp = {
  arguments: RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpVarSampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  predicate: RegisterBusinessActionFloat8ComparisonExp;
};

export type RegisterBusinessActionAddressesArrRelInsertInput = {
  data: Array<RegisterBusinessActionAddressesInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionAddressesOnConflict>;
};

export type RegisterBusinessActionAddressesBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionAddressesBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionAddressesBoolExp>>;
  business?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  business_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  city?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  latitude?: InputMaybe<RegisterBusinessActionFloat8ComparisonExp>;
  longitude?: InputMaybe<RegisterBusinessActionFloat8ComparisonExp>;
  street_address?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  updated_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
};

export enum RegisterBusinessActionAddressesConstraint {
  /** unique or primary key constraint on columns "id" */
  AddressesPkey = "addresses_pkey",
}

export type RegisterBusinessActionAddressesInsertInput = {
  business?: InputMaybe<RegisterBusinessActionBusinessObjRelInsertInput>;
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
  street_address?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type RegisterBusinessActionAddressesOnConflict = {
  constraint: RegisterBusinessActionAddressesConstraint;
  update_columns: Array<RegisterBusinessActionAddressesUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
};

export enum RegisterBusinessActionAddressesSelectColumn {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpCovarSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpStddevSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesSelectColumnAddressesAggregateBoolExpVarSampArgumentsColumns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

export enum RegisterBusinessActionAddressesUpdateColumn {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

export type RegisterBusinessActionAgentBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionAgentBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionAgentBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionAgentBoolExp>>;
  active?: InputMaybe<RegisterBusinessActionBooleanComparisonExp>;
  agent_type?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  on_duty?: InputMaybe<RegisterBusinessActionBooleanComparisonExp>;
};

export enum RegisterBusinessActionAgentConstraint {
  /** unique or primary key constraint on columns "id" */
  AgentPkey = "agent_pkey",
}

export type RegisterBusinessActionAgentInsertInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  agent_type?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  on_duty?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type RegisterBusinessActionAgentObjRelInsertInput = {
  data: RegisterBusinessActionAgentInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionAgentOnConflict>;
};

export type RegisterBusinessActionAgentOnConflict = {
  constraint: RegisterBusinessActionAgentConstraint;
  update_columns: Array<RegisterBusinessActionAgentUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionAgentBoolExp>;
};

export enum RegisterBusinessActionAgentUpdateColumn {
  /** column name */
  Active = "active",
  /** column name */
  AgentType = "agent_type",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OnDuty = "on_duty",
}

export type RegisterBusinessActionBooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type RegisterBusinessActionBusinessAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionBusinessAggregateBoolExpCount>;
};

export type RegisterBusinessActionBusinessAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionBusinessSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionBusinessArrRelInsertInput = {
  data: Array<RegisterBusinessActionBusinessInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionBusinessOnConflict>;
};

export type RegisterBusinessActionBusinessBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionBusinessBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionBusinessBoolExp>>;
  addresses?: InputMaybe<RegisterBusinessActionAddressesBoolExp>;
  addresses_aggregate?: InputMaybe<RegisterBusinessActionAddressesAggregateBoolExp>;
  agent?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
  business_type?: InputMaybe<RegisterBusinessActionBusinessTypeBoolExp>;
  contactEmail?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  contactName?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  description?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  orders?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  orders_aggregate?: InputMaybe<RegisterBusinessActionOrdersAggregateBoolExp>;
  owner?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
  owner_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  phoneNumber?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  preferredContactMethod?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  preferredDeliveryMethod?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  registeration_channel_type?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeBoolExp>;
  registered_by?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  registration_channel?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeEnumComparisonExp>;
  type?: InputMaybe<RegisterBusinessActionBusinessTypeEnumComparisonExp>;
  updated_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
};

export enum RegisterBusinessActionBusinessConstraint {
  /** unique or primary key constraint on columns "id" */
  BusinessPkey = "business_pkey",
}

export type RegisterBusinessActionBusinessInsertInput = {
  addresses?: InputMaybe<RegisterBusinessActionAddressesArrRelInsertInput>;
  agent?: InputMaybe<RegisterBusinessActionUsersObjRelInsertInput>;
  business_type?: InputMaybe<RegisterBusinessActionBusinessTypeObjRelInsertInput>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orders?: InputMaybe<RegisterBusinessActionOrdersArrRelInsertInput>;
  owner?: InputMaybe<RegisterBusinessActionUsersObjRelInsertInput>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredDeliveryMethod?: InputMaybe<Scalars["String"]["input"]>;
  registeration_channel_type?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeObjRelInsertInput>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeEnum>;
  type?: InputMaybe<RegisterBusinessActionBusinessTypeEnum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type RegisterBusinessActionBusinessObjRelInsertInput = {
  data: RegisterBusinessActionBusinessInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionBusinessOnConflict>;
};

export type RegisterBusinessActionBusinessOnConflict = {
  constraint: RegisterBusinessActionBusinessConstraint;
  update_columns: Array<RegisterBusinessActionBusinessUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
};

export enum RegisterBusinessActionBusinessSelectColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PreferredContactMethod = "preferredContactMethod",
  /** column name */
  PreferredDeliveryMethod = "preferredDeliveryMethod",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type RegisterBusinessActionBusinessTypeBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionBusinessTypeBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionBusinessTypeBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionBusinessTypeBoolExp>>;
  businesses?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  businesses_aggregate?: InputMaybe<RegisterBusinessActionBusinessAggregateBoolExp>;
  type?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export enum RegisterBusinessActionBusinessTypeConstraint {
  /** unique or primary key constraint on columns "type" */
  BusinessTypePkey = "business_type_pkey",
}

export enum RegisterBusinessActionBusinessTypeEnum {
  Bar = "bar",
  Hotel = "hotel",
  Restaurant = "restaurant",
}

export type RegisterBusinessActionBusinessTypeEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionBusinessTypeEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionBusinessTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionBusinessTypeEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionBusinessTypeEnum>>;
};

export type RegisterBusinessActionBusinessTypeInsertInput = {
  businesses?: InputMaybe<RegisterBusinessActionBusinessArrRelInsertInput>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionBusinessTypeObjRelInsertInput = {
  data: RegisterBusinessActionBusinessTypeInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionBusinessTypeOnConflict>;
};

export type RegisterBusinessActionBusinessTypeOnConflict = {
  constraint: RegisterBusinessActionBusinessTypeConstraint;
  update_columns: Array<RegisterBusinessActionBusinessTypeUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionBusinessTypeBoolExp>;
};

export enum RegisterBusinessActionBusinessTypeUpdateColumn {
  /** column name */
  Type = "type",
}

export enum RegisterBusinessActionBusinessUpdateColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PreferredContactMethod = "preferredContactMethod",
  /** column name */
  PreferredDeliveryMethod = "preferredDeliveryMethod",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type RegisterBusinessActionCourierRidesAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionCourierRidesAggregateBoolExpCount>;
};

export type RegisterBusinessActionCourierRidesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionCourierRidesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionCourierRidesArrRelInsertInput = {
  data: Array<RegisterBusinessActionCourierRidesInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionCourierRidesOnConflict>;
};

export type RegisterBusinessActionCourierRidesBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionCourierRidesBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionCourierRidesBoolExp>>;
  color?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  courier?: InputMaybe<RegisterBusinessActionCouriersBoolExp>;
  courier_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  license_plate_number?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  model?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  ride_status?: InputMaybe<RegisterBusinessActionRideStatusBoolExp>;
  ride_type?: InputMaybe<RegisterBusinessActionRideTypeBoolExp>;
  status?: InputMaybe<RegisterBusinessActionRideStatusEnumComparisonExp>;
  type?: InputMaybe<RegisterBusinessActionRideTypeEnumComparisonExp>;
  updated_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
};

export enum RegisterBusinessActionCourierRidesConstraint {
  /** unique or primary key constraint on columns "id" */
  CourierRidesPkey = "courier_rides_pkey",
}

export type RegisterBusinessActionCourierRidesInsertInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  courier?: InputMaybe<RegisterBusinessActionCouriersObjRelInsertInput>;
  courier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  license_plate_number?: InputMaybe<Scalars["String"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  ride_status?: InputMaybe<RegisterBusinessActionRideStatusObjRelInsertInput>;
  ride_type?: InputMaybe<RegisterBusinessActionRideTypeObjRelInsertInput>;
  status?: InputMaybe<RegisterBusinessActionRideStatusEnum>;
  type?: InputMaybe<RegisterBusinessActionRideTypeEnum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type RegisterBusinessActionCourierRidesOnConflict = {
  constraint: RegisterBusinessActionCourierRidesConstraint;
  update_columns: Array<RegisterBusinessActionCourierRidesUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
};

export enum RegisterBusinessActionCourierRidesSelectColumn {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export enum RegisterBusinessActionCourierRidesUpdateColumn {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type RegisterBusinessActionCouriersBoolExp = {
  DOB?: InputMaybe<RegisterBusinessActionDateComparisonExp>;
  _and?: InputMaybe<Array<RegisterBusinessActionCouriersBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionCouriersBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionCouriersBoolExp>>;
  assigned?: InputMaybe<RegisterBusinessActionBooleanComparisonExp>;
  avatar?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  deliveries?: InputMaybe<RegisterBusinessActionDeliveryBoolExp>;
  deliveries_aggregate?: InputMaybe<RegisterBusinessActionDeliveryAggregateBoolExp>;
  email?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  gender?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  phoneNumber?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  rides?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
  rides_aggregate?: InputMaybe<RegisterBusinessActionCourierRidesAggregateBoolExp>;
};

export enum RegisterBusinessActionCouriersConstraint {
  /** unique or primary key constraint on columns "id" */
  CouriersPkey = "couriers_pkey",
}

export type RegisterBusinessActionCouriersInsertInput = {
  DOB?: InputMaybe<Scalars["date"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deliveries?: InputMaybe<RegisterBusinessActionDeliveryArrRelInsertInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  rides?: InputMaybe<RegisterBusinessActionCourierRidesArrRelInsertInput>;
};

export type RegisterBusinessActionCouriersObjRelInsertInput = {
  data: RegisterBusinessActionCouriersInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionCouriersOnConflict>;
};

export type RegisterBusinessActionCouriersOnConflict = {
  constraint: RegisterBusinessActionCouriersConstraint;
  update_columns: Array<RegisterBusinessActionCouriersUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionCouriersBoolExp>;
};

export enum RegisterBusinessActionCouriersUpdateColumn {
  /** column name */
  Dob = "DOB",
  /** column name */
  Assigned = "assigned",
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
}

export type RegisterBusinessActionDateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

export type RegisterBusinessActionDeliveryAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionDeliveryAggregateBoolExpCount>;
};

export type RegisterBusinessActionDeliveryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionDeliverySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionDeliveryBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionDeliveryArrRelInsertInput = {
  data: Array<RegisterBusinessActionDeliveryInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionDeliveryOnConflict>;
};

export type RegisterBusinessActionDeliveryBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionDeliveryBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionDeliveryBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionDeliveryBoolExp>>;
  courier?: InputMaybe<RegisterBusinessActionCouriersBoolExp>;
  courierId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  order?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  orderId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  status?: InputMaybe<RegisterBusinessActionDeliveryStatusEnumComparisonExp>;
};

export enum RegisterBusinessActionDeliveryConstraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryPkey = "delivery_pkey",
}

export type RegisterBusinessActionDeliveryInsertInput = {
  courier?: InputMaybe<RegisterBusinessActionCouriersObjRelInsertInput>;
  courierId?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<RegisterBusinessActionOrdersObjRelInsertInput>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<RegisterBusinessActionDeliveryStatusEnum>;
};

export type RegisterBusinessActionDeliveryOnConflict = {
  constraint: RegisterBusinessActionDeliveryConstraint;
  update_columns: Array<RegisterBusinessActionDeliveryUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionDeliveryBoolExp>;
};

export enum RegisterBusinessActionDeliverySelectColumn {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

export enum RegisterBusinessActionDeliveryStatusEnum {
  Active = "active",
  Pending = "pending",
}

export type RegisterBusinessActionDeliveryStatusEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionDeliveryStatusEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionDeliveryStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionDeliveryStatusEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionDeliveryStatusEnum>>;
};

export enum RegisterBusinessActionDeliveryUpdateColumn {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

export type RegisterBusinessActionFloat8ComparisonExp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

export type RegisterBusinessActionIntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export enum RegisterBusinessActionOrderFulfillmentTypeEnum {
  Full = "full",
  Partial = "partial",
}

export type RegisterBusinessActionOrderFulfillmentTypeEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionOrderFulfillmentTypeEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionOrderFulfillmentTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionOrderFulfillmentTypeEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionOrderFulfillmentTypeEnum>>;
};

export type RegisterBusinessActionOrderItemAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionOrderItemAggregateBoolExpCount>;
};

export type RegisterBusinessActionOrderItemAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionOrderItemSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionOrderItemBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionOrderItemArrRelInsertInput = {
  data: Array<RegisterBusinessActionOrderItemInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionOrderItemOnConflict>;
};

export type RegisterBusinessActionOrderItemBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionOrderItemBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionOrderItemBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionOrderItemBoolExp>>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  order?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  orderId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  price?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
  product?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  productId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  quantity?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
};

export enum RegisterBusinessActionOrderItemConstraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = "order_items_pkey",
}

export type RegisterBusinessActionOrderItemInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<RegisterBusinessActionOrdersObjRelInsertInput>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  product?: InputMaybe<RegisterBusinessActionProductsObjRelInsertInput>;
  productId?: InputMaybe<Scalars["uuid"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RegisterBusinessActionOrderItemOnConflict = {
  constraint: RegisterBusinessActionOrderItemConstraint;
  update_columns: Array<RegisterBusinessActionOrderItemUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionOrderItemBoolExp>;
};

export enum RegisterBusinessActionOrderItemSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

export enum RegisterBusinessActionOrderItemUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

export type RegisterBusinessActionOrderStatusBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionOrderStatusBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionOrderStatusBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionOrderStatusBoolExp>>;
  orders?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  orders_aggregate?: InputMaybe<RegisterBusinessActionOrdersAggregateBoolExp>;
  status?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export enum RegisterBusinessActionOrderStatusConstraint {
  /** unique or primary key constraint on columns "status" */
  OrderStatusPkey = "order_status_pkey",
}

export enum RegisterBusinessActionOrderStatusEnum {
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Enroute = "ENROUTE",
  Fulfilled = "FULFILLED",
  Pending = "PENDING",
}

export type RegisterBusinessActionOrderStatusEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionOrderStatusEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionOrderStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionOrderStatusEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionOrderStatusEnum>>;
};

export type RegisterBusinessActionOrderStatusInsertInput = {
  orders?: InputMaybe<RegisterBusinessActionOrdersArrRelInsertInput>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionOrderStatusObjRelInsertInput = {
  data: RegisterBusinessActionOrderStatusInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionOrderStatusOnConflict>;
};

export type RegisterBusinessActionOrderStatusOnConflict = {
  constraint: RegisterBusinessActionOrderStatusConstraint;
  update_columns: Array<RegisterBusinessActionOrderStatusUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionOrderStatusBoolExp>;
};

export enum RegisterBusinessActionOrderStatusUpdateColumn {
  /** column name */
  Status = "status",
}

export type RegisterBusinessActionOrderSupplierAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionOrderSupplierAggregateBoolExpCount>;
};

export type RegisterBusinessActionOrderSupplierAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<RegisterBusinessActionOrderSupplierSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionOrderSupplierBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionOrderSupplierArrRelInsertInput = {
  data: Array<RegisterBusinessActionOrderSupplierInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionOrderSupplierOnConflict>;
};

export type RegisterBusinessActionOrderSupplierBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionOrderSupplierBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionOrderSupplierBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionOrderSupplierBoolExp>>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  order?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  order_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersBoolExp>;
  supplierId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
};

export enum RegisterBusinessActionOrderSupplierConstraint {
  /** unique or primary key constraint on columns "id" */
  OrderSupplierPkey = "order_supplier_pkey",
}

export type RegisterBusinessActionOrderSupplierInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<RegisterBusinessActionOrdersObjRelInsertInput>;
  order_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersObjRelInsertInput>;
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type RegisterBusinessActionOrderSupplierOnConflict = {
  constraint: RegisterBusinessActionOrderSupplierConstraint;
  update_columns: Array<RegisterBusinessActionOrderSupplierUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionOrderSupplierBoolExp>;
};

export enum RegisterBusinessActionOrderSupplierSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

export enum RegisterBusinessActionOrderSupplierUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

export type RegisterBusinessActionOrdersAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionOrdersAggregateBoolExpCount>;
};

export type RegisterBusinessActionOrdersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionOrdersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionOrdersArrRelInsertInput = {
  data: Array<RegisterBusinessActionOrdersInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionOrdersOnConflict>;
};

export type RegisterBusinessActionOrdersBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionOrdersBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionOrdersBoolExp>>;
  agent?: InputMaybe<RegisterBusinessActionAgentBoolExp>;
  business?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  customerId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  deliveries?: InputMaybe<RegisterBusinessActionDeliveryBoolExp>;
  deliveries_aggregate?: InputMaybe<RegisterBusinessActionDeliveryAggregateBoolExp>;
  destination?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  fulfillment_type?: InputMaybe<RegisterBusinessActionOrderFulfillmentTypeEnumComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  orderId?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  order_items?: InputMaybe<RegisterBusinessActionOrderItemBoolExp>;
  order_items_aggregate?: InputMaybe<RegisterBusinessActionOrderItemAggregateBoolExp>;
  order_status?: InputMaybe<RegisterBusinessActionOrderStatusBoolExp>;
  order_suppliers?: InputMaybe<RegisterBusinessActionOrderSupplierBoolExp>;
  order_suppliers_aggregate?: InputMaybe<RegisterBusinessActionOrderSupplierAggregateBoolExp>;
  origin?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  processedBy?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  status?: InputMaybe<RegisterBusinessActionOrderStatusEnumComparisonExp>;
};

export enum RegisterBusinessActionOrdersConstraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = "orders_pkey",
}

export type RegisterBusinessActionOrdersInsertInput = {
  agent?: InputMaybe<RegisterBusinessActionAgentObjRelInsertInput>;
  business?: InputMaybe<RegisterBusinessActionBusinessObjRelInsertInput>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  deliveries?: InputMaybe<RegisterBusinessActionDeliveryArrRelInsertInput>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  fulfillment_type?: InputMaybe<RegisterBusinessActionOrderFulfillmentTypeEnum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  order_items?: InputMaybe<RegisterBusinessActionOrderItemArrRelInsertInput>;
  order_status?: InputMaybe<RegisterBusinessActionOrderStatusObjRelInsertInput>;
  order_suppliers?: InputMaybe<RegisterBusinessActionOrderSupplierArrRelInsertInput>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<RegisterBusinessActionOrderStatusEnum>;
};

export type RegisterBusinessActionOrdersObjRelInsertInput = {
  data: RegisterBusinessActionOrdersInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionOrdersOnConflict>;
};

export type RegisterBusinessActionOrdersOnConflict = {
  constraint: RegisterBusinessActionOrdersConstraint;
  update_columns: Array<RegisterBusinessActionOrdersUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionOrdersBoolExp>;
};

export enum RegisterBusinessActionOrdersSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

export enum RegisterBusinessActionOrdersUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

export type RegisterBusinessActionOutput = {
  __typename?: "RegisterBusinessActionOutput";
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type RegisterBusinessActionProductsAggregateBoolExp = {
  bool_and?: InputMaybe<RegisterBusinessActionProductsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<RegisterBusinessActionProductsAggregateBoolExpBoolOr>;
  count?: InputMaybe<RegisterBusinessActionProductsAggregateBoolExpCount>;
};

export type RegisterBusinessActionProductsAggregateBoolExpBoolAnd = {
  arguments: RegisterBusinessActionProductsSelectColumnProductsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  predicate: RegisterBusinessActionBooleanComparisonExp;
};

export type RegisterBusinessActionProductsAggregateBoolExpBoolOr = {
  arguments: RegisterBusinessActionProductsSelectColumnProductsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  predicate: RegisterBusinessActionBooleanComparisonExp;
};

export type RegisterBusinessActionProductsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionProductsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionProductsArrRelInsertInput = {
  data: Array<RegisterBusinessActionProductsInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionProductsOnConflict>;
};

export type RegisterBusinessActionProductsBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionProductsBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionProductsBoolExp>>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  description?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  discount?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  inStock?: InputMaybe<RegisterBusinessActionBooleanComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  order_items?: InputMaybe<RegisterBusinessActionOrderItemBoolExp>;
  order_items_aggregate?: InputMaybe<RegisterBusinessActionOrderItemAggregateBoolExp>;
  price?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
  quantity?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersBoolExp>;
  supplier_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
};

export enum RegisterBusinessActionProductsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = "products_pkey",
}

export type RegisterBusinessActionProductsInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_items?: InputMaybe<RegisterBusinessActionOrderItemArrRelInsertInput>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersObjRelInsertInput>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type RegisterBusinessActionProductsObjRelInsertInput = {
  data: RegisterBusinessActionProductsInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionProductsOnConflict>;
};

export type RegisterBusinessActionProductsOnConflict = {
  constraint: RegisterBusinessActionProductsConstraint;
  update_columns: Array<RegisterBusinessActionProductsUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
};

export enum RegisterBusinessActionProductsSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

export enum RegisterBusinessActionProductsSelectColumnProductsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  InStock = "inStock",
}

export enum RegisterBusinessActionProductsSelectColumnProductsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  InStock = "inStock",
}

export enum RegisterBusinessActionProductsUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

export type RegisterBusinessActionRegisterationChannelTypeBoolExp = {
  _and?: InputMaybe<
    Array<RegisterBusinessActionRegisterationChannelTypeBoolExp>
  >;
  _not?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeBoolExp>;
  _or?: InputMaybe<
    Array<RegisterBusinessActionRegisterationChannelTypeBoolExp>
  >;
  businesses?: InputMaybe<RegisterBusinessActionBusinessBoolExp>;
  businesses_aggregate?: InputMaybe<RegisterBusinessActionBusinessAggregateBoolExp>;
  channel?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export enum RegisterBusinessActionRegisterationChannelTypeConstraint {
  /** unique or primary key constraint on columns "channel" */
  RegisterationChannelPkey = "registeration_channel_pkey",
}

export enum RegisterBusinessActionRegisterationChannelTypeEnum {
  Agent = "AGENT",
  App = "APP",
  Ussd = "USSD",
}

export type RegisterBusinessActionRegisterationChannelTypeEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionRegisterationChannelTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionRegisterationChannelTypeEnum>>;
};

export type RegisterBusinessActionRegisterationChannelTypeInsertInput = {
  businesses?: InputMaybe<RegisterBusinessActionBusinessArrRelInsertInput>;
  channel?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionRegisterationChannelTypeObjRelInsertInput = {
  data: RegisterBusinessActionRegisterationChannelTypeInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeOnConflict>;
};

export type RegisterBusinessActionRegisterationChannelTypeOnConflict = {
  constraint: RegisterBusinessActionRegisterationChannelTypeConstraint;
  update_columns: Array<RegisterBusinessActionRegisterationChannelTypeUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionRegisterationChannelTypeBoolExp>;
};

export enum RegisterBusinessActionRegisterationChannelTypeUpdateColumn {
  /** column name */
  Channel = "channel",
}

export type RegisterBusinessActionRideStatusBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionRideStatusBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionRideStatusBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionRideStatusBoolExp>>;
  courier_rides?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
  courier_rides_aggregate?: InputMaybe<RegisterBusinessActionCourierRidesAggregateBoolExp>;
  status?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export enum RegisterBusinessActionRideStatusConstraint {
  /** unique or primary key constraint on columns "status" */
  RideStatusPkey = "ride_status_pkey",
}

export enum RegisterBusinessActionRideStatusEnum {
  Active = "Active",
  Inactive = "Inactive",
  Maintenance = "Maintenance",
}

export type RegisterBusinessActionRideStatusEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionRideStatusEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionRideStatusEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionRideStatusEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionRideStatusEnum>>;
};

export type RegisterBusinessActionRideStatusInsertInput = {
  courier_rides?: InputMaybe<RegisterBusinessActionCourierRidesArrRelInsertInput>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionRideStatusObjRelInsertInput = {
  data: RegisterBusinessActionRideStatusInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionRideStatusOnConflict>;
};

export type RegisterBusinessActionRideStatusOnConflict = {
  constraint: RegisterBusinessActionRideStatusConstraint;
  update_columns: Array<RegisterBusinessActionRideStatusUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionRideStatusBoolExp>;
};

export enum RegisterBusinessActionRideStatusUpdateColumn {
  /** column name */
  Status = "status",
}

export type RegisterBusinessActionRideTypeBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionRideTypeBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionRideTypeBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionRideTypeBoolExp>>;
  courier_rides?: InputMaybe<RegisterBusinessActionCourierRidesBoolExp>;
  courier_rides_aggregate?: InputMaybe<RegisterBusinessActionCourierRidesAggregateBoolExp>;
  type?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export enum RegisterBusinessActionRideTypeConstraint {
  /** unique or primary key constraint on columns "type" */
  RideTypePkey = "ride_type_pkey",
}

export enum RegisterBusinessActionRideTypeEnum {
  Bike = "Bike",
  Car = "Car",
}

export type RegisterBusinessActionRideTypeEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionRideTypeEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionRideTypeEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionRideTypeEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionRideTypeEnum>>;
};

export type RegisterBusinessActionRideTypeInsertInput = {
  courier_rides?: InputMaybe<RegisterBusinessActionCourierRidesArrRelInsertInput>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionRideTypeObjRelInsertInput = {
  data: RegisterBusinessActionRideTypeInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionRideTypeOnConflict>;
};

export type RegisterBusinessActionRideTypeOnConflict = {
  constraint: RegisterBusinessActionRideTypeConstraint;
  update_columns: Array<RegisterBusinessActionRideTypeUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionRideTypeBoolExp>;
};

export enum RegisterBusinessActionRideTypeUpdateColumn {
  /** column name */
  Type = "type",
}

export type RegisterBusinessActionStringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionSupplierCategoriesEnumBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionSupplierCategoriesEnumBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionSupplierCategoriesEnumBoolExp>>;
  description?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  suppliers_categories?: InputMaybe<RegisterBusinessActionSuppliersCategoriesBoolExp>;
  suppliers_categories_aggregate?: InputMaybe<RegisterBusinessActionSuppliersCategoriesAggregateBoolExp>;
};

export enum RegisterBusinessActionSupplierCategoriesEnumConstraint {
  /** unique or primary key constraint on columns "name" */
  SupplierCategoriesEnumPkey = "supplier_categories_enum_pkey",
}

export enum RegisterBusinessActionSupplierCategoriesEnumEnum {
  /** Tools, seeds, and equipment for farmers, supporting agricultural productivity and local food production. */
  AgriculturalSupplies = "agricultural_supplies",
  /** Cosmetics, skincare products, grooming essentials, and personal care items, supporting local beauty entrepreneurs and promoting self-care. */
  BeautyAndCare = "beauty_and_care",
  /** Apparel, fabrics, and textiles, empowering local tailors and designers, fostering the textile industry */
  ClothingAndTextiles = "clothing_and_textiles",
  /** Essential materials like cement, steel, and bricks for construction projects, fostering infrastructure development. */
  ConstructionMaterials = "construction_materials",
  /** Books, educational tools, and e-learning resources, promoting education and literacy in the community. */
  EducationalMaterials = "educational_materials",
  /** Electronic devices, wiring, and appliances, promoting technological access and local electronic businesses */
  ElectronicsAppliances = "electronics_appliances",
  /** Solar panels, wind turbines, and energy-efficient appliances, promoting sustainable energy use and reducing the carbon footprint. */
  EnergySolutions = "energy_solutions",
  /** Fresh produce, packaged foods, beverages, and culinary supplies, supporting local agriculture and culinary enterprises. */
  FoodAndBeverages = "food_and_beverages",
  /** Medical supplies, safety equipment, and personal protective gear, ensuring the well-being of workers and communities. */
  HealthAndSafety = "health_and_safety",
  /** Furniture, home appliances, decor items, and household essentials, improving living standards and supporting local artisans. */
  HomeAndLiving = "home_and_living",
  /** Stationery, office materials, and supplies, supporting administrative functions of businesses and organizations. */
  OfficeSupplies = "office_supplies",
  /** Vehicles, spare parts, and transportation services, enhancing mobility and logistics for businesses and individuals. */
  TransportationSolutions = "transportation_solutions",
  /** Recycling equipment, waste bins, and eco-friendly products, encouraging responsible waste management practices. */
  WasteAndRecycling = "waste_and_recycling",
  /** Water filters, sanitation kits, and plumbing supplies, ensuring access to clean water and promoting hygiene. */
  WaterAndSanitation = "water_and_sanitation",
}

export type RegisterBusinessActionSupplierCategoriesEnumEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionSupplierCategoriesEnumEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionSupplierCategoriesEnumEnum>>;
};

export type RegisterBusinessActionSupplierCategoriesEnumInsertInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  suppliers_categories?: InputMaybe<RegisterBusinessActionSuppliersCategoriesArrRelInsertInput>;
};

export type RegisterBusinessActionSupplierCategoriesEnumObjRelInsertInput = {
  data: RegisterBusinessActionSupplierCategoriesEnumInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumOnConflict>;
};

export type RegisterBusinessActionSupplierCategoriesEnumOnConflict = {
  constraint: RegisterBusinessActionSupplierCategoriesEnumConstraint;
  update_columns: Array<RegisterBusinessActionSupplierCategoriesEnumUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumBoolExp>;
};

export enum RegisterBusinessActionSupplierCategoriesEnumUpdateColumn {
  /** column name */
  Description = "description",
  /** column name */
  Name = "name",
}

export type RegisterBusinessActionSupplierServiceZoneAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionSupplierServiceZoneAggregateBoolExpCount>;
};

export type RegisterBusinessActionSupplierServiceZoneAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<RegisterBusinessActionSupplierServiceZoneSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionSupplierServiceZoneBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionSupplierServiceZoneArrRelInsertInput = {
  data: Array<RegisterBusinessActionSupplierServiceZoneInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionSupplierServiceZoneOnConflict>;
};

export type RegisterBusinessActionSupplierServiceZoneBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionSupplierServiceZoneBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionSupplierServiceZoneBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionSupplierServiceZoneBoolExp>>;
  coverage_area_radius?: InputMaybe<RegisterBusinessActionIntComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  location_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  supplier_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
};

export enum RegisterBusinessActionSupplierServiceZoneConstraint {
  /** unique or primary key constraint on columns "id" */
  SupplierServiceZonePkey = "supplier_service_zone_pkey",
}

export type RegisterBusinessActionSupplierServiceZoneInsertInput = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  location_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type RegisterBusinessActionSupplierServiceZoneOnConflict = {
  constraint: RegisterBusinessActionSupplierServiceZoneConstraint;
  update_columns: Array<RegisterBusinessActionSupplierServiceZoneUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionSupplierServiceZoneBoolExp>;
};

export enum RegisterBusinessActionSupplierServiceZoneSelectColumn {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum RegisterBusinessActionSupplierServiceZoneUpdateColumn {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

export type RegisterBusinessActionSuppliersBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionSuppliersBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionSuppliersBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionSuppliersBoolExp>>;
  categories?: InputMaybe<RegisterBusinessActionSuppliersCategoriesBoolExp>;
  categories_aggregate?: InputMaybe<RegisterBusinessActionSuppliersCategoriesAggregateBoolExp>;
  contactEmail?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  contactName?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  description?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  order_suppliers?: InputMaybe<RegisterBusinessActionOrderSupplierBoolExp>;
  order_suppliers_aggregate?: InputMaybe<RegisterBusinessActionOrderSupplierAggregateBoolExp>;
  phoneNumber?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  products?: InputMaybe<RegisterBusinessActionProductsBoolExp>;
  products_aggregate?: InputMaybe<RegisterBusinessActionProductsAggregateBoolExp>;
  service_zones?: InputMaybe<RegisterBusinessActionSupplierServiceZoneBoolExp>;
  service_zones_aggregate?: InputMaybe<RegisterBusinessActionSupplierServiceZoneAggregateBoolExp>;
  streetAddress?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  user_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  zone?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
};

export type RegisterBusinessActionSuppliersCategoriesAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionSuppliersCategoriesAggregateBoolExpCount>;
};

export type RegisterBusinessActionSuppliersCategoriesAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<RegisterBusinessActionSuppliersCategoriesSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionSuppliersCategoriesBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionSuppliersCategoriesArrRelInsertInput = {
  data: Array<RegisterBusinessActionSuppliersCategoriesInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionSuppliersCategoriesOnConflict>;
};

export type RegisterBusinessActionSuppliersCategoriesBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionSuppliersCategoriesBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionSuppliersCategoriesBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionSuppliersCategoriesBoolExp>>;
  category_name?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumEnumComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersBoolExp>;
  supplier_categories_enum?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumBoolExp>;
  supplier_id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
};

export enum RegisterBusinessActionSuppliersCategoriesConstraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersCategoriesPkey = "suppliers_categories_pkey",
}

export type RegisterBusinessActionSuppliersCategoriesInsertInput = {
  category_name?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumEnum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<RegisterBusinessActionSuppliersObjRelInsertInput>;
  supplier_categories_enum?: InputMaybe<RegisterBusinessActionSupplierCategoriesEnumObjRelInsertInput>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type RegisterBusinessActionSuppliersCategoriesOnConflict = {
  constraint: RegisterBusinessActionSuppliersCategoriesConstraint;
  update_columns: Array<RegisterBusinessActionSuppliersCategoriesUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionSuppliersCategoriesBoolExp>;
};

export enum RegisterBusinessActionSuppliersCategoriesSelectColumn {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum RegisterBusinessActionSuppliersCategoriesUpdateColumn {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

export enum RegisterBusinessActionSuppliersConstraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersPkey = "suppliers_pkey",
}

export type RegisterBusinessActionSuppliersInsertInput = {
  categories?: InputMaybe<RegisterBusinessActionSuppliersCategoriesArrRelInsertInput>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_suppliers?: InputMaybe<RegisterBusinessActionOrderSupplierArrRelInsertInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<RegisterBusinessActionProductsArrRelInsertInput>;
  service_zones?: InputMaybe<RegisterBusinessActionSupplierServiceZoneArrRelInsertInput>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  zone?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterBusinessActionSuppliersObjRelInsertInput = {
  data: RegisterBusinessActionSuppliersInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionSuppliersOnConflict>;
};

export type RegisterBusinessActionSuppliersOnConflict = {
  constraint: RegisterBusinessActionSuppliersConstraint;
  update_columns: Array<RegisterBusinessActionSuppliersUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionSuppliersBoolExp>;
};

export enum RegisterBusinessActionSuppliersUpdateColumn {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  StreetAddress = "streetAddress",
  /** column name */
  UserId = "user_id",
  /** column name */
  Zone = "zone",
}

export type RegisterBusinessActionTimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

export type RegisterBusinessActionUserRoleBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionUserRoleBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionUserRoleBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionUserRoleBoolExp>>;
  role?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  users?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
  users_aggregate?: InputMaybe<RegisterBusinessActionUsersAggregateBoolExp>;
};

export enum RegisterBusinessActionUserRoleConstraint {
  /** unique or primary key constraint on columns "role" */
  UserRolePkey = "user_role_pkey",
}

export enum RegisterBusinessActionUserRoleEnum {
  Admin = "admin",
  Agent = "agent",
  Customer = "customer",
  Supplier = "supplier",
}

export type RegisterBusinessActionUserRoleEnumComparisonExp = {
  _eq?: InputMaybe<RegisterBusinessActionUserRoleEnum>;
  _in?: InputMaybe<Array<RegisterBusinessActionUserRoleEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterBusinessActionUserRoleEnum>;
  _nin?: InputMaybe<Array<RegisterBusinessActionUserRoleEnum>>;
};

export type RegisterBusinessActionUserRoleInsertInput = {
  role?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<RegisterBusinessActionUsersArrRelInsertInput>;
};

export type RegisterBusinessActionUserRoleObjRelInsertInput = {
  data: RegisterBusinessActionUserRoleInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionUserRoleOnConflict>;
};

export type RegisterBusinessActionUserRoleOnConflict = {
  constraint: RegisterBusinessActionUserRoleConstraint;
  update_columns: Array<RegisterBusinessActionUserRoleUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionUserRoleBoolExp>;
};

export enum RegisterBusinessActionUserRoleUpdateColumn {
  /** column name */
  Role = "role",
}

export type RegisterBusinessActionUsersAggregateBoolExp = {
  count?: InputMaybe<RegisterBusinessActionUsersAggregateBoolExpCount>;
};

export type RegisterBusinessActionUsersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterBusinessActionUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
  predicate: RegisterBusinessActionIntComparisonExp;
};

export type RegisterBusinessActionUsersArrRelInsertInput = {
  data: Array<RegisterBusinessActionUsersInsertInput>;
  on_conflict?: InputMaybe<RegisterBusinessActionUsersOnConflict>;
};

export type RegisterBusinessActionUsersBoolExp = {
  _and?: InputMaybe<Array<RegisterBusinessActionUsersBoolExp>>;
  _not?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
  _or?: InputMaybe<Array<RegisterBusinessActionUsersBoolExp>>;
  created_at?: InputMaybe<RegisterBusinessActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterBusinessActionUuidComparisonExp>;
  name?: InputMaybe<RegisterBusinessActionStringComparisonExp>;
  role?: InputMaybe<RegisterBusinessActionUserRoleEnumComparisonExp>;
  user_role?: InputMaybe<RegisterBusinessActionUserRoleBoolExp>;
};

export enum RegisterBusinessActionUsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

export type RegisterBusinessActionUsersInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<RegisterBusinessActionUserRoleEnum>;
  user_role?: InputMaybe<RegisterBusinessActionUserRoleObjRelInsertInput>;
};

export type RegisterBusinessActionUsersObjRelInsertInput = {
  data: RegisterBusinessActionUsersInsertInput;
  on_conflict?: InputMaybe<RegisterBusinessActionUsersOnConflict>;
};

export type RegisterBusinessActionUsersOnConflict = {
  constraint: RegisterBusinessActionUsersConstraint;
  update_columns: Array<RegisterBusinessActionUsersUpdateColumn>;
  where?: InputMaybe<RegisterBusinessActionUsersBoolExp>;
};

export enum RegisterBusinessActionUsersSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export enum RegisterBusinessActionUsersUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export type RegisterBusinessActionUuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type RegisterUserActionIntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type RegisterUserActionOutput = {
  __typename?: "RegisterUserActionOutput";
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type RegisterUserActionStringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterUserActionTimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

export type RegisterUserActionUserRoleBoolExp = {
  _and?: InputMaybe<Array<RegisterUserActionUserRoleBoolExp>>;
  _not?: InputMaybe<RegisterUserActionUserRoleBoolExp>;
  _or?: InputMaybe<Array<RegisterUserActionUserRoleBoolExp>>;
  role?: InputMaybe<RegisterUserActionStringComparisonExp>;
  users?: InputMaybe<RegisterUserActionUsersBoolExp>;
  users_aggregate?: InputMaybe<RegisterUserActionUsersAggregateBoolExp>;
};

export enum RegisterUserActionUserRoleConstraint {
  /** unique or primary key constraint on columns "role" */
  UserRolePkey = "user_role_pkey",
}

export enum RegisterUserActionUserRoleEnum {
  Admin = "admin",
  Agent = "agent",
  Customer = "customer",
  Supplier = "supplier",
}

export type RegisterUserActionUserRoleEnumComparisonExp = {
  _eq?: InputMaybe<RegisterUserActionUserRoleEnum>;
  _in?: InputMaybe<Array<RegisterUserActionUserRoleEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<RegisterUserActionUserRoleEnum>;
  _nin?: InputMaybe<Array<RegisterUserActionUserRoleEnum>>;
};

export type RegisterUserActionUserRoleInsertInput = {
  role?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<RegisterUserActionUsersArrRelInsertInput>;
};

export type RegisterUserActionUserRoleObjRelInsertInput = {
  data: RegisterUserActionUserRoleInsertInput;
  on_conflict?: InputMaybe<RegisterUserActionUserRoleOnConflict>;
};

export type RegisterUserActionUserRoleOnConflict = {
  constraint: RegisterUserActionUserRoleConstraint;
  update_columns: Array<RegisterUserActionUserRoleUpdateColumn>;
  where?: InputMaybe<RegisterUserActionUserRoleBoolExp>;
};

export enum RegisterUserActionUserRoleUpdateColumn {
  /** column name */
  Role = "role",
}

export type RegisterUserActionUsersAggregateBoolExp = {
  count?: InputMaybe<RegisterUserActionUsersAggregateBoolExpCount>;
};

export type RegisterUserActionUsersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RegisterUserActionUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RegisterUserActionUsersBoolExp>;
  predicate: RegisterUserActionIntComparisonExp;
};

export type RegisterUserActionUsersArrRelInsertInput = {
  data: Array<RegisterUserActionUsersInsertInput>;
  on_conflict?: InputMaybe<RegisterUserActionUsersOnConflict>;
};

export type RegisterUserActionUsersBoolExp = {
  _and?: InputMaybe<Array<RegisterUserActionUsersBoolExp>>;
  _not?: InputMaybe<RegisterUserActionUsersBoolExp>;
  _or?: InputMaybe<Array<RegisterUserActionUsersBoolExp>>;
  created_at?: InputMaybe<RegisterUserActionTimestamptzComparisonExp>;
  id?: InputMaybe<RegisterUserActionUuidComparisonExp>;
  name?: InputMaybe<RegisterUserActionStringComparisonExp>;
  role?: InputMaybe<RegisterUserActionUserRoleEnumComparisonExp>;
  user_role?: InputMaybe<RegisterUserActionUserRoleBoolExp>;
};

export enum RegisterUserActionUsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

export type RegisterUserActionUsersInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<RegisterUserActionUserRoleEnum>;
  user_role?: InputMaybe<RegisterUserActionUserRoleObjRelInsertInput>;
};

export type RegisterUserActionUsersOnConflict = {
  constraint: RegisterUserActionUsersConstraint;
  update_columns: Array<RegisterUserActionUsersUpdateColumn>;
  where?: InputMaybe<RegisterUserActionUsersBoolExp>;
};

export enum RegisterUserActionUsersSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export enum RegisterUserActionUsersUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export type RegisterUserActionUuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type RequestToPayInput = {
  amount: Scalars["Float"]["input"];
  currency?: InputMaybe<Scalars["String"]["input"]>;
  externalId: Scalars["String"]["input"];
  payeeNote?: InputMaybe<Scalars["String"]["input"]>;
  payer: PayerInput;
  payerMessage?: InputMaybe<Scalars["String"]["input"]>;
};

export type RequestToPayResponse = {
  __typename?: "RequestToPayResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type RequestToPayTransactionStatusResponse = {
  __typename?: "RequestToPayTransactionStatusResponse";
  amount?: Maybe<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  externalId?: Maybe<Scalars["String"]["output"]>;
  financialTransactionId?: Maybe<Scalars["String"]["output"]>;
  payeeNote?: Maybe<Scalars["String"]["output"]>;
  payer?: Maybe<Scalars["String"]["output"]>;
  payerMessage?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInfoWithConsentResponse = {
  __typename?: "UserInfoWithConsentResponse";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  address?: Maybe<Scalars["String"]["output"]>;
  birthdate?: Maybe<Scalars["String"]["output"]>;
  city_of_birth?: Maybe<Scalars["String"]["output"]>;
  country_of_birth?: Maybe<Scalars["String"]["output"]>;
  credit_score?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_verified?: Maybe<Scalars["Boolean"]["output"]>;
  employer_name?: Maybe<Scalars["String"]["output"]>;
  family_name?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  given_name?: Maybe<Scalars["String"]["output"]>;
  identification_type?: Maybe<Scalars["String"]["output"]>;
  identification_value?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  middle_name?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  occupation?: Maybe<Scalars["String"]["output"]>;
  phone_number?: Maybe<Scalars["String"]["output"]>;
  phone_number_verified?: Maybe<Scalars["Boolean"]["output"]>;
  region_of_birth?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sub?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["Int"]["output"]>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id: Scalars["uuid"]["output"];
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  providerAccountId: Scalars["String"]["output"];
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: "accounts_avg_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Int_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = "accounts_pkey",
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  providerAccountId?: Maybe<Scalars["String"]["output"]>;
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  providerAccountId?: Maybe<Scalars["String"]["output"]>;
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: "accounts_stddev_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: "accounts_stddev_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: "accounts_stddev_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: "accounts_sum_fields";
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: "accounts_var_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: "accounts_var_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: "accounts_variance_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: "addresses";
  /** An object relationship */
  business?: Maybe<Business>;
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  latitude?: Maybe<Scalars["float8"]["output"]>;
  longitude?: Maybe<Scalars["float8"]["output"]>;
  street_address?: Maybe<Scalars["String"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: "addresses_aggregate";
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

export type Addresses_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Addresses_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Addresses_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Addresses_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Addresses_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Addresses_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Addresses_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Addresses_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Addresses_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Addresses_Aggregate_Bool_Exp_Var_Samp>;
};

export type Addresses_Aggregate_Bool_Exp_Avg = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Corr = {
  arguments: Addresses_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Addresses_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Addresses_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Addresses_Aggregate_Bool_Exp_Max = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Min = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Sum = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: "addresses_aggregate_fields";
  avg?: Maybe<Addresses_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
  stddev?: Maybe<Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<Addresses_Sum_Fields>;
  var_pop?: Maybe<Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<Addresses_Var_Samp_Fields>;
  variance?: Maybe<Addresses_Variance_Fields>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  avg?: InputMaybe<Addresses_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Addresses_Max_Order_By>;
  min?: InputMaybe<Addresses_Min_Order_By>;
  stddev?: InputMaybe<Addresses_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Addresses_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Addresses_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Addresses_Sum_Order_By>;
  var_pop?: InputMaybe<Addresses_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Addresses_Var_Samp_Order_By>;
  variance?: InputMaybe<Addresses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: "addresses_avg_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "addresses" */
export type Addresses_Avg_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>;
  _not?: InputMaybe<Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>;
  business?: InputMaybe<Business_Bool_Exp>;
  business_id?: InputMaybe<Uuid_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  latitude?: InputMaybe<Float8_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  street_address?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddressesPkey = "addresses_pkey",
}

/** input type for incrementing numeric columns in table "addresses" */
export type Addresses_Inc_Input = {
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
  street_address?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: "addresses_max_fields";
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  latitude?: Maybe<Scalars["float8"]["output"]>;
  longitude?: Maybe<Scalars["float8"]["output"]>;
  street_address?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  business_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  street_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: "addresses_min_fields";
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  latitude?: Maybe<Scalars["float8"]["output"]>;
  longitude?: Maybe<Scalars["float8"]["output"]>;
  street_address?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  business_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  street_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: "addresses_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** on_conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns?: Array<Addresses_Update_Column>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  business?: InputMaybe<Business_Order_By>;
  business_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  street_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

/** select "addresses_aggregate_bool_exp_avg_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_corr_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_max_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_min_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_sum_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** select "addresses_aggregate_bool_exp_var_samp_arguments_columns" columns of table "addresses" */
export enum Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
  street_address?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: "addresses_stddev_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "addresses" */
export type Addresses_Stddev_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: "addresses_stddev_pop_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "addresses" */
export type Addresses_Stddev_Pop_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: "addresses_stddev_samp_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "addresses" */
export type Addresses_Stddev_Samp_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "addresses" */
export type Addresses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addresses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addresses_Stream_Cursor_Value_Input = {
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  latitude?: InputMaybe<Scalars["float8"]["input"]>;
  longitude?: InputMaybe<Scalars["float8"]["input"]>;
  street_address?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: "addresses_sum_fields";
  latitude?: Maybe<Scalars["float8"]["output"]>;
  longitude?: Maybe<Scalars["float8"]["output"]>;
};

/** order by sum() on columns of table "addresses" */
export type Addresses_Sum_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  City = "city",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Latitude = "latitude",
  /** column name */
  Longitude = "longitude",
  /** column name */
  StreetAddress = "street_address",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Addresses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Addresses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addresses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addresses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: "addresses_var_pop_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "addresses" */
export type Addresses_Var_Pop_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: "addresses_var_samp_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "addresses" */
export type Addresses_Var_Samp_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: "addresses_variance_fields";
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "addresses" */
export type Addresses_Variance_Order_By = {
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** columns and relationships of "agent" */
export type Agent = {
  __typename?: "agent";
  active: Scalars["Boolean"]["output"];
  agent_type: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  on_duty: Scalars["Boolean"]["output"];
};

/** aggregated selection of "agent" */
export type Agent_Aggregate = {
  __typename?: "agent_aggregate";
  aggregate?: Maybe<Agent_Aggregate_Fields>;
  nodes: Array<Agent>;
};

/** aggregate fields of "agent" */
export type Agent_Aggregate_Fields = {
  __typename?: "agent_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Agent_Max_Fields>;
  min?: Maybe<Agent_Min_Fields>;
};

/** aggregate fields of "agent" */
export type Agent_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "agent". All fields are combined with a logical 'AND'. */
export type Agent_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Bool_Exp>>;
  _not?: InputMaybe<Agent_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  agent_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  on_duty?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent" */
export enum Agent_Constraint {
  /** unique or primary key constraint on columns "id" */
  AgentPkey = "agent_pkey",
}

/** input type for inserting data into table "agent" */
export type Agent_Insert_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  agent_type?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  on_duty?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Agent_Max_Fields = {
  __typename?: "agent_max_fields";
  agent_type?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Agent_Min_Fields = {
  __typename?: "agent_min_fields";
  agent_type?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "agent" */
export type Agent_Mutation_Response = {
  __typename?: "agent_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Agent>;
};

/** input type for inserting object relation for remote table "agent" */
export type Agent_Obj_Rel_Insert_Input = {
  data: Agent_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_On_Conflict>;
};

/** on_conflict condition type for table "agent" */
export type Agent_On_Conflict = {
  constraint: Agent_Constraint;
  update_columns?: Array<Agent_Update_Column>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

/** Ordering options when selecting data from "agent". */
export type Agent_Order_By = {
  active?: InputMaybe<Order_By>;
  agent_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  on_duty?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent */
export type Agent_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "agent" */
export enum Agent_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  AgentType = "agent_type",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OnDuty = "on_duty",
}

/** input type for updating data in table "agent" */
export type Agent_Set_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  agent_type?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  on_duty?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Streaming cursor of the table "agent" */
export type Agent_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  agent_type?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  on_duty?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** columns and relationships of "agent_type" */
export type Agent_Type = {
  __typename?: "agent_type";
  type: Scalars["String"]["output"];
};

/** aggregated selection of "agent_type" */
export type Agent_Type_Aggregate = {
  __typename?: "agent_type_aggregate";
  aggregate?: Maybe<Agent_Type_Aggregate_Fields>;
  nodes: Array<Agent_Type>;
};

/** aggregate fields of "agent_type" */
export type Agent_Type_Aggregate_Fields = {
  __typename?: "agent_type_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Agent_Type_Max_Fields>;
  min?: Maybe<Agent_Type_Min_Fields>;
};

/** aggregate fields of "agent_type" */
export type Agent_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "agent_type". All fields are combined with a logical 'AND'. */
export type Agent_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Type_Bool_Exp>>;
  _not?: InputMaybe<Agent_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Type_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent_type" */
export enum Agent_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  AgentTypePkey = "agent_type_pkey",
}

/** input type for inserting data into table "agent_type" */
export type Agent_Type_Insert_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Agent_Type_Max_Fields = {
  __typename?: "agent_type_max_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Agent_Type_Min_Fields = {
  __typename?: "agent_type_min_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "agent_type" */
export type Agent_Type_Mutation_Response = {
  __typename?: "agent_type_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Type>;
};

/** on_conflict condition type for table "agent_type" */
export type Agent_Type_On_Conflict = {
  constraint: Agent_Type_Constraint;
  update_columns?: Array<Agent_Type_Update_Column>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "agent_type". */
export type Agent_Type_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent_type */
export type Agent_Type_Pk_Columns_Input = {
  type: Scalars["String"]["input"];
};

/** select columns of table "agent_type" */
export enum Agent_Type_Select_Column {
  /** column name */
  Type = "type",
}

/** input type for updating data in table "agent_type" */
export type Agent_Type_Set_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "agent_type" */
export type Agent_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Type_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "agent_type" */
export enum Agent_Type_Update_Column {
  /** column name */
  Type = "type",
}

export type Agent_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Type_Bool_Exp;
};

/** update columns of table "agent" */
export enum Agent_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  AgentType = "agent_type",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OnDuty = "on_duty",
}

export type Agent_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** columns and relationships of "business" */
export type Business = {
  __typename?: "business";
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** An object relationship */
  agent?: Maybe<Users>;
  /** An object relationship */
  business_type?: Maybe<Business_Type>;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  preferredContactMethod?: Maybe<Scalars["String"]["output"]>;
  preferredDeliveryMethod?: Maybe<Scalars["String"]["output"]>;
  preferredPaymentMethod?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  registeration_channel_type?: Maybe<Registeration_Channel_Type>;
  registered_by?: Maybe<Scalars["uuid"]["output"]>;
  registration_channel?: Maybe<Registeration_Channel_Type_Enum>;
  /** An object relationship */
  schedule?: Maybe<Work_Schedules>;
  type?: Maybe<Business_Type_Enum>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "business" */
export type BusinessAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "business" */
export type Business_Aggregate = {
  __typename?: "business_aggregate";
  aggregate?: Maybe<Business_Aggregate_Fields>;
  nodes: Array<Business>;
};

export type Business_Aggregate_Bool_Exp = {
  count?: InputMaybe<Business_Aggregate_Bool_Exp_Count>;
};

export type Business_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Business_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Business_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "business" */
export type Business_Aggregate_Fields = {
  __typename?: "business_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Business_Max_Fields>;
  min?: Maybe<Business_Min_Fields>;
};

/** aggregate fields of "business" */
export type Business_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Business_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "business" */
export type Business_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Business_Max_Order_By>;
  min?: InputMaybe<Business_Min_Order_By>;
};

/** input type for inserting array relation for remote table "business" */
export type Business_Arr_Rel_Insert_Input = {
  data: Array<Business_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** Boolean expression to filter rows from the table "business". All fields are combined with a logical 'AND'. */
export type Business_Bool_Exp = {
  _and?: InputMaybe<Array<Business_Bool_Exp>>;
  _not?: InputMaybe<Business_Bool_Exp>;
  _or?: InputMaybe<Array<Business_Bool_Exp>>;
  addresses?: InputMaybe<Addresses_Bool_Exp>;
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Bool_Exp>;
  agent?: InputMaybe<Users_Bool_Exp>;
  business_type?: InputMaybe<Business_Type_Bool_Exp>;
  contactEmail?: InputMaybe<String_Comparison_Exp>;
  contactName?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  preferredContactMethod?: InputMaybe<String_Comparison_Exp>;
  preferredDeliveryMethod?: InputMaybe<String_Comparison_Exp>;
  preferredPaymentMethod?: InputMaybe<String_Comparison_Exp>;
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
  registered_by?: InputMaybe<Uuid_Comparison_Exp>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum_Comparison_Exp>;
  schedule?: InputMaybe<Work_Schedules_Bool_Exp>;
  type?: InputMaybe<Business_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "business" */
export enum Business_Constraint {
  /** unique or primary key constraint on columns "id" */
  BusinessPkey = "business_pkey",
}

/** input type for inserting data into table "business" */
export type Business_Insert_Input = {
  addresses?: InputMaybe<Addresses_Arr_Rel_Insert_Input>;
  agent?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  business_type?: InputMaybe<Business_Type_Obj_Rel_Insert_Input>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredDeliveryMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredPaymentMethod?: InputMaybe<Scalars["String"]["input"]>;
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Obj_Rel_Insert_Input>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum>;
  schedule?: InputMaybe<Work_Schedules_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Business_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Business_Max_Fields = {
  __typename?: "business_max_fields";
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  preferredContactMethod?: Maybe<Scalars["String"]["output"]>;
  preferredDeliveryMethod?: Maybe<Scalars["String"]["output"]>;
  preferredPaymentMethod?: Maybe<Scalars["String"]["output"]>;
  registered_by?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "business" */
export type Business_Max_Order_By = {
  contactEmail?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  preferredContactMethod?: InputMaybe<Order_By>;
  preferredDeliveryMethod?: InputMaybe<Order_By>;
  preferredPaymentMethod?: InputMaybe<Order_By>;
  registered_by?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Business_Min_Fields = {
  __typename?: "business_min_fields";
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  preferredContactMethod?: Maybe<Scalars["String"]["output"]>;
  preferredDeliveryMethod?: Maybe<Scalars["String"]["output"]>;
  preferredPaymentMethod?: Maybe<Scalars["String"]["output"]>;
  registered_by?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "business" */
export type Business_Min_Order_By = {
  contactEmail?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  preferredContactMethod?: InputMaybe<Order_By>;
  preferredDeliveryMethod?: InputMaybe<Order_By>;
  preferredPaymentMethod?: InputMaybe<Order_By>;
  registered_by?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "business" */
export type Business_Mutation_Response = {
  __typename?: "business_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Business>;
};

/** input type for inserting object relation for remote table "business" */
export type Business_Obj_Rel_Insert_Input = {
  data: Business_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** on_conflict condition type for table "business" */
export type Business_On_Conflict = {
  constraint: Business_Constraint;
  update_columns?: Array<Business_Update_Column>;
  where?: InputMaybe<Business_Bool_Exp>;
};

/** Ordering options when selecting data from "business". */
export type Business_Order_By = {
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Order_By>;
  agent?: InputMaybe<Users_Order_By>;
  business_type?: InputMaybe<Business_Type_Order_By>;
  contactEmail?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  preferredContactMethod?: InputMaybe<Order_By>;
  preferredDeliveryMethod?: InputMaybe<Order_By>;
  preferredPaymentMethod?: InputMaybe<Order_By>;
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Order_By>;
  registered_by?: InputMaybe<Order_By>;
  registration_channel?: InputMaybe<Order_By>;
  schedule?: InputMaybe<Work_Schedules_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: business */
export type Business_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** columns and relationships of "business_sector" */
export type Business_Sector = {
  __typename?: "business_sector";
  text: Scalars["String"]["output"];
};

/** aggregated selection of "business_sector" */
export type Business_Sector_Aggregate = {
  __typename?: "business_sector_aggregate";
  aggregate?: Maybe<Business_Sector_Aggregate_Fields>;
  nodes: Array<Business_Sector>;
};

/** aggregate fields of "business_sector" */
export type Business_Sector_Aggregate_Fields = {
  __typename?: "business_sector_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Business_Sector_Max_Fields>;
  min?: Maybe<Business_Sector_Min_Fields>;
};

/** aggregate fields of "business_sector" */
export type Business_Sector_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Business_Sector_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "business_sector". All fields are combined with a logical 'AND'. */
export type Business_Sector_Bool_Exp = {
  _and?: InputMaybe<Array<Business_Sector_Bool_Exp>>;
  _not?: InputMaybe<Business_Sector_Bool_Exp>;
  _or?: InputMaybe<Array<Business_Sector_Bool_Exp>>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "business_sector" */
export enum Business_Sector_Constraint {
  /** unique or primary key constraint on columns "text" */
  BusinessSectorPkey = "business_sector_pkey",
}

/** input type for inserting data into table "business_sector" */
export type Business_Sector_Insert_Input = {
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Business_Sector_Max_Fields = {
  __typename?: "business_sector_max_fields";
  text?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Business_Sector_Min_Fields = {
  __typename?: "business_sector_min_fields";
  text?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "business_sector" */
export type Business_Sector_Mutation_Response = {
  __typename?: "business_sector_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Business_Sector>;
};

/** on_conflict condition type for table "business_sector" */
export type Business_Sector_On_Conflict = {
  constraint: Business_Sector_Constraint;
  update_columns?: Array<Business_Sector_Update_Column>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

/** Ordering options when selecting data from "business_sector". */
export type Business_Sector_Order_By = {
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: business_sector */
export type Business_Sector_Pk_Columns_Input = {
  text: Scalars["String"]["input"];
};

/** select columns of table "business_sector" */
export enum Business_Sector_Select_Column {
  /** column name */
  Text = "text",
}

/** input type for updating data in table "business_sector" */
export type Business_Sector_Set_Input = {
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "business_sector" */
export type Business_Sector_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Business_Sector_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Business_Sector_Stream_Cursor_Value_Input = {
  text?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "business_sector" */
export enum Business_Sector_Update_Column {
  /** column name */
  Text = "text",
}

export type Business_Sector_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Business_Sector_Set_Input>;
  /** filter the rows which have to be updated */
  where: Business_Sector_Bool_Exp;
};

/** select columns of table "business" */
export enum Business_Select_Column {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PreferredContactMethod = "preferredContactMethod",
  /** column name */
  PreferredDeliveryMethod = "preferredDeliveryMethod",
  /** column name */
  PreferredPaymentMethod = "preferredPaymentMethod",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "business" */
export type Business_Set_Input = {
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredDeliveryMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredPaymentMethod?: InputMaybe<Scalars["String"]["input"]>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum>;
  type?: InputMaybe<Business_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "business" */
export type Business_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Business_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Business_Stream_Cursor_Value_Input = {
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredDeliveryMethod?: InputMaybe<Scalars["String"]["input"]>;
  preferredPaymentMethod?: InputMaybe<Scalars["String"]["input"]>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum>;
  type?: InputMaybe<Business_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** columns and relationships of "business_type" */
export type Business_Type = {
  __typename?: "business_type";
  /** An array relationship */
  businesses: Array<Business>;
  /** An aggregate relationship */
  businesses_aggregate: Business_Aggregate;
  type: Scalars["String"]["output"];
};

/** columns and relationships of "business_type" */
export type Business_TypeBusinessesArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

/** columns and relationships of "business_type" */
export type Business_TypeBusinesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

/** aggregated selection of "business_type" */
export type Business_Type_Aggregate = {
  __typename?: "business_type_aggregate";
  aggregate?: Maybe<Business_Type_Aggregate_Fields>;
  nodes: Array<Business_Type>;
};

/** aggregate fields of "business_type" */
export type Business_Type_Aggregate_Fields = {
  __typename?: "business_type_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Business_Type_Max_Fields>;
  min?: Maybe<Business_Type_Min_Fields>;
};

/** aggregate fields of "business_type" */
export type Business_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Business_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "business_type". All fields are combined with a logical 'AND'. */
export type Business_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Business_Type_Bool_Exp>>;
  _not?: InputMaybe<Business_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Business_Type_Bool_Exp>>;
  businesses?: InputMaybe<Business_Bool_Exp>;
  businesses_aggregate?: InputMaybe<Business_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "business_type" */
export enum Business_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  BusinessTypePkey = "business_type_pkey",
}

export enum Business_Type_Enum {
  Bar = "bar",
  Hotel = "hotel",
  Restaurant = "restaurant",
}

/** Boolean expression to compare columns of type "business_type_enum". All fields are combined with logical 'AND'. */
export type Business_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Business_Type_Enum>;
  _in?: InputMaybe<Array<Business_Type_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Business_Type_Enum>;
  _nin?: InputMaybe<Array<Business_Type_Enum>>;
};

/** input type for inserting data into table "business_type" */
export type Business_Type_Insert_Input = {
  businesses?: InputMaybe<Business_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Business_Type_Max_Fields = {
  __typename?: "business_type_max_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Business_Type_Min_Fields = {
  __typename?: "business_type_min_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "business_type" */
export type Business_Type_Mutation_Response = {
  __typename?: "business_type_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Business_Type>;
};

/** input type for inserting object relation for remote table "business_type" */
export type Business_Type_Obj_Rel_Insert_Input = {
  data: Business_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Business_Type_On_Conflict>;
};

/** on_conflict condition type for table "business_type" */
export type Business_Type_On_Conflict = {
  constraint: Business_Type_Constraint;
  update_columns?: Array<Business_Type_Update_Column>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "business_type". */
export type Business_Type_Order_By = {
  businesses_aggregate?: InputMaybe<Business_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: business_type */
export type Business_Type_Pk_Columns_Input = {
  type: Scalars["String"]["input"];
};

/** select columns of table "business_type" */
export enum Business_Type_Select_Column {
  /** column name */
  Type = "type",
}

/** input type for updating data in table "business_type" */
export type Business_Type_Set_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "business_type" */
export type Business_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Business_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Business_Type_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "business_type" */
export enum Business_Type_Update_Column {
  /** column name */
  Type = "type",
}

export type Business_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Business_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Business_Type_Bool_Exp;
};

/** update columns of table "business" */
export enum Business_Update_Column {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PreferredContactMethod = "preferredContactMethod",
  /** column name */
  PreferredDeliveryMethod = "preferredDeliveryMethod",
  /** column name */
  PreferredPaymentMethod = "preferredPaymentMethod",
  /** column name */
  RegisteredBy = "registered_by",
  /** column name */
  RegistrationChannel = "registration_channel",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Business_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Business_Set_Input>;
  /** filter the rows which have to be updated */
  where: Business_Bool_Exp;
};

/** columns and relationships of "contact_details" */
export type Contact_Details = {
  __typename?: "contact_details";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "contact_details" */
export type Contact_Details_Aggregate = {
  __typename?: "contact_details_aggregate";
  aggregate?: Maybe<Contact_Details_Aggregate_Fields>;
  nodes: Array<Contact_Details>;
};

/** aggregate fields of "contact_details" */
export type Contact_Details_Aggregate_Fields = {
  __typename?: "contact_details_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Contact_Details_Max_Fields>;
  min?: Maybe<Contact_Details_Min_Fields>;
};

/** aggregate fields of "contact_details" */
export type Contact_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "contact_details". All fields are combined with a logical 'AND'. */
export type Contact_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Details_Bool_Exp>>;
  _not?: InputMaybe<Contact_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Details_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact_details" */
export enum Contact_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactDetailsPkey = "contact_details_pkey",
}

/** input type for inserting data into table "contact_details" */
export type Contact_Details_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Contact_Details_Max_Fields = {
  __typename?: "contact_details_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Contact_Details_Min_Fields = {
  __typename?: "contact_details_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "contact_details" */
export type Contact_Details_Mutation_Response = {
  __typename?: "contact_details_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Contact_Details>;
};

/** on_conflict condition type for table "contact_details" */
export type Contact_Details_On_Conflict = {
  constraint: Contact_Details_Constraint;
  update_columns?: Array<Contact_Details_Update_Column>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "contact_details". */
export type Contact_Details_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact_details */
export type Contact_Details_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "contact_details" */
export enum Contact_Details_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "contact_details" */
export type Contact_Details_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "contact_details" */
export type Contact_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Details_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "contact_details" */
export enum Contact_Details_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Contact_Details_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contact_Details_Bool_Exp;
};

/** columns and relationships of "courier_rides" */
export type Courier_Rides = {
  __typename?: "courier_rides";
  color: Scalars["String"]["output"];
  /** An object relationship */
  courier: Couriers;
  courier_id: Scalars["uuid"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  license_plate_number: Scalars["String"]["output"];
  model: Scalars["String"]["output"];
  /** An object relationship */
  ride_status: Ride_Status;
  /** An object relationship */
  ride_type: Ride_Type;
  status: Ride_Status_Enum;
  type: Ride_Type_Enum;
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "courier_rides" */
export type Courier_Rides_Aggregate = {
  __typename?: "courier_rides_aggregate";
  aggregate?: Maybe<Courier_Rides_Aggregate_Fields>;
  nodes: Array<Courier_Rides>;
};

export type Courier_Rides_Aggregate_Bool_Exp = {
  count?: InputMaybe<Courier_Rides_Aggregate_Bool_Exp_Count>;
};

export type Courier_Rides_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Courier_Rides_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "courier_rides" */
export type Courier_Rides_Aggregate_Fields = {
  __typename?: "courier_rides_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Courier_Rides_Max_Fields>;
  min?: Maybe<Courier_Rides_Min_Fields>;
};

/** aggregate fields of "courier_rides" */
export type Courier_Rides_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "courier_rides" */
export type Courier_Rides_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Courier_Rides_Max_Order_By>;
  min?: InputMaybe<Courier_Rides_Min_Order_By>;
};

/** input type for inserting array relation for remote table "courier_rides" */
export type Courier_Rides_Arr_Rel_Insert_Input = {
  data: Array<Courier_Rides_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Courier_Rides_On_Conflict>;
};

/** Boolean expression to filter rows from the table "courier_rides". All fields are combined with a logical 'AND'. */
export type Courier_Rides_Bool_Exp = {
  _and?: InputMaybe<Array<Courier_Rides_Bool_Exp>>;
  _not?: InputMaybe<Courier_Rides_Bool_Exp>;
  _or?: InputMaybe<Array<Courier_Rides_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  courier?: InputMaybe<Couriers_Bool_Exp>;
  courier_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  license_plate_number?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  ride_status?: InputMaybe<Ride_Status_Bool_Exp>;
  ride_type?: InputMaybe<Ride_Type_Bool_Exp>;
  status?: InputMaybe<Ride_Status_Enum_Comparison_Exp>;
  type?: InputMaybe<Ride_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courier_rides" */
export enum Courier_Rides_Constraint {
  /** unique or primary key constraint on columns "id" */
  CourierRidesPkey = "courier_rides_pkey",
}

/** input type for inserting data into table "courier_rides" */
export type Courier_Rides_Insert_Input = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  courier?: InputMaybe<Couriers_Obj_Rel_Insert_Input>;
  courier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  license_plate_number?: InputMaybe<Scalars["String"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  ride_status?: InputMaybe<Ride_Status_Obj_Rel_Insert_Input>;
  ride_type?: InputMaybe<Ride_Type_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Ride_Status_Enum>;
  type?: InputMaybe<Ride_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Courier_Rides_Max_Fields = {
  __typename?: "courier_rides_max_fields";
  color?: Maybe<Scalars["String"]["output"]>;
  courier_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  license_plate_number?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "courier_rides" */
export type Courier_Rides_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  courier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  license_plate_number?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Courier_Rides_Min_Fields = {
  __typename?: "courier_rides_min_fields";
  color?: Maybe<Scalars["String"]["output"]>;
  courier_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  license_plate_number?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "courier_rides" */
export type Courier_Rides_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  courier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  license_plate_number?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "courier_rides" */
export type Courier_Rides_Mutation_Response = {
  __typename?: "courier_rides_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Courier_Rides>;
};

/** on_conflict condition type for table "courier_rides" */
export type Courier_Rides_On_Conflict = {
  constraint: Courier_Rides_Constraint;
  update_columns?: Array<Courier_Rides_Update_Column>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** Ordering options when selecting data from "courier_rides". */
export type Courier_Rides_Order_By = {
  color?: InputMaybe<Order_By>;
  courier?: InputMaybe<Couriers_Order_By>;
  courier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  license_plate_number?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  ride_status?: InputMaybe<Ride_Status_Order_By>;
  ride_type?: InputMaybe<Ride_Type_Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: courier_rides */
export type Courier_Rides_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "courier_rides" */
export enum Courier_Rides_Select_Column {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "courier_rides" */
export type Courier_Rides_Set_Input = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  courier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  license_plate_number?: InputMaybe<Scalars["String"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Ride_Status_Enum>;
  type?: InputMaybe<Ride_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "courier_rides" */
export type Courier_Rides_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Courier_Rides_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Courier_Rides_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  courier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  license_plate_number?: InputMaybe<Scalars["String"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Ride_Status_Enum>;
  type?: InputMaybe<Ride_Type_Enum>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "courier_rides" */
export enum Courier_Rides_Update_Column {
  /** column name */
  Color = "color",
  /** column name */
  CourierId = "courier_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LicensePlateNumber = "license_plate_number",
  /** column name */
  Model = "model",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Courier_Rides_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Courier_Rides_Set_Input>;
  /** filter the rows which have to be updated */
  where: Courier_Rides_Bool_Exp;
};

/** columns and relationships of "couriers" */
export type Couriers = {
  __typename?: "couriers";
  DOB?: Maybe<Scalars["date"]["output"]>;
  assigned: Scalars["Boolean"]["output"];
  avatar?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  deliveries: Array<Delivery>;
  /** An aggregate relationship */
  deliveries_aggregate: Delivery_Aggregate;
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  rides: Array<Courier_Rides>;
  /** An aggregate relationship */
  rides_aggregate: Courier_Rides_Aggregate;
};

/** columns and relationships of "couriers" */
export type CouriersDeliveriesArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** columns and relationships of "couriers" */
export type CouriersDeliveries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** columns and relationships of "couriers" */
export type CouriersRidesArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** columns and relationships of "couriers" */
export type CouriersRides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** aggregated selection of "couriers" */
export type Couriers_Aggregate = {
  __typename?: "couriers_aggregate";
  aggregate?: Maybe<Couriers_Aggregate_Fields>;
  nodes: Array<Couriers>;
};

/** aggregate fields of "couriers" */
export type Couriers_Aggregate_Fields = {
  __typename?: "couriers_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Couriers_Max_Fields>;
  min?: Maybe<Couriers_Min_Fields>;
};

/** aggregate fields of "couriers" */
export type Couriers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Couriers_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "couriers". All fields are combined with a logical 'AND'. */
export type Couriers_Bool_Exp = {
  DOB?: InputMaybe<Date_Comparison_Exp>;
  _and?: InputMaybe<Array<Couriers_Bool_Exp>>;
  _not?: InputMaybe<Couriers_Bool_Exp>;
  _or?: InputMaybe<Array<Couriers_Bool_Exp>>;
  assigned?: InputMaybe<Boolean_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deliveries?: InputMaybe<Delivery_Bool_Exp>;
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  rides?: InputMaybe<Courier_Rides_Bool_Exp>;
  rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "couriers" */
export enum Couriers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CouriersPkey = "couriers_pkey",
}

/** input type for inserting data into table "couriers" */
export type Couriers_Insert_Input = {
  DOB?: InputMaybe<Scalars["date"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deliveries?: InputMaybe<Delivery_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  rides?: InputMaybe<Courier_Rides_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Couriers_Max_Fields = {
  __typename?: "couriers_max_fields";
  DOB?: Maybe<Scalars["date"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Couriers_Min_Fields = {
  __typename?: "couriers_min_fields";
  DOB?: Maybe<Scalars["date"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "couriers" */
export type Couriers_Mutation_Response = {
  __typename?: "couriers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Couriers>;
};

/** input type for inserting object relation for remote table "couriers" */
export type Couriers_Obj_Rel_Insert_Input = {
  data: Couriers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Couriers_On_Conflict>;
};

/** on_conflict condition type for table "couriers" */
export type Couriers_On_Conflict = {
  constraint: Couriers_Constraint;
  update_columns?: Array<Couriers_Update_Column>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

/** Ordering options when selecting data from "couriers". */
export type Couriers_Order_By = {
  DOB?: InputMaybe<Order_By>;
  assigned?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Order_By>;
};

/** primary key columns input for table: couriers */
export type Couriers_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "couriers" */
export enum Couriers_Select_Column {
  /** column name */
  Dob = "DOB",
  /** column name */
  Assigned = "assigned",
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
}

/** input type for updating data in table "couriers" */
export type Couriers_Set_Input = {
  DOB?: InputMaybe<Scalars["date"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "couriers" */
export type Couriers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Couriers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Couriers_Stream_Cursor_Value_Input = {
  DOB?: InputMaybe<Scalars["date"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "couriers" */
export enum Couriers_Update_Column {
  /** column name */
  Dob = "DOB",
  /** column name */
  Assigned = "assigned",
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
}

export type Couriers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Couriers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Couriers_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

/** columns and relationships of "delivery" */
export type Delivery = {
  __typename?: "delivery";
  /** An object relationship */
  courier: Couriers;
  courierId: Scalars["uuid"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  delivery_status?: Maybe<Delivery_Status>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  order: Orders;
  orderId: Scalars["uuid"]["output"];
  status?: Maybe<Delivery_Status_Enum>;
};

/** aggregated selection of "delivery" */
export type Delivery_Aggregate = {
  __typename?: "delivery_aggregate";
  aggregate?: Maybe<Delivery_Aggregate_Fields>;
  nodes: Array<Delivery>;
};

export type Delivery_Aggregate_Bool_Exp = {
  count?: InputMaybe<Delivery_Aggregate_Bool_Exp_Count>;
};

export type Delivery_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Delivery_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Delivery_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "delivery" */
export type Delivery_Aggregate_Fields = {
  __typename?: "delivery_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Delivery_Max_Fields>;
  min?: Maybe<Delivery_Min_Fields>;
};

/** aggregate fields of "delivery" */
export type Delivery_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "delivery" */
export type Delivery_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Delivery_Max_Order_By>;
  min?: InputMaybe<Delivery_Min_Order_By>;
};

/** input type for inserting array relation for remote table "delivery" */
export type Delivery_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Delivery_On_Conflict>;
};

/** Boolean expression to filter rows from the table "delivery". All fields are combined with a logical 'AND'. */
export type Delivery_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Bool_Exp>>;
  _not?: InputMaybe<Delivery_Bool_Exp>;
  _or?: InputMaybe<Array<Delivery_Bool_Exp>>;
  courier?: InputMaybe<Couriers_Bool_Exp>;
  courierId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  delivery_status?: InputMaybe<Delivery_Status_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Delivery_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery" */
export enum Delivery_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryPkey = "delivery_pkey",
}

/** input type for inserting data into table "delivery" */
export type Delivery_Insert_Input = {
  courier?: InputMaybe<Couriers_Obj_Rel_Insert_Input>;
  courierId?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  delivery_status?: InputMaybe<Delivery_Status_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Delivery_Status_Enum>;
};

/** aggregate max on columns */
export type Delivery_Max_Fields = {
  __typename?: "delivery_max_fields";
  courierId?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "delivery" */
export type Delivery_Max_Order_By = {
  courierId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Min_Fields = {
  __typename?: "delivery_min_fields";
  courierId?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "delivery" */
export type Delivery_Min_Order_By = {
  courierId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "delivery" */
export type Delivery_Mutation_Response = {
  __typename?: "delivery_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery>;
};

/** on_conflict condition type for table "delivery" */
export type Delivery_On_Conflict = {
  constraint: Delivery_Constraint;
  update_columns?: Array<Delivery_Update_Column>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery". */
export type Delivery_Order_By = {
  courier?: InputMaybe<Couriers_Order_By>;
  courierId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  delivery_status?: InputMaybe<Delivery_Status_Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orderId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "delivery_personnel" */
export type Delivery_Personnel = {
  __typename?: "delivery_personnel";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "delivery_personnel" */
export type Delivery_Personnel_Aggregate = {
  __typename?: "delivery_personnel_aggregate";
  aggregate?: Maybe<Delivery_Personnel_Aggregate_Fields>;
  nodes: Array<Delivery_Personnel>;
};

/** aggregate fields of "delivery_personnel" */
export type Delivery_Personnel_Aggregate_Fields = {
  __typename?: "delivery_personnel_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Delivery_Personnel_Max_Fields>;
  min?: Maybe<Delivery_Personnel_Min_Fields>;
};

/** aggregate fields of "delivery_personnel" */
export type Delivery_Personnel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "delivery_personnel". All fields are combined with a logical 'AND'. */
export type Delivery_Personnel_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Personnel_Bool_Exp>>;
  _not?: InputMaybe<Delivery_Personnel_Bool_Exp>;
  _or?: InputMaybe<Array<Delivery_Personnel_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_personnel" */
export enum Delivery_Personnel_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryPersonnelPkey = "delivery_personnel_pkey",
}

/** input type for inserting data into table "delivery_personnel" */
export type Delivery_Personnel_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Delivery_Personnel_Max_Fields = {
  __typename?: "delivery_personnel_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Delivery_Personnel_Min_Fields = {
  __typename?: "delivery_personnel_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "delivery_personnel" */
export type Delivery_Personnel_Mutation_Response = {
  __typename?: "delivery_personnel_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Personnel>;
};

/** on_conflict condition type for table "delivery_personnel" */
export type Delivery_Personnel_On_Conflict = {
  constraint: Delivery_Personnel_Constraint;
  update_columns?: Array<Delivery_Personnel_Update_Column>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_personnel". */
export type Delivery_Personnel_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: delivery_personnel */
export type Delivery_Personnel_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "delivery_personnel" */
export enum Delivery_Personnel_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "delivery_personnel" */
export type Delivery_Personnel_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "delivery_personnel" */
export type Delivery_Personnel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Personnel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Delivery_Personnel_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "delivery_personnel" */
export enum Delivery_Personnel_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Delivery_Personnel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Personnel_Set_Input>;
  /** filter the rows which have to be updated */
  where: Delivery_Personnel_Bool_Exp;
};

/** primary key columns input for table: delivery */
export type Delivery_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** columns and relationships of "delivery_request" */
export type Delivery_Request = {
  __typename?: "delivery_request";
  created_at: Scalars["timestamptz"]["output"];
  delivery_method?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "delivery_request" */
export type Delivery_Request_Aggregate = {
  __typename?: "delivery_request_aggregate";
  aggregate?: Maybe<Delivery_Request_Aggregate_Fields>;
  nodes: Array<Delivery_Request>;
};

/** aggregate fields of "delivery_request" */
export type Delivery_Request_Aggregate_Fields = {
  __typename?: "delivery_request_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Delivery_Request_Max_Fields>;
  min?: Maybe<Delivery_Request_Min_Fields>;
};

/** aggregate fields of "delivery_request" */
export type Delivery_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "delivery_request". All fields are combined with a logical 'AND'. */
export type Delivery_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Request_Bool_Exp>>;
  _not?: InputMaybe<Delivery_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Delivery_Request_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  delivery_method?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_request" */
export enum Delivery_Request_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryRequestPkey = "delivery_request_pkey",
}

/** input type for inserting data into table "delivery_request" */
export type Delivery_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  delivery_method?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Delivery_Request_Max_Fields = {
  __typename?: "delivery_request_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  delivery_method?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Delivery_Request_Min_Fields = {
  __typename?: "delivery_request_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  delivery_method?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "delivery_request" */
export type Delivery_Request_Mutation_Response = {
  __typename?: "delivery_request_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Request>;
};

/** on_conflict condition type for table "delivery_request" */
export type Delivery_Request_On_Conflict = {
  constraint: Delivery_Request_Constraint;
  update_columns?: Array<Delivery_Request_Update_Column>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_request". */
export type Delivery_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  delivery_method?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: delivery_request */
export type Delivery_Request_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "delivery_request" */
export enum Delivery_Request_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeliveryMethod = "delivery_method",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "delivery_request" */
export type Delivery_Request_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  delivery_method?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "delivery_request" */
export type Delivery_Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Delivery_Request_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  delivery_method?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "delivery_request" */
export enum Delivery_Request_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeliveryMethod = "delivery_method",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Delivery_Request_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: Delivery_Request_Bool_Exp;
};

/** select columns of table "delivery" */
export enum Delivery_Select_Column {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

/** input type for updating data in table "delivery" */
export type Delivery_Set_Input = {
  courierId?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Delivery_Status_Enum>;
};

/** columns and relationships of "delivery_status" */
export type Delivery_Status = {
  __typename?: "delivery_status";
  /** An array relationship */
  deliveries: Array<Delivery>;
  /** An aggregate relationship */
  deliveries_aggregate: Delivery_Aggregate;
  status: Scalars["String"]["output"];
};

/** columns and relationships of "delivery_status" */
export type Delivery_StatusDeliveriesArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** columns and relationships of "delivery_status" */
export type Delivery_StatusDeliveries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** aggregated selection of "delivery_status" */
export type Delivery_Status_Aggregate = {
  __typename?: "delivery_status_aggregate";
  aggregate?: Maybe<Delivery_Status_Aggregate_Fields>;
  nodes: Array<Delivery_Status>;
};

/** aggregate fields of "delivery_status" */
export type Delivery_Status_Aggregate_Fields = {
  __typename?: "delivery_status_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Delivery_Status_Max_Fields>;
  min?: Maybe<Delivery_Status_Min_Fields>;
};

/** aggregate fields of "delivery_status" */
export type Delivery_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "delivery_status". All fields are combined with a logical 'AND'. */
export type Delivery_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Status_Bool_Exp>>;
  _not?: InputMaybe<Delivery_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Delivery_Status_Bool_Exp>>;
  deliveries?: InputMaybe<Delivery_Bool_Exp>;
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_status" */
export enum Delivery_Status_Constraint {
  /** unique or primary key constraint on columns "status" */
  DeliveryStatusPkey = "delivery_status_pkey",
}

export enum Delivery_Status_Enum {
  Active = "active",
  Pending = "pending",
}

/** Boolean expression to compare columns of type "delivery_status_enum". All fields are combined with logical 'AND'. */
export type Delivery_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Delivery_Status_Enum>;
  _in?: InputMaybe<Array<Delivery_Status_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Delivery_Status_Enum>;
  _nin?: InputMaybe<Array<Delivery_Status_Enum>>;
};

/** input type for inserting data into table "delivery_status" */
export type Delivery_Status_Insert_Input = {
  deliveries?: InputMaybe<Delivery_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Delivery_Status_Max_Fields = {
  __typename?: "delivery_status_max_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Delivery_Status_Min_Fields = {
  __typename?: "delivery_status_min_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "delivery_status" */
export type Delivery_Status_Mutation_Response = {
  __typename?: "delivery_status_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Status>;
};

/** input type for inserting object relation for remote table "delivery_status" */
export type Delivery_Status_Obj_Rel_Insert_Input = {
  data: Delivery_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Delivery_Status_On_Conflict>;
};

/** on_conflict condition type for table "delivery_status" */
export type Delivery_Status_On_Conflict = {
  constraint: Delivery_Status_Constraint;
  update_columns?: Array<Delivery_Status_Update_Column>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_status". */
export type Delivery_Status_Order_By = {
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: delivery_status */
export type Delivery_Status_Pk_Columns_Input = {
  status: Scalars["String"]["input"];
};

/** select columns of table "delivery_status" */
export enum Delivery_Status_Select_Column {
  /** column name */
  Status = "status",
}

/** input type for updating data in table "delivery_status" */
export type Delivery_Status_Set_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "delivery_status" */
export type Delivery_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Delivery_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "delivery_status" */
export enum Delivery_Status_Update_Column {
  /** column name */
  Status = "status",
}

export type Delivery_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Delivery_Status_Bool_Exp;
};

/** Streaming cursor of the table "delivery" */
export type Delivery_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Delivery_Stream_Cursor_Value_Input = {
  courierId?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Delivery_Status_Enum>;
};

/** update columns of table "delivery" */
export enum Delivery_Update_Column {
  /** column name */
  CourierId = "courierId",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Status = "status",
}

export type Delivery_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Set_Input>;
  /** filter the rows which have to be updated */
  where: Delivery_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

/** columns and relationships of "geography_columns" */
export type Geography_Columns = {
  __typename?: "geography_columns";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  f_geography_column?: Maybe<Scalars["name"]["output"]>;
  f_table_catalog?: Maybe<Scalars["name"]["output"]>;
  f_table_name?: Maybe<Scalars["name"]["output"]>;
  f_table_schema?: Maybe<Scalars["name"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "geography_columns" */
export type Geography_Columns_Aggregate = {
  __typename?: "geography_columns_aggregate";
  aggregate?: Maybe<Geography_Columns_Aggregate_Fields>;
  nodes: Array<Geography_Columns>;
};

/** aggregate fields of "geography_columns" */
export type Geography_Columns_Aggregate_Fields = {
  __typename?: "geography_columns_aggregate_fields";
  avg?: Maybe<Geography_Columns_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Geography_Columns_Max_Fields>;
  min?: Maybe<Geography_Columns_Min_Fields>;
  stddev?: Maybe<Geography_Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Geography_Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geography_Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Geography_Columns_Sum_Fields>;
  var_pop?: Maybe<Geography_Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Geography_Columns_Var_Samp_Fields>;
  variance?: Maybe<Geography_Columns_Variance_Fields>;
};

/** aggregate fields of "geography_columns" */
export type Geography_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Geography_Columns_Avg_Fields = {
  __typename?: "geography_columns_avg_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "geography_columns". All fields are combined with a logical 'AND'. */
export type Geography_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Geography_Columns_Bool_Exp>>;
  _not?: InputMaybe<Geography_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Geography_Columns_Bool_Exp>>;
  coord_dimension?: InputMaybe<Int_Comparison_Exp>;
  f_geography_column?: InputMaybe<Name_Comparison_Exp>;
  f_table_catalog?: InputMaybe<Name_Comparison_Exp>;
  f_table_name?: InputMaybe<Name_Comparison_Exp>;
  f_table_schema?: InputMaybe<Name_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Geography_Columns_Max_Fields = {
  __typename?: "geography_columns_max_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Geography_Columns_Min_Fields = {
  __typename?: "geography_columns_min_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** Ordering options when selecting data from "geography_columns". */
export type Geography_Columns_Order_By = {
  coord_dimension?: InputMaybe<Order_By>;
  f_geography_column?: InputMaybe<Order_By>;
  f_table_catalog?: InputMaybe<Order_By>;
  f_table_name?: InputMaybe<Order_By>;
  f_table_schema?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "geography_columns" */
export enum Geography_Columns_Select_Column {
  /** column name */
  CoordDimension = "coord_dimension",
  /** column name */
  FGeographyColumn = "f_geography_column",
  /** column name */
  FTableCatalog = "f_table_catalog",
  /** column name */
  FTableName = "f_table_name",
  /** column name */
  FTableSchema = "f_table_schema",
  /** column name */
  Srid = "srid",
  /** column name */
  Type = "type",
}

/** aggregate stddev on columns */
export type Geography_Columns_Stddev_Fields = {
  __typename?: "geography_columns_stddev_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Geography_Columns_Stddev_Pop_Fields = {
  __typename?: "geography_columns_stddev_pop_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Geography_Columns_Stddev_Samp_Fields = {
  __typename?: "geography_columns_stddev_samp_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "geography_columns" */
export type Geography_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Geography_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Geography_Columns_Stream_Cursor_Value_Input = {
  coord_dimension?: InputMaybe<Scalars["Int"]["input"]>;
  f_geography_column?: InputMaybe<Scalars["name"]["input"]>;
  f_table_catalog?: InputMaybe<Scalars["name"]["input"]>;
  f_table_name?: InputMaybe<Scalars["name"]["input"]>;
  f_table_schema?: InputMaybe<Scalars["name"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Geography_Columns_Sum_Fields = {
  __typename?: "geography_columns_sum_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate var_pop on columns */
export type Geography_Columns_Var_Pop_Fields = {
  __typename?: "geography_columns_var_pop_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Geography_Columns_Var_Samp_Fields = {
  __typename?: "geography_columns_var_samp_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Geography_Columns_Variance_Fields = {
  __typename?: "geography_columns_variance_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "geometry_columns" */
export type Geometry_Columns = {
  __typename?: "geometry_columns";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  f_geometry_column?: Maybe<Scalars["name"]["output"]>;
  f_table_catalog?: Maybe<Scalars["String"]["output"]>;
  f_table_name?: Maybe<Scalars["name"]["output"]>;
  f_table_schema?: Maybe<Scalars["name"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "geometry_columns" */
export type Geometry_Columns_Aggregate = {
  __typename?: "geometry_columns_aggregate";
  aggregate?: Maybe<Geometry_Columns_Aggregate_Fields>;
  nodes: Array<Geometry_Columns>;
};

/** aggregate fields of "geometry_columns" */
export type Geometry_Columns_Aggregate_Fields = {
  __typename?: "geometry_columns_aggregate_fields";
  avg?: Maybe<Geometry_Columns_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Geometry_Columns_Max_Fields>;
  min?: Maybe<Geometry_Columns_Min_Fields>;
  stddev?: Maybe<Geometry_Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Geometry_Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geometry_Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Geometry_Columns_Sum_Fields>;
  var_pop?: Maybe<Geometry_Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Geometry_Columns_Var_Samp_Fields>;
  variance?: Maybe<Geometry_Columns_Variance_Fields>;
};

/** aggregate fields of "geometry_columns" */
export type Geometry_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Geometry_Columns_Avg_Fields = {
  __typename?: "geometry_columns_avg_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "geometry_columns". All fields are combined with a logical 'AND'. */
export type Geometry_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Geometry_Columns_Bool_Exp>>;
  _not?: InputMaybe<Geometry_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Geometry_Columns_Bool_Exp>>;
  coord_dimension?: InputMaybe<Int_Comparison_Exp>;
  f_geometry_column?: InputMaybe<Name_Comparison_Exp>;
  f_table_catalog?: InputMaybe<String_Comparison_Exp>;
  f_table_name?: InputMaybe<Name_Comparison_Exp>;
  f_table_schema?: InputMaybe<Name_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "geometry_columns" */
export type Geometry_Columns_Inc_Input = {
  coord_dimension?: InputMaybe<Scalars["Int"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "geometry_columns" */
export type Geometry_Columns_Insert_Input = {
  coord_dimension?: InputMaybe<Scalars["Int"]["input"]>;
  f_geometry_column?: InputMaybe<Scalars["name"]["input"]>;
  f_table_catalog?: InputMaybe<Scalars["String"]["input"]>;
  f_table_name?: InputMaybe<Scalars["name"]["input"]>;
  f_table_schema?: InputMaybe<Scalars["name"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Geometry_Columns_Max_Fields = {
  __typename?: "geometry_columns_max_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  f_table_catalog?: Maybe<Scalars["String"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Geometry_Columns_Min_Fields = {
  __typename?: "geometry_columns_min_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  f_table_catalog?: Maybe<Scalars["String"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "geometry_columns" */
export type Geometry_Columns_Mutation_Response = {
  __typename?: "geometry_columns_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Geometry_Columns>;
};

/** Ordering options when selecting data from "geometry_columns". */
export type Geometry_Columns_Order_By = {
  coord_dimension?: InputMaybe<Order_By>;
  f_geometry_column?: InputMaybe<Order_By>;
  f_table_catalog?: InputMaybe<Order_By>;
  f_table_name?: InputMaybe<Order_By>;
  f_table_schema?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "geometry_columns" */
export enum Geometry_Columns_Select_Column {
  /** column name */
  CoordDimension = "coord_dimension",
  /** column name */
  FGeometryColumn = "f_geometry_column",
  /** column name */
  FTableCatalog = "f_table_catalog",
  /** column name */
  FTableName = "f_table_name",
  /** column name */
  FTableSchema = "f_table_schema",
  /** column name */
  Srid = "srid",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "geometry_columns" */
export type Geometry_Columns_Set_Input = {
  coord_dimension?: InputMaybe<Scalars["Int"]["input"]>;
  f_geometry_column?: InputMaybe<Scalars["name"]["input"]>;
  f_table_catalog?: InputMaybe<Scalars["String"]["input"]>;
  f_table_name?: InputMaybe<Scalars["name"]["input"]>;
  f_table_schema?: InputMaybe<Scalars["name"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Geometry_Columns_Stddev_Fields = {
  __typename?: "geometry_columns_stddev_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Geometry_Columns_Stddev_Pop_Fields = {
  __typename?: "geometry_columns_stddev_pop_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Geometry_Columns_Stddev_Samp_Fields = {
  __typename?: "geometry_columns_stddev_samp_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "geometry_columns" */
export type Geometry_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Geometry_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Geometry_Columns_Stream_Cursor_Value_Input = {
  coord_dimension?: InputMaybe<Scalars["Int"]["input"]>;
  f_geometry_column?: InputMaybe<Scalars["name"]["input"]>;
  f_table_catalog?: InputMaybe<Scalars["String"]["input"]>;
  f_table_name?: InputMaybe<Scalars["name"]["input"]>;
  f_table_schema?: InputMaybe<Scalars["name"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Geometry_Columns_Sum_Fields = {
  __typename?: "geometry_columns_sum_fields";
  coord_dimension?: Maybe<Scalars["Int"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
};

export type Geometry_Columns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Geometry_Columns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Geometry_Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Geometry_Columns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Geometry_Columns_Var_Pop_Fields = {
  __typename?: "geometry_columns_var_pop_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Geometry_Columns_Var_Samp_Fields = {
  __typename?: "geometry_columns_var_samp_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Geometry_Columns_Variance_Fields = {
  __typename?: "geometry_columns_variance_fields";
  coord_dimension?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** fields of action: "insertBusinessOrder" */
export type InsertBusinessOrder = {
  __typename?: "insertBusinessOrder";
  /** the time at which this action was created */
  created_at: Scalars["timestamptz"]["output"];
  /** errors related to the invocation */
  errors?: Maybe<Scalars["json"]["output"]>;
  /** the unique id of an action */
  id: Scalars["uuid"]["output"];
  /** the output fields of this action */
  output?: Maybe<InsertBusinessOrderOutput>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: "locations";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: "locations_aggregate";
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: "locations_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = "locations_pkey",
}

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: "locations_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: "locations_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: "locations_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "locations" */
export type Locations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type Locations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Locations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  createAccessToken?: Maybe<CreateAccessTokenResponse>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "agent" */
  delete_agent?: Maybe<Agent_Mutation_Response>;
  /** delete single row from the table: "agent" */
  delete_agent_by_pk?: Maybe<Agent>;
  /** delete data from the table: "agent_type" */
  delete_agent_type?: Maybe<Agent_Type_Mutation_Response>;
  /** delete single row from the table: "agent_type" */
  delete_agent_type_by_pk?: Maybe<Agent_Type>;
  /** delete data from the table: "business" */
  delete_business?: Maybe<Business_Mutation_Response>;
  /** delete single row from the table: "business" */
  delete_business_by_pk?: Maybe<Business>;
  /** delete data from the table: "business_sector" */
  delete_business_sector?: Maybe<Business_Sector_Mutation_Response>;
  /** delete single row from the table: "business_sector" */
  delete_business_sector_by_pk?: Maybe<Business_Sector>;
  /** delete data from the table: "business_type" */
  delete_business_type?: Maybe<Business_Type_Mutation_Response>;
  /** delete single row from the table: "business_type" */
  delete_business_type_by_pk?: Maybe<Business_Type>;
  /** delete data from the table: "contact_details" */
  delete_contact_details?: Maybe<Contact_Details_Mutation_Response>;
  /** delete single row from the table: "contact_details" */
  delete_contact_details_by_pk?: Maybe<Contact_Details>;
  /** delete data from the table: "courier_rides" */
  delete_courier_rides?: Maybe<Courier_Rides_Mutation_Response>;
  /** delete single row from the table: "courier_rides" */
  delete_courier_rides_by_pk?: Maybe<Courier_Rides>;
  /** delete data from the table: "couriers" */
  delete_couriers?: Maybe<Couriers_Mutation_Response>;
  /** delete single row from the table: "couriers" */
  delete_couriers_by_pk?: Maybe<Couriers>;
  /** delete data from the table: "delivery" */
  delete_delivery?: Maybe<Delivery_Mutation_Response>;
  /** delete single row from the table: "delivery" */
  delete_delivery_by_pk?: Maybe<Delivery>;
  /** delete data from the table: "delivery_personnel" */
  delete_delivery_personnel?: Maybe<Delivery_Personnel_Mutation_Response>;
  /** delete single row from the table: "delivery_personnel" */
  delete_delivery_personnel_by_pk?: Maybe<Delivery_Personnel>;
  /** delete data from the table: "delivery_request" */
  delete_delivery_request?: Maybe<Delivery_Request_Mutation_Response>;
  /** delete single row from the table: "delivery_request" */
  delete_delivery_request_by_pk?: Maybe<Delivery_Request>;
  /** delete data from the table: "delivery_status" */
  delete_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** delete single row from the table: "delivery_status" */
  delete_delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** delete data from the table: "geometry_columns" */
  delete_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "order_fulfillment_type" */
  delete_order_fulfillment_type?: Maybe<Order_Fulfillment_Type_Mutation_Response>;
  /** delete single row from the table: "order_fulfillment_type" */
  delete_order_fulfillment_type_by_pk?: Maybe<Order_Fulfillment_Type>;
  /** delete data from the table: "order_item" */
  delete_order_item?: Maybe<Order_Item_Mutation_Response>;
  /** delete single row from the table: "order_item" */
  delete_order_item_by_pk?: Maybe<Order_Item>;
  /** delete data from the table: "order_preference" */
  delete_order_preference?: Maybe<Order_Preference_Mutation_Response>;
  /** delete single row from the table: "order_preference" */
  delete_order_preference_by_pk?: Maybe<Order_Preference>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "order_supplier" */
  delete_order_supplier?: Maybe<Order_Supplier_Mutation_Response>;
  /** delete single row from the table: "order_supplier" */
  delete_order_supplier_by_pk?: Maybe<Order_Supplier>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "registeration_channel_type" */
  delete_registeration_channel_type?: Maybe<Registeration_Channel_Type_Mutation_Response>;
  /** delete single row from the table: "registeration_channel_type" */
  delete_registeration_channel_type_by_pk?: Maybe<Registeration_Channel_Type>;
  /** delete data from the table: "reports" */
  delete_reports?: Maybe<Reports_Mutation_Response>;
  /** delete single row from the table: "reports" */
  delete_reports_by_pk?: Maybe<Reports>;
  /** delete data from the table: "ride_status" */
  delete_ride_status?: Maybe<Ride_Status_Mutation_Response>;
  /** delete single row from the table: "ride_status" */
  delete_ride_status_by_pk?: Maybe<Ride_Status>;
  /** delete data from the table: "ride_type" */
  delete_ride_type?: Maybe<Ride_Type_Mutation_Response>;
  /** delete single row from the table: "ride_type" */
  delete_ride_type_by_pk?: Maybe<Ride_Type>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "spatial_ref_sys" */
  delete_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** delete single row from the table: "spatial_ref_sys" */
  delete_spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** delete data from the table: "supplier_categories_enum" */
  delete_supplier_categories_enum?: Maybe<Supplier_Categories_Enum_Mutation_Response>;
  /** delete single row from the table: "supplier_categories_enum" */
  delete_supplier_categories_enum_by_pk?: Maybe<Supplier_Categories_Enum>;
  /** delete data from the table: "supplier_service_zone" */
  delete_supplier_service_zone?: Maybe<Supplier_Service_Zone_Mutation_Response>;
  /** delete single row from the table: "supplier_service_zone" */
  delete_supplier_service_zone_by_pk?: Maybe<Supplier_Service_Zone>;
  /** delete data from the table: "suppliers" */
  delete_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** delete single row from the table: "suppliers" */
  delete_suppliers_by_pk?: Maybe<Suppliers>;
  /** delete data from the table: "suppliers_categories" */
  delete_suppliers_categories?: Maybe<Suppliers_Categories_Mutation_Response>;
  /** delete single row from the table: "suppliers_categories" */
  delete_suppliers_categories_by_pk?: Maybe<Suppliers_Categories>;
  /** delete data from the table: "user_invites" */
  delete_user_invites?: Maybe<User_Invites_Mutation_Response>;
  /** delete single row from the table: "user_invites" */
  delete_user_invites_by_pk?: Maybe<User_Invites>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** delete data from the table: "work_schedules" */
  delete_work_schedules?: Maybe<Work_Schedules_Mutation_Response>;
  /** delete single row from the table: "work_schedules" */
  delete_work_schedules_by_pk?: Maybe<Work_Schedules>;
  /** delete data from the table: "work_shifts" */
  delete_work_shifts?: Maybe<Work_Shifts_Mutation_Response>;
  /** delete single row from the table: "work_shifts" */
  delete_work_shifts_by_pk?: Maybe<Work_Shifts>;
  /** Place order action */
  insertBusinessOrder: Scalars["uuid"]["output"];
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "agent" */
  insert_agent?: Maybe<Agent_Mutation_Response>;
  /** insert a single row into the table: "agent" */
  insert_agent_one?: Maybe<Agent>;
  /** insert data into the table: "agent_type" */
  insert_agent_type?: Maybe<Agent_Type_Mutation_Response>;
  /** insert a single row into the table: "agent_type" */
  insert_agent_type_one?: Maybe<Agent_Type>;
  /** insert data into the table: "business" */
  insert_business?: Maybe<Business_Mutation_Response>;
  /** insert a single row into the table: "business" */
  insert_business_one?: Maybe<Business>;
  /** insert data into the table: "business_sector" */
  insert_business_sector?: Maybe<Business_Sector_Mutation_Response>;
  /** insert a single row into the table: "business_sector" */
  insert_business_sector_one?: Maybe<Business_Sector>;
  /** insert data into the table: "business_type" */
  insert_business_type?: Maybe<Business_Type_Mutation_Response>;
  /** insert a single row into the table: "business_type" */
  insert_business_type_one?: Maybe<Business_Type>;
  /** insert data into the table: "contact_details" */
  insert_contact_details?: Maybe<Contact_Details_Mutation_Response>;
  /** insert a single row into the table: "contact_details" */
  insert_contact_details_one?: Maybe<Contact_Details>;
  /** insert data into the table: "courier_rides" */
  insert_courier_rides?: Maybe<Courier_Rides_Mutation_Response>;
  /** insert a single row into the table: "courier_rides" */
  insert_courier_rides_one?: Maybe<Courier_Rides>;
  /** insert data into the table: "couriers" */
  insert_couriers?: Maybe<Couriers_Mutation_Response>;
  /** insert a single row into the table: "couriers" */
  insert_couriers_one?: Maybe<Couriers>;
  /** insert data into the table: "delivery" */
  insert_delivery?: Maybe<Delivery_Mutation_Response>;
  /** insert a single row into the table: "delivery" */
  insert_delivery_one?: Maybe<Delivery>;
  /** insert data into the table: "delivery_personnel" */
  insert_delivery_personnel?: Maybe<Delivery_Personnel_Mutation_Response>;
  /** insert a single row into the table: "delivery_personnel" */
  insert_delivery_personnel_one?: Maybe<Delivery_Personnel>;
  /** insert data into the table: "delivery_request" */
  insert_delivery_request?: Maybe<Delivery_Request_Mutation_Response>;
  /** insert a single row into the table: "delivery_request" */
  insert_delivery_request_one?: Maybe<Delivery_Request>;
  /** insert data into the table: "delivery_status" */
  insert_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** insert a single row into the table: "delivery_status" */
  insert_delivery_status_one?: Maybe<Delivery_Status>;
  /** insert data into the table: "geometry_columns" */
  insert_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** insert a single row into the table: "geometry_columns" */
  insert_geometry_columns_one?: Maybe<Geometry_Columns>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "order_fulfillment_type" */
  insert_order_fulfillment_type?: Maybe<Order_Fulfillment_Type_Mutation_Response>;
  /** insert a single row into the table: "order_fulfillment_type" */
  insert_order_fulfillment_type_one?: Maybe<Order_Fulfillment_Type>;
  /** insert data into the table: "order_item" */
  insert_order_item?: Maybe<Order_Item_Mutation_Response>;
  /** insert a single row into the table: "order_item" */
  insert_order_item_one?: Maybe<Order_Item>;
  /** insert data into the table: "order_preference" */
  insert_order_preference?: Maybe<Order_Preference_Mutation_Response>;
  /** insert a single row into the table: "order_preference" */
  insert_order_preference_one?: Maybe<Order_Preference>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "order_supplier" */
  insert_order_supplier?: Maybe<Order_Supplier_Mutation_Response>;
  /** insert a single row into the table: "order_supplier" */
  insert_order_supplier_one?: Maybe<Order_Supplier>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "registeration_channel_type" */
  insert_registeration_channel_type?: Maybe<Registeration_Channel_Type_Mutation_Response>;
  /** insert a single row into the table: "registeration_channel_type" */
  insert_registeration_channel_type_one?: Maybe<Registeration_Channel_Type>;
  /** insert data into the table: "reports" */
  insert_reports?: Maybe<Reports_Mutation_Response>;
  /** insert a single row into the table: "reports" */
  insert_reports_one?: Maybe<Reports>;
  /** insert data into the table: "ride_status" */
  insert_ride_status?: Maybe<Ride_Status_Mutation_Response>;
  /** insert a single row into the table: "ride_status" */
  insert_ride_status_one?: Maybe<Ride_Status>;
  /** insert data into the table: "ride_type" */
  insert_ride_type?: Maybe<Ride_Type_Mutation_Response>;
  /** insert a single row into the table: "ride_type" */
  insert_ride_type_one?: Maybe<Ride_Type>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "spatial_ref_sys" */
  insert_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** insert a single row into the table: "spatial_ref_sys" */
  insert_spatial_ref_sys_one?: Maybe<Spatial_Ref_Sys>;
  /** insert data into the table: "supplier_categories_enum" */
  insert_supplier_categories_enum?: Maybe<Supplier_Categories_Enum_Mutation_Response>;
  /** insert a single row into the table: "supplier_categories_enum" */
  insert_supplier_categories_enum_one?: Maybe<Supplier_Categories_Enum>;
  /** insert data into the table: "supplier_service_zone" */
  insert_supplier_service_zone?: Maybe<Supplier_Service_Zone_Mutation_Response>;
  /** insert a single row into the table: "supplier_service_zone" */
  insert_supplier_service_zone_one?: Maybe<Supplier_Service_Zone>;
  /** insert data into the table: "suppliers" */
  insert_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** insert data into the table: "suppliers_categories" */
  insert_suppliers_categories?: Maybe<Suppliers_Categories_Mutation_Response>;
  /** insert a single row into the table: "suppliers_categories" */
  insert_suppliers_categories_one?: Maybe<Suppliers_Categories>;
  /** insert a single row into the table: "suppliers" */
  insert_suppliers_one?: Maybe<Suppliers>;
  /** insert data into the table: "user_invites" */
  insert_user_invites?: Maybe<User_Invites_Mutation_Response>;
  /** insert a single row into the table: "user_invites" */
  insert_user_invites_one?: Maybe<User_Invites>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** insert data into the table: "work_schedules" */
  insert_work_schedules?: Maybe<Work_Schedules_Mutation_Response>;
  /** insert a single row into the table: "work_schedules" */
  insert_work_schedules_one?: Maybe<Work_Schedules>;
  /** insert data into the table: "work_shifts" */
  insert_work_shifts?: Maybe<Work_Shifts_Mutation_Response>;
  /** insert a single row into the table: "work_shifts" */
  insert_work_shifts_one?: Maybe<Work_Shifts>;
  /** An action to register a new business */
  registerBusinessAction: Scalars["uuid"]["output"];
  /** An action to register a new user */
  registerUserAction: Scalars["uuid"]["output"];
  requestToPay?: Maybe<RequestToPayResponse>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update multiples rows of table: "addresses" */
  update_addresses_many?: Maybe<Array<Maybe<Addresses_Mutation_Response>>>;
  /** update data of the table: "agent" */
  update_agent?: Maybe<Agent_Mutation_Response>;
  /** update single row of the table: "agent" */
  update_agent_by_pk?: Maybe<Agent>;
  /** update multiples rows of table: "agent" */
  update_agent_many?: Maybe<Array<Maybe<Agent_Mutation_Response>>>;
  /** update data of the table: "agent_type" */
  update_agent_type?: Maybe<Agent_Type_Mutation_Response>;
  /** update single row of the table: "agent_type" */
  update_agent_type_by_pk?: Maybe<Agent_Type>;
  /** update multiples rows of table: "agent_type" */
  update_agent_type_many?: Maybe<Array<Maybe<Agent_Type_Mutation_Response>>>;
  /** update data of the table: "business" */
  update_business?: Maybe<Business_Mutation_Response>;
  /** update single row of the table: "business" */
  update_business_by_pk?: Maybe<Business>;
  /** update multiples rows of table: "business" */
  update_business_many?: Maybe<Array<Maybe<Business_Mutation_Response>>>;
  /** update data of the table: "business_sector" */
  update_business_sector?: Maybe<Business_Sector_Mutation_Response>;
  /** update single row of the table: "business_sector" */
  update_business_sector_by_pk?: Maybe<Business_Sector>;
  /** update multiples rows of table: "business_sector" */
  update_business_sector_many?: Maybe<
    Array<Maybe<Business_Sector_Mutation_Response>>
  >;
  /** update data of the table: "business_type" */
  update_business_type?: Maybe<Business_Type_Mutation_Response>;
  /** update single row of the table: "business_type" */
  update_business_type_by_pk?: Maybe<Business_Type>;
  /** update multiples rows of table: "business_type" */
  update_business_type_many?: Maybe<
    Array<Maybe<Business_Type_Mutation_Response>>
  >;
  /** update data of the table: "contact_details" */
  update_contact_details?: Maybe<Contact_Details_Mutation_Response>;
  /** update single row of the table: "contact_details" */
  update_contact_details_by_pk?: Maybe<Contact_Details>;
  /** update multiples rows of table: "contact_details" */
  update_contact_details_many?: Maybe<
    Array<Maybe<Contact_Details_Mutation_Response>>
  >;
  /** update data of the table: "courier_rides" */
  update_courier_rides?: Maybe<Courier_Rides_Mutation_Response>;
  /** update single row of the table: "courier_rides" */
  update_courier_rides_by_pk?: Maybe<Courier_Rides>;
  /** update multiples rows of table: "courier_rides" */
  update_courier_rides_many?: Maybe<
    Array<Maybe<Courier_Rides_Mutation_Response>>
  >;
  /** update data of the table: "couriers" */
  update_couriers?: Maybe<Couriers_Mutation_Response>;
  /** update single row of the table: "couriers" */
  update_couriers_by_pk?: Maybe<Couriers>;
  /** update multiples rows of table: "couriers" */
  update_couriers_many?: Maybe<Array<Maybe<Couriers_Mutation_Response>>>;
  /** update data of the table: "delivery" */
  update_delivery?: Maybe<Delivery_Mutation_Response>;
  /** update single row of the table: "delivery" */
  update_delivery_by_pk?: Maybe<Delivery>;
  /** update multiples rows of table: "delivery" */
  update_delivery_many?: Maybe<Array<Maybe<Delivery_Mutation_Response>>>;
  /** update data of the table: "delivery_personnel" */
  update_delivery_personnel?: Maybe<Delivery_Personnel_Mutation_Response>;
  /** update single row of the table: "delivery_personnel" */
  update_delivery_personnel_by_pk?: Maybe<Delivery_Personnel>;
  /** update multiples rows of table: "delivery_personnel" */
  update_delivery_personnel_many?: Maybe<
    Array<Maybe<Delivery_Personnel_Mutation_Response>>
  >;
  /** update data of the table: "delivery_request" */
  update_delivery_request?: Maybe<Delivery_Request_Mutation_Response>;
  /** update single row of the table: "delivery_request" */
  update_delivery_request_by_pk?: Maybe<Delivery_Request>;
  /** update multiples rows of table: "delivery_request" */
  update_delivery_request_many?: Maybe<
    Array<Maybe<Delivery_Request_Mutation_Response>>
  >;
  /** update data of the table: "delivery_status" */
  update_delivery_status?: Maybe<Delivery_Status_Mutation_Response>;
  /** update single row of the table: "delivery_status" */
  update_delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** update multiples rows of table: "delivery_status" */
  update_delivery_status_many?: Maybe<
    Array<Maybe<Delivery_Status_Mutation_Response>>
  >;
  /** update data of the table: "geometry_columns" */
  update_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** update multiples rows of table: "geometry_columns" */
  update_geometry_columns_many?: Maybe<
    Array<Maybe<Geometry_Columns_Mutation_Response>>
  >;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update multiples rows of table: "locations" */
  update_locations_many?: Maybe<Array<Maybe<Locations_Mutation_Response>>>;
  /** update data of the table: "order_fulfillment_type" */
  update_order_fulfillment_type?: Maybe<Order_Fulfillment_Type_Mutation_Response>;
  /** update single row of the table: "order_fulfillment_type" */
  update_order_fulfillment_type_by_pk?: Maybe<Order_Fulfillment_Type>;
  /** update multiples rows of table: "order_fulfillment_type" */
  update_order_fulfillment_type_many?: Maybe<
    Array<Maybe<Order_Fulfillment_Type_Mutation_Response>>
  >;
  /** update data of the table: "order_item" */
  update_order_item?: Maybe<Order_Item_Mutation_Response>;
  /** update single row of the table: "order_item" */
  update_order_item_by_pk?: Maybe<Order_Item>;
  /** update multiples rows of table: "order_item" */
  update_order_item_many?: Maybe<Array<Maybe<Order_Item_Mutation_Response>>>;
  /** update data of the table: "order_preference" */
  update_order_preference?: Maybe<Order_Preference_Mutation_Response>;
  /** update single row of the table: "order_preference" */
  update_order_preference_by_pk?: Maybe<Order_Preference>;
  /** update multiples rows of table: "order_preference" */
  update_order_preference_many?: Maybe<
    Array<Maybe<Order_Preference_Mutation_Response>>
  >;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update multiples rows of table: "order_status" */
  update_order_status_many?: Maybe<
    Array<Maybe<Order_Status_Mutation_Response>>
  >;
  /** update data of the table: "order_supplier" */
  update_order_supplier?: Maybe<Order_Supplier_Mutation_Response>;
  /** update single row of the table: "order_supplier" */
  update_order_supplier_by_pk?: Maybe<Order_Supplier>;
  /** update multiples rows of table: "order_supplier" */
  update_order_supplier_many?: Maybe<
    Array<Maybe<Order_Supplier_Mutation_Response>>
  >;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "registeration_channel_type" */
  update_registeration_channel_type?: Maybe<Registeration_Channel_Type_Mutation_Response>;
  /** update single row of the table: "registeration_channel_type" */
  update_registeration_channel_type_by_pk?: Maybe<Registeration_Channel_Type>;
  /** update multiples rows of table: "registeration_channel_type" */
  update_registeration_channel_type_many?: Maybe<
    Array<Maybe<Registeration_Channel_Type_Mutation_Response>>
  >;
  /** update data of the table: "reports" */
  update_reports?: Maybe<Reports_Mutation_Response>;
  /** update single row of the table: "reports" */
  update_reports_by_pk?: Maybe<Reports>;
  /** update multiples rows of table: "reports" */
  update_reports_many?: Maybe<Array<Maybe<Reports_Mutation_Response>>>;
  /** update data of the table: "ride_status" */
  update_ride_status?: Maybe<Ride_Status_Mutation_Response>;
  /** update single row of the table: "ride_status" */
  update_ride_status_by_pk?: Maybe<Ride_Status>;
  /** update multiples rows of table: "ride_status" */
  update_ride_status_many?: Maybe<Array<Maybe<Ride_Status_Mutation_Response>>>;
  /** update data of the table: "ride_type" */
  update_ride_type?: Maybe<Ride_Type_Mutation_Response>;
  /** update single row of the table: "ride_type" */
  update_ride_type_by_pk?: Maybe<Ride_Type>;
  /** update multiples rows of table: "ride_type" */
  update_ride_type_many?: Maybe<Array<Maybe<Ride_Type_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "spatial_ref_sys" */
  update_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** update single row of the table: "spatial_ref_sys" */
  update_spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** update multiples rows of table: "spatial_ref_sys" */
  update_spatial_ref_sys_many?: Maybe<
    Array<Maybe<Spatial_Ref_Sys_Mutation_Response>>
  >;
  /** update data of the table: "supplier_categories_enum" */
  update_supplier_categories_enum?: Maybe<Supplier_Categories_Enum_Mutation_Response>;
  /** update single row of the table: "supplier_categories_enum" */
  update_supplier_categories_enum_by_pk?: Maybe<Supplier_Categories_Enum>;
  /** update multiples rows of table: "supplier_categories_enum" */
  update_supplier_categories_enum_many?: Maybe<
    Array<Maybe<Supplier_Categories_Enum_Mutation_Response>>
  >;
  /** update data of the table: "supplier_service_zone" */
  update_supplier_service_zone?: Maybe<Supplier_Service_Zone_Mutation_Response>;
  /** update single row of the table: "supplier_service_zone" */
  update_supplier_service_zone_by_pk?: Maybe<Supplier_Service_Zone>;
  /** update multiples rows of table: "supplier_service_zone" */
  update_supplier_service_zone_many?: Maybe<
    Array<Maybe<Supplier_Service_Zone_Mutation_Response>>
  >;
  /** update data of the table: "suppliers" */
  update_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** update single row of the table: "suppliers" */
  update_suppliers_by_pk?: Maybe<Suppliers>;
  /** update data of the table: "suppliers_categories" */
  update_suppliers_categories?: Maybe<Suppliers_Categories_Mutation_Response>;
  /** update single row of the table: "suppliers_categories" */
  update_suppliers_categories_by_pk?: Maybe<Suppliers_Categories>;
  /** update multiples rows of table: "suppliers_categories" */
  update_suppliers_categories_many?: Maybe<
    Array<Maybe<Suppliers_Categories_Mutation_Response>>
  >;
  /** update multiples rows of table: "suppliers" */
  update_suppliers_many?: Maybe<Array<Maybe<Suppliers_Mutation_Response>>>;
  /** update data of the table: "user_invites" */
  update_user_invites?: Maybe<User_Invites_Mutation_Response>;
  /** update single row of the table: "user_invites" */
  update_user_invites_by_pk?: Maybe<User_Invites>;
  /** update multiples rows of table: "user_invites" */
  update_user_invites_many?: Maybe<
    Array<Maybe<User_Invites_Mutation_Response>>
  >;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<
    Array<Maybe<Verification_Tokens_Mutation_Response>>
  >;
  /** update data of the table: "work_schedules" */
  update_work_schedules?: Maybe<Work_Schedules_Mutation_Response>;
  /** update single row of the table: "work_schedules" */
  update_work_schedules_by_pk?: Maybe<Work_Schedules>;
  /** update multiples rows of table: "work_schedules" */
  update_work_schedules_many?: Maybe<
    Array<Maybe<Work_Schedules_Mutation_Response>>
  >;
  /** update data of the table: "work_shifts" */
  update_work_shifts?: Maybe<Work_Shifts_Mutation_Response>;
  /** update single row of the table: "work_shifts" */
  update_work_shifts_by_pk?: Maybe<Work_Shifts>;
  /** update multiples rows of table: "work_shifts" */
  update_work_shifts_many?: Maybe<Array<Maybe<Work_Shifts_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_AgentArgs = {
  where: Agent_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Agent_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Agent_TypeArgs = {
  where: Agent_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Agent_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_BusinessArgs = {
  where: Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Business_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Business_SectorArgs = {
  where: Business_Sector_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Business_Sector_By_PkArgs = {
  text: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Business_TypeArgs = {
  where: Business_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Business_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Contact_DetailsArgs = {
  where: Contact_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contact_Details_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Courier_RidesArgs = {
  where: Courier_Rides_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Courier_Rides_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_CouriersArgs = {
  where: Couriers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Couriers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_DeliveryArgs = {
  where: Delivery_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Delivery_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Delivery_PersonnelArgs = {
  where: Delivery_Personnel_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Delivery_Personnel_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Delivery_RequestArgs = {
  where: Delivery_Request_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Delivery_Request_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Delivery_StatusArgs = {
  where: Delivery_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Delivery_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Geometry_ColumnsArgs = {
  where: Geometry_Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Order_Fulfillment_TypeArgs = {
  where: Order_Fulfillment_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Fulfillment_Type_By_PkArgs = {
  fulfillment_type: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Order_ItemArgs = {
  where: Order_Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Item_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Order_PreferenceArgs = {
  where: Order_Preference_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Preference_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Order_SupplierArgs = {
  where: Order_Supplier_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Supplier_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Registeration_Channel_TypeArgs = {
  where: Registeration_Channel_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Registeration_Channel_Type_By_PkArgs = {
  channel: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ReportsArgs = {
  where: Reports_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Reports_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ride_StatusArgs = {
  where: Ride_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ride_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ride_TypeArgs = {
  where: Ride_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ride_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Spatial_Ref_SysArgs = {
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Spatial_Ref_Sys_By_PkArgs = {
  srid: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Supplier_Categories_EnumArgs = {
  where: Supplier_Categories_Enum_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Supplier_Categories_Enum_By_PkArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Supplier_Service_ZoneArgs = {
  where: Supplier_Service_Zone_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Supplier_Service_Zone_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_SuppliersArgs = {
  where: Suppliers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Suppliers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Suppliers_CategoriesArgs = {
  where: Suppliers_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Suppliers_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_InvitesArgs = {
  where: User_Invites_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Invites_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  role: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Work_SchedulesArgs = {
  where: Work_Schedules_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Work_Schedules_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Work_ShiftsArgs = {
  where: Work_Shifts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Work_Shifts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsertBusinessOrderArgs = {
  object: InsertBusinessOrderOrdersInsertInput;
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AgentArgs = {
  objects: Array<Agent_Insert_Input>;
  on_conflict?: InputMaybe<Agent_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Agent_OneArgs = {
  object: Agent_Insert_Input;
  on_conflict?: InputMaybe<Agent_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Agent_TypeArgs = {
  objects: Array<Agent_Type_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Agent_Type_OneArgs = {
  object: Agent_Type_Insert_Input;
  on_conflict?: InputMaybe<Agent_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BusinessArgs = {
  objects: Array<Business_Insert_Input>;
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_OneArgs = {
  object: Business_Insert_Input;
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_SectorArgs = {
  objects: Array<Business_Sector_Insert_Input>;
  on_conflict?: InputMaybe<Business_Sector_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_Sector_OneArgs = {
  object: Business_Sector_Insert_Input;
  on_conflict?: InputMaybe<Business_Sector_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_TypeArgs = {
  objects: Array<Business_Type_Insert_Input>;
  on_conflict?: InputMaybe<Business_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_Type_OneArgs = {
  object: Business_Type_Insert_Input;
  on_conflict?: InputMaybe<Business_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contact_DetailsArgs = {
  objects: Array<Contact_Details_Insert_Input>;
  on_conflict?: InputMaybe<Contact_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contact_Details_OneArgs = {
  object: Contact_Details_Insert_Input;
  on_conflict?: InputMaybe<Contact_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Courier_RidesArgs = {
  objects: Array<Courier_Rides_Insert_Input>;
  on_conflict?: InputMaybe<Courier_Rides_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Courier_Rides_OneArgs = {
  object: Courier_Rides_Insert_Input;
  on_conflict?: InputMaybe<Courier_Rides_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CouriersArgs = {
  objects: Array<Couriers_Insert_Input>;
  on_conflict?: InputMaybe<Couriers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Couriers_OneArgs = {
  object: Couriers_Insert_Input;
  on_conflict?: InputMaybe<Couriers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DeliveryArgs = {
  objects: Array<Delivery_Insert_Input>;
  on_conflict?: InputMaybe<Delivery_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_OneArgs = {
  object: Delivery_Insert_Input;
  on_conflict?: InputMaybe<Delivery_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_PersonnelArgs = {
  objects: Array<Delivery_Personnel_Insert_Input>;
  on_conflict?: InputMaybe<Delivery_Personnel_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_Personnel_OneArgs = {
  object: Delivery_Personnel_Insert_Input;
  on_conflict?: InputMaybe<Delivery_Personnel_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_RequestArgs = {
  objects: Array<Delivery_Request_Insert_Input>;
  on_conflict?: InputMaybe<Delivery_Request_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_Request_OneArgs = {
  object: Delivery_Request_Insert_Input;
  on_conflict?: InputMaybe<Delivery_Request_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_StatusArgs = {
  objects: Array<Delivery_Status_Insert_Input>;
  on_conflict?: InputMaybe<Delivery_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_Status_OneArgs = {
  object: Delivery_Status_Insert_Input;
  on_conflict?: InputMaybe<Delivery_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Geometry_ColumnsArgs = {
  objects: Array<Geometry_Columns_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Geometry_Columns_OneArgs = {
  object: Geometry_Columns_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Fulfillment_TypeArgs = {
  objects: Array<Order_Fulfillment_Type_Insert_Input>;
  on_conflict?: InputMaybe<Order_Fulfillment_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Fulfillment_Type_OneArgs = {
  object: Order_Fulfillment_Type_Insert_Input;
  on_conflict?: InputMaybe<Order_Fulfillment_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_ItemArgs = {
  objects: Array<Order_Item_Insert_Input>;
  on_conflict?: InputMaybe<Order_Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Item_OneArgs = {
  object: Order_Item_Insert_Input;
  on_conflict?: InputMaybe<Order_Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_PreferenceArgs = {
  objects: Array<Order_Preference_Insert_Input>;
  on_conflict?: InputMaybe<Order_Preference_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Preference_OneArgs = {
  object: Order_Preference_Insert_Input;
  on_conflict?: InputMaybe<Order_Preference_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_SupplierArgs = {
  objects: Array<Order_Supplier_Insert_Input>;
  on_conflict?: InputMaybe<Order_Supplier_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Supplier_OneArgs = {
  object: Order_Supplier_Insert_Input;
  on_conflict?: InputMaybe<Order_Supplier_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registeration_Channel_TypeArgs = {
  objects: Array<Registeration_Channel_Type_Insert_Input>;
  on_conflict?: InputMaybe<Registeration_Channel_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registeration_Channel_Type_OneArgs = {
  object: Registeration_Channel_Type_Insert_Input;
  on_conflict?: InputMaybe<Registeration_Channel_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ReportsArgs = {
  objects: Array<Reports_Insert_Input>;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Reports_OneArgs = {
  object: Reports_Insert_Input;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ride_StatusArgs = {
  objects: Array<Ride_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ride_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ride_Status_OneArgs = {
  object: Ride_Status_Insert_Input;
  on_conflict?: InputMaybe<Ride_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ride_TypeArgs = {
  objects: Array<Ride_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ride_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ride_Type_OneArgs = {
  object: Ride_Type_Insert_Input;
  on_conflict?: InputMaybe<Ride_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Spatial_Ref_SysArgs = {
  objects: Array<Spatial_Ref_Sys_Insert_Input>;
  on_conflict?: InputMaybe<Spatial_Ref_Sys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Spatial_Ref_Sys_OneArgs = {
  object: Spatial_Ref_Sys_Insert_Input;
  on_conflict?: InputMaybe<Spatial_Ref_Sys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Supplier_Categories_EnumArgs = {
  objects: Array<Supplier_Categories_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Supplier_Categories_Enum_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Supplier_Categories_Enum_OneArgs = {
  object: Supplier_Categories_Enum_Insert_Input;
  on_conflict?: InputMaybe<Supplier_Categories_Enum_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Supplier_Service_ZoneArgs = {
  objects: Array<Supplier_Service_Zone_Insert_Input>;
  on_conflict?: InputMaybe<Supplier_Service_Zone_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Supplier_Service_Zone_OneArgs = {
  object: Supplier_Service_Zone_Insert_Input;
  on_conflict?: InputMaybe<Supplier_Service_Zone_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SuppliersArgs = {
  objects: Array<Suppliers_Insert_Input>;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Suppliers_CategoriesArgs = {
  objects: Array<Suppliers_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Suppliers_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Suppliers_Categories_OneArgs = {
  object: Suppliers_Categories_Insert_Input;
  on_conflict?: InputMaybe<Suppliers_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Suppliers_OneArgs = {
  object: Suppliers_Insert_Input;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_InvitesArgs = {
  objects: Array<User_Invites_Insert_Input>;
  on_conflict?: InputMaybe<User_Invites_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Invites_OneArgs = {
  object: User_Invites_Insert_Input;
  on_conflict?: InputMaybe<User_Invites_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Work_SchedulesArgs = {
  objects: Array<Work_Schedules_Insert_Input>;
  on_conflict?: InputMaybe<Work_Schedules_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Work_Schedules_OneArgs = {
  object: Work_Schedules_Insert_Input;
  on_conflict?: InputMaybe<Work_Schedules_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Work_ShiftsArgs = {
  objects: Array<Work_Shifts_Insert_Input>;
  on_conflict?: InputMaybe<Work_Shifts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Work_Shifts_OneArgs = {
  object: Work_Shifts_Insert_Input;
  on_conflict?: InputMaybe<Work_Shifts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootRegisterBusinessActionArgs = {
  object: RegisterBusinessActionBusinessInsertInput;
};

/** mutation root */
export type Mutation_RootRegisterUserActionArgs = {
  object: RegisterUserActionUsersInsertInput;
};

/** mutation root */
export type Mutation_RootRequestToPayArgs = {
  object?: InputMaybe<RequestToPayInput>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: InputMaybe<Addresses_Inc_Input>;
  _set?: InputMaybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: InputMaybe<Addresses_Inc_Input>;
  _set?: InputMaybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Addresses_ManyArgs = {
  updates: Array<Addresses_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AgentArgs = {
  _set?: InputMaybe<Agent_Set_Input>;
  where: Agent_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Agent_By_PkArgs = {
  _set?: InputMaybe<Agent_Set_Input>;
  pk_columns: Agent_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Agent_ManyArgs = {
  updates: Array<Agent_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Agent_TypeArgs = {
  _set?: InputMaybe<Agent_Type_Set_Input>;
  where: Agent_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Agent_Type_By_PkArgs = {
  _set?: InputMaybe<Agent_Type_Set_Input>;
  pk_columns: Agent_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Agent_Type_ManyArgs = {
  updates: Array<Agent_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BusinessArgs = {
  _set?: InputMaybe<Business_Set_Input>;
  where: Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Business_By_PkArgs = {
  _set?: InputMaybe<Business_Set_Input>;
  pk_columns: Business_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Business_ManyArgs = {
  updates: Array<Business_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Business_SectorArgs = {
  _set?: InputMaybe<Business_Sector_Set_Input>;
  where: Business_Sector_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Business_Sector_By_PkArgs = {
  _set?: InputMaybe<Business_Sector_Set_Input>;
  pk_columns: Business_Sector_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Business_Sector_ManyArgs = {
  updates: Array<Business_Sector_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Business_TypeArgs = {
  _set?: InputMaybe<Business_Type_Set_Input>;
  where: Business_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Business_Type_By_PkArgs = {
  _set?: InputMaybe<Business_Type_Set_Input>;
  pk_columns: Business_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Business_Type_ManyArgs = {
  updates: Array<Business_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Contact_DetailsArgs = {
  _set?: InputMaybe<Contact_Details_Set_Input>;
  where: Contact_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contact_Details_By_PkArgs = {
  _set?: InputMaybe<Contact_Details_Set_Input>;
  pk_columns: Contact_Details_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contact_Details_ManyArgs = {
  updates: Array<Contact_Details_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Courier_RidesArgs = {
  _set?: InputMaybe<Courier_Rides_Set_Input>;
  where: Courier_Rides_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Courier_Rides_By_PkArgs = {
  _set?: InputMaybe<Courier_Rides_Set_Input>;
  pk_columns: Courier_Rides_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Courier_Rides_ManyArgs = {
  updates: Array<Courier_Rides_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CouriersArgs = {
  _set?: InputMaybe<Couriers_Set_Input>;
  where: Couriers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Couriers_By_PkArgs = {
  _set?: InputMaybe<Couriers_Set_Input>;
  pk_columns: Couriers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Couriers_ManyArgs = {
  updates: Array<Couriers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DeliveryArgs = {
  _set?: InputMaybe<Delivery_Set_Input>;
  where: Delivery_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_By_PkArgs = {
  _set?: InputMaybe<Delivery_Set_Input>;
  pk_columns: Delivery_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_ManyArgs = {
  updates: Array<Delivery_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_PersonnelArgs = {
  _set?: InputMaybe<Delivery_Personnel_Set_Input>;
  where: Delivery_Personnel_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Personnel_By_PkArgs = {
  _set?: InputMaybe<Delivery_Personnel_Set_Input>;
  pk_columns: Delivery_Personnel_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Personnel_ManyArgs = {
  updates: Array<Delivery_Personnel_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_RequestArgs = {
  _set?: InputMaybe<Delivery_Request_Set_Input>;
  where: Delivery_Request_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Request_By_PkArgs = {
  _set?: InputMaybe<Delivery_Request_Set_Input>;
  pk_columns: Delivery_Request_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Request_ManyArgs = {
  updates: Array<Delivery_Request_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_StatusArgs = {
  _set?: InputMaybe<Delivery_Status_Set_Input>;
  where: Delivery_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Status_By_PkArgs = {
  _set?: InputMaybe<Delivery_Status_Set_Input>;
  pk_columns: Delivery_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Status_ManyArgs = {
  updates: Array<Delivery_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Geometry_ColumnsArgs = {
  _inc?: InputMaybe<Geometry_Columns_Inc_Input>;
  _set?: InputMaybe<Geometry_Columns_Set_Input>;
  where: Geometry_Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Geometry_Columns_ManyArgs = {
  updates: Array<Geometry_Columns_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Locations_ManyArgs = {
  updates: Array<Locations_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Fulfillment_TypeArgs = {
  _set?: InputMaybe<Order_Fulfillment_Type_Set_Input>;
  where: Order_Fulfillment_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Fulfillment_Type_By_PkArgs = {
  _set?: InputMaybe<Order_Fulfillment_Type_Set_Input>;
  pk_columns: Order_Fulfillment_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Fulfillment_Type_ManyArgs = {
  updates: Array<Order_Fulfillment_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_ItemArgs = {
  _inc?: InputMaybe<Order_Item_Inc_Input>;
  _set?: InputMaybe<Order_Item_Set_Input>;
  where: Order_Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Item_By_PkArgs = {
  _inc?: InputMaybe<Order_Item_Inc_Input>;
  _set?: InputMaybe<Order_Item_Set_Input>;
  pk_columns: Order_Item_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Item_ManyArgs = {
  updates: Array<Order_Item_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_PreferenceArgs = {
  _set?: InputMaybe<Order_Preference_Set_Input>;
  where: Order_Preference_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Preference_By_PkArgs = {
  _set?: InputMaybe<Order_Preference_Set_Input>;
  pk_columns: Order_Preference_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Preference_ManyArgs = {
  updates: Array<Order_Preference_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Status_ManyArgs = {
  updates: Array<Order_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_SupplierArgs = {
  _set?: InputMaybe<Order_Supplier_Set_Input>;
  where: Order_Supplier_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Supplier_By_PkArgs = {
  _set?: InputMaybe<Order_Supplier_Set_Input>;
  pk_columns: Order_Supplier_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Supplier_ManyArgs = {
  updates: Array<Order_Supplier_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Registeration_Channel_TypeArgs = {
  _set?: InputMaybe<Registeration_Channel_Type_Set_Input>;
  where: Registeration_Channel_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Registeration_Channel_Type_By_PkArgs = {
  _set?: InputMaybe<Registeration_Channel_Type_Set_Input>;
  pk_columns: Registeration_Channel_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Registeration_Channel_Type_ManyArgs = {
  updates: Array<Registeration_Channel_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ReportsArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  where: Reports_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Reports_By_PkArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  pk_columns: Reports_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Reports_ManyArgs = {
  updates: Array<Reports_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_StatusArgs = {
  _set?: InputMaybe<Ride_Status_Set_Input>;
  where: Ride_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_Status_By_PkArgs = {
  _set?: InputMaybe<Ride_Status_Set_Input>;
  pk_columns: Ride_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_Status_ManyArgs = {
  updates: Array<Ride_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_TypeArgs = {
  _set?: InputMaybe<Ride_Type_Set_Input>;
  where: Ride_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_Type_By_PkArgs = {
  _set?: InputMaybe<Ride_Type_Set_Input>;
  pk_columns: Ride_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ride_Type_ManyArgs = {
  updates: Array<Ride_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_SysArgs = {
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_Sys_By_PkArgs = {
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  pk_columns: Spatial_Ref_Sys_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_Sys_ManyArgs = {
  updates: Array<Spatial_Ref_Sys_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Categories_EnumArgs = {
  _set?: InputMaybe<Supplier_Categories_Enum_Set_Input>;
  where: Supplier_Categories_Enum_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Categories_Enum_By_PkArgs = {
  _set?: InputMaybe<Supplier_Categories_Enum_Set_Input>;
  pk_columns: Supplier_Categories_Enum_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Categories_Enum_ManyArgs = {
  updates: Array<Supplier_Categories_Enum_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Service_ZoneArgs = {
  _inc?: InputMaybe<Supplier_Service_Zone_Inc_Input>;
  _set?: InputMaybe<Supplier_Service_Zone_Set_Input>;
  where: Supplier_Service_Zone_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Service_Zone_By_PkArgs = {
  _inc?: InputMaybe<Supplier_Service_Zone_Inc_Input>;
  _set?: InputMaybe<Supplier_Service_Zone_Set_Input>;
  pk_columns: Supplier_Service_Zone_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_Service_Zone_ManyArgs = {
  updates: Array<Supplier_Service_Zone_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SuppliersArgs = {
  _set?: InputMaybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_By_PkArgs = {
  _set?: InputMaybe<Suppliers_Set_Input>;
  pk_columns: Suppliers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_CategoriesArgs = {
  _set?: InputMaybe<Suppliers_Categories_Set_Input>;
  where: Suppliers_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_Categories_By_PkArgs = {
  _set?: InputMaybe<Suppliers_Categories_Set_Input>;
  pk_columns: Suppliers_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_Categories_ManyArgs = {
  updates: Array<Suppliers_Categories_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_ManyArgs = {
  updates: Array<Suppliers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_InvitesArgs = {
  _set?: InputMaybe<User_Invites_Set_Input>;
  where: User_Invites_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Invites_By_PkArgs = {
  _set?: InputMaybe<User_Invites_Set_Input>;
  pk_columns: User_Invites_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Invites_ManyArgs = {
  updates: Array<User_Invites_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Work_SchedulesArgs = {
  _set?: InputMaybe<Work_Schedules_Set_Input>;
  where: Work_Schedules_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Work_Schedules_By_PkArgs = {
  _set?: InputMaybe<Work_Schedules_Set_Input>;
  pk_columns: Work_Schedules_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Work_Schedules_ManyArgs = {
  updates: Array<Work_Schedules_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Work_ShiftsArgs = {
  _set?: InputMaybe<Work_Shifts_Set_Input>;
  where: Work_Shifts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Work_Shifts_By_PkArgs = {
  _set?: InputMaybe<Work_Shifts_Set_Input>;
  pk_columns: Work_Shifts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Work_Shifts_ManyArgs = {
  updates: Array<Work_Shifts_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["name"]["input"]>;
  _gt?: InputMaybe<Scalars["name"]["input"]>;
  _gte?: InputMaybe<Scalars["name"]["input"]>;
  _in?: InputMaybe<Array<Scalars["name"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["name"]["input"]>;
  _lte?: InputMaybe<Scalars["name"]["input"]>;
  _neq?: InputMaybe<Scalars["name"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["name"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "order_fulfillment_type" */
export type Order_Fulfillment_Type = {
  __typename?: "order_fulfillment_type";
  fulfillment_type: Scalars["String"]["output"];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
};

/** columns and relationships of "order_fulfillment_type" */
export type Order_Fulfillment_TypeOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** columns and relationships of "order_fulfillment_type" */
export type Order_Fulfillment_TypeOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_fulfillment_type" */
export type Order_Fulfillment_Type_Aggregate = {
  __typename?: "order_fulfillment_type_aggregate";
  aggregate?: Maybe<Order_Fulfillment_Type_Aggregate_Fields>;
  nodes: Array<Order_Fulfillment_Type>;
};

/** aggregate fields of "order_fulfillment_type" */
export type Order_Fulfillment_Type_Aggregate_Fields = {
  __typename?: "order_fulfillment_type_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Order_Fulfillment_Type_Max_Fields>;
  min?: Maybe<Order_Fulfillment_Type_Min_Fields>;
};

/** aggregate fields of "order_fulfillment_type" */
export type Order_Fulfillment_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Fulfillment_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "order_fulfillment_type". All fields are combined with a logical 'AND'. */
export type Order_Fulfillment_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Fulfillment_Type_Bool_Exp>>;
  _not?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Fulfillment_Type_Bool_Exp>>;
  fulfillment_type?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "order_fulfillment_type" */
export enum Order_Fulfillment_Type_Constraint {
  /** unique or primary key constraint on columns "fulfillment_type" */
  OrderFulfillmentTypePkey = "order_fulfillment_type_pkey",
}

export enum Order_Fulfillment_Type_Enum {
  Full = "full",
  Partial = "partial",
}

/** Boolean expression to compare columns of type "order_fulfillment_type_enum". All fields are combined with logical 'AND'. */
export type Order_Fulfillment_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Fulfillment_Type_Enum>;
  _in?: InputMaybe<Array<Order_Fulfillment_Type_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Order_Fulfillment_Type_Enum>;
  _nin?: InputMaybe<Array<Order_Fulfillment_Type_Enum>>;
};

/** input type for inserting data into table "order_fulfillment_type" */
export type Order_Fulfillment_Type_Insert_Input = {
  fulfillment_type?: InputMaybe<Scalars["String"]["input"]>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Order_Fulfillment_Type_Max_Fields = {
  __typename?: "order_fulfillment_type_max_fields";
  fulfillment_type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Order_Fulfillment_Type_Min_Fields = {
  __typename?: "order_fulfillment_type_min_fields";
  fulfillment_type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "order_fulfillment_type" */
export type Order_Fulfillment_Type_Mutation_Response = {
  __typename?: "order_fulfillment_type_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Fulfillment_Type>;
};

/** input type for inserting object relation for remote table "order_fulfillment_type" */
export type Order_Fulfillment_Type_Obj_Rel_Insert_Input = {
  data: Order_Fulfillment_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Fulfillment_Type_On_Conflict>;
};

/** on_conflict condition type for table "order_fulfillment_type" */
export type Order_Fulfillment_Type_On_Conflict = {
  constraint: Order_Fulfillment_Type_Constraint;
  update_columns?: Array<Order_Fulfillment_Type_Update_Column>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "order_fulfillment_type". */
export type Order_Fulfillment_Type_Order_By = {
  fulfillment_type?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: order_fulfillment_type */
export type Order_Fulfillment_Type_Pk_Columns_Input = {
  fulfillment_type: Scalars["String"]["input"];
};

/** select columns of table "order_fulfillment_type" */
export enum Order_Fulfillment_Type_Select_Column {
  /** column name */
  FulfillmentType = "fulfillment_type",
}

/** input type for updating data in table "order_fulfillment_type" */
export type Order_Fulfillment_Type_Set_Input = {
  fulfillment_type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "order_fulfillment_type" */
export type Order_Fulfillment_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Fulfillment_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Fulfillment_Type_Stream_Cursor_Value_Input = {
  fulfillment_type?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "order_fulfillment_type" */
export enum Order_Fulfillment_Type_Update_Column {
  /** column name */
  FulfillmentType = "fulfillment_type",
}

export type Order_Fulfillment_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Fulfillment_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Fulfillment_Type_Bool_Exp;
};

/** columns and relationships of "order_item" */
export type Order_Item = {
  __typename?: "order_item";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  order?: Maybe<Orders>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  price: Scalars["Int"]["output"];
  /** An object relationship */
  product: Products;
  productId: Scalars["uuid"]["output"];
  quantity: Scalars["Int"]["output"];
};

/** aggregated selection of "order_item" */
export type Order_Item_Aggregate = {
  __typename?: "order_item_aggregate";
  aggregate?: Maybe<Order_Item_Aggregate_Fields>;
  nodes: Array<Order_Item>;
};

export type Order_Item_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Item_Aggregate_Bool_Exp_Count>;
};

export type Order_Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Order_Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_item" */
export type Order_Item_Aggregate_Fields = {
  __typename?: "order_item_aggregate_fields";
  avg?: Maybe<Order_Item_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Order_Item_Max_Fields>;
  min?: Maybe<Order_Item_Min_Fields>;
  stddev?: Maybe<Order_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Item_Sum_Fields>;
  var_pop?: Maybe<Order_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Item_Var_Samp_Fields>;
  variance?: Maybe<Order_Item_Variance_Fields>;
};

/** aggregate fields of "order_item" */
export type Order_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "order_item" */
export type Order_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Item_Max_Order_By>;
  min?: InputMaybe<Order_Item_Min_Order_By>;
  stddev?: InputMaybe<Order_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_item" */
export type Order_Item_Arr_Rel_Insert_Input = {
  data: Array<Order_Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Item_Avg_Fields = {
  __typename?: "order_item_avg_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "order_item" */
export type Order_Item_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_item". All fields are combined with a logical 'AND'. */
export type Order_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Item_Bool_Exp>>;
  _not?: InputMaybe<Order_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Item_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  productId?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_item" */
export enum Order_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = "order_items_pkey",
}

/** input type for incrementing numeric columns in table "order_item" */
export type Order_Item_Inc_Input = {
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "order_item" */
export type Order_Item_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  productId?: InputMaybe<Scalars["uuid"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Order_Item_Max_Fields = {
  __typename?: "order_item_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  productId?: Maybe<Scalars["uuid"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "order_item" */
export type Order_Item_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Item_Min_Fields = {
  __typename?: "order_item_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  productId?: Maybe<Scalars["uuid"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "order_item" */
export type Order_Item_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_item" */
export type Order_Item_Mutation_Response = {
  __typename?: "order_item_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Item>;
};

/** on_conflict condition type for table "order_item" */
export type Order_Item_On_Conflict = {
  constraint: Order_Item_Constraint;
  update_columns?: Array<Order_Item_Update_Column>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "order_item". */
export type Order_Item_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_item */
export type Order_Item_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "order_item" */
export enum Order_Item_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

/** input type for updating data in table "order_item" */
export type Order_Item_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  productId?: InputMaybe<Scalars["uuid"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Order_Item_Stddev_Fields = {
  __typename?: "order_item_stddev_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "order_item" */
export type Order_Item_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Item_Stddev_Pop_Fields = {
  __typename?: "order_item_stddev_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "order_item" */
export type Order_Item_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Item_Stddev_Samp_Fields = {
  __typename?: "order_item_stddev_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "order_item" */
export type Order_Item_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_item" */
export type Order_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Item_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  productId?: InputMaybe<Scalars["uuid"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Order_Item_Sum_Fields = {
  __typename?: "order_item_sum_fields";
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "order_item" */
export type Order_Item_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_item" */
export enum Order_Item_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Price = "price",
  /** column name */
  ProductId = "productId",
  /** column name */
  Quantity = "quantity",
}

export type Order_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Item_Var_Pop_Fields = {
  __typename?: "order_item_var_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "order_item" */
export type Order_Item_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Item_Var_Samp_Fields = {
  __typename?: "order_item_var_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "order_item" */
export type Order_Item_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Item_Variance_Fields = {
  __typename?: "order_item_variance_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "order_item" */
export type Order_Item_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "order_preference" */
export type Order_Preference = {
  __typename?: "order_preference";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "order_preference" */
export type Order_Preference_Aggregate = {
  __typename?: "order_preference_aggregate";
  aggregate?: Maybe<Order_Preference_Aggregate_Fields>;
  nodes: Array<Order_Preference>;
};

/** aggregate fields of "order_preference" */
export type Order_Preference_Aggregate_Fields = {
  __typename?: "order_preference_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Order_Preference_Max_Fields>;
  min?: Maybe<Order_Preference_Min_Fields>;
};

/** aggregate fields of "order_preference" */
export type Order_Preference_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Preference_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "order_preference". All fields are combined with a logical 'AND'. */
export type Order_Preference_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Preference_Bool_Exp>>;
  _not?: InputMaybe<Order_Preference_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Preference_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_preference" */
export enum Order_Preference_Constraint {
  /** unique or primary key constraint on columns "id" */
  PreferenceTablePkey = "preference_table_pkey",
}

/** input type for inserting data into table "order_preference" */
export type Order_Preference_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Order_Preference_Max_Fields = {
  __typename?: "order_preference_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Order_Preference_Min_Fields = {
  __typename?: "order_preference_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "order_preference" */
export type Order_Preference_Mutation_Response = {
  __typename?: "order_preference_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Preference>;
};

/** on_conflict condition type for table "order_preference" */
export type Order_Preference_On_Conflict = {
  constraint: Order_Preference_Constraint;
  update_columns?: Array<Order_Preference_Update_Column>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

/** Ordering options when selecting data from "order_preference". */
export type Order_Preference_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_preference */
export type Order_Preference_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "order_preference" */
export enum Order_Preference_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "order_preference" */
export type Order_Preference_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "order_preference" */
export type Order_Preference_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Preference_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Preference_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "order_preference" */
export enum Order_Preference_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Order_Preference_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Preference_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Preference_Bool_Exp;
};

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: "order_status";
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  status: Scalars["String"]["output"];
};

/** columns and relationships of "order_status" */
export type Order_StatusOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** columns and relationships of "order_status" */
export type Order_StatusOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: "order_status_aggregate";
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: "order_status_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint on columns "status" */
  OrderStatusPkey = "order_status_pkey",
}

export enum Order_Status_Enum {
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Enroute = "ENROUTE",
  Fulfilled = "FULFILLED",
  Pending = "PENDING",
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: "order_status_max_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: "order_status_min_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: "order_status_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** input type for inserting object relation for remote table "order_status" */
export type Order_Status_Obj_Rel_Insert_Input = {
  data: Order_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};

/** on_conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  status: Scalars["String"]["input"];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Status = "status",
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "order_status" */
export type Order_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Status = "status",
}

export type Order_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Status_Bool_Exp;
};

/** columns and relationships of "order_supplier" */
export type Order_Supplier = {
  __typename?: "order_supplier";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  order: Orders;
  order_id: Scalars["uuid"]["output"];
  /** An object relationship */
  supplier: Suppliers;
  supplierId: Scalars["uuid"]["output"];
};

/** aggregated selection of "order_supplier" */
export type Order_Supplier_Aggregate = {
  __typename?: "order_supplier_aggregate";
  aggregate?: Maybe<Order_Supplier_Aggregate_Fields>;
  nodes: Array<Order_Supplier>;
};

export type Order_Supplier_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Supplier_Aggregate_Bool_Exp_Count>;
};

export type Order_Supplier_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Order_Supplier_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_supplier" */
export type Order_Supplier_Aggregate_Fields = {
  __typename?: "order_supplier_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Order_Supplier_Max_Fields>;
  min?: Maybe<Order_Supplier_Min_Fields>;
};

/** aggregate fields of "order_supplier" */
export type Order_Supplier_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "order_supplier" */
export type Order_Supplier_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Supplier_Max_Order_By>;
  min?: InputMaybe<Order_Supplier_Min_Order_By>;
};

/** input type for inserting array relation for remote table "order_supplier" */
export type Order_Supplier_Arr_Rel_Insert_Input = {
  data: Array<Order_Supplier_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Supplier_On_Conflict>;
};

/** Boolean expression to filter rows from the table "order_supplier". All fields are combined with a logical 'AND'. */
export type Order_Supplier_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Supplier_Bool_Exp>>;
  _not?: InputMaybe<Order_Supplier_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Supplier_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  supplier?: InputMaybe<Suppliers_Bool_Exp>;
  supplierId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_supplier" */
export enum Order_Supplier_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderSupplierPkey = "order_supplier_pkey",
}

/** input type for inserting data into table "order_supplier" */
export type Order_Supplier_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<Suppliers_Obj_Rel_Insert_Input>;
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Order_Supplier_Max_Fields = {
  __typename?: "order_supplier_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  order_id?: Maybe<Scalars["uuid"]["output"]>;
  supplierId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "order_supplier" */
export type Order_Supplier_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  supplierId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Supplier_Min_Fields = {
  __typename?: "order_supplier_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  order_id?: Maybe<Scalars["uuid"]["output"]>;
  supplierId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "order_supplier" */
export type Order_Supplier_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  supplierId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_supplier" */
export type Order_Supplier_Mutation_Response = {
  __typename?: "order_supplier_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Supplier>;
};

/** on_conflict condition type for table "order_supplier" */
export type Order_Supplier_On_Conflict = {
  constraint: Order_Supplier_Constraint;
  update_columns?: Array<Order_Supplier_Update_Column>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

/** Ordering options when selecting data from "order_supplier". */
export type Order_Supplier_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Suppliers_Order_By>;
  supplierId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_supplier */
export type Order_Supplier_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "order_supplier" */
export enum Order_Supplier_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

/** input type for updating data in table "order_supplier" */
export type Order_Supplier_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "order_supplier" */
export type Order_Supplier_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Supplier_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Supplier_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  order_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "order_supplier" */
export enum Order_Supplier_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  SupplierId = "supplierId",
}

export type Order_Supplier_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Supplier_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Supplier_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: "orders";
  /** An object relationship */
  agent?: Maybe<Agent>;
  /** An object relationship */
  business?: Maybe<Business>;
  created_at: Scalars["timestamptz"]["output"];
  customerId?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  deliveries: Array<Delivery>;
  /** An aggregate relationship */
  deliveries_aggregate: Delivery_Aggregate;
  destination?: Maybe<Scalars["String"]["output"]>;
  fulfillment_type?: Maybe<Order_Fulfillment_Type_Enum>;
  id: Scalars["uuid"]["output"];
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  order_fulfillment_type?: Maybe<Order_Fulfillment_Type>;
  /** An array relationship */
  order_items: Array<Order_Item>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Item_Aggregate;
  /** An object relationship */
  order_status?: Maybe<Order_Status>;
  /** An array relationship */
  order_suppliers: Array<Order_Supplier>;
  /** An aggregate relationship */
  order_suppliers_aggregate: Order_Supplier_Aggregate;
  origin?: Maybe<Scalars["String"]["output"]>;
  processedBy?: Maybe<Scalars["uuid"]["output"]>;
  status?: Maybe<Order_Status_Enum>;
};

/** columns and relationships of "orders" */
export type OrdersDeliveriesArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersDeliveries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersOrder_SuppliersArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersOrder_Suppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: "orders_aggregate";
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: "orders_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  agent?: InputMaybe<Agent_Bool_Exp>;
  business?: InputMaybe<Business_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customerId?: InputMaybe<Uuid_Comparison_Exp>;
  deliveries?: InputMaybe<Delivery_Bool_Exp>;
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Bool_Exp>;
  destination?: InputMaybe<String_Comparison_Exp>;
  fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  order_fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
  order_items?: InputMaybe<Order_Item_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Item_Aggregate_Bool_Exp>;
  order_status?: InputMaybe<Order_Status_Bool_Exp>;
  order_suppliers?: InputMaybe<Order_Supplier_Bool_Exp>;
  order_suppliers_aggregate?: InputMaybe<Order_Supplier_Aggregate_Bool_Exp>;
  origin?: InputMaybe<String_Comparison_Exp>;
  processedBy?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = "orders_pkey",
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  agent?: InputMaybe<Agent_Obj_Rel_Insert_Input>;
  business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  deliveries?: InputMaybe<Delivery_Arr_Rel_Insert_Input>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  order_fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Obj_Rel_Insert_Input>;
  order_items?: InputMaybe<Order_Item_Arr_Rel_Insert_Input>;
  order_status?: InputMaybe<Order_Status_Obj_Rel_Insert_Input>;
  order_suppliers?: InputMaybe<Order_Supplier_Arr_Rel_Insert_Input>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: "orders_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  customerId?: Maybe<Scalars["uuid"]["output"]>;
  destination?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  origin?: Maybe<Scalars["String"]["output"]>;
  processedBy?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customerId?: InputMaybe<Order_By>;
  destination?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  origin?: InputMaybe<Order_By>;
  processedBy?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: "orders_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  customerId?: Maybe<Scalars["uuid"]["output"]>;
  destination?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  orderId?: Maybe<Scalars["uuid"]["output"]>;
  origin?: Maybe<Scalars["String"]["output"]>;
  processedBy?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customerId?: InputMaybe<Order_By>;
  destination?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  origin?: InputMaybe<Order_By>;
  processedBy?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: "orders_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  agent?: InputMaybe<Agent_Order_By>;
  business?: InputMaybe<Business_Order_By>;
  created_at?: InputMaybe<Order_By>;
  customerId?: InputMaybe<Order_By>;
  deliveries_aggregate?: InputMaybe<Delivery_Aggregate_Order_By>;
  destination?: InputMaybe<Order_By>;
  fulfillment_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  order_fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Order_By>;
  order_items_aggregate?: InputMaybe<Order_Item_Aggregate_Order_By>;
  order_status?: InputMaybe<Order_Status_Order_By>;
  order_suppliers_aggregate?: InputMaybe<Order_Supplier_Aggregate_Order_By>;
  origin?: InputMaybe<Order_By>;
  processedBy?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  fulfillment_type?: InputMaybe<Order_Fulfillment_Type_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  orderId?: InputMaybe<Scalars["uuid"]["input"]>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CustomerId = "customerId",
  /** column name */
  Destination = "destination",
  /** column name */
  FulfillmentType = "fulfillment_type",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  Origin = "origin",
  /** column name */
  ProcessedBy = "processedBy",
  /** column name */
  Status = "status",
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: "products";
  created_at: Scalars["timestamptz"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["uuid"]["output"];
  inStock: Scalars["Boolean"]["output"];
  mainImage?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  order_items: Array<Order_Item>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Item_Aggregate;
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity: Scalars["Int"]["output"];
  /** An object relationship */
  supplier?: Maybe<Suppliers>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** columns and relationships of "products" */
export type ProductsOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: "products_aggregate";
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Bool_And = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: "products_aggregate_fields";
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: "products_avg_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inStock?: InputMaybe<Boolean_Comparison_Exp>;
  mainImage?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_items?: InputMaybe<Order_Item_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Item_Aggregate_Bool_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  supplier?: InputMaybe<Suppliers_Bool_Exp>;
  supplier_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = "products_pkey",
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  mainImage?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_items?: InputMaybe<Order_Item_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  supplier?: InputMaybe<Suppliers_Obj_Rel_Insert_Input>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: "products_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  mainImage?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mainImage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: "products_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  mainImage?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mainImage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: "products_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inStock?: InputMaybe<Order_By>;
  mainImage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Order_Item_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Suppliers_Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  MainImage = "mainImage",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

/** select "products_aggregate_bool_exp_bool_and_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  InStock = "inStock",
}

/** select "products_aggregate_bool_exp_bool_or_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  InStock = "inStock",
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  mainImage?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: "products_stddev_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: "products_stddev_pop_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: "products_stddev_samp_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  mainImage?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: "products_sum_fields";
  discount?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  InStock = "inStock",
  /** column name */
  MainImage = "mainImage",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SupplierId = "supplier_id",
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: "products_var_pop_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: "products_var_samp_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: "products_variance_fields";
  discount?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  discount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: "query_root";
  accountBalance?: Maybe<AccountBalanceResponse>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  address?: Maybe<Address>;
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "agent" */
  agent: Array<Agent>;
  /** fetch aggregated fields from the table: "agent" */
  agent_aggregate: Agent_Aggregate;
  /** fetch data from the table: "agent" using primary key columns */
  agent_by_pk?: Maybe<Agent>;
  /** fetch data from the table: "agent_type" */
  agent_type: Array<Agent_Type>;
  /** fetch aggregated fields from the table: "agent_type" */
  agent_type_aggregate: Agent_Type_Aggregate;
  /** fetch data from the table: "agent_type" using primary key columns */
  agent_type_by_pk?: Maybe<Agent_Type>;
  basicUserInfo?: Maybe<BasicUserInfoResponse>;
  /** fetch data from the table: "business" */
  business: Array<Business>;
  /** fetch aggregated fields from the table: "business" */
  business_aggregate: Business_Aggregate;
  /** fetch data from the table: "business" using primary key columns */
  business_by_pk?: Maybe<Business>;
  /** fetch data from the table: "business_sector" */
  business_sector: Array<Business_Sector>;
  /** fetch aggregated fields from the table: "business_sector" */
  business_sector_aggregate: Business_Sector_Aggregate;
  /** fetch data from the table: "business_sector" using primary key columns */
  business_sector_by_pk?: Maybe<Business_Sector>;
  /** fetch data from the table: "business_type" */
  business_type: Array<Business_Type>;
  /** fetch aggregated fields from the table: "business_type" */
  business_type_aggregate: Business_Type_Aggregate;
  /** fetch data from the table: "business_type" using primary key columns */
  business_type_by_pk?: Maybe<Business_Type>;
  /** fetch data from the table: "contact_details" */
  contact_details: Array<Contact_Details>;
  /** fetch aggregated fields from the table: "contact_details" */
  contact_details_aggregate: Contact_Details_Aggregate;
  /** fetch data from the table: "contact_details" using primary key columns */
  contact_details_by_pk?: Maybe<Contact_Details>;
  coords?: Maybe<LocationByCoords>;
  /** An array relationship */
  courier_rides: Array<Courier_Rides>;
  /** An aggregate relationship */
  courier_rides_aggregate: Courier_Rides_Aggregate;
  /** fetch data from the table: "courier_rides" using primary key columns */
  courier_rides_by_pk?: Maybe<Courier_Rides>;
  /** fetch data from the table: "couriers" */
  couriers: Array<Couriers>;
  /** fetch aggregated fields from the table: "couriers" */
  couriers_aggregate: Couriers_Aggregate;
  /** fetch data from the table: "couriers" using primary key columns */
  couriers_by_pk?: Maybe<Couriers>;
  /** fetch data from the table: "delivery" */
  delivery: Array<Delivery>;
  /** fetch aggregated fields from the table: "delivery" */
  delivery_aggregate: Delivery_Aggregate;
  /** fetch data from the table: "delivery" using primary key columns */
  delivery_by_pk?: Maybe<Delivery>;
  /** fetch data from the table: "delivery_personnel" */
  delivery_personnel: Array<Delivery_Personnel>;
  /** fetch aggregated fields from the table: "delivery_personnel" */
  delivery_personnel_aggregate: Delivery_Personnel_Aggregate;
  /** fetch data from the table: "delivery_personnel" using primary key columns */
  delivery_personnel_by_pk?: Maybe<Delivery_Personnel>;
  /** fetch data from the table: "delivery_request" */
  delivery_request: Array<Delivery_Request>;
  /** fetch aggregated fields from the table: "delivery_request" */
  delivery_request_aggregate: Delivery_Request_Aggregate;
  /** fetch data from the table: "delivery_request" using primary key columns */
  delivery_request_by_pk?: Maybe<Delivery_Request>;
  /** fetch data from the table: "delivery_status" */
  delivery_status: Array<Delivery_Status>;
  /** fetch aggregated fields from the table: "delivery_status" */
  delivery_status_aggregate: Delivery_Status_Aggregate;
  /** fetch data from the table: "delivery_status" using primary key columns */
  delivery_status_by_pk?: Maybe<Delivery_Status>;
  directions?: Maybe<Directions>;
  /** fetch data from the table: "geography_columns" */
  geography_columns: Array<Geography_Columns>;
  /** fetch aggregated fields from the table: "geography_columns" */
  geography_columns_aggregate: Geography_Columns_Aggregate;
  /** fetch data from the table: "geometry_columns" */
  geometry_columns: Array<Geometry_Columns>;
  /** fetch aggregated fields from the table: "geometry_columns" */
  geometry_columns_aggregate: Geometry_Columns_Aggregate;
  /** Place order action */
  insertBusinessOrder?: Maybe<InsertBusinessOrder>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "order_fulfillment_type" */
  order_fulfillment_type: Array<Order_Fulfillment_Type>;
  /** fetch aggregated fields from the table: "order_fulfillment_type" */
  order_fulfillment_type_aggregate: Order_Fulfillment_Type_Aggregate;
  /** fetch data from the table: "order_fulfillment_type" using primary key columns */
  order_fulfillment_type_by_pk?: Maybe<Order_Fulfillment_Type>;
  /** fetch data from the table: "order_item" */
  order_item: Array<Order_Item>;
  /** fetch aggregated fields from the table: "order_item" */
  order_item_aggregate: Order_Item_Aggregate;
  /** fetch data from the table: "order_item" using primary key columns */
  order_item_by_pk?: Maybe<Order_Item>;
  /** fetch data from the table: "order_preference" */
  order_preference: Array<Order_Preference>;
  /** fetch aggregated fields from the table: "order_preference" */
  order_preference_aggregate: Order_Preference_Aggregate;
  /** fetch data from the table: "order_preference" using primary key columns */
  order_preference_by_pk?: Maybe<Order_Preference>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "order_supplier" */
  order_supplier: Array<Order_Supplier>;
  /** fetch aggregated fields from the table: "order_supplier" */
  order_supplier_aggregate: Order_Supplier_Aggregate;
  /** fetch data from the table: "order_supplier" using primary key columns */
  order_supplier_by_pk?: Maybe<Order_Supplier>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  paymentStatus?: Maybe<PaymentStatusResponse>;
  places?: Maybe<Array<Maybe<Places>>>;
  preApprovalStatus?: Maybe<PreApprovalStatusResponse>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An action to register a new business */
  registerBusinessAction?: Maybe<RegisterBusinessAction>;
  /** An action to register a new user */
  registerUserAction?: Maybe<RegisterUserAction>;
  /** fetch data from the table: "registeration_channel_type" */
  registeration_channel_type: Array<Registeration_Channel_Type>;
  /** fetch aggregated fields from the table: "registeration_channel_type" */
  registeration_channel_type_aggregate: Registeration_Channel_Type_Aggregate;
  /** fetch data from the table: "registeration_channel_type" using primary key columns */
  registeration_channel_type_by_pk?: Maybe<Registeration_Channel_Type>;
  /** fetch data from the table: "reports" */
  reports: Array<Reports>;
  /** fetch aggregated fields from the table: "reports" */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  requestToPayTransactionStatus?: Maybe<RequestToPayTransactionStatusResponse>;
  /** fetch data from the table: "ride_status" */
  ride_status: Array<Ride_Status>;
  /** fetch aggregated fields from the table: "ride_status" */
  ride_status_aggregate: Ride_Status_Aggregate;
  /** fetch data from the table: "ride_status" using primary key columns */
  ride_status_by_pk?: Maybe<Ride_Status>;
  /** fetch data from the table: "ride_type" */
  ride_type: Array<Ride_Type>;
  /** fetch aggregated fields from the table: "ride_type" */
  ride_type_aggregate: Ride_Type_Aggregate;
  /** fetch data from the table: "ride_type" using primary key columns */
  ride_type_by_pk?: Maybe<Ride_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "spatial_ref_sys" */
  spatial_ref_sys: Array<Spatial_Ref_Sys>;
  /** fetch aggregated fields from the table: "spatial_ref_sys" */
  spatial_ref_sys_aggregate: Spatial_Ref_Sys_Aggregate;
  /** fetch data from the table: "spatial_ref_sys" using primary key columns */
  spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** fetch data from the table: "supplier_categories_enum" */
  supplier_categories_enum: Array<Supplier_Categories_Enum>;
  /** fetch aggregated fields from the table: "supplier_categories_enum" */
  supplier_categories_enum_aggregate: Supplier_Categories_Enum_Aggregate;
  /** fetch data from the table: "supplier_categories_enum" using primary key columns */
  supplier_categories_enum_by_pk?: Maybe<Supplier_Categories_Enum>;
  /** fetch data from the table: "supplier_service_zone" */
  supplier_service_zone: Array<Supplier_Service_Zone>;
  /** fetch aggregated fields from the table: "supplier_service_zone" */
  supplier_service_zone_aggregate: Supplier_Service_Zone_Aggregate;
  /** fetch data from the table: "supplier_service_zone" using primary key columns */
  supplier_service_zone_by_pk?: Maybe<Supplier_Service_Zone>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** An array relationship */
  suppliers_categories: Array<Suppliers_Categories>;
  /** An aggregate relationship */
  suppliers_categories_aggregate: Suppliers_Categories_Aggregate;
  /** fetch data from the table: "suppliers_categories" using primary key columns */
  suppliers_categories_by_pk?: Maybe<Suppliers_Categories>;
  userInfoWithConsent?: Maybe<UserInfoWithConsentResponse>;
  /** fetch data from the table: "user_invites" */
  user_invites: Array<User_Invites>;
  /** fetch aggregated fields from the table: "user_invites" */
  user_invites_aggregate: User_Invites_Aggregate;
  /** fetch data from the table: "user_invites" using primary key columns */
  user_invites_by_pk?: Maybe<User_Invites>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table: "work_schedules" */
  work_schedules: Array<Work_Schedules>;
  /** fetch aggregated fields from the table: "work_schedules" */
  work_schedules_aggregate: Work_Schedules_Aggregate;
  /** fetch data from the table: "work_schedules" using primary key columns */
  work_schedules_by_pk?: Maybe<Work_Schedules>;
  /** fetch data from the table: "work_shifts" */
  work_shifts: Array<Work_Shifts>;
  /** fetch aggregated fields from the table: "work_shifts" */
  work_shifts_aggregate: Work_Shifts_Aggregate;
  /** fetch data from the table: "work_shifts" using primary key columns */
  work_shifts_by_pk?: Maybe<Work_Shifts>;
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAddressArgs = {
  lat: Scalars["Float"]["input"];
  lng: Scalars["Float"]["input"];
};

export type Query_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

export type Query_RootAddresses_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Order_By>>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

export type Query_RootAgent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Order_By>>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

export type Query_RootAgent_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAgent_TypeArgs = {
  distinct_on?: InputMaybe<Array<Agent_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Type_Order_By>>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

export type Query_RootAgent_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Type_Order_By>>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

export type Query_RootAgent_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Query_RootBasicUserInfoArgs = {
  accountHolderMSISDN: Scalars["String"]["input"];
};

export type Query_RootBusinessArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Query_RootBusiness_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Query_RootBusiness_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootBusiness_SectorArgs = {
  distinct_on?: InputMaybe<Array<Business_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Sector_Order_By>>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

export type Query_RootBusiness_Sector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Sector_Order_By>>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

export type Query_RootBusiness_Sector_By_PkArgs = {
  text: Scalars["String"]["input"];
};

export type Query_RootBusiness_TypeArgs = {
  distinct_on?: InputMaybe<Array<Business_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Type_Order_By>>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

export type Query_RootBusiness_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Type_Order_By>>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

export type Query_RootBusiness_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Query_RootContact_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Details_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Details_Order_By>>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

export type Query_RootContact_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Details_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Details_Order_By>>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

export type Query_RootContact_Details_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootCoordsArgs = {
  address: Scalars["String"]["input"];
};

export type Query_RootCourier_RidesArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

export type Query_RootCourier_Rides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

export type Query_RootCourier_Rides_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootCouriersArgs = {
  distinct_on?: InputMaybe<Array<Couriers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Couriers_Order_By>>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

export type Query_RootCouriers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Couriers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Couriers_Order_By>>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

export type Query_RootCouriers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDeliveryArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

export type Query_RootDelivery_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

export type Query_RootDelivery_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDelivery_PersonnelArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Personnel_Order_By>>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

export type Query_RootDelivery_Personnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Personnel_Order_By>>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

export type Query_RootDelivery_Personnel_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDelivery_RequestArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Request_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Request_Order_By>>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

export type Query_RootDelivery_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Request_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Request_Order_By>>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

export type Query_RootDelivery_Request_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDelivery_StatusArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Status_Order_By>>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

export type Query_RootDelivery_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Status_Order_By>>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

export type Query_RootDelivery_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Query_RootDirectionsArgs = {
  destination: Scalars["String"]["input"];
  origin: Scalars["String"]["input"];
};

export type Query_RootGeography_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Query_RootGeography_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Query_RootGeometry_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Query_RootGeometry_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Query_RootInsertBusinessOrderArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOrder_Fulfillment_TypeArgs = {
  distinct_on?: InputMaybe<Array<Order_Fulfillment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Fulfillment_Type_Order_By>>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

export type Query_RootOrder_Fulfillment_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Fulfillment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Fulfillment_Type_Order_By>>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

export type Query_RootOrder_Fulfillment_Type_By_PkArgs = {
  fulfillment_type: Scalars["String"]["input"];
};

export type Query_RootOrder_ItemArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

export type Query_RootOrder_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

export type Query_RootOrder_Item_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOrder_PreferenceArgs = {
  distinct_on?: InputMaybe<Array<Order_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Preference_Order_By>>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

export type Query_RootOrder_Preference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Preference_Order_By>>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

export type Query_RootOrder_Preference_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

export type Query_RootOrder_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Query_RootOrder_SupplierArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

export type Query_RootOrder_Supplier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

export type Query_RootOrder_Supplier_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPaymentStatusArgs = {
  referenceId: Scalars["String"]["input"];
};

export type Query_RootPlacesArgs = {
  lat: Scalars["Float"]["input"];
  lng: Scalars["Float"]["input"];
};

export type Query_RootPreApprovalStatusArgs = {
  referenceId: Scalars["String"]["input"];
};

export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Query_RootProducts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootRegisterBusinessActionArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootRegisterUserActionArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootRegisteration_Channel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Registeration_Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Registeration_Channel_Type_Order_By>>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

export type Query_RootRegisteration_Channel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registeration_Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Registeration_Channel_Type_Order_By>>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

export type Query_RootRegisteration_Channel_Type_By_PkArgs = {
  channel: Scalars["String"]["input"];
};

export type Query_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

export type Query_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

export type Query_RootReports_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootRequestToPayTransactionStatusArgs = {
  referenceId: Scalars["String"]["input"];
};

export type Query_RootRide_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ride_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Status_Order_By>>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

export type Query_RootRide_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ride_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Status_Order_By>>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

export type Query_RootRide_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Query_RootRide_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ride_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Type_Order_By>>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

export type Query_RootRide_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ride_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Type_Order_By>>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

export type Query_RootRide_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSpatial_Ref_SysArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Query_RootSpatial_Ref_Sys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Query_RootSpatial_Ref_Sys_By_PkArgs = {
  srid: Scalars["Int"]["input"];
};

export type Query_RootSupplier_Categories_EnumArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Categories_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Categories_Enum_Order_By>>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

export type Query_RootSupplier_Categories_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Categories_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Categories_Enum_Order_By>>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

export type Query_RootSupplier_Categories_Enum_By_PkArgs = {
  name: Scalars["String"]["input"];
};

export type Query_RootSupplier_Service_ZoneArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

export type Query_RootSupplier_Service_Zone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

export type Query_RootSupplier_Service_Zone_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Query_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Query_RootSuppliers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSuppliers_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

export type Query_RootSuppliers_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

export type Query_RootSuppliers_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUser_InvitesArgs = {
  distinct_on?: InputMaybe<Array<User_Invites_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Invites_Order_By>>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

export type Query_RootUser_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Invites_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Invites_Order_By>>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

export type Query_RootUser_Invites_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_By_PkArgs = {
  role: Scalars["String"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

export type Query_RootWork_SchedulesArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedules_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Schedules_Order_By>>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

export type Query_RootWork_Schedules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedules_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Schedules_Order_By>>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

export type Query_RootWork_Schedules_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootWork_ShiftsArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

export type Query_RootWork_Shifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

export type Query_RootWork_Shifts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** fields of action: "registerBusinessAction" */
export type RegisterBusinessAction = {
  __typename?: "registerBusinessAction";
  /** the time at which this action was created */
  created_at: Scalars["timestamptz"]["output"];
  /** errors related to the invocation */
  errors?: Maybe<Scalars["json"]["output"]>;
  /** the unique id of an action */
  id: Scalars["uuid"]["output"];
  /** the output fields of this action */
  output?: Maybe<RegisterBusinessActionOutput>;
};

/** fields of action: "registerUserAction" */
export type RegisterUserAction = {
  __typename?: "registerUserAction";
  /** the time at which this action was created */
  created_at: Scalars["timestamptz"]["output"];
  /** errors related to the invocation */
  errors?: Maybe<Scalars["json"]["output"]>;
  /** the unique id of an action */
  id: Scalars["uuid"]["output"];
  /** the output fields of this action */
  output?: Maybe<RegisterUserActionOutput>;
};

/** columns and relationships of "registeration_channel_type" */
export type Registeration_Channel_Type = {
  __typename?: "registeration_channel_type";
  /** An array relationship */
  businesses: Array<Business>;
  /** An aggregate relationship */
  businesses_aggregate: Business_Aggregate;
  channel: Scalars["String"]["output"];
};

/** columns and relationships of "registeration_channel_type" */
export type Registeration_Channel_TypeBusinessesArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

/** columns and relationships of "registeration_channel_type" */
export type Registeration_Channel_TypeBusinesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

/** aggregated selection of "registeration_channel_type" */
export type Registeration_Channel_Type_Aggregate = {
  __typename?: "registeration_channel_type_aggregate";
  aggregate?: Maybe<Registeration_Channel_Type_Aggregate_Fields>;
  nodes: Array<Registeration_Channel_Type>;
};

/** aggregate fields of "registeration_channel_type" */
export type Registeration_Channel_Type_Aggregate_Fields = {
  __typename?: "registeration_channel_type_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Registeration_Channel_Type_Max_Fields>;
  min?: Maybe<Registeration_Channel_Type_Min_Fields>;
};

/** aggregate fields of "registeration_channel_type" */
export type Registeration_Channel_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Registeration_Channel_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "registeration_channel_type". All fields are combined with a logical 'AND'. */
export type Registeration_Channel_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Registeration_Channel_Type_Bool_Exp>>;
  _not?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Registeration_Channel_Type_Bool_Exp>>;
  businesses?: InputMaybe<Business_Bool_Exp>;
  businesses_aggregate?: InputMaybe<Business_Aggregate_Bool_Exp>;
  channel?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "registeration_channel_type" */
export enum Registeration_Channel_Type_Constraint {
  /** unique or primary key constraint on columns "channel" */
  RegisterationChannelPkey = "registeration_channel_pkey",
}

export enum Registeration_Channel_Type_Enum {
  Agent = "AGENT",
  App = "APP",
  Ussd = "USSD",
}

/** Boolean expression to compare columns of type "registeration_channel_type_enum". All fields are combined with logical 'AND'. */
export type Registeration_Channel_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Registeration_Channel_Type_Enum>;
  _in?: InputMaybe<Array<Registeration_Channel_Type_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Registeration_Channel_Type_Enum>;
  _nin?: InputMaybe<Array<Registeration_Channel_Type_Enum>>;
};

/** input type for inserting data into table "registeration_channel_type" */
export type Registeration_Channel_Type_Insert_Input = {
  businesses?: InputMaybe<Business_Arr_Rel_Insert_Input>;
  channel?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Registeration_Channel_Type_Max_Fields = {
  __typename?: "registeration_channel_type_max_fields";
  channel?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Registeration_Channel_Type_Min_Fields = {
  __typename?: "registeration_channel_type_min_fields";
  channel?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "registeration_channel_type" */
export type Registeration_Channel_Type_Mutation_Response = {
  __typename?: "registeration_channel_type_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Registeration_Channel_Type>;
};

/** input type for inserting object relation for remote table "registeration_channel_type" */
export type Registeration_Channel_Type_Obj_Rel_Insert_Input = {
  data: Registeration_Channel_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Registeration_Channel_Type_On_Conflict>;
};

/** on_conflict condition type for table "registeration_channel_type" */
export type Registeration_Channel_Type_On_Conflict = {
  constraint: Registeration_Channel_Type_Constraint;
  update_columns?: Array<Registeration_Channel_Type_Update_Column>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "registeration_channel_type". */
export type Registeration_Channel_Type_Order_By = {
  businesses_aggregate?: InputMaybe<Business_Aggregate_Order_By>;
  channel?: InputMaybe<Order_By>;
};

/** primary key columns input for table: registeration_channel_type */
export type Registeration_Channel_Type_Pk_Columns_Input = {
  channel: Scalars["String"]["input"];
};

/** select columns of table "registeration_channel_type" */
export enum Registeration_Channel_Type_Select_Column {
  /** column name */
  Channel = "channel",
}

/** input type for updating data in table "registeration_channel_type" */
export type Registeration_Channel_Type_Set_Input = {
  channel?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "registeration_channel_type" */
export type Registeration_Channel_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Registeration_Channel_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Registeration_Channel_Type_Stream_Cursor_Value_Input = {
  channel?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "registeration_channel_type" */
export enum Registeration_Channel_Type_Update_Column {
  /** column name */
  Channel = "channel",
}

export type Registeration_Channel_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Registeration_Channel_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Registeration_Channel_Type_Bool_Exp;
};

/** columns and relationships of "reports" */
export type Reports = {
  __typename?: "reports";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
};

/** aggregated selection of "reports" */
export type Reports_Aggregate = {
  __typename?: "reports_aggregate";
  aggregate?: Maybe<Reports_Aggregate_Fields>;
  nodes: Array<Reports>;
};

/** aggregate fields of "reports" */
export type Reports_Aggregate_Fields = {
  __typename?: "reports_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Reports_Max_Fields>;
  min?: Maybe<Reports_Min_Fields>;
};

/** aggregate fields of "reports" */
export type Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "reports". All fields are combined with a logical 'AND'. */
export type Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Reports_Bool_Exp>>;
  _not?: InputMaybe<Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Reports_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reports" */
export enum Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportsPkey = "reports_pkey",
}

/** input type for inserting data into table "reports" */
export type Reports_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Reports_Max_Fields = {
  __typename?: "reports_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Reports_Min_Fields = {
  __typename?: "reports_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "reports" */
export type Reports_Mutation_Response = {
  __typename?: "reports_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Reports>;
};

/** on_conflict condition type for table "reports" */
export type Reports_On_Conflict = {
  constraint: Reports_Constraint;
  update_columns?: Array<Reports_Update_Column>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "reports". */
export type Reports_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reports */
export type Reports_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "reports" */
export enum Reports_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
}

/** input type for updating data in table "reports" */
export type Reports_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "reports" */
export type Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reports_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "reports" */
export enum Reports_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
}

export type Reports_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reports_Bool_Exp;
};

/** columns and relationships of "ride_status" */
export type Ride_Status = {
  __typename?: "ride_status";
  /** An array relationship */
  courier_rides: Array<Courier_Rides>;
  /** An aggregate relationship */
  courier_rides_aggregate: Courier_Rides_Aggregate;
  status: Scalars["String"]["output"];
};

/** columns and relationships of "ride_status" */
export type Ride_StatusCourier_RidesArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** columns and relationships of "ride_status" */
export type Ride_StatusCourier_Rides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** aggregated selection of "ride_status" */
export type Ride_Status_Aggregate = {
  __typename?: "ride_status_aggregate";
  aggregate?: Maybe<Ride_Status_Aggregate_Fields>;
  nodes: Array<Ride_Status>;
};

/** aggregate fields of "ride_status" */
export type Ride_Status_Aggregate_Fields = {
  __typename?: "ride_status_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Ride_Status_Max_Fields>;
  min?: Maybe<Ride_Status_Min_Fields>;
};

/** aggregate fields of "ride_status" */
export type Ride_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ride_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ride_status". All fields are combined with a logical 'AND'. */
export type Ride_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ride_Status_Bool_Exp>>;
  _not?: InputMaybe<Ride_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ride_Status_Bool_Exp>>;
  courier_rides?: InputMaybe<Courier_Rides_Bool_Exp>;
  courier_rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ride_status" */
export enum Ride_Status_Constraint {
  /** unique or primary key constraint on columns "status" */
  RideStatusPkey = "ride_status_pkey",
}

export enum Ride_Status_Enum {
  Active = "Active",
  Inactive = "Inactive",
  Maintenance = "Maintenance",
}

/** Boolean expression to compare columns of type "ride_status_enum". All fields are combined with logical 'AND'. */
export type Ride_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Ride_Status_Enum>;
  _in?: InputMaybe<Array<Ride_Status_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Ride_Status_Enum>;
  _nin?: InputMaybe<Array<Ride_Status_Enum>>;
};

/** input type for inserting data into table "ride_status" */
export type Ride_Status_Insert_Input = {
  courier_rides?: InputMaybe<Courier_Rides_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ride_Status_Max_Fields = {
  __typename?: "ride_status_max_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ride_Status_Min_Fields = {
  __typename?: "ride_status_min_fields";
  status?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ride_status" */
export type Ride_Status_Mutation_Response = {
  __typename?: "ride_status_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ride_Status>;
};

/** input type for inserting object relation for remote table "ride_status" */
export type Ride_Status_Obj_Rel_Insert_Input = {
  data: Ride_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ride_Status_On_Conflict>;
};

/** on_conflict condition type for table "ride_status" */
export type Ride_Status_On_Conflict = {
  constraint: Ride_Status_Constraint;
  update_columns?: Array<Ride_Status_Update_Column>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ride_status". */
export type Ride_Status_Order_By = {
  courier_rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ride_status */
export type Ride_Status_Pk_Columns_Input = {
  status: Scalars["String"]["input"];
};

/** select columns of table "ride_status" */
export enum Ride_Status_Select_Column {
  /** column name */
  Status = "status",
}

/** input type for updating data in table "ride_status" */
export type Ride_Status_Set_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "ride_status" */
export type Ride_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ride_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ride_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "ride_status" */
export enum Ride_Status_Update_Column {
  /** column name */
  Status = "status",
}

export type Ride_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ride_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ride_Status_Bool_Exp;
};

/** columns and relationships of "ride_type" */
export type Ride_Type = {
  __typename?: "ride_type";
  /** An array relationship */
  courier_rides: Array<Courier_Rides>;
  /** An aggregate relationship */
  courier_rides_aggregate: Courier_Rides_Aggregate;
  type: Scalars["String"]["output"];
};

/** columns and relationships of "ride_type" */
export type Ride_TypeCourier_RidesArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** columns and relationships of "ride_type" */
export type Ride_TypeCourier_Rides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

/** aggregated selection of "ride_type" */
export type Ride_Type_Aggregate = {
  __typename?: "ride_type_aggregate";
  aggregate?: Maybe<Ride_Type_Aggregate_Fields>;
  nodes: Array<Ride_Type>;
};

/** aggregate fields of "ride_type" */
export type Ride_Type_Aggregate_Fields = {
  __typename?: "ride_type_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Ride_Type_Max_Fields>;
  min?: Maybe<Ride_Type_Min_Fields>;
};

/** aggregate fields of "ride_type" */
export type Ride_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ride_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ride_type". All fields are combined with a logical 'AND'. */
export type Ride_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ride_Type_Bool_Exp>>;
  _not?: InputMaybe<Ride_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ride_Type_Bool_Exp>>;
  courier_rides?: InputMaybe<Courier_Rides_Bool_Exp>;
  courier_rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ride_type" */
export enum Ride_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  RideTypePkey = "ride_type_pkey",
}

export enum Ride_Type_Enum {
  Bike = "Bike",
  Car = "Car",
}

/** Boolean expression to compare columns of type "ride_type_enum". All fields are combined with logical 'AND'. */
export type Ride_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Ride_Type_Enum>;
  _in?: InputMaybe<Array<Ride_Type_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Ride_Type_Enum>;
  _nin?: InputMaybe<Array<Ride_Type_Enum>>;
};

/** input type for inserting data into table "ride_type" */
export type Ride_Type_Insert_Input = {
  courier_rides?: InputMaybe<Courier_Rides_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ride_Type_Max_Fields = {
  __typename?: "ride_type_max_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ride_Type_Min_Fields = {
  __typename?: "ride_type_min_fields";
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ride_type" */
export type Ride_Type_Mutation_Response = {
  __typename?: "ride_type_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ride_Type>;
};

/** input type for inserting object relation for remote table "ride_type" */
export type Ride_Type_Obj_Rel_Insert_Input = {
  data: Ride_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ride_Type_On_Conflict>;
};

/** on_conflict condition type for table "ride_type" */
export type Ride_Type_On_Conflict = {
  constraint: Ride_Type_Constraint;
  update_columns?: Array<Ride_Type_Update_Column>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ride_type". */
export type Ride_Type_Order_By = {
  courier_rides_aggregate?: InputMaybe<Courier_Rides_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ride_type */
export type Ride_Type_Pk_Columns_Input = {
  type: Scalars["String"]["input"];
};

/** select columns of table "ride_type" */
export enum Ride_Type_Select_Column {
  /** column name */
  Type = "type",
}

/** input type for updating data in table "ride_type" */
export type Ride_Type_Set_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "ride_type" */
export type Ride_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ride_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ride_Type_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "ride_type" */
export enum Ride_Type_Update_Column {
  /** column name */
  Type = "type",
}

export type Ride_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ride_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ride_Type_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  sessionToken: Scalars["String"]["output"];
  /** An object relationship */
  user: Users;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = "sessions_pkey",
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

/** columns and relationships of "spatial_ref_sys" */
export type Spatial_Ref_Sys = {
  __typename?: "spatial_ref_sys";
  auth_name?: Maybe<Scalars["String"]["output"]>;
  auth_srid?: Maybe<Scalars["Int"]["output"]>;
  proj4text?: Maybe<Scalars["String"]["output"]>;
  srid: Scalars["Int"]["output"];
  srtext?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate = {
  __typename?: "spatial_ref_sys_aggregate";
  aggregate?: Maybe<Spatial_Ref_Sys_Aggregate_Fields>;
  nodes: Array<Spatial_Ref_Sys>;
};

/** aggregate fields of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate_Fields = {
  __typename?: "spatial_ref_sys_aggregate_fields";
  avg?: Maybe<Spatial_Ref_Sys_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Spatial_Ref_Sys_Max_Fields>;
  min?: Maybe<Spatial_Ref_Sys_Min_Fields>;
  stddev?: Maybe<Spatial_Ref_Sys_Stddev_Fields>;
  stddev_pop?: Maybe<Spatial_Ref_Sys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Spatial_Ref_Sys_Stddev_Samp_Fields>;
  sum?: Maybe<Spatial_Ref_Sys_Sum_Fields>;
  var_pop?: Maybe<Spatial_Ref_Sys_Var_Pop_Fields>;
  var_samp?: Maybe<Spatial_Ref_Sys_Var_Samp_Fields>;
  variance?: Maybe<Spatial_Ref_Sys_Variance_Fields>;
};

/** aggregate fields of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Spatial_Ref_Sys_Avg_Fields = {
  __typename?: "spatial_ref_sys_avg_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "spatial_ref_sys". All fields are combined with a logical 'AND'. */
export type Spatial_Ref_Sys_Bool_Exp = {
  _and?: InputMaybe<Array<Spatial_Ref_Sys_Bool_Exp>>;
  _not?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
  _or?: InputMaybe<Array<Spatial_Ref_Sys_Bool_Exp>>;
  auth_name?: InputMaybe<String_Comparison_Exp>;
  auth_srid?: InputMaybe<Int_Comparison_Exp>;
  proj4text?: InputMaybe<String_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  srtext?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Constraint {
  /** unique or primary key constraint on columns "srid" */
  SpatialRefSysPkey = "spatial_ref_sys_pkey",
}

/** input type for incrementing numeric columns in table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Inc_Input = {
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Insert_Input = {
  auth_name?: InputMaybe<Scalars["String"]["input"]>;
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  proj4text?: InputMaybe<Scalars["String"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  srtext?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Spatial_Ref_Sys_Max_Fields = {
  __typename?: "spatial_ref_sys_max_fields";
  auth_name?: Maybe<Scalars["String"]["output"]>;
  auth_srid?: Maybe<Scalars["Int"]["output"]>;
  proj4text?: Maybe<Scalars["String"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  srtext?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Spatial_Ref_Sys_Min_Fields = {
  __typename?: "spatial_ref_sys_min_fields";
  auth_name?: Maybe<Scalars["String"]["output"]>;
  auth_srid?: Maybe<Scalars["Int"]["output"]>;
  proj4text?: Maybe<Scalars["String"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
  srtext?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Mutation_Response = {
  __typename?: "spatial_ref_sys_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Spatial_Ref_Sys>;
};

/** on_conflict condition type for table "spatial_ref_sys" */
export type Spatial_Ref_Sys_On_Conflict = {
  constraint: Spatial_Ref_Sys_Constraint;
  update_columns?: Array<Spatial_Ref_Sys_Update_Column>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

/** Ordering options when selecting data from "spatial_ref_sys". */
export type Spatial_Ref_Sys_Order_By = {
  auth_name?: InputMaybe<Order_By>;
  auth_srid?: InputMaybe<Order_By>;
  proj4text?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  srtext?: InputMaybe<Order_By>;
};

/** primary key columns input for table: spatial_ref_sys */
export type Spatial_Ref_Sys_Pk_Columns_Input = {
  srid: Scalars["Int"]["input"];
};

/** select columns of table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Select_Column {
  /** column name */
  AuthName = "auth_name",
  /** column name */
  AuthSrid = "auth_srid",
  /** column name */
  Proj4text = "proj4text",
  /** column name */
  Srid = "srid",
  /** column name */
  Srtext = "srtext",
}

/** input type for updating data in table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Set_Input = {
  auth_name?: InputMaybe<Scalars["String"]["input"]>;
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  proj4text?: InputMaybe<Scalars["String"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  srtext?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Spatial_Ref_Sys_Stddev_Fields = {
  __typename?: "spatial_ref_sys_stddev_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Spatial_Ref_Sys_Stddev_Pop_Fields = {
  __typename?: "spatial_ref_sys_stddev_pop_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Spatial_Ref_Sys_Stddev_Samp_Fields = {
  __typename?: "spatial_ref_sys_stddev_samp_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Spatial_Ref_Sys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Spatial_Ref_Sys_Stream_Cursor_Value_Input = {
  auth_name?: InputMaybe<Scalars["String"]["input"]>;
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  proj4text?: InputMaybe<Scalars["String"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  srtext?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Spatial_Ref_Sys_Sum_Fields = {
  __typename?: "spatial_ref_sys_sum_fields";
  auth_srid?: Maybe<Scalars["Int"]["output"]>;
  srid?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Update_Column {
  /** column name */
  AuthName = "auth_name",
  /** column name */
  AuthSrid = "auth_srid",
  /** column name */
  Proj4text = "proj4text",
  /** column name */
  Srid = "srid",
  /** column name */
  Srtext = "srtext",
}

export type Spatial_Ref_Sys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  /** filter the rows which have to be updated */
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Spatial_Ref_Sys_Var_Pop_Fields = {
  __typename?: "spatial_ref_sys_var_pop_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Spatial_Ref_Sys_Var_Samp_Fields = {
  __typename?: "spatial_ref_sys_var_samp_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Spatial_Ref_Sys_Variance_Fields = {
  __typename?: "spatial_ref_sys_variance_fields";
  auth_srid?: Maybe<Scalars["Float"]["output"]>;
  srid?: Maybe<Scalars["Float"]["output"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table in a streaming manner: "addresses" */
  addresses_stream: Array<Addresses>;
  /** fetch data from the table: "agent" */
  agent: Array<Agent>;
  /** fetch aggregated fields from the table: "agent" */
  agent_aggregate: Agent_Aggregate;
  /** fetch data from the table: "agent" using primary key columns */
  agent_by_pk?: Maybe<Agent>;
  /** fetch data from the table in a streaming manner: "agent" */
  agent_stream: Array<Agent>;
  /** fetch data from the table: "agent_type" */
  agent_type: Array<Agent_Type>;
  /** fetch aggregated fields from the table: "agent_type" */
  agent_type_aggregate: Agent_Type_Aggregate;
  /** fetch data from the table: "agent_type" using primary key columns */
  agent_type_by_pk?: Maybe<Agent_Type>;
  /** fetch data from the table in a streaming manner: "agent_type" */
  agent_type_stream: Array<Agent_Type>;
  /** fetch data from the table: "business" */
  business: Array<Business>;
  /** fetch aggregated fields from the table: "business" */
  business_aggregate: Business_Aggregate;
  /** fetch data from the table: "business" using primary key columns */
  business_by_pk?: Maybe<Business>;
  /** fetch data from the table: "business_sector" */
  business_sector: Array<Business_Sector>;
  /** fetch aggregated fields from the table: "business_sector" */
  business_sector_aggregate: Business_Sector_Aggregate;
  /** fetch data from the table: "business_sector" using primary key columns */
  business_sector_by_pk?: Maybe<Business_Sector>;
  /** fetch data from the table in a streaming manner: "business_sector" */
  business_sector_stream: Array<Business_Sector>;
  /** fetch data from the table in a streaming manner: "business" */
  business_stream: Array<Business>;
  /** fetch data from the table: "business_type" */
  business_type: Array<Business_Type>;
  /** fetch aggregated fields from the table: "business_type" */
  business_type_aggregate: Business_Type_Aggregate;
  /** fetch data from the table: "business_type" using primary key columns */
  business_type_by_pk?: Maybe<Business_Type>;
  /** fetch data from the table in a streaming manner: "business_type" */
  business_type_stream: Array<Business_Type>;
  /** fetch data from the table: "contact_details" */
  contact_details: Array<Contact_Details>;
  /** fetch aggregated fields from the table: "contact_details" */
  contact_details_aggregate: Contact_Details_Aggregate;
  /** fetch data from the table: "contact_details" using primary key columns */
  contact_details_by_pk?: Maybe<Contact_Details>;
  /** fetch data from the table in a streaming manner: "contact_details" */
  contact_details_stream: Array<Contact_Details>;
  /** An array relationship */
  courier_rides: Array<Courier_Rides>;
  /** An aggregate relationship */
  courier_rides_aggregate: Courier_Rides_Aggregate;
  /** fetch data from the table: "courier_rides" using primary key columns */
  courier_rides_by_pk?: Maybe<Courier_Rides>;
  /** fetch data from the table in a streaming manner: "courier_rides" */
  courier_rides_stream: Array<Courier_Rides>;
  /** fetch data from the table: "couriers" */
  couriers: Array<Couriers>;
  /** fetch aggregated fields from the table: "couriers" */
  couriers_aggregate: Couriers_Aggregate;
  /** fetch data from the table: "couriers" using primary key columns */
  couriers_by_pk?: Maybe<Couriers>;
  /** fetch data from the table in a streaming manner: "couriers" */
  couriers_stream: Array<Couriers>;
  /** fetch data from the table: "delivery" */
  delivery: Array<Delivery>;
  /** fetch aggregated fields from the table: "delivery" */
  delivery_aggregate: Delivery_Aggregate;
  /** fetch data from the table: "delivery" using primary key columns */
  delivery_by_pk?: Maybe<Delivery>;
  /** fetch data from the table: "delivery_personnel" */
  delivery_personnel: Array<Delivery_Personnel>;
  /** fetch aggregated fields from the table: "delivery_personnel" */
  delivery_personnel_aggregate: Delivery_Personnel_Aggregate;
  /** fetch data from the table: "delivery_personnel" using primary key columns */
  delivery_personnel_by_pk?: Maybe<Delivery_Personnel>;
  /** fetch data from the table in a streaming manner: "delivery_personnel" */
  delivery_personnel_stream: Array<Delivery_Personnel>;
  /** fetch data from the table: "delivery_request" */
  delivery_request: Array<Delivery_Request>;
  /** fetch aggregated fields from the table: "delivery_request" */
  delivery_request_aggregate: Delivery_Request_Aggregate;
  /** fetch data from the table: "delivery_request" using primary key columns */
  delivery_request_by_pk?: Maybe<Delivery_Request>;
  /** fetch data from the table in a streaming manner: "delivery_request" */
  delivery_request_stream: Array<Delivery_Request>;
  /** fetch data from the table: "delivery_status" */
  delivery_status: Array<Delivery_Status>;
  /** fetch aggregated fields from the table: "delivery_status" */
  delivery_status_aggregate: Delivery_Status_Aggregate;
  /** fetch data from the table: "delivery_status" using primary key columns */
  delivery_status_by_pk?: Maybe<Delivery_Status>;
  /** fetch data from the table in a streaming manner: "delivery_status" */
  delivery_status_stream: Array<Delivery_Status>;
  /** fetch data from the table in a streaming manner: "delivery" */
  delivery_stream: Array<Delivery>;
  /** fetch data from the table: "geography_columns" */
  geography_columns: Array<Geography_Columns>;
  /** fetch aggregated fields from the table: "geography_columns" */
  geography_columns_aggregate: Geography_Columns_Aggregate;
  /** fetch data from the table in a streaming manner: "geography_columns" */
  geography_columns_stream: Array<Geography_Columns>;
  /** fetch data from the table: "geometry_columns" */
  geometry_columns: Array<Geometry_Columns>;
  /** fetch aggregated fields from the table: "geometry_columns" */
  geometry_columns_aggregate: Geometry_Columns_Aggregate;
  /** fetch data from the table in a streaming manner: "geometry_columns" */
  geometry_columns_stream: Array<Geometry_Columns>;
  /** Place order action */
  insertBusinessOrder?: Maybe<InsertBusinessOrder>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table in a streaming manner: "locations" */
  locations_stream: Array<Locations>;
  /** fetch data from the table: "order_fulfillment_type" */
  order_fulfillment_type: Array<Order_Fulfillment_Type>;
  /** fetch aggregated fields from the table: "order_fulfillment_type" */
  order_fulfillment_type_aggregate: Order_Fulfillment_Type_Aggregate;
  /** fetch data from the table: "order_fulfillment_type" using primary key columns */
  order_fulfillment_type_by_pk?: Maybe<Order_Fulfillment_Type>;
  /** fetch data from the table in a streaming manner: "order_fulfillment_type" */
  order_fulfillment_type_stream: Array<Order_Fulfillment_Type>;
  /** fetch data from the table: "order_item" */
  order_item: Array<Order_Item>;
  /** fetch aggregated fields from the table: "order_item" */
  order_item_aggregate: Order_Item_Aggregate;
  /** fetch data from the table: "order_item" using primary key columns */
  order_item_by_pk?: Maybe<Order_Item>;
  /** fetch data from the table in a streaming manner: "order_item" */
  order_item_stream: Array<Order_Item>;
  /** fetch data from the table: "order_preference" */
  order_preference: Array<Order_Preference>;
  /** fetch aggregated fields from the table: "order_preference" */
  order_preference_aggregate: Order_Preference_Aggregate;
  /** fetch data from the table: "order_preference" using primary key columns */
  order_preference_by_pk?: Maybe<Order_Preference>;
  /** fetch data from the table in a streaming manner: "order_preference" */
  order_preference_stream: Array<Order_Preference>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table in a streaming manner: "order_status" */
  order_status_stream: Array<Order_Status>;
  /** fetch data from the table: "order_supplier" */
  order_supplier: Array<Order_Supplier>;
  /** fetch aggregated fields from the table: "order_supplier" */
  order_supplier_aggregate: Order_Supplier_Aggregate;
  /** fetch data from the table: "order_supplier" using primary key columns */
  order_supplier_by_pk?: Maybe<Order_Supplier>;
  /** fetch data from the table in a streaming manner: "order_supplier" */
  order_supplier_stream: Array<Order_Supplier>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** An action to register a new business */
  registerBusinessAction?: Maybe<RegisterBusinessAction>;
  /** An action to register a new user */
  registerUserAction?: Maybe<RegisterUserAction>;
  /** fetch data from the table: "registeration_channel_type" */
  registeration_channel_type: Array<Registeration_Channel_Type>;
  /** fetch aggregated fields from the table: "registeration_channel_type" */
  registeration_channel_type_aggregate: Registeration_Channel_Type_Aggregate;
  /** fetch data from the table: "registeration_channel_type" using primary key columns */
  registeration_channel_type_by_pk?: Maybe<Registeration_Channel_Type>;
  /** fetch data from the table in a streaming manner: "registeration_channel_type" */
  registeration_channel_type_stream: Array<Registeration_Channel_Type>;
  /** fetch data from the table: "reports" */
  reports: Array<Reports>;
  /** fetch aggregated fields from the table: "reports" */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** fetch data from the table in a streaming manner: "reports" */
  reports_stream: Array<Reports>;
  /** fetch data from the table: "ride_status" */
  ride_status: Array<Ride_Status>;
  /** fetch aggregated fields from the table: "ride_status" */
  ride_status_aggregate: Ride_Status_Aggregate;
  /** fetch data from the table: "ride_status" using primary key columns */
  ride_status_by_pk?: Maybe<Ride_Status>;
  /** fetch data from the table in a streaming manner: "ride_status" */
  ride_status_stream: Array<Ride_Status>;
  /** fetch data from the table: "ride_type" */
  ride_type: Array<Ride_Type>;
  /** fetch aggregated fields from the table: "ride_type" */
  ride_type_aggregate: Ride_Type_Aggregate;
  /** fetch data from the table: "ride_type" using primary key columns */
  ride_type_by_pk?: Maybe<Ride_Type>;
  /** fetch data from the table in a streaming manner: "ride_type" */
  ride_type_stream: Array<Ride_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "spatial_ref_sys" */
  spatial_ref_sys: Array<Spatial_Ref_Sys>;
  /** fetch aggregated fields from the table: "spatial_ref_sys" */
  spatial_ref_sys_aggregate: Spatial_Ref_Sys_Aggregate;
  /** fetch data from the table: "spatial_ref_sys" using primary key columns */
  spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** fetch data from the table in a streaming manner: "spatial_ref_sys" */
  spatial_ref_sys_stream: Array<Spatial_Ref_Sys>;
  /** fetch data from the table: "supplier_categories_enum" */
  supplier_categories_enum: Array<Supplier_Categories_Enum>;
  /** fetch aggregated fields from the table: "supplier_categories_enum" */
  supplier_categories_enum_aggregate: Supplier_Categories_Enum_Aggregate;
  /** fetch data from the table: "supplier_categories_enum" using primary key columns */
  supplier_categories_enum_by_pk?: Maybe<Supplier_Categories_Enum>;
  /** fetch data from the table in a streaming manner: "supplier_categories_enum" */
  supplier_categories_enum_stream: Array<Supplier_Categories_Enum>;
  /** fetch data from the table: "supplier_service_zone" */
  supplier_service_zone: Array<Supplier_Service_Zone>;
  /** fetch aggregated fields from the table: "supplier_service_zone" */
  supplier_service_zone_aggregate: Supplier_Service_Zone_Aggregate;
  /** fetch data from the table: "supplier_service_zone" using primary key columns */
  supplier_service_zone_by_pk?: Maybe<Supplier_Service_Zone>;
  /** fetch data from the table in a streaming manner: "supplier_service_zone" */
  supplier_service_zone_stream: Array<Supplier_Service_Zone>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** An array relationship */
  suppliers_categories: Array<Suppliers_Categories>;
  /** An aggregate relationship */
  suppliers_categories_aggregate: Suppliers_Categories_Aggregate;
  /** fetch data from the table: "suppliers_categories" using primary key columns */
  suppliers_categories_by_pk?: Maybe<Suppliers_Categories>;
  /** fetch data from the table in a streaming manner: "suppliers_categories" */
  suppliers_categories_stream: Array<Suppliers_Categories>;
  /** fetch data from the table in a streaming manner: "suppliers" */
  suppliers_stream: Array<Suppliers>;
  /** fetch data from the table: "user_invites" */
  user_invites: Array<User_Invites>;
  /** fetch aggregated fields from the table: "user_invites" */
  user_invites_aggregate: User_Invites_Aggregate;
  /** fetch data from the table: "user_invites" using primary key columns */
  user_invites_by_pk?: Maybe<User_Invites>;
  /** fetch data from the table in a streaming manner: "user_invites" */
  user_invites_stream: Array<User_Invites>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
  /** fetch data from the table: "work_schedules" */
  work_schedules: Array<Work_Schedules>;
  /** fetch aggregated fields from the table: "work_schedules" */
  work_schedules_aggregate: Work_Schedules_Aggregate;
  /** fetch data from the table: "work_schedules" using primary key columns */
  work_schedules_by_pk?: Maybe<Work_Schedules>;
  /** fetch data from the table in a streaming manner: "work_schedules" */
  work_schedules_stream: Array<Work_Schedules>;
  /** fetch data from the table: "work_shifts" */
  work_shifts: Array<Work_Shifts>;
  /** fetch aggregated fields from the table: "work_shifts" */
  work_shifts_aggregate: Work_Shifts_Aggregate;
  /** fetch data from the table: "work_shifts" using primary key columns */
  work_shifts_by_pk?: Maybe<Work_Shifts>;
  /** fetch data from the table in a streaming manner: "work_shifts" */
  work_shifts_stream: Array<Work_Shifts>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAddresses_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Addresses_Stream_Cursor_Input>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

export type Subscription_RootAgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Order_By>>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

export type Subscription_RootAgent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Order_By>>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

export type Subscription_RootAgent_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAgent_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Agent_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Bool_Exp>;
};

export type Subscription_RootAgent_TypeArgs = {
  distinct_on?: InputMaybe<Array<Agent_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Type_Order_By>>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

export type Subscription_RootAgent_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Agent_Type_Order_By>>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

export type Subscription_RootAgent_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Subscription_RootAgent_Type_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Agent_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Type_Bool_Exp>;
};

export type Subscription_RootBusinessArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootBusiness_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootBusiness_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootBusiness_SectorArgs = {
  distinct_on?: InputMaybe<Array<Business_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Sector_Order_By>>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

export type Subscription_RootBusiness_Sector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Sector_Order_By>>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

export type Subscription_RootBusiness_Sector_By_PkArgs = {
  text: Scalars["String"]["input"];
};

export type Subscription_RootBusiness_Sector_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Business_Sector_Stream_Cursor_Input>>;
  where?: InputMaybe<Business_Sector_Bool_Exp>;
};

export type Subscription_RootBusiness_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Business_Stream_Cursor_Input>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootBusiness_TypeArgs = {
  distinct_on?: InputMaybe<Array<Business_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Type_Order_By>>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

export type Subscription_RootBusiness_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Business_Type_Order_By>>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

export type Subscription_RootBusiness_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Subscription_RootBusiness_Type_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Business_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Business_Type_Bool_Exp>;
};

export type Subscription_RootContact_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Details_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Details_Order_By>>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

export type Subscription_RootContact_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Details_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Details_Order_By>>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

export type Subscription_RootContact_Details_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootContact_Details_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Contact_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Details_Bool_Exp>;
};

export type Subscription_RootCourier_RidesArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

export type Subscription_RootCourier_Rides_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courier_Rides_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Courier_Rides_Order_By>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

export type Subscription_RootCourier_Rides_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootCourier_Rides_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Courier_Rides_Stream_Cursor_Input>>;
  where?: InputMaybe<Courier_Rides_Bool_Exp>;
};

export type Subscription_RootCouriersArgs = {
  distinct_on?: InputMaybe<Array<Couriers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Couriers_Order_By>>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

export type Subscription_RootCouriers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Couriers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Couriers_Order_By>>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

export type Subscription_RootCouriers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootCouriers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Couriers_Stream_Cursor_Input>>;
  where?: InputMaybe<Couriers_Bool_Exp>;
};

export type Subscription_RootDeliveryArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

export type Subscription_RootDelivery_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Order_By>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

export type Subscription_RootDelivery_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDelivery_PersonnelArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Personnel_Order_By>>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

export type Subscription_RootDelivery_Personnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Personnel_Order_By>>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

export type Subscription_RootDelivery_Personnel_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDelivery_Personnel_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Delivery_Personnel_Stream_Cursor_Input>>;
  where?: InputMaybe<Delivery_Personnel_Bool_Exp>;
};

export type Subscription_RootDelivery_RequestArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Request_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Request_Order_By>>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

export type Subscription_RootDelivery_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Request_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Request_Order_By>>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

export type Subscription_RootDelivery_Request_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDelivery_Request_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Delivery_Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Delivery_Request_Bool_Exp>;
};

export type Subscription_RootDelivery_StatusArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Status_Order_By>>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

export type Subscription_RootDelivery_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Delivery_Status_Order_By>>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

export type Subscription_RootDelivery_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Subscription_RootDelivery_Status_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Delivery_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

export type Subscription_RootDelivery_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Delivery_Stream_Cursor_Input>>;
  where?: InputMaybe<Delivery_Bool_Exp>;
};

export type Subscription_RootGeography_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeography_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeography_Columns_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Geography_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_Columns_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Geometry_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootInsertBusinessOrderArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootLocations_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Locations_Stream_Cursor_Input>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootOrder_Fulfillment_TypeArgs = {
  distinct_on?: InputMaybe<Array<Order_Fulfillment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Fulfillment_Type_Order_By>>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

export type Subscription_RootOrder_Fulfillment_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Fulfillment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Fulfillment_Type_Order_By>>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

export type Subscription_RootOrder_Fulfillment_Type_By_PkArgs = {
  fulfillment_type: Scalars["String"]["input"];
};

export type Subscription_RootOrder_Fulfillment_Type_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Order_Fulfillment_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

export type Subscription_RootOrder_ItemArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

export type Subscription_RootOrder_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Item_Order_By>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

export type Subscription_RootOrder_Item_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOrder_Item_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Order_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Item_Bool_Exp>;
};

export type Subscription_RootOrder_PreferenceArgs = {
  distinct_on?: InputMaybe<Array<Order_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Preference_Order_By>>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

export type Subscription_RootOrder_Preference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Preference_Order_By>>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

export type Subscription_RootOrder_Preference_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOrder_Preference_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Order_Preference_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Preference_Bool_Exp>;
};

export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

export type Subscription_RootOrder_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Subscription_RootOrder_Status_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Order_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

export type Subscription_RootOrder_SupplierArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

export type Subscription_RootOrder_Supplier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

export type Subscription_RootOrder_Supplier_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOrder_Supplier_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Order_Supplier_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootRegisterBusinessActionArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootRegisterUserActionArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootRegisteration_Channel_TypeArgs = {
  distinct_on?: InputMaybe<Array<Registeration_Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Registeration_Channel_Type_Order_By>>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

export type Subscription_RootRegisteration_Channel_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registeration_Channel_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Registeration_Channel_Type_Order_By>>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

export type Subscription_RootRegisteration_Channel_Type_By_PkArgs = {
  channel: Scalars["String"]["input"];
};

export type Subscription_RootRegisteration_Channel_Type_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Registeration_Channel_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
};

export type Subscription_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

export type Subscription_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

export type Subscription_RootReports_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootReports_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

export type Subscription_RootRide_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ride_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Status_Order_By>>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

export type Subscription_RootRide_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ride_Status_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Status_Order_By>>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

export type Subscription_RootRide_Status_By_PkArgs = {
  status: Scalars["String"]["input"];
};

export type Subscription_RootRide_Status_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ride_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Ride_Status_Bool_Exp>;
};

export type Subscription_RootRide_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ride_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Type_Order_By>>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

export type Subscription_RootRide_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ride_Type_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Ride_Type_Order_By>>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

export type Subscription_RootRide_Type_By_PkArgs = {
  type: Scalars["String"]["input"];
};

export type Subscription_RootRide_Type_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ride_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Ride_Type_Bool_Exp>;
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_SysArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_Sys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_Sys_By_PkArgs = {
  srid: Scalars["Int"]["input"];
};

export type Subscription_RootSpatial_Ref_Sys_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Spatial_Ref_Sys_Stream_Cursor_Input>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootSupplier_Categories_EnumArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Categories_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Categories_Enum_Order_By>>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

export type Subscription_RootSupplier_Categories_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Categories_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Categories_Enum_Order_By>>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

export type Subscription_RootSupplier_Categories_Enum_By_PkArgs = {
  name: Scalars["String"]["input"];
};

export type Subscription_RootSupplier_Categories_Enum_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Supplier_Categories_Enum_Stream_Cursor_Input>>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

export type Subscription_RootSupplier_Service_ZoneArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

export type Subscription_RootSupplier_Service_Zone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

export type Subscription_RootSupplier_Service_Zone_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSupplier_Service_Zone_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Supplier_Service_Zone_Stream_Cursor_Input>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

export type Subscription_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootSuppliers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSuppliers_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

export type Subscription_RootSuppliers_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

export type Subscription_RootSuppliers_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSuppliers_Categories_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Suppliers_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

export type Subscription_RootSuppliers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Suppliers_Stream_Cursor_Input>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootUser_InvitesArgs = {
  distinct_on?: InputMaybe<Array<User_Invites_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Invites_Order_By>>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

export type Subscription_RootUser_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Invites_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Invites_Order_By>>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

export type Subscription_RootUser_Invites_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_Invites_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Invites_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_By_PkArgs = {
  role: Scalars["String"]["input"];
};

export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootWork_SchedulesArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedules_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Schedules_Order_By>>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

export type Subscription_RootWork_Schedules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Schedules_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Schedules_Order_By>>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

export type Subscription_RootWork_Schedules_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootWork_Schedules_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Work_Schedules_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

export type Subscription_RootWork_ShiftsArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

export type Subscription_RootWork_Shifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

export type Subscription_RootWork_Shifts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootWork_Shifts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Work_Shifts_Stream_Cursor_Input>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

/** columns and relationships of "supplier_categories_enum" */
export type Supplier_Categories_Enum = {
  __typename?: "supplier_categories_enum";
  description: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  /** An array relationship */
  suppliers_categories: Array<Suppliers_Categories>;
  /** An aggregate relationship */
  suppliers_categories_aggregate: Suppliers_Categories_Aggregate;
};

/** columns and relationships of "supplier_categories_enum" */
export type Supplier_Categories_EnumSuppliers_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

/** columns and relationships of "supplier_categories_enum" */
export type Supplier_Categories_EnumSuppliers_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

/** aggregated selection of "supplier_categories_enum" */
export type Supplier_Categories_Enum_Aggregate = {
  __typename?: "supplier_categories_enum_aggregate";
  aggregate?: Maybe<Supplier_Categories_Enum_Aggregate_Fields>;
  nodes: Array<Supplier_Categories_Enum>;
};

/** aggregate fields of "supplier_categories_enum" */
export type Supplier_Categories_Enum_Aggregate_Fields = {
  __typename?: "supplier_categories_enum_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Supplier_Categories_Enum_Max_Fields>;
  min?: Maybe<Supplier_Categories_Enum_Min_Fields>;
};

/** aggregate fields of "supplier_categories_enum" */
export type Supplier_Categories_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplier_Categories_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "supplier_categories_enum". All fields are combined with a logical 'AND'. */
export type Supplier_Categories_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Supplier_Categories_Enum_Bool_Exp>>;
  _not?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Supplier_Categories_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  suppliers_categories?: InputMaybe<Suppliers_Categories_Bool_Exp>;
  suppliers_categories_aggregate?: InputMaybe<Suppliers_Categories_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "supplier_categories_enum" */
export enum Supplier_Categories_Enum_Constraint {
  /** unique or primary key constraint on columns "name" */
  SupplierCategoriesEnumPkey = "supplier_categories_enum_pkey",
}

export enum Supplier_Categories_Enum_Enum {
  /** Tools, seeds, and equipment for farmers, supporting agricultural productivity and local food production. */
  AgriculturalSupplies = "agricultural_supplies",
  /** Cosmetics, skincare products, grooming essentials, and personal care items, supporting local beauty entrepreneurs and promoting self-care. */
  BeautyAndCare = "beauty_and_care",
  /** Apparel, fabrics, and textiles, empowering local tailors and designers, fostering the textile industry */
  ClothingAndTextiles = "clothing_and_textiles",
  /** Essential materials like cement, steel, and bricks for construction projects, fostering infrastructure development. */
  ConstructionMaterials = "construction_materials",
  /** Books, educational tools, and e-learning resources, promoting education and literacy in the community. */
  EducationalMaterials = "educational_materials",
  /** Electronic devices, wiring, and appliances, promoting technological access and local electronic businesses */
  ElectronicsAppliances = "electronics_appliances",
  /** Solar panels, wind turbines, and energy-efficient appliances, promoting sustainable energy use and reducing the carbon footprint. */
  EnergySolutions = "energy_solutions",
  /** Fresh produce, packaged foods, beverages, and culinary supplies, supporting local agriculture and culinary enterprises. */
  FoodAndBeverages = "food_and_beverages",
  /** Medical supplies, safety equipment, and personal protective gear, ensuring the well-being of workers and communities. */
  HealthAndSafety = "health_and_safety",
  /** Furniture, home appliances, decor items, and household essentials, improving living standards and supporting local artisans. */
  HomeAndLiving = "home_and_living",
  /** Stationery, office materials, and supplies, supporting administrative functions of businesses and organizations. */
  OfficeSupplies = "office_supplies",
  /** Vehicles, spare parts, and transportation services, enhancing mobility and logistics for businesses and individuals. */
  TransportationSolutions = "transportation_solutions",
  /** Recycling equipment, waste bins, and eco-friendly products, encouraging responsible waste management practices. */
  WasteAndRecycling = "waste_and_recycling",
  /** Water filters, sanitation kits, and plumbing supplies, ensuring access to clean water and promoting hygiene. */
  WaterAndSanitation = "water_and_sanitation",
}

/** Boolean expression to compare columns of type "supplier_categories_enum_enum". All fields are combined with logical 'AND'. */
export type Supplier_Categories_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Supplier_Categories_Enum_Enum>;
  _in?: InputMaybe<Array<Supplier_Categories_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Supplier_Categories_Enum_Enum>;
  _nin?: InputMaybe<Array<Supplier_Categories_Enum_Enum>>;
};

/** input type for inserting data into table "supplier_categories_enum" */
export type Supplier_Categories_Enum_Insert_Input = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  suppliers_categories?: InputMaybe<Suppliers_Categories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Supplier_Categories_Enum_Max_Fields = {
  __typename?: "supplier_categories_enum_max_fields";
  description?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Supplier_Categories_Enum_Min_Fields = {
  __typename?: "supplier_categories_enum_min_fields";
  description?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "supplier_categories_enum" */
export type Supplier_Categories_Enum_Mutation_Response = {
  __typename?: "supplier_categories_enum_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Supplier_Categories_Enum>;
};

/** input type for inserting object relation for remote table "supplier_categories_enum" */
export type Supplier_Categories_Enum_Obj_Rel_Insert_Input = {
  data: Supplier_Categories_Enum_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Supplier_Categories_Enum_On_Conflict>;
};

/** on_conflict condition type for table "supplier_categories_enum" */
export type Supplier_Categories_Enum_On_Conflict = {
  constraint: Supplier_Categories_Enum_Constraint;
  update_columns?: Array<Supplier_Categories_Enum_Update_Column>;
  where?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "supplier_categories_enum". */
export type Supplier_Categories_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  suppliers_categories_aggregate?: InputMaybe<Suppliers_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: supplier_categories_enum */
export type Supplier_Categories_Enum_Pk_Columns_Input = {
  name: Scalars["String"]["input"];
};

/** select columns of table "supplier_categories_enum" */
export enum Supplier_Categories_Enum_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "supplier_categories_enum" */
export type Supplier_Categories_Enum_Set_Input = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "supplier_categories_enum" */
export type Supplier_Categories_Enum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supplier_Categories_Enum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplier_Categories_Enum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "supplier_categories_enum" */
export enum Supplier_Categories_Enum_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Name = "name",
}

export type Supplier_Categories_Enum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supplier_Categories_Enum_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supplier_Categories_Enum_Bool_Exp;
};

/** columns and relationships of "supplier_service_zone" */
export type Supplier_Service_Zone = {
  __typename?: "supplier_service_zone";
  coverage_area_radius: Scalars["Int"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  location_id: Scalars["uuid"]["output"];
  supplier_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "supplier_service_zone" */
export type Supplier_Service_Zone_Aggregate = {
  __typename?: "supplier_service_zone_aggregate";
  aggregate?: Maybe<Supplier_Service_Zone_Aggregate_Fields>;
  nodes: Array<Supplier_Service_Zone>;
};

export type Supplier_Service_Zone_Aggregate_Bool_Exp = {
  count?: InputMaybe<Supplier_Service_Zone_Aggregate_Bool_Exp_Count>;
};

export type Supplier_Service_Zone_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "supplier_service_zone" */
export type Supplier_Service_Zone_Aggregate_Fields = {
  __typename?: "supplier_service_zone_aggregate_fields";
  avg?: Maybe<Supplier_Service_Zone_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Supplier_Service_Zone_Max_Fields>;
  min?: Maybe<Supplier_Service_Zone_Min_Fields>;
  stddev?: Maybe<Supplier_Service_Zone_Stddev_Fields>;
  stddev_pop?: Maybe<Supplier_Service_Zone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supplier_Service_Zone_Stddev_Samp_Fields>;
  sum?: Maybe<Supplier_Service_Zone_Sum_Fields>;
  var_pop?: Maybe<Supplier_Service_Zone_Var_Pop_Fields>;
  var_samp?: Maybe<Supplier_Service_Zone_Var_Samp_Fields>;
  variance?: Maybe<Supplier_Service_Zone_Variance_Fields>;
};

/** aggregate fields of "supplier_service_zone" */
export type Supplier_Service_Zone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "supplier_service_zone" */
export type Supplier_Service_Zone_Aggregate_Order_By = {
  avg?: InputMaybe<Supplier_Service_Zone_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supplier_Service_Zone_Max_Order_By>;
  min?: InputMaybe<Supplier_Service_Zone_Min_Order_By>;
  stddev?: InputMaybe<Supplier_Service_Zone_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Supplier_Service_Zone_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Supplier_Service_Zone_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Supplier_Service_Zone_Sum_Order_By>;
  var_pop?: InputMaybe<Supplier_Service_Zone_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Supplier_Service_Zone_Var_Samp_Order_By>;
  variance?: InputMaybe<Supplier_Service_Zone_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "supplier_service_zone" */
export type Supplier_Service_Zone_Arr_Rel_Insert_Input = {
  data: Array<Supplier_Service_Zone_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Supplier_Service_Zone_On_Conflict>;
};

/** aggregate avg on columns */
export type Supplier_Service_Zone_Avg_Fields = {
  __typename?: "supplier_service_zone_avg_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Avg_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "supplier_service_zone". All fields are combined with a logical 'AND'. */
export type Supplier_Service_Zone_Bool_Exp = {
  _and?: InputMaybe<Array<Supplier_Service_Zone_Bool_Exp>>;
  _not?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
  _or?: InputMaybe<Array<Supplier_Service_Zone_Bool_Exp>>;
  coverage_area_radius?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  supplier_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "supplier_service_zone" */
export enum Supplier_Service_Zone_Constraint {
  /** unique or primary key constraint on columns "id" */
  SupplierServiceZonePkey = "supplier_service_zone_pkey",
}

/** input type for incrementing numeric columns in table "supplier_service_zone" */
export type Supplier_Service_Zone_Inc_Input = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "supplier_service_zone" */
export type Supplier_Service_Zone_Insert_Input = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  location_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Supplier_Service_Zone_Max_Fields = {
  __typename?: "supplier_service_zone_max_fields";
  coverage_area_radius?: Maybe<Scalars["Int"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  location_id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Max_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supplier_Service_Zone_Min_Fields = {
  __typename?: "supplier_service_zone_min_fields";
  coverage_area_radius?: Maybe<Scalars["Int"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  location_id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Min_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "supplier_service_zone" */
export type Supplier_Service_Zone_Mutation_Response = {
  __typename?: "supplier_service_zone_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Supplier_Service_Zone>;
};

/** on_conflict condition type for table "supplier_service_zone" */
export type Supplier_Service_Zone_On_Conflict = {
  constraint: Supplier_Service_Zone_Constraint;
  update_columns?: Array<Supplier_Service_Zone_Update_Column>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

/** Ordering options when selecting data from "supplier_service_zone". */
export type Supplier_Service_Zone_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supplier_service_zone */
export type Supplier_Service_Zone_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "supplier_service_zone" */
export enum Supplier_Service_Zone_Select_Column {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

/** input type for updating data in table "supplier_service_zone" */
export type Supplier_Service_Zone_Set_Input = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  location_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Supplier_Service_Zone_Stddev_Fields = {
  __typename?: "supplier_service_zone_stddev_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Stddev_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Supplier_Service_Zone_Stddev_Pop_Fields = {
  __typename?: "supplier_service_zone_stddev_pop_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Stddev_Pop_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Supplier_Service_Zone_Stddev_Samp_Fields = {
  __typename?: "supplier_service_zone_stddev_samp_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Stddev_Samp_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "supplier_service_zone" */
export type Supplier_Service_Zone_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supplier_Service_Zone_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplier_Service_Zone_Stream_Cursor_Value_Input = {
  coverage_area_radius?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  location_id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Supplier_Service_Zone_Sum_Fields = {
  __typename?: "supplier_service_zone_sum_fields";
  coverage_area_radius?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Sum_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** update columns of table "supplier_service_zone" */
export enum Supplier_Service_Zone_Update_Column {
  /** column name */
  CoverageAreaRadius = "coverage_area_radius",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LocationId = "location_id",
  /** column name */
  SupplierId = "supplier_id",
}

export type Supplier_Service_Zone_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supplier_Service_Zone_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supplier_Service_Zone_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supplier_Service_Zone_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supplier_Service_Zone_Var_Pop_Fields = {
  __typename?: "supplier_service_zone_var_pop_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Var_Pop_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Supplier_Service_Zone_Var_Samp_Fields = {
  __typename?: "supplier_service_zone_var_samp_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Var_Samp_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Supplier_Service_Zone_Variance_Fields = {
  __typename?: "supplier_service_zone_variance_fields";
  coverage_area_radius?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "supplier_service_zone" */
export type Supplier_Service_Zone_Variance_Order_By = {
  coverage_area_radius?: InputMaybe<Order_By>;
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: "suppliers";
  /** An array relationship */
  categories: Array<Suppliers_Categories>;
  /** An aggregate relationship */
  categories_aggregate: Suppliers_Categories_Aggregate;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  order_suppliers: Array<Order_Supplier>;
  /** An aggregate relationship */
  order_suppliers_aggregate: Order_Supplier_Aggregate;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** An object relationship */
  schedule?: Maybe<Work_Schedules>;
  /** An array relationship */
  service_zones: Array<Supplier_Service_Zone>;
  /** An aggregate relationship */
  service_zones_aggregate: Supplier_Service_Zone_Aggregate;
  streetAddress?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  zone?: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "suppliers" */
export type SuppliersCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Suppliers_Categories_Order_By>>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersOrder_SuppliersArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersOrder_Suppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Order_Supplier_Order_By>>;
  where?: InputMaybe<Order_Supplier_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersService_ZonesArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type SuppliersService_Zones_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Service_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Supplier_Service_Zone_Order_By>>;
  where?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
};

/** aggregated selection of "suppliers" */
export type Suppliers_Aggregate = {
  __typename?: "suppliers_aggregate";
  aggregate?: Maybe<Suppliers_Aggregate_Fields>;
  nodes: Array<Suppliers>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_Fields = {
  __typename?: "suppliers_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Suppliers_Max_Fields>;
  min?: Maybe<Suppliers_Min_Fields>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suppliers_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  _not?: InputMaybe<Suppliers_Bool_Exp>;
  _or?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  categories?: InputMaybe<Suppliers_Categories_Bool_Exp>;
  categories_aggregate?: InputMaybe<Suppliers_Categories_Aggregate_Bool_Exp>;
  contactEmail?: InputMaybe<String_Comparison_Exp>;
  contactName?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_suppliers?: InputMaybe<Order_Supplier_Bool_Exp>;
  order_suppliers_aggregate?: InputMaybe<Order_Supplier_Aggregate_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  schedule?: InputMaybe<Work_Schedules_Bool_Exp>;
  service_zones?: InputMaybe<Supplier_Service_Zone_Bool_Exp>;
  service_zones_aggregate?: InputMaybe<Supplier_Service_Zone_Aggregate_Bool_Exp>;
  streetAddress?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  zone?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "suppliers_categories" */
export type Suppliers_Categories = {
  __typename?: "suppliers_categories";
  category_name: Supplier_Categories_Enum_Enum;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  supplier: Suppliers;
  /** An object relationship */
  supplier_categories_enum: Supplier_Categories_Enum;
  supplier_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "suppliers_categories" */
export type Suppliers_Categories_Aggregate = {
  __typename?: "suppliers_categories_aggregate";
  aggregate?: Maybe<Suppliers_Categories_Aggregate_Fields>;
  nodes: Array<Suppliers_Categories>;
};

export type Suppliers_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Suppliers_Categories_Aggregate_Bool_Exp_Count>;
};

export type Suppliers_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Suppliers_Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "suppliers_categories" */
export type Suppliers_Categories_Aggregate_Fields = {
  __typename?: "suppliers_categories_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Suppliers_Categories_Max_Fields>;
  min?: Maybe<Suppliers_Categories_Min_Fields>;
};

/** aggregate fields of "suppliers_categories" */
export type Suppliers_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suppliers_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "suppliers_categories" */
export type Suppliers_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Suppliers_Categories_Max_Order_By>;
  min?: InputMaybe<Suppliers_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "suppliers_categories" */
export type Suppliers_Categories_Arr_Rel_Insert_Input = {
  data: Array<Suppliers_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Suppliers_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "suppliers_categories". All fields are combined with a logical 'AND'. */
export type Suppliers_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Suppliers_Categories_Bool_Exp>>;
  _not?: InputMaybe<Suppliers_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Suppliers_Categories_Bool_Exp>>;
  category_name?: InputMaybe<Supplier_Categories_Enum_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  supplier?: InputMaybe<Suppliers_Bool_Exp>;
  supplier_categories_enum?: InputMaybe<Supplier_Categories_Enum_Bool_Exp>;
  supplier_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "suppliers_categories" */
export enum Suppliers_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersCategoriesPkey = "suppliers_categories_pkey",
}

/** input type for inserting data into table "suppliers_categories" */
export type Suppliers_Categories_Insert_Input = {
  category_name?: InputMaybe<Supplier_Categories_Enum_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier?: InputMaybe<Suppliers_Obj_Rel_Insert_Input>;
  supplier_categories_enum?: InputMaybe<Supplier_Categories_Enum_Obj_Rel_Insert_Input>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Suppliers_Categories_Max_Fields = {
  __typename?: "suppliers_categories_max_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "suppliers_categories" */
export type Suppliers_Categories_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Suppliers_Categories_Min_Fields = {
  __typename?: "suppliers_categories_min_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "suppliers_categories" */
export type Suppliers_Categories_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "suppliers_categories" */
export type Suppliers_Categories_Mutation_Response = {
  __typename?: "suppliers_categories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers_Categories>;
};

/** on_conflict condition type for table "suppliers_categories" */
export type Suppliers_Categories_On_Conflict = {
  constraint: Suppliers_Categories_Constraint;
  update_columns?: Array<Suppliers_Categories_Update_Column>;
  where?: InputMaybe<Suppliers_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers_categories". */
export type Suppliers_Categories_Order_By = {
  category_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Suppliers_Order_By>;
  supplier_categories_enum?: InputMaybe<Supplier_Categories_Enum_Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: suppliers_categories */
export type Suppliers_Categories_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "suppliers_categories" */
export enum Suppliers_Categories_Select_Column {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

/** input type for updating data in table "suppliers_categories" */
export type Suppliers_Categories_Set_Input = {
  category_name?: InputMaybe<Supplier_Categories_Enum_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "suppliers_categories" */
export type Suppliers_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suppliers_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suppliers_Categories_Stream_Cursor_Value_Input = {
  category_name?: InputMaybe<Supplier_Categories_Enum_Enum>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "suppliers_categories" */
export enum Suppliers_Categories_Update_Column {
  /** column name */
  CategoryName = "category_name",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
}

export type Suppliers_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suppliers_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Suppliers_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "suppliers" */
export enum Suppliers_Constraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersPkey = "suppliers_pkey",
}

/** input type for inserting data into table "suppliers" */
export type Suppliers_Insert_Input = {
  categories?: InputMaybe<Suppliers_Categories_Arr_Rel_Insert_Input>;
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order_suppliers?: InputMaybe<Order_Supplier_Arr_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  schedule?: InputMaybe<Work_Schedules_Obj_Rel_Insert_Input>;
  service_zones?: InputMaybe<Supplier_Service_Zone_Arr_Rel_Insert_Input>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  zone?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Suppliers_Max_Fields = {
  __typename?: "suppliers_max_fields";
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  streetAddress?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  zone?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Suppliers_Min_Fields = {
  __typename?: "suppliers_min_fields";
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactName?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  streetAddress?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  zone?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "suppliers" */
export type Suppliers_Mutation_Response = {
  __typename?: "suppliers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers>;
};

/** input type for inserting object relation for remote table "suppliers" */
export type Suppliers_Obj_Rel_Insert_Input = {
  data: Suppliers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** on_conflict condition type for table "suppliers" */
export type Suppliers_On_Conflict = {
  constraint: Suppliers_Constraint;
  update_columns?: Array<Suppliers_Update_Column>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  categories_aggregate?: InputMaybe<Suppliers_Categories_Aggregate_Order_By>;
  contactEmail?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_suppliers_aggregate?: InputMaybe<Order_Supplier_Aggregate_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  schedule?: InputMaybe<Work_Schedules_Order_By>;
  service_zones_aggregate?: InputMaybe<Supplier_Service_Zone_Aggregate_Order_By>;
  streetAddress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  zone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: suppliers */
export type Suppliers_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  StreetAddress = "streetAddress",
  /** column name */
  UserId = "user_id",
  /** column name */
  Zone = "zone",
}

/** input type for updating data in table "suppliers" */
export type Suppliers_Set_Input = {
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  zone?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "suppliers" */
export type Suppliers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suppliers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suppliers_Stream_Cursor_Value_Input = {
  contactEmail?: InputMaybe<Scalars["String"]["input"]>;
  contactName?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  zone?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "suppliers" */
export enum Suppliers_Update_Column {
  /** column name */
  ContactEmail = "contactEmail",
  /** column name */
  ContactName = "contactName",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  StreetAddress = "streetAddress",
  /** column name */
  UserId = "user_id",
  /** column name */
  Zone = "zone",
}

export type Suppliers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suppliers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Suppliers_Bool_Exp;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["time"]["input"]>;
  _gt?: InputMaybe<Scalars["time"]["input"]>;
  _gte?: InputMaybe<Scalars["time"]["input"]>;
  _in?: InputMaybe<Array<Scalars["time"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["time"]["input"]>;
  _lte?: InputMaybe<Scalars["time"]["input"]>;
  _neq?: InputMaybe<Scalars["time"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["time"]["input"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "user_invites" */
export type User_Invites = {
  __typename?: "user_invites";
  created_at: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  role: User_Role_Enum;
};

/** aggregated selection of "user_invites" */
export type User_Invites_Aggregate = {
  __typename?: "user_invites_aggregate";
  aggregate?: Maybe<User_Invites_Aggregate_Fields>;
  nodes: Array<User_Invites>;
};

/** aggregate fields of "user_invites" */
export type User_Invites_Aggregate_Fields = {
  __typename?: "user_invites_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Invites_Max_Fields>;
  min?: Maybe<User_Invites_Min_Fields>;
};

/** aggregate fields of "user_invites" */
export type User_Invites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Invites_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "user_invites". All fields are combined with a logical 'AND'. */
export type User_Invites_Bool_Exp = {
  _and?: InputMaybe<Array<User_Invites_Bool_Exp>>;
  _not?: InputMaybe<User_Invites_Bool_Exp>;
  _or?: InputMaybe<Array<User_Invites_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Role_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_invites" */
export enum User_Invites_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserInvitesPkey = "user_invites_pkey",
}

/** input type for inserting data into table "user_invites" */
export type User_Invites_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** aggregate max on columns */
export type User_Invites_Max_Fields = {
  __typename?: "user_invites_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type User_Invites_Min_Fields = {
  __typename?: "user_invites_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user_invites" */
export type User_Invites_Mutation_Response = {
  __typename?: "user_invites_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Invites>;
};

/** on_conflict condition type for table "user_invites" */
export type User_Invites_On_Conflict = {
  constraint: User_Invites_Constraint;
  update_columns?: Array<User_Invites_Update_Column>;
  where?: InputMaybe<User_Invites_Bool_Exp>;
};

/** Ordering options when selecting data from "user_invites". */
export type User_Invites_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_invites */
export type User_Invites_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "user_invites" */
export enum User_Invites_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

/** input type for updating data in table "user_invites" */
export type User_Invites_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** Streaming cursor of the table "user_invites" */
export type User_Invites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Invites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Invites_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** update columns of table "user_invites" */
export enum User_Invites_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export type User_Invites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Invites_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Invites_Bool_Exp;
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: "user_role";
  role: Scalars["String"]["output"];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};

/** columns and relationships of "user_role" */
export type User_RoleUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "user_role" */
export type User_RoleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: "user_role_aggregate";
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: "user_role_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  UserRolePkey = "user_role_pkey",
}

export enum User_Role_Enum {
  Admin = "admin",
  Agent = "agent",
  Business = "business",
  Courier = "courier",
  Supplier = "supplier",
  User = "user",
}

/** Boolean expression to compare columns of type "user_role_enum". All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Role_Enum>;
  _in?: InputMaybe<Array<User_Role_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<User_Role_Enum>;
  _nin?: InputMaybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: "user_role_max_fields";
  role?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: "user_role_min_fields";
  role?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: "user_role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  role?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  role: Scalars["String"]["input"];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Role = "role",
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Role = "role",
}

export type User_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  created_at: Scalars["timestamptz"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  hasCompletedOnboarding?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["uuid"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<User_Role_Enum>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** An object relationship */
  user_role?: Maybe<User_Role>;
};

/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  hasCompletedOnboarding?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Role_Enum_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  user_role?: InputMaybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasCompletedOnboarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  user_role?: InputMaybe<User_Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  hasCompletedOnboarding?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  user_role?: InputMaybe<User_Role_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  HasCompletedOnboarding = "hasCompletedOnboarding",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasCompletedOnboarding = "hasCompletedOnboarding",
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasCompletedOnboarding = "hasCompletedOnboarding",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasCompletedOnboarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasCompletedOnboarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  HasCompletedOnboarding = "hasCompletedOnboarding",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: "verification_tokens";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: "verification_tokens_aggregate";
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: "verification_tokens_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = "verification_tokens_pkey",
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: "verification_tokens_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: "verification_tokens_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: "verification_tokens_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars["String"]["input"];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

/** columns and relationships of "work_schedules" */
export type Work_Schedules = {
  __typename?: "work_schedules";
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  days: Array<Scalars["Boolean"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An array relationship */
  shifts: Array<Work_Shifts>;
  /** An aggregate relationship */
  shifts_aggregate: Work_Shifts_Aggregate;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "work_schedules" */
export type Work_SchedulesShiftsArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

/** columns and relationships of "work_schedules" */
export type Work_SchedulesShifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Work_Shifts_Order_By>>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

/** aggregated selection of "work_schedules" */
export type Work_Schedules_Aggregate = {
  __typename?: "work_schedules_aggregate";
  aggregate?: Maybe<Work_Schedules_Aggregate_Fields>;
  nodes: Array<Work_Schedules>;
};

/** aggregate fields of "work_schedules" */
export type Work_Schedules_Aggregate_Fields = {
  __typename?: "work_schedules_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Work_Schedules_Max_Fields>;
  min?: Maybe<Work_Schedules_Min_Fields>;
};

/** aggregate fields of "work_schedules" */
export type Work_Schedules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Schedules_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "work_schedules". All fields are combined with a logical 'AND'. */
export type Work_Schedules_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Schedules_Bool_Exp>>;
  _not?: InputMaybe<Work_Schedules_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Schedules_Bool_Exp>>;
  business_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  days?: InputMaybe<Boolean_Array_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  shifts?: InputMaybe<Work_Shifts_Bool_Exp>;
  shifts_aggregate?: InputMaybe<Work_Shifts_Aggregate_Bool_Exp>;
  supplier_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_schedules" */
export enum Work_Schedules_Constraint {
  /** unique or primary key constraint on columns "business_id" */
  WorkSchedulesBusinessIdKey = "work_schedules_business_id_key",
  /** unique or primary key constraint on columns "id" */
  WorkSchedulesPkey = "work_schedules_pkey",
  /** unique or primary key constraint on columns "supplier_id" */
  WorkSchedulesSupplierIdKey = "work_schedules_supplier_id_key",
}

/** input type for inserting data into table "work_schedules" */
export type Work_Schedules_Insert_Input = {
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  days?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  shifts?: InputMaybe<Work_Shifts_Arr_Rel_Insert_Input>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Work_Schedules_Max_Fields = {
  __typename?: "work_schedules_max_fields";
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  days?: Maybe<Array<Scalars["Boolean"]["output"]>>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Work_Schedules_Min_Fields = {
  __typename?: "work_schedules_min_fields";
  business_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  days?: Maybe<Array<Scalars["Boolean"]["output"]>>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  supplier_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "work_schedules" */
export type Work_Schedules_Mutation_Response = {
  __typename?: "work_schedules_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Schedules>;
};

/** input type for inserting object relation for remote table "work_schedules" */
export type Work_Schedules_Obj_Rel_Insert_Input = {
  data: Work_Schedules_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Schedules_On_Conflict>;
};

/** on_conflict condition type for table "work_schedules" */
export type Work_Schedules_On_Conflict = {
  constraint: Work_Schedules_Constraint;
  update_columns?: Array<Work_Schedules_Update_Column>;
  where?: InputMaybe<Work_Schedules_Bool_Exp>;
};

/** Ordering options when selecting data from "work_schedules". */
export type Work_Schedules_Order_By = {
  business_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shifts_aggregate?: InputMaybe<Work_Shifts_Aggregate_Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: work_schedules */
export type Work_Schedules_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "work_schedules" */
export enum Work_Schedules_Select_Column {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Days = "days",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "work_schedules" */
export type Work_Schedules_Set_Input = {
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  days?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "work_schedules" */
export type Work_Schedules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Schedules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Schedules_Stream_Cursor_Value_Input = {
  business_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  days?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  supplier_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "work_schedules" */
export enum Work_Schedules_Update_Column {
  /** column name */
  BusinessId = "business_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Days = "days",
  /** column name */
  Id = "id",
  /** column name */
  SupplierId = "supplier_id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Work_Schedules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Schedules_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Schedules_Bool_Exp;
};

/** columns and relationships of "work_shifts" */
export type Work_Shifts = {
  __typename?: "work_shifts";
  created_at: Scalars["timestamptz"]["output"];
  end_time: Scalars["time"]["output"];
  id: Scalars["uuid"]["output"];
  schedule_id: Scalars["uuid"]["output"];
  start_time: Scalars["time"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "work_shifts" */
export type Work_Shifts_Aggregate = {
  __typename?: "work_shifts_aggregate";
  aggregate?: Maybe<Work_Shifts_Aggregate_Fields>;
  nodes: Array<Work_Shifts>;
};

export type Work_Shifts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_Shifts_Aggregate_Bool_Exp_Count>;
};

export type Work_Shifts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Work_Shifts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "work_shifts" */
export type Work_Shifts_Aggregate_Fields = {
  __typename?: "work_shifts_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Work_Shifts_Max_Fields>;
  min?: Maybe<Work_Shifts_Min_Fields>;
};

/** aggregate fields of "work_shifts" */
export type Work_Shifts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Work_Shifts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "work_shifts" */
export type Work_Shifts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Work_Shifts_Max_Order_By>;
  min?: InputMaybe<Work_Shifts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "work_shifts" */
export type Work_Shifts_Arr_Rel_Insert_Input = {
  data: Array<Work_Shifts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Work_Shifts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "work_shifts". All fields are combined with a logical 'AND'. */
export type Work_Shifts_Bool_Exp = {
  _and?: InputMaybe<Array<Work_Shifts_Bool_Exp>>;
  _not?: InputMaybe<Work_Shifts_Bool_Exp>;
  _or?: InputMaybe<Array<Work_Shifts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Time_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  schedule_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_time?: InputMaybe<Time_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_shifts" */
export enum Work_Shifts_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkShiftsPkey = "work_shifts_pkey",
}

/** input type for inserting data into table "work_shifts" */
export type Work_Shifts_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  end_time?: InputMaybe<Scalars["time"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  schedule_id?: InputMaybe<Scalars["uuid"]["input"]>;
  start_time?: InputMaybe<Scalars["time"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Work_Shifts_Max_Fields = {
  __typename?: "work_shifts_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  schedule_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "work_shifts" */
export type Work_Shifts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Shifts_Min_Fields = {
  __typename?: "work_shifts_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  schedule_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "work_shifts" */
export type Work_Shifts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "work_shifts" */
export type Work_Shifts_Mutation_Response = {
  __typename?: "work_shifts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Shifts>;
};

/** on_conflict condition type for table "work_shifts" */
export type Work_Shifts_On_Conflict = {
  constraint: Work_Shifts_Constraint;
  update_columns?: Array<Work_Shifts_Update_Column>;
  where?: InputMaybe<Work_Shifts_Bool_Exp>;
};

/** Ordering options when selecting data from "work_shifts". */
export type Work_Shifts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: work_shifts */
export type Work_Shifts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "work_shifts" */
export enum Work_Shifts_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  ScheduleId = "schedule_id",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "work_shifts" */
export type Work_Shifts_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  end_time?: InputMaybe<Scalars["time"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  schedule_id?: InputMaybe<Scalars["uuid"]["input"]>;
  start_time?: InputMaybe<Scalars["time"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "work_shifts" */
export type Work_Shifts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Work_Shifts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Shifts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  end_time?: InputMaybe<Scalars["time"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  schedule_id?: InputMaybe<Scalars["uuid"]["input"]>;
  start_time?: InputMaybe<Scalars["time"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "work_shifts" */
export enum Work_Shifts_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  ScheduleId = "schedule_id",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Work_Shifts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Work_Shifts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Work_Shifts_Bool_Exp;
};

export type RegisterBusinessMutationVariables = Exact<{
  object: Business_Insert_Input;
}>;

export type RegisterBusinessMutation = {
  __typename?: "mutation_root";
  insert_business_one?: {
    __typename?: "business";
    id: any;
    name?: string | null;
  } | null;
};

export type RegisterBusinessActionMutationVariables = Exact<{
  object: RegisterBusinessActionBusinessInsertInput;
}>;

export type RegisterBusinessActionMutation = {
  __typename?: "mutation_root";
  registerBusinessAction: any;
};

export type InsertBusinessAddressMutationVariables = Exact<{
  object: Addresses_Insert_Input;
}>;

export type InsertBusinessAddressMutation = {
  __typename?: "mutation_root";
  insert_addresses_one?: {
    __typename?: "addresses";
    business_id?: any | null;
    city?: string | null;
  } | null;
};

export type OnboardNewBusinessMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  role?: InputMaybe<User_Role_Enum>;
  object?: InputMaybe<Business_Insert_Input>;
}>;

export type OnboardNewBusinessMutation = {
  __typename?: "mutation_root";
  update_users_by_pk?: {
    __typename?: "users";
    role?: User_Role_Enum | null;
  } | null;
  insert_business_one?: { __typename?: "business"; id: any } | null;
};

export type InsertNewCourierMutationVariables = Exact<{
  object?: InputMaybe<Couriers_Insert_Input>;
}>;

export type InsertNewCourierMutation = {
  __typename?: "mutation_root";
  insert_couriers_one?: {
    __typename?: "couriers";
    id: any;
    name: string;
  } | null;
};

export type InsertBusinessOrderMutationVariables = Exact<{
  object: Orders_Insert_Input;
}>;

export type InsertBusinessOrderMutation = {
  __typename?: "mutation_root";
  insert_orders_one?: { __typename?: "orders"; id: any } | null;
};

export type InsertBusinessOrderActionMutationVariables = Exact<{
  object?: InputMaybe<InsertBusinessOrderOrdersInsertInput>;
}>;

export type InsertBusinessOrderActionMutation = {
  __typename?: "mutation_root";
  insertBusinessOrder: any;
};

export type RegisterSupplierMutationVariables = Exact<{
  object: Suppliers_Insert_Input;
}>;

export type RegisterSupplierMutation = {
  __typename?: "mutation_root";
  insert_suppliers_one?: {
    __typename?: "suppliers";
    id: any;
    name?: string | null;
  } | null;
};

export type UpdateProductByPkMutationVariables = Exact<{
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  inStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateProductByPkMutation = {
  __typename?: "mutation_root";
  update_products_by_pk?: {
    __typename?: "products";
    id: any;
    inStock: boolean;
    name?: string | null;
    price?: number | null;
    quantity: number;
    description?: string | null;
  } | null;
};

export type DeleteProductByPkMutationVariables = Exact<{
  id?: InputMaybe<Scalars["uuid"]["input"]>;
}>;

export type DeleteProductByPkMutation = {
  __typename?: "mutation_root";
  delete_products_by_pk?: { __typename?: "products"; id: any } | null;
};

export type AddNewProductMutationVariables = Exact<{
  product?: InputMaybe<Products_Insert_Input>;
}>;

export type AddNewProductMutation = {
  __typename?: "mutation_root";
  insert_products_one?: {
    __typename?: "products";
    created_at: any;
    description?: string | null;
    discount?: number | null;
    id: any;
    inStock: boolean;
    name?: string | null;
    price?: number | null;
    quantity: number;
    supplier_id?: any | null;
  } | null;
};

export type OnboardNewSupplierMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  role?: InputMaybe<User_Role_Enum>;
  object?: InputMaybe<Suppliers_Insert_Input>;
}>;

export type OnboardNewSupplierMutation = {
  __typename?: "mutation_root";
  update_users_by_pk?: {
    __typename?: "users";
    role?: User_Role_Enum | null;
  } | null;
  insert_suppliers_one?: { __typename?: "suppliers"; id: any } | null;
};

export type RegisterUserActionMutationVariables = Exact<{
  object: RegisterUserActionUsersInsertInput;
}>;

export type RegisterUserActionMutation = {
  __typename?: "mutation_root";
  registerUserAction: any;
};

export type GetBusinessesQueryVariables = Exact<{ [key: string]: never }>;

export type GetBusinessesQuery = {
  __typename?: "query_root";
  business: Array<{
    __typename?: "business";
    created_at: any;
    id: any;
    updated_at: any;
    name?: string | null;
    contactName?: string | null;
    type?: Business_Type_Enum | null;
    phoneNumber?: string | null;
    description?: string | null;
    contactEmail?: string | null;
    addresses: Array<{
      __typename?: "addresses";
      city?: string | null;
      created_at: any;
      id: any;
      latitude?: any | null;
      longitude?: any | null;
      updated_at: any;
      street_address?: string | null;
    }>;
  }>;
  business_aggregate: {
    __typename?: "business_aggregate";
    aggregate?: {
      __typename?: "business_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetBusinessOrdersQueryVariables = Exact<{
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetBusinessOrdersQuery = {
  __typename?: "query_root";
  orders: Array<{
    __typename?: "orders";
    id: any;
    created_at: any;
    destination?: string | null;
    orderId?: any | null;
    customerId?: any | null;
    origin?: string | null;
    status?: Order_Status_Enum | null;
    business?: {
      __typename?: "business";
      contactName?: string | null;
      phoneNumber?: string | null;
      name?: string | null;
    } | null;
  }>;
  orders_aggregate: {
    __typename?: "orders_aggregate";
    aggregate?: {
      __typename?: "orders_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetBusinessByPkQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetBusinessByPkQuery = {
  __typename?: "query_root";
  business_by_pk?: {
    __typename?: "business";
    id: any;
    name?: string | null;
    contactName?: string | null;
    phoneNumber?: string | null;
    description?: string | null;
    contactEmail?: string | null;
    type?: Business_Type_Enum | null;
    agent?: { __typename?: "users"; name?: string | null; id: any } | null;
    addresses: Array<{
      __typename?: "addresses";
      city?: string | null;
      street_address?: string | null;
    }>;
    schedule?: {
      __typename?: "work_schedules";
      days: Array<boolean>;
      shifts: Array<{
        __typename?: "work_shifts";
        start_time: any;
        end_time: any;
      }>;
    } | null;
  } | null;
};

export type GetBusinessTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetBusinessTypesQuery = {
  __typename?: "query_root";
  business_type: Array<{ __typename?: "business_type"; type: string }>;
};

export type GetCouriersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCouriersQuery = {
  __typename?: "query_root";
  couriers: Array<{
    __typename?: "couriers";
    id: any;
    avatar?: string | null;
    name: string;
    DOB?: any | null;
    phoneNumber?: string | null;
    gender?: string | null;
    email?: string | null;
  }>;
  couriers_aggregate: {
    __typename?: "couriers_aggregate";
    aggregate?: {
      __typename?: "couriers_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetCouriersByPkQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetCouriersByPkQuery = {
  __typename?: "query_root";
  couriers_by_pk?: {
    __typename?: "couriers";
    id: any;
    name: string;
    avatar?: string | null;
  } | null;
};

export type FetchSahilZonesQueryVariables = Exact<{ [key: string]: never }>;

export type FetchSahilZonesQuery = {
  __typename?: "query_root";
  locations: Array<{ __typename?: "locations"; id: any }>;
};

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  __typename?: "query_root";
  orders: Array<{
    __typename?: "orders";
    id: any;
    created_at: any;
    destination?: string | null;
    orderId?: any | null;
    customerId?: any | null;
    origin?: string | null;
    status?: Order_Status_Enum | null;
    business?: {
      __typename?: "business";
      contactName?: string | null;
      phoneNumber?: string | null;
      name?: string | null;
    } | null;
  }>;
  orders_aggregate: {
    __typename?: "orders_aggregate";
    aggregate?: {
      __typename?: "orders_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetorderByPkQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetorderByPkQuery = {
  __typename?: "query_root";
  orders_by_pk?: {
    __typename?: "orders";
    id: any;
    created_at: any;
    destination?: string | null;
    orderId?: any | null;
    customerId?: any | null;
    origin?: string | null;
    status?: Order_Status_Enum | null;
    order_items: Array<{
      __typename?: "order_item";
      id: any;
      product: {
        __typename?: "products";
        id: any;
        name?: string | null;
        quantity: number;
        price?: number | null;
      };
    }>;
    agent?: { __typename?: "agent"; name: string } | null;
    order_items_aggregate: {
      __typename?: "order_item_aggregate";
      aggregate?: {
        __typename?: "order_item_aggregate_fields";
        count: number;
      } | null;
    };
  } | null;
};

export type GetOrderDeliveriesQueryVariables = Exact<{
  orderId: Scalars["uuid"]["input"];
}>;

export type GetOrderDeliveriesQuery = {
  __typename?: "query_root";
  delivery: Array<{
    __typename?: "delivery";
    orderId: any;
    status?: Delivery_Status_Enum | null;
    id: any;
    created_at: any;
    courierId: any;
  }>;
};

export type GetOrdersStatsQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars["timestamptz"]["input"]>;
  endDate?: InputMaybe<Scalars["timestamptz"]["input"]>;
}>;

export type GetOrdersStatsQuery = {
  __typename?: "query_root";
  orders_aggregate: {
    __typename?: "orders_aggregate";
    aggregate?: {
      __typename?: "orders_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetProductsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetProductsQuery = {
  __typename?: "query_root";
  products: Array<{
    __typename?: "products";
    discount?: number | null;
    id: any;
    name?: string | null;
    price?: number | null;
    mainImage?: string | null;
    description?: string | null;
  }>;
  products_aggregate: {
    __typename?: "products_aggregate";
    aggregate?: {
      __typename?: "products_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetProductsByNameQueryVariables = Exact<{
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetProductsByNameQuery = {
  __typename?: "query_root";
  products: Array<{
    __typename?: "products";
    discount?: number | null;
    id: any;
    name?: string | null;
    price?: number | null;
  }>;
  products_aggregate: {
    __typename?: "products_aggregate";
    aggregate?: {
      __typename?: "products_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetSuppliersQueryVariables = Exact<{
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetSuppliersQuery = {
  __typename?: "query_root";
  suppliers: Array<{
    __typename?: "suppliers";
    id: any;
    name?: string | null;
    streetAddress?: string | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    zone?: string | null;
    categories: Array<{
      __typename?: "suppliers_categories";
      category_name: Supplier_Categories_Enum_Enum;
    }>;
  }>;
  suppliers_aggregate: {
    __typename?: "suppliers_aggregate";
    aggregate?: {
      __typename?: "suppliers_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetSupplierOrdersQueryVariables = Exact<{
  supplierId?: InputMaybe<Scalars["uuid"]["input"]>;
}>;

export type GetSupplierOrdersQuery = {
  __typename?: "query_root";
  order_supplier: Array<{
    __typename?: "order_supplier";
    id: any;
    supplierId: any;
    order: {
      __typename?: "orders";
      id: any;
      created_at: any;
      destination?: string | null;
      orderId?: any | null;
      customerId?: any | null;
      origin?: string | null;
      status?: Order_Status_Enum | null;
      business?: {
        __typename?: "business";
        contactName?: string | null;
        phoneNumber?: string | null;
        name?: string | null;
      } | null;
    };
  }>;
};

export type GetFilteredSuppliersQueryVariables = Exact<{
  category_name?: InputMaybe<Supplier_Categories_Enum_Enum>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetFilteredSuppliersQuery = {
  __typename?: "query_root";
  suppliers: Array<{
    __typename?: "suppliers";
    id: any;
    name?: string | null;
    streetAddress?: string | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    zone?: string | null;
    categories: Array<{
      __typename?: "suppliers_categories";
      category_name: Supplier_Categories_Enum_Enum;
    }>;
  }>;
};

export type GetSupplierByPkQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetSupplierByPkQuery = {
  __typename?: "query_root";
  suppliers_by_pk?: {
    __typename?: "suppliers";
    created_at: any;
    id: any;
    name?: string | null;
    description?: string | null;
    phoneNumber?: string | null;
    contactName?: string | null;
    contactEmail?: string | null;
    streetAddress?: string | null;
    zone?: string | null;
    categories: Array<{
      __typename?: "suppliers_categories";
      category_name: Supplier_Categories_Enum_Enum;
    }>;
    products_aggregate: {
      __typename?: "products_aggregate";
      aggregate?: {
        __typename?: "products_aggregate_fields";
        count: number;
      } | null;
    };
  } | null;
};

export type GetSupplierProductsQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
}>;

export type GetSupplierProductsQuery = {
  __typename?: "query_root";
  products: Array<{
    __typename?: "products";
    id: any;
    name?: string | null;
    description?: string | null;
    inStock: boolean;
    quantity: number;
    price?: number | null;
    mainImage?: string | null;
  }>;
};

export type GetSupplierProductByNameQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
}>;

export type GetSupplierProductByNameQuery = {
  __typename?: "query_root";
  products: Array<{
    __typename?: "products";
    id: any;
    name?: string | null;
    description?: string | null;
    inStock: boolean;
    quantity: number;
    price?: number | null;
  }>;
};

export type GetSupplierCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetSupplierCategoriesQuery = {
  __typename?: "query_root";
  supplier_categories_enum: Array<{
    __typename?: "supplier_categories_enum";
    name: string;
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "users";
    id: any;
    created_at: any;
    role?: User_Role_Enum | null;
    name?: string | null;
  }>;
};

export type GetAdditionalAuthUserInfoQueryVariables = Exact<{
  id?: InputMaybe<Scalars["uuid"]["input"]>;
}>;

export type GetAdditionalAuthUserInfoQuery = {
  __typename?: "query_root";
  users_by_pk?: {
    __typename?: "users";
    hasCompletedOnboarding?: boolean | null;
    role?: User_Role_Enum | null;
  } | null;
};

export type RegisterBusinessActionSubscriptionSubscriptionVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type RegisterBusinessActionSubscriptionSubscription = {
  __typename?: "subscription_root";
  registerBusinessAction?: {
    __typename?: "registerBusinessAction";
    created_at: any;
    errors?: any | null;
    id: any;
    output?: {
      __typename?: "RegisterBusinessActionOutput";
      id: any;
      name?: string | null;
    } | null;
  } | null;
};

export type GetOrderValidationSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars["uuid"]["input"]>;
}>;

export type GetOrderValidationSubscription = {
  __typename?: "subscription_root";
  insertBusinessOrder?: {
    __typename?: "insertBusinessOrder";
    output?: {
      __typename?: "InsertBusinessOrderOutput";
      order?: {
        __typename?: "OrderPayload";
        customerId?: string | null;
        order_items?: {
          __typename?: "OrderItems";
          data?: Array<{
            __typename?: "OrderItemData";
            price?: number | null;
            productId?: string | null;
            quantity?: number | null;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const RegisterBusinessDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerBusiness" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "business_insert_input" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_business_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterBusinessMutation,
  RegisterBusinessMutationVariables
>;
export const RegisterBusinessActionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerBusinessAction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterBusinessActionBusinessInsertInput",
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "registerBusinessAction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterBusinessActionMutation,
  RegisterBusinessActionMutationVariables
>;
export const InsertBusinessAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertBusinessAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "addresses_insert_input" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_addresses_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "business_id" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertBusinessAddressMutation,
  InsertBusinessAddressMutationVariables
>;
export const OnboardNewBusinessDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "OnboardNewBusiness" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "role" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "user_role_enum" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "business_insert_input" },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_users_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "hasCompletedOnboarding" },
                      value: { kind: "BooleanValue", value: true },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "role" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "role" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "role" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_business_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnboardNewBusinessMutation,
  OnboardNewBusinessMutationVariables
>;
export const InsertNewCourierDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertNewCourier" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "couriers_insert_input" },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_couriers_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertNewCourierMutation,
  InsertNewCourierMutationVariables
>;
export const InsertBusinessOrderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertBusinessOrder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "orders_insert_input" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_orders_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertBusinessOrderMutation,
  InsertBusinessOrderMutationVariables
>;
export const InsertBusinessOrderActionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertBusinessOrderAction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "InsertBusinessOrderOrdersInsertInput",
            },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertBusinessOrder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertBusinessOrderActionMutation,
  InsertBusinessOrderActionMutationVariables
>;
export const RegisterSupplierDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerSupplier" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "suppliers_insert_input" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_suppliers_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterSupplierMutation,
  RegisterSupplierMutationVariables
>;
export const UpdateProductByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateProductByPk" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "inStock" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "price" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "quantity" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_products_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "inStock" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "inStock" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "price" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "price" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "quantity" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "quantity" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "inStock" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "quantity" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProductByPkMutation,
  UpdateProductByPkMutationVariables
>;
export const DeleteProductByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteProductByPk" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_products_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteProductByPkMutation,
  DeleteProductByPkMutationVariables
>;
export const AddNewProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addNewProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "product" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "products_insert_input" },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_products_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "product" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "discount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "inStock" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "quantity" } },
                { kind: "Field", name: { kind: "Name", value: "supplier_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddNewProductMutation,
  AddNewProductMutationVariables
>;
export const OnboardNewSupplierDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "OnboardNewSupplier" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "role" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "user_role_enum" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "suppliers_insert_input" },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_users_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "hasCompletedOnboarding" },
                      value: { kind: "BooleanValue", value: true },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "role" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "role" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "role" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_suppliers_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnboardNewSupplierMutation,
  OnboardNewSupplierMutationVariables
>;
export const RegisterUserActionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerUserAction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "object" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterUserActionUsersInsertInput",
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "registerUserAction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "object" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterUserActionMutation,
  RegisterUserActionMutationVariables
>;
export const GetBusinessesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBusinesses" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "business" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "contactName" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addresses" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "city" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "created_at" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "latitude" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "longitude" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updated_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "street_address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "business_aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBusinessesQuery, GetBusinessesQueryVariables>;
export const GetBusinessOrdersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBusinessOrders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "customerId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "customerId" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "customerId",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "customerId" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_is_null" },
                                      value: {
                                        kind: "BooleanValue",
                                        value: true,
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "customerId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "customerId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "destination" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "orderId" } },
                { kind: "Field", name: { kind: "Name", value: "customerId" } },
                { kind: "Field", name: { kind: "Name", value: "origin" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "business" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contactName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "orders_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "customerId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "customerId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBusinessOrdersQuery,
  GetBusinessOrdersQueryVariables
>;
export const GetBusinessByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBusinessByPK" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "business_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "contactName" } },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "agent" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addresses" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "city" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "street_address" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "schedule" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "days" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shifts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "start_time" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "end_time" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBusinessByPkQuery,
  GetBusinessByPkQueryVariables
>;
export const GetBusinessTypesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getBusinessTypes" },
      directives: [
        { kind: "Directive", name: { kind: "Name", value: "cached" } },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "business_type" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBusinessTypesQuery,
  GetBusinessTypesQueryVariables
>;
export const GetCouriersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCouriers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "couriers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "DOB" } },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "couriers_aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCouriersQuery, GetCouriersQueryVariables>;
export const GetCouriersByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCouriersByPK" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "couriers_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCouriersByPkQuery,
  GetCouriersByPkQueryVariables
>;
export const FetchSahilZonesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchSahilZones" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FetchSahilZonesQuery,
  FetchSahilZonesQueryVariables
>;
export const GetOrdersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrders" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "destination" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "orderId" } },
                { kind: "Field", name: { kind: "Name", value: "customerId" } },
                { kind: "Field", name: { kind: "Name", value: "origin" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "business" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contactName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "orders_aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetorderByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getorderByPK" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "destination" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "orderId" } },
                { kind: "Field", name: { kind: "Name", value: "customerId" } },
                { kind: "Field", name: { kind: "Name", value: "origin" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "order_items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "product" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "agent" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "order_items_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetorderByPkQuery, GetorderByPkQueryVariables>;
export const GetOrderDeliveriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrderDeliveries" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delivery" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "orderId" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "orderId" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "courierId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrderDeliveriesQuery,
  GetOrderDeliveriesQueryVariables
>;
export const GetOrdersStatsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrdersStats" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "startDate" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "timestamptz" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "endDate" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "timestamptz" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "startDate" },
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_lte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "endDate" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrdersStatsQuery, GetOrdersStatsQueryVariables>;
export const GetProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProducts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "12" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "mainImage" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "products_aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsByNameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProductsByName" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "12" },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "inStock" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_ilike" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "name" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discount" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "products_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "inStock" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_ilike" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "name" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductsByNameQuery,
  GetProductsByNameQueryVariables
>;
export const GetSuppliersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSuppliers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "10" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "suppliers" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "streetAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "contactName" } },
                { kind: "Field", name: { kind: "Name", value: "zone" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category_name" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "suppliers_aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "columns" },
                            value: { kind: "EnumValue", value: "id" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSuppliersQuery, GetSuppliersQueryVariables>;
export const GetSupplierOrdersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSupplierOrders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "supplierId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "order_supplier" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "supplierId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "supplierId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "distinct_on" },
                value: { kind: "EnumValue", value: "supplierId" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "supplierId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "order" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "created_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "destination" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orderId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "customerId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "origin" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "business" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contactName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "phoneNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSupplierOrdersQuery,
  GetSupplierOrdersQueryVariables
>;
export const GetFilteredSuppliersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getFilteredSuppliers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "category_name" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "supplier_categories_enum_enum" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "10" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "suppliers" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "categories" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "category_name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "category_name",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "streetAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "contactName" } },
                { kind: "Field", name: { kind: "Name", value: "zone" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category_name" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFilteredSuppliersQuery,
  GetFilteredSuppliersQueryVariables
>;
export const GetSupplierByPkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSupplierByPK" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "suppliers_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
                { kind: "Field", name: { kind: "Name", value: "contactName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "streetAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "zone" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category_name" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "products_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSupplierByPkQuery,
  GetSupplierByPkQueryVariables
>;
export const GetSupplierProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSupplierProducts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order_by" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "products_order_by" },
              },
            },
          },
          defaultValue: {
            kind: "ObjectValue",
            fields: [
              {
                kind: "ObjectField",
                name: { kind: "Name", value: "name" },
                value: { kind: "EnumValue", value: "asc" },
              },
            ],
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "supplier_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "order_by" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "inStock" } },
                { kind: "Field", name: { kind: "Name", value: "quantity" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "mainImage" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSupplierProductsQuery,
  GetSupplierProductsQueryVariables
>;
export const GetSupplierProductByNameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSupplierProductByName" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "0" },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "4" },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order_by" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "products_order_by" },
              },
            },
          },
          defaultValue: {
            kind: "ObjectValue",
            fields: [
              {
                kind: "ObjectField",
                name: { kind: "Name", value: "name" },
                value: { kind: "EnumValue", value: "asc" },
              },
            ],
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "supplier_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_ilike" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "name" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "order_by" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "inStock" } },
                { kind: "Field", name: { kind: "Name", value: "quantity" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSupplierProductByNameQuery,
  GetSupplierProductByNameQueryVariables
>;
export const GetSupplierCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSupplierCategories" },
      directives: [
        { kind: "Directive", name: { kind: "Name", value: "cached" } },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "supplier_categories_enum" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSupplierCategoriesQuery,
  GetSupplierCategoriesQueryVariables
>;
export const GetUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetAdditionalAuthUserInfoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAdditionalAuthUserInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasCompletedOnboarding" },
                },
                { kind: "Field", name: { kind: "Name", value: "role" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAdditionalAuthUserInfoQuery,
  GetAdditionalAuthUserInfoQueryVariables
>;
export const RegisterBusinessActionSubscriptionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "registerBusinessActionSubscription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "registerBusinessAction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "errors" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "output" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterBusinessActionSubscriptionSubscription,
  RegisterBusinessActionSubscriptionSubscriptionVariables
>;
export const GetOrderValidationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "getOrderValidation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertBusinessOrder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "output" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "order" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "customerId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "order_items" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "data" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "price",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "productId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "quantity",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrderValidationSubscription,
  GetOrderValidationSubscriptionVariables
>;
