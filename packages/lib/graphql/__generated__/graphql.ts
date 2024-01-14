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
  date: { input: any; output: any };
  float8: { input: any; output: any };
  json: { input: any; output: any };
  name: { input: any; output: any };
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

export type OrdersActionInput = {
  created_at: Scalars["timestamptz"]["input"];
  customerId?: InputMaybe<Scalars["uuid"]["input"]>;
  destination?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["uuid"]["input"];
  orderId?: InputMaybe<Scalars["String"]["input"]>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  processedBy?: InputMaybe<Scalars["uuid"]["input"]>;
};

export type OrdersActionType = {
  __typename?: "OrdersActionType";
  created_at: Scalars["timestamptz"]["output"];
  customerId?: Maybe<Scalars["uuid"]["output"]>;
  destination?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  orderId?: Maybe<Scalars["String"]["output"]>;
  origin?: Maybe<Scalars["String"]["output"]>;
  processedBy?: Maybe<Scalars["uuid"]["output"]>;
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
  /** An object relationship */
  registeration_channel_type?: Maybe<Registeration_Channel_Type>;
  registered_by?: Maybe<Scalars["uuid"]["output"]>;
  registration_channel?: Maybe<Registeration_Channel_Type_Enum>;
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
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Bool_Exp>;
  registered_by?: InputMaybe<Uuid_Comparison_Exp>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum_Comparison_Exp>;
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
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Obj_Rel_Insert_Input>;
  registered_by?: InputMaybe<Scalars["uuid"]["input"]>;
  registration_channel?: InputMaybe<Registeration_Channel_Type_Enum>;
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
  registeration_channel_type?: InputMaybe<Registeration_Channel_Type_Order_By>;
  registered_by?: InputMaybe<Order_By>;
  registration_channel?: InputMaybe<Order_By>;
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
  status: Scalars["String"]["output"];
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

/** on_conflict condition type for table "delivery_status" */
export type Delivery_Status_On_Conflict = {
  constraint: Delivery_Status_Constraint;
  update_columns?: Array<Delivery_Status_Update_Column>;
  where?: InputMaybe<Delivery_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_status". */
export type Delivery_Status_Order_By = {
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

/** fields of action: "initOrder" */
export type InitOrder = {
  __typename?: "initOrder";
  /** the time at which this action was created */
  created_at: Scalars["timestamptz"]["output"];
  /** errors related to the invocation */
  errors?: Maybe<Scalars["json"]["output"]>;
  /** the unique id of an action */
  id: Scalars["uuid"]["output"];
  /** the output fields of this action */
  output?: Maybe<OrdersActionType>;
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
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** Validate and Process Orders */
  initOrder: Scalars["uuid"]["output"];
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
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  requestToPay?: Maybe<RequestToPayResponse>;
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
export type Mutation_RootInitOrderArgs = {
  order?: InputMaybe<OrdersActionInput>;
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
export type Mutation_RootRequestToPayArgs = {
  object?: InputMaybe<RequestToPayInput>;
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

/** on_conflict condition type for table "order_fulfillment_type" */
export type Order_Fulfillment_Type_On_Conflict = {
  constraint: Order_Fulfillment_Type_Constraint;
  update_columns?: Array<Order_Fulfillment_Type_Update_Column>;
  where?: InputMaybe<Order_Fulfillment_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "order_fulfillment_type". */
export type Order_Fulfillment_Type_Order_By = {
  fulfillment_type?: InputMaybe<Order_By>;
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
  /** Validate and Process Orders */
  initOrder?: Maybe<InitOrder>;
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

export type Query_RootInitOrderArgs = {
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
  /** Validate and Process Orders */
  initOrder?: Maybe<InitOrder>;
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

export type Subscription_RootInitOrderArgs = {
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
  Customer = "customer",
  Supplier = "supplier",
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
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<User_Role_Enum>;
  /** An object relationship */
  user_role?: Maybe<User_Role>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
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
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<User_Role_Enum_Comparison_Exp>;
  user_role?: InputMaybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
  user_role?: InputMaybe<User_Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
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
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Role = "role",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
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
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role_Enum>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
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

export type RegisterClientMutationVariables = Exact<{
  object: Business_Insert_Input;
}>;

export type RegisterClientMutation = {
  __typename?: "mutation_root";
  insert_business_one?: {
    __typename?: "business";
    id: any;
    name?: string | null;
  } | null;
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

export type RegisterUserMutationVariables = Exact<{
  object: Users_Insert_Input;
}>;

export type RegisterUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: {
    __typename?: "users";
    id: any;
    name?: string | null;
  } | null;
};

export type GetClientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetClientsQuery = {
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
  } | null;
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
  }>;
};

export type GetSupplierProductByNameQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
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

export const RegisterClientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerClient" },
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
  RegisterClientMutation,
  RegisterClientMutationVariables
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
export const RegisterUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerUser" },
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
              name: { kind: "Name", value: "users_insert_input" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_users_one" },
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
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const GetClientsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getClients" },
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
} as unknown as DocumentNode<GetClientsQuery, GetClientsQueryVariables>;
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
          defaultValue: { kind: "ObjectValue", fields: [] },
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
                value: { kind: "IntValue", value: "4" },
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
