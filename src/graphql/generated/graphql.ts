export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type Destino = Node & {
  __typename?: 'Destino';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Destino>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Apenas valores numericos */
  valor: Scalars['Float'];
  /** Tipo viagem: de ida e volta, de laser... */
  tipoDeViagem: Scalars['String'];
  origem: Scalars['String'];
  destinoViagem: Scalars['String'];
  /** Informar a data da viagem */
  dataViagem: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Destino versions */
  history: Array<Version>;
};


export type DestinoDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type DestinoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type DestinoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type DestinoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type DestinoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DestinoConnectInput = {
  /** Document to connect */
  where: DestinoWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type DestinoConnection = {
  __typename?: 'DestinoConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DestinoEdge>;
  aggregate: Aggregate;
};

export type DestinoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valor: Scalars['Float'];
  tipoDeViagem: Scalars['String'];
  origem: Scalars['String'];
  destinoViagem: Scalars['String'];
  dataViagem: Scalars['DateTime'];
};

export type DestinoCreateManyInlineInput = {
  /** Create and connect multiple existing Destino documents */
  create?: Maybe<Array<DestinoCreateInput>>;
  /** Connect multiple existing Destino documents */
  connect?: Maybe<Array<DestinoWhereUniqueInput>>;
};

export type DestinoCreateOneInlineInput = {
  /** Create and connect one Destino document */
  create?: Maybe<DestinoCreateInput>;
  /** Connect one existing Destino document */
  connect?: Maybe<DestinoWhereUniqueInput>;
};

/** An edge in a connection. */
export type DestinoEdge = {
  __typename?: 'DestinoEdge';
  /** The item at the end of the edge. */
  node: Destino;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type DestinoManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DestinoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DestinoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DestinoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  valor?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  valor_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  valor_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  valor_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  valor_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  valor_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  valor_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  valor_gte?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tipoDeViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipoDeViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tipoDeViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tipoDeViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipoDeViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipoDeViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tipoDeViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipoDeViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipoDeViagem_not_ends_with?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  origem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  origem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  origem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  origem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  origem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  origem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  origem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  origem_not_ends_with?: Maybe<Scalars['String']>;
  destinoViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destinoViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destinoViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destinoViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destinoViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destinoViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destinoViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destinoViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destinoViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destinoViagem_not_ends_with?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  dataViagem_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  dataViagem_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  dataViagem_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  dataViagem_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  dataViagem_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  dataViagem_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  dataViagem_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum DestinoOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ValorAsc = 'valor_ASC',
  ValorDesc = 'valor_DESC',
  TipoDeViagemAsc = 'tipoDeViagem_ASC',
  TipoDeViagemDesc = 'tipoDeViagem_DESC',
  OrigemAsc = 'origem_ASC',
  OrigemDesc = 'origem_DESC',
  DestinoViagemAsc = 'destinoViagem_ASC',
  DestinoViagemDesc = 'destinoViagem_DESC',
  DataViagemAsc = 'dataViagem_ASC',
  DataViagemDesc = 'dataViagem_DESC'
}

export type DestinoUpdateInput = {
  valor?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  destinoViagem?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
};

export type DestinoUpdateManyInlineInput = {
  /** Create and connect multiple Destino documents */
  create?: Maybe<Array<DestinoCreateInput>>;
  /** Connect multiple existing Destino documents */
  connect?: Maybe<Array<DestinoConnectInput>>;
  /** Override currently-connected documents with multiple existing Destino documents */
  set?: Maybe<Array<DestinoWhereUniqueInput>>;
  /** Update multiple Destino documents */
  update?: Maybe<Array<DestinoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Destino documents */
  upsert?: Maybe<Array<DestinoUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Destino documents */
  disconnect?: Maybe<Array<DestinoWhereUniqueInput>>;
  /** Delete multiple Destino documents */
  delete?: Maybe<Array<DestinoWhereUniqueInput>>;
};

export type DestinoUpdateManyInput = {
  valor?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  destinoViagem?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
};

export type DestinoUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DestinoWhereInput;
  /** Update many input */
  data: DestinoUpdateManyInput;
};

export type DestinoUpdateOneInlineInput = {
  /** Create and connect one Destino document */
  create?: Maybe<DestinoCreateInput>;
  /** Update single Destino document */
  update?: Maybe<DestinoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Destino document */
  upsert?: Maybe<DestinoUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Destino document */
  connect?: Maybe<DestinoWhereUniqueInput>;
  /** Disconnect currently connected Destino document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Destino document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DestinoUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DestinoWhereUniqueInput;
  /** Document to update */
  data: DestinoUpdateInput;
};

export type DestinoUpsertInput = {
  /** Create document if it didn't exist */
  create: DestinoCreateInput;
  /** Update document if it exists */
  update: DestinoUpdateInput;
};

export type DestinoUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DestinoWhereUniqueInput;
  /** Upsert data */
  data: DestinoUpsertInput;
};

/** Identifies documents */
export type DestinoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DestinoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DestinoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DestinoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  valor?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  valor_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  valor_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  valor_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  valor_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  valor_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  valor_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  valor_gte?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tipoDeViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipoDeViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tipoDeViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tipoDeViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipoDeViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipoDeViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tipoDeViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipoDeViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipoDeViagem_not_ends_with?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  origem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  origem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  origem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  origem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  origem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  origem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  origem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  origem_not_ends_with?: Maybe<Scalars['String']>;
  destinoViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destinoViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destinoViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destinoViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destinoViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destinoViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destinoViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destinoViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destinoViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destinoViagem_not_ends_with?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  dataViagem_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  dataViagem_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  dataViagem_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  dataViagem_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  dataViagem_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  dataViagem_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  dataViagem_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Destino record uniquely */
export type DestinoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagens = Node & {
  __typename?: 'DestinosViagens';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<DestinosViagens>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** O preço de cada passagem para a viagem. */
  valor: Scalars['Float'];
  /** Que tipo de viagem será realizada. */
  tipoDeViagem?: Maybe<Scalars['String']>;
  /** Local de destino da viagem */
  localDestino: Scalars['String'];
  /** Prinvíncia de destino da viagem */
  origem: Scalars['String'];
  /** Data da viajem. */
  dataViagem: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of DestinosViagens versions */
  history: Array<Version>;
};


/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagensDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagensCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagensUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagensPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Onde serão preenchidos as informacções para as proximas viagem da LotOnline! */
export type DestinosViagensHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DestinosViagensConnectInput = {
  /** Document to connect */
  where: DestinosViagensWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type DestinosViagensConnection = {
  __typename?: 'DestinosViagensConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DestinosViagensEdge>;
  aggregate: Aggregate;
};

export type DestinosViagensCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valor: Scalars['Float'];
  tipoDeViagem?: Maybe<Scalars['String']>;
  localDestino: Scalars['String'];
  origem: Scalars['String'];
  dataViagem: Scalars['DateTime'];
};

export type DestinosViagensCreateManyInlineInput = {
  /** Create and connect multiple existing DestinosViagens documents */
  create?: Maybe<Array<DestinosViagensCreateInput>>;
  /** Connect multiple existing DestinosViagens documents */
  connect?: Maybe<Array<DestinosViagensWhereUniqueInput>>;
};

export type DestinosViagensCreateOneInlineInput = {
  /** Create and connect one DestinosViagens document */
  create?: Maybe<DestinosViagensCreateInput>;
  /** Connect one existing DestinosViagens document */
  connect?: Maybe<DestinosViagensWhereUniqueInput>;
};

/** An edge in a connection. */
export type DestinosViagensEdge = {
  __typename?: 'DestinosViagensEdge';
  /** The item at the end of the edge. */
  node: DestinosViagens;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type DestinosViagensManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DestinosViagensWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DestinosViagensWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DestinosViagensWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  valor?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  valor_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  valor_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  valor_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  valor_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  valor_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  valor_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  valor_gte?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tipoDeViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipoDeViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tipoDeViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tipoDeViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipoDeViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipoDeViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tipoDeViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipoDeViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipoDeViagem_not_ends_with?: Maybe<Scalars['String']>;
  localDestino?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  localDestino_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  localDestino_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  localDestino_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  localDestino_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  localDestino_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  localDestino_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  localDestino_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  localDestino_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  localDestino_not_ends_with?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  origem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  origem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  origem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  origem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  origem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  origem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  origem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  origem_not_ends_with?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  dataViagem_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  dataViagem_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  dataViagem_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  dataViagem_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  dataViagem_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  dataViagem_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  dataViagem_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum DestinosViagensOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ValorAsc = 'valor_ASC',
  ValorDesc = 'valor_DESC',
  TipoDeViagemAsc = 'tipoDeViagem_ASC',
  TipoDeViagemDesc = 'tipoDeViagem_DESC',
  LocalDestinoAsc = 'localDestino_ASC',
  LocalDestinoDesc = 'localDestino_DESC',
  OrigemAsc = 'origem_ASC',
  OrigemDesc = 'origem_DESC',
  DataViagemAsc = 'dataViagem_ASC',
  DataViagemDesc = 'dataViagem_DESC'
}

export type DestinosViagensUpdateInput = {
  valor?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  localDestino?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
};

export type DestinosViagensUpdateManyInlineInput = {
  /** Create and connect multiple DestinosViagens documents */
  create?: Maybe<Array<DestinosViagensCreateInput>>;
  /** Connect multiple existing DestinosViagens documents */
  connect?: Maybe<Array<DestinosViagensConnectInput>>;
  /** Override currently-connected documents with multiple existing DestinosViagens documents */
  set?: Maybe<Array<DestinosViagensWhereUniqueInput>>;
  /** Update multiple DestinosViagens documents */
  update?: Maybe<Array<DestinosViagensUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DestinosViagens documents */
  upsert?: Maybe<Array<DestinosViagensUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple DestinosViagens documents */
  disconnect?: Maybe<Array<DestinosViagensWhereUniqueInput>>;
  /** Delete multiple DestinosViagens documents */
  delete?: Maybe<Array<DestinosViagensWhereUniqueInput>>;
};

export type DestinosViagensUpdateManyInput = {
  valor?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  localDestino?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
};

export type DestinosViagensUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DestinosViagensWhereInput;
  /** Update many input */
  data: DestinosViagensUpdateManyInput;
};

export type DestinosViagensUpdateOneInlineInput = {
  /** Create and connect one DestinosViagens document */
  create?: Maybe<DestinosViagensCreateInput>;
  /** Update single DestinosViagens document */
  update?: Maybe<DestinosViagensUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DestinosViagens document */
  upsert?: Maybe<DestinosViagensUpsertWithNestedWhereUniqueInput>;
  /** Connect existing DestinosViagens document */
  connect?: Maybe<DestinosViagensWhereUniqueInput>;
  /** Disconnect currently connected DestinosViagens document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected DestinosViagens document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DestinosViagensUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DestinosViagensWhereUniqueInput;
  /** Document to update */
  data: DestinosViagensUpdateInput;
};

export type DestinosViagensUpsertInput = {
  /** Create document if it didn't exist */
  create: DestinosViagensCreateInput;
  /** Update document if it exists */
  update: DestinosViagensUpdateInput;
};

export type DestinosViagensUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DestinosViagensWhereUniqueInput;
  /** Upsert data */
  data: DestinosViagensUpsertInput;
};

/** Identifies documents */
export type DestinosViagensWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DestinosViagensWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DestinosViagensWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DestinosViagensWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  valor?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  valor_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  valor_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  valor_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  valor_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  valor_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  valor_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  valor_gte?: Maybe<Scalars['Float']>;
  tipoDeViagem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tipoDeViagem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipoDeViagem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tipoDeViagem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tipoDeViagem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipoDeViagem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipoDeViagem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tipoDeViagem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipoDeViagem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipoDeViagem_not_ends_with?: Maybe<Scalars['String']>;
  localDestino?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  localDestino_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  localDestino_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  localDestino_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  localDestino_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  localDestino_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  localDestino_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  localDestino_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  localDestino_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  localDestino_not_ends_with?: Maybe<Scalars['String']>;
  origem?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  origem_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origem_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  origem_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  origem_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  origem_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  origem_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  origem_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  origem_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  origem_not_ends_with?: Maybe<Scalars['String']>;
  dataViagem?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  dataViagem_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  dataViagem_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  dataViagem_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  dataViagem_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  dataViagem_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  dataViagem_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  dataViagem_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References DestinosViagens record uniquely */
export type DestinosViagensWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one destino */
  createDestino?: Maybe<Destino>;
  /** Update one destino */
  updateDestino?: Maybe<Destino>;
  /** Delete one destino from _all_ existing stages. Returns deleted document. */
  deleteDestino?: Maybe<Destino>;
  /** Upsert one destino */
  upsertDestino?: Maybe<Destino>;
  /** Publish one destino */
  publishDestino?: Maybe<Destino>;
  /** Unpublish one destino from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDestino?: Maybe<Destino>;
  /** Update many Destino documents */
  updateManyDestinosConnection: DestinoConnection;
  /** Delete many Destino documents, return deleted documents */
  deleteManyDestinosConnection: DestinoConnection;
  /** Publish many Destino documents */
  publishManyDestinosConnection: DestinoConnection;
  /** Find many Destino documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDestinosConnection: DestinoConnection;
  /**
   * Update many destinos
   * @deprecated Please use the new paginated many mutation (updateManyDestinosConnection)
   */
  updateManyDestinos: BatchPayload;
  /**
   * Delete many Destino documents
   * @deprecated Please use the new paginated many mutation (deleteManyDestinosConnection)
   */
  deleteManyDestinos: BatchPayload;
  /**
   * Publish many Destino documents
   * @deprecated Please use the new paginated many mutation (publishManyDestinosConnection)
   */
  publishManyDestinos: BatchPayload;
  /**
   * Unpublish many Destino documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDestinosConnection)
   */
  unpublishManyDestinos: BatchPayload;
  /** Create one destinosViagens */
  createDestinosViagens?: Maybe<DestinosViagens>;
  /** Update one destinosViagens */
  updateDestinosViagens?: Maybe<DestinosViagens>;
  /** Delete one destinosViagens from _all_ existing stages. Returns deleted document. */
  deleteDestinosViagens?: Maybe<DestinosViagens>;
  /** Upsert one destinosViagens */
  upsertDestinosViagens?: Maybe<DestinosViagens>;
  /** Publish one destinosViagens */
  publishDestinosViagens?: Maybe<DestinosViagens>;
  /** Unpublish one destinosViagens from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDestinosViagens?: Maybe<DestinosViagens>;
  /** Update many DestinosViagens documents */
  updateManyDestinosViagemConnection: DestinosViagensConnection;
  /** Delete many DestinosViagens documents, return deleted documents */
  deleteManyDestinosViagemConnection: DestinosViagensConnection;
  /** Publish many DestinosViagens documents */
  publishManyDestinosViagemConnection: DestinosViagensConnection;
  /** Find many DestinosViagens documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDestinosViagemConnection: DestinosViagensConnection;
  /**
   * Update many destinosViagem
   * @deprecated Please use the new paginated many mutation (updateManyDestinosViagemConnection)
   */
  updateManyDestinosViagem: BatchPayload;
  /**
   * Delete many DestinosViagens documents
   * @deprecated Please use the new paginated many mutation (deleteManyDestinosViagemConnection)
   */
  deleteManyDestinosViagem: BatchPayload;
  /**
   * Publish many DestinosViagens documents
   * @deprecated Please use the new paginated many mutation (publishManyDestinosViagemConnection)
   */
  publishManyDestinosViagem: BatchPayload;
  /**
   * Unpublish many DestinosViagens documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDestinosViagemConnection)
   */
  unpublishManyDestinosViagem: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one viagen */
  createViagen?: Maybe<Viagen>;
  /** Update one viagen */
  updateViagen?: Maybe<Viagen>;
  /** Delete one viagen from _all_ existing stages. Returns deleted document. */
  deleteViagen?: Maybe<Viagen>;
  /** Upsert one viagen */
  upsertViagen?: Maybe<Viagen>;
  /** Publish one viagen */
  publishViagen?: Maybe<Viagen>;
  /** Unpublish one viagen from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishViagen?: Maybe<Viagen>;
  /** Update many Viagen documents */
  updateManyViagensConnection: ViagenConnection;
  /** Delete many Viagen documents, return deleted documents */
  deleteManyViagensConnection: ViagenConnection;
  /** Publish many Viagen documents */
  publishManyViagensConnection: ViagenConnection;
  /** Find many Viagen documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyViagensConnection: ViagenConnection;
  /**
   * Update many viagens
   * @deprecated Please use the new paginated many mutation (updateManyViagensConnection)
   */
  updateManyViagens: BatchPayload;
  /**
   * Delete many Viagen documents
   * @deprecated Please use the new paginated many mutation (deleteManyViagensConnection)
   */
  deleteManyViagens: BatchPayload;
  /**
   * Publish many Viagen documents
   * @deprecated Please use the new paginated many mutation (publishManyViagensConnection)
   */
  publishManyViagens: BatchPayload;
  /**
   * Unpublish many Viagen documents
   * @deprecated Please use the new paginated many mutation (unpublishManyViagensConnection)
   */
  unpublishManyViagens: BatchPayload;
};


export type MutationCreateDestinoArgs = {
  data: DestinoCreateInput;
};


export type MutationUpdateDestinoArgs = {
  where: DestinoWhereUniqueInput;
  data: DestinoUpdateInput;
};


export type MutationDeleteDestinoArgs = {
  where: DestinoWhereUniqueInput;
};


export type MutationUpsertDestinoArgs = {
  where: DestinoWhereUniqueInput;
  upsert: DestinoUpsertInput;
};


export type MutationPublishDestinoArgs = {
  where: DestinoWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishDestinoArgs = {
  where: DestinoWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyDestinosConnectionArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  data: DestinoUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyDestinosConnectionArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyDestinosConnectionArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyDestinosConnectionArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyDestinosArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  data: DestinoUpdateManyInput;
};


export type MutationDeleteManyDestinosArgs = {
  where?: Maybe<DestinoManyWhereInput>;
};


export type MutationPublishManyDestinosArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyDestinosArgs = {
  where?: Maybe<DestinoManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateDestinosViagensArgs = {
  data: DestinosViagensCreateInput;
};


export type MutationUpdateDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
  data: DestinosViagensUpdateInput;
};


export type MutationDeleteDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
};


export type MutationUpsertDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
  upsert: DestinosViagensUpsertInput;
};


export type MutationPublishDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyDestinosViagemConnectionArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  data: DestinosViagensUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyDestinosViagemConnectionArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyDestinosViagemConnectionArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyDestinosViagemConnectionArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyDestinosViagemArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  data: DestinosViagensUpdateManyInput;
};


export type MutationDeleteManyDestinosViagemArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
};


export type MutationPublishManyDestinosViagemArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyDestinosViagemArgs = {
  where?: Maybe<DestinosViagensManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateViagenArgs = {
  data: ViagenCreateInput;
};


export type MutationUpdateViagenArgs = {
  where: ViagenWhereUniqueInput;
  data: ViagenUpdateInput;
};


export type MutationDeleteViagenArgs = {
  where: ViagenWhereUniqueInput;
};


export type MutationUpsertViagenArgs = {
  where: ViagenWhereUniqueInput;
  upsert: ViagenUpsertInput;
};


export type MutationPublishViagenArgs = {
  where: ViagenWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishViagenArgs = {
  where: ViagenWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyViagensConnectionArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  data: ViagenUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyViagensConnectionArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyViagensConnectionArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyViagensConnectionArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyViagensArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  data: ViagenUpdateManyInput;
};


export type MutationDeleteManyViagensArgs = {
  where?: Maybe<ViagenManyWhereInput>;
};


export type MutationPublishManyViagensArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyViagensArgs = {
  where?: Maybe<ViagenManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple destinos */
  destinos: Array<Destino>;
  /** Retrieve a single destino */
  destino?: Maybe<Destino>;
  /** Retrieve multiple destinos using the Relay connection interface */
  destinosConnection: DestinoConnection;
  /** Retrieve document version */
  destinoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple destinosViagem */
  destinosViagem: Array<DestinosViagens>;
  /** Retrieve a single destinosViagens */
  destinosViagens?: Maybe<DestinosViagens>;
  /** Retrieve multiple destinosViagem using the Relay connection interface */
  destinosViagemConnection: DestinosViagensConnection;
  /** Retrieve document version */
  destinosViagensVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple viagens */
  viagens: Array<Viagen>;
  /** Retrieve a single viagen */
  viagen?: Maybe<Viagen>;
  /** Retrieve multiple viagens using the Relay connection interface */
  viagensConnection: ViagenConnection;
  /** Retrieve document version */
  viagenVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinosArgs = {
  where?: Maybe<DestinoWhereInput>;
  orderBy?: Maybe<DestinoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinoArgs = {
  where: DestinoWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinosConnectionArgs = {
  where?: Maybe<DestinoWhereInput>;
  orderBy?: Maybe<DestinoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDestinosViagemArgs = {
  where?: Maybe<DestinosViagensWhereInput>;
  orderBy?: Maybe<DestinosViagensOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinosViagensArgs = {
  where: DestinosViagensWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinosViagemConnectionArgs = {
  where?: Maybe<DestinosViagensWhereInput>;
  orderBy?: Maybe<DestinosViagensOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDestinosViagensVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryViagensArgs = {
  where?: Maybe<ViagenWhereInput>;
  orderBy?: Maybe<ViagenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryViagenArgs = {
  where: ViagenWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryViagensConnectionArgs = {
  where?: Maybe<ViagenWhereInput>;
  orderBy?: Maybe<ViagenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryViagenVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

/** Agendamento de viagens para a plataforma LotLine! */
export type Viagen = Node & {
  __typename?: 'Viagen';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Viagen>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  destino: Scalars['String'];
  /** descrição do tipo de viagem */
  descricao: Scalars['String'];
  preco: Scalars['Float'];
  /** Número de lugares disponíveis para a viagem! */
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Viagen versions */
  history: Array<Version>;
};


/** Agendamento de viagens para a plataforma LotLine! */
export type ViagenDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Agendamento de viagens para a plataforma LotLine! */
export type ViagenCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Agendamento de viagens para a plataforma LotLine! */
export type ViagenUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Agendamento de viagens para a plataforma LotLine! */
export type ViagenPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Agendamento de viagens para a plataforma LotLine! */
export type ViagenHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ViagenConnectInput = {
  /** Document to connect */
  where: ViagenWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ViagenConnection = {
  __typename?: 'ViagenConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ViagenEdge>;
  aggregate: Aggregate;
};

export type ViagenCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  destino: Scalars['String'];
  descricao: Scalars['String'];
  preco: Scalars['Float'];
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
};

export type ViagenCreateManyInlineInput = {
  /** Create and connect multiple existing Viagen documents */
  create?: Maybe<Array<ViagenCreateInput>>;
  /** Connect multiple existing Viagen documents */
  connect?: Maybe<Array<ViagenWhereUniqueInput>>;
};

export type ViagenCreateOneInlineInput = {
  /** Create and connect one Viagen document */
  create?: Maybe<ViagenCreateInput>;
  /** Connect one existing Viagen document */
  connect?: Maybe<ViagenWhereUniqueInput>;
};

/** An edge in a connection. */
export type ViagenEdge = {
  __typename?: 'ViagenEdge';
  /** The item at the end of the edge. */
  node: Viagen;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ViagenManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ViagenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ViagenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ViagenWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  destino?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destino_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destino_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destino_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destino_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destino_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destino_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destino_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destino_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destino_not_ends_with?: Maybe<Scalars['String']>;
  descricao?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descricao_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descricao_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descricao_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  descricao_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descricao_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descricao_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descricao_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descricao_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  descricao_not_ends_with?: Maybe<Scalars['String']>;
  preco?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  preco_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  preco_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  preco_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  preco_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  preco_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  preco_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  preco_gte?: Maybe<Scalars['Float']>;
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  lugaresDisponiveis_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  lugaresDisponiveis_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  lugaresDisponiveis_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  lugaresDisponiveis_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  lugaresDisponiveis_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  lugaresDisponiveis_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  lugaresDisponiveis_gte?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  localDoEncontro_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  localDoEncontro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  localDoEncontro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  localDoEncontro_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  localDoEncontro_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  localDoEncontro_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  localDoEncontro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  localDoEncontro_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  localDoEncontro_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum ViagenOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DestinoAsc = 'destino_ASC',
  DestinoDesc = 'destino_DESC',
  DescricaoAsc = 'descricao_ASC',
  DescricaoDesc = 'descricao_DESC',
  PrecoAsc = 'preco_ASC',
  PrecoDesc = 'preco_DESC',
  LugaresDisponiveisAsc = 'lugaresDisponiveis_ASC',
  LugaresDisponiveisDesc = 'lugaresDisponiveis_DESC',
  LocalDoEncontroAsc = 'localDoEncontro_ASC',
  LocalDoEncontroDesc = 'localDoEncontro_DESC'
}

export type ViagenUpdateInput = {
  destino?: Maybe<Scalars['String']>;
  descricao?: Maybe<Scalars['String']>;
  preco?: Maybe<Scalars['Float']>;
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
};

export type ViagenUpdateManyInlineInput = {
  /** Create and connect multiple Viagen documents */
  create?: Maybe<Array<ViagenCreateInput>>;
  /** Connect multiple existing Viagen documents */
  connect?: Maybe<Array<ViagenConnectInput>>;
  /** Override currently-connected documents with multiple existing Viagen documents */
  set?: Maybe<Array<ViagenWhereUniqueInput>>;
  /** Update multiple Viagen documents */
  update?: Maybe<Array<ViagenUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Viagen documents */
  upsert?: Maybe<Array<ViagenUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Viagen documents */
  disconnect?: Maybe<Array<ViagenWhereUniqueInput>>;
  /** Delete multiple Viagen documents */
  delete?: Maybe<Array<ViagenWhereUniqueInput>>;
};

export type ViagenUpdateManyInput = {
  destino?: Maybe<Scalars['String']>;
  descricao?: Maybe<Scalars['String']>;
  preco?: Maybe<Scalars['Float']>;
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
};

export type ViagenUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ViagenWhereInput;
  /** Update many input */
  data: ViagenUpdateManyInput;
};

export type ViagenUpdateOneInlineInput = {
  /** Create and connect one Viagen document */
  create?: Maybe<ViagenCreateInput>;
  /** Update single Viagen document */
  update?: Maybe<ViagenUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Viagen document */
  upsert?: Maybe<ViagenUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Viagen document */
  connect?: Maybe<ViagenWhereUniqueInput>;
  /** Disconnect currently connected Viagen document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Viagen document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ViagenUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ViagenWhereUniqueInput;
  /** Document to update */
  data: ViagenUpdateInput;
};

export type ViagenUpsertInput = {
  /** Create document if it didn't exist */
  create: ViagenCreateInput;
  /** Update document if it exists */
  update: ViagenUpdateInput;
};

export type ViagenUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ViagenWhereUniqueInput;
  /** Upsert data */
  data: ViagenUpsertInput;
};

/** Identifies documents */
export type ViagenWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ViagenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ViagenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ViagenWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  destino?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destino_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destino_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destino_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destino_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destino_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destino_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destino_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destino_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destino_not_ends_with?: Maybe<Scalars['String']>;
  descricao?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descricao_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descricao_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descricao_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  descricao_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descricao_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descricao_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descricao_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descricao_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  descricao_not_ends_with?: Maybe<Scalars['String']>;
  preco?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  preco_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  preco_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  preco_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  preco_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  preco_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  preco_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  preco_gte?: Maybe<Scalars['Float']>;
  lugaresDisponiveis?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  lugaresDisponiveis_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  lugaresDisponiveis_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  lugaresDisponiveis_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  lugaresDisponiveis_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  lugaresDisponiveis_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  lugaresDisponiveis_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  lugaresDisponiveis_gte?: Maybe<Scalars['Int']>;
  localDoEncontro?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  localDoEncontro_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  localDoEncontro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  localDoEncontro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  localDoEncontro_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  localDoEncontro_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  localDoEncontro_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  localDoEncontro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  localDoEncontro_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  localDoEncontro_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Viagen record uniquely */
export type ViagenWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetDestinosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDestinosQuery = { __typename?: 'Query', destinos: Array<{ __typename?: 'Destino', id: string, valor: number, tipoDeViagem: string, origem: string, destinoViagem: string, dataViagem: any }> };
