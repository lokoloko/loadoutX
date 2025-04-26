// src/components/Auth.tsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) {
      console.log('Error signing up:', error.message);
    } else {
      console.log('User signed up:', user);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.log('Error signing in:', error.message);
    } else {
      console.log('User signed in:', user);
    }
  };

  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default Auth;