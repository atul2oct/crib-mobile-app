import { Redirect } from "expo-router";

export default function Index() {

  const {isSignedIn, isLoaded} = useAuth();

  if(!isLoaded) return null; 

  // redirect to the tabs route if the user is signed in, otherwise redirect to the sign-in page
  if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;
  return <Redirect href="/(root)/(sign-in)" />;
}
