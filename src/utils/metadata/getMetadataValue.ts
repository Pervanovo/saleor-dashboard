import { MetadataInput } from "@dashboard/graphql";

export function getMetadataValue(metadata: MetadataInput[], key: string): string | undefined {
  return metadata.find(m => m.key === key)?.value;
}

export function getMetadataValueAsBool(
  metadata: MetadataInput[],
  key: string,
): boolean | undefined {
  const value = getMetadataValue(metadata, key);

  return typeof value === "string" ? value === "true" : undefined;
}
