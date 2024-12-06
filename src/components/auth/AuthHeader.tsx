import { createClient } from '@/utils/supabase/server';
import LoginButton from './LoginButton';
import UserDropdownButton from './UserDropdownButton';
import { getUserProfile } from '@/api/profile-api';

const AuthHeader = async () => {
  const client = createClient();

  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) return <LoginButton />;

  const profile = await getUserProfile(client, user?.id);

  return (
    <>
      <UserDropdownButton profile={profile} />
    </>
  );
};

export default AuthHeader;
