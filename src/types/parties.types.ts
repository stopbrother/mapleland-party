import { Tables } from '../../database.types';

export type Recruit = Tables<'party_recruit'>;

export type RecruitForm = Pick<Recruit, 'party_type' | 'title' | 'description'>;
