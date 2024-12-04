import { SupabaseDataBase } from '@/types/utils.types';

export const getUserProfile = async (
  client: SupabaseDataBase,
  userId: string
) => {
  const { data, error } = await client
    .from('profiles')
    .select()
    .eq('id', userId)
    .single();

  if (error) throw new Error(error.message);

  return data;
};
