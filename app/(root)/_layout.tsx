import { useAuth } from "@clerk/expo";
import { Redirect, Slot } from "expo-router";

export default function Index() {

  const {isSignedIn, isLoaded} = useAuth();
    // sync clerk user -> supabase we'll build this later
  if(!isLoaded) return null; 

  // redirect to the tabs route if the user is signed in, otherwise redirect to the sign-in page
  if (!isSignedIn) return <Redirect href="/sign-in" />;

  return <Slot/>
}
