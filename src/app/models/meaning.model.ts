import { Definition } from './definition.model';

export interface Meaning {
    definitions: Definition[];
    partOfSpeech: string;
}