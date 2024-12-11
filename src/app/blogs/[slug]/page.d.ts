import { Metadata } from 'next';

declare module 'next' {
  export interface PageProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

export interface GenerateMetadataProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata(props: GenerateMetadataProps): Promise<Metadata>;

