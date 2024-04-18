'use client';

import { supabaseBrowserClient } from '@/utils/supabase/client';

export default function Home() {
  const supabase = supabaseBrowserClient();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Learn Supabase Web App</h1>

      <button
        type="button"
        onClick={async () => {
          await supabase.auth.signInWithOAuth({
            provider: 'google',
          });
        }}
      >
        SignIn
      </button>
      <button
        type="button"
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        SignOut
      </button>
    </main>
  );
}
