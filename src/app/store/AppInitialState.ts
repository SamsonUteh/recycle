import { AppStore } from "./AppState";


export const AppInitialState: AppStore  = {
  loading: {
    show: false
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false
   
  },
 
}