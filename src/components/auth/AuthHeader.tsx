import { createClient } from '@/utils/supabase/server';
import LoginButton from './LoginButton';
import UserDropdownButton from './UserDropdownButton';
// import { getUserProfile } from '@/api/profile-api';

const AuthHeader = async () => {
  const client = createClient();

  const { data } = await client.auth.getUser();
  console.log('data', data);
  console.log('iden', data.user?.identities);

  //   const profile = await getUserProfile(client, data.user?.id);

  return <>{!data.user ? <LoginButton /> : <UserDropdownButton />}</>;
};

export default AuthHeader;
