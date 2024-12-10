import { RecruitForm } from '@/types/parties.types';
import { SupabaseDataBase } from '@/types/utils.types';
import { createClient } from '@/utils/supabase/client';

export const addRecruit = async (formData: RecruitForm) => {
  const client = createClient();

  const { data, error } = await client.from('party_recruit').insert(formData);

  if (error) throw new Error(error.message);

  return data;
};

export const getRecruits = async (client: SupabaseDataBase) => {
  const {} = await client.from('party_recruit');
};
