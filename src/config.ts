import * as index from "./template.handlebars";
import * as classes from "./class.handlebars";
import * as structs from "./structs.handlebars";
import * as interfaces from "./interface.handlebars";
import * as schema from "./schema.handlebars";
import * as documents from "./documents.handlebars";
import * as selectionSet from "./selection-set.handlebars";
import * as fragments from "./fragments.handlebars";
import * as enumTemplate from "./enum.handlebars";
import { EInputType, GeneratorConfig } from "graphql-codegen-core";
import {
  getType,
  getOptionals,
  toCsharpComment, asQueryUnescapedText, asArgumentList, converterIfNeeded, asJsonString,
  isMutation,
  getTypeIfUsed,
  getValueTypeIfUsed
  } from "./helpers/csharpSyntax";

export const config: GeneratorConfig = {
  inputType: EInputType.SINGLE_FILE,
  templates: {
    index,
    classes,
    schema,
    enumTemplate,
    documents,
    selectionSet,
    fragments,
    structs
  },
  flattenTypes: true,
  primitives: {
    String: "string",
    Int: "int",
    Float: "float",
    Boolean: "bool",
    ID: "string"
  },
  customHelpers: {
    convertedType: getType,
    getOptionals,
    toCsharpComment,
    asQueryUnescapedText,
    asArgumentList,
    asJsonString,
    isMutation,
    getTypeIfUsed,
    getValueTypeIfUsed,
    converterIfNeeded,
  },
  outFile: "Classes.cs",
  // filesExtension: 'cs',
};
