import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface AppStore {
  loading: LoadingState;
  login: LoginState
}