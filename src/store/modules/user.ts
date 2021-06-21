import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import User from '@/models/user'
import UserService from "@/firebase/services/UserService";

@Module({
    name: 'user',
})
export default class UserModule extends VuexModule {

    // these fields must be and cannot be changed without @Mutation (s)

    // datasets for User
    private _user: User | undefined = undefined
    private loadingUser = false

    // datasets for Users
    private _users = Array<User>()
    private loadingUsers = false

    // mutations for User
    @Mutation
    private setUserLoadingState(state: boolean) {
        this.loadingUser = state
    }

    @Mutation
    private setUser(user: User) {
        this._user = user
    }

    // mutations for Users
    @Mutation
    private setUsersLoadingState(state: boolean) {
        this.loadingUsers = state
    }

    @Mutation
    private setUsers(users: Array<User>) {
        this._users = users
    }

    // Action for user
    @Action({ rawError: true })
    async getUser(id: string) {
        this.context.commit('setUserLoadingState', true)
        this.context.commit('setUser', await UserService.getUser(id))
        this.context.commit('setUserLoadingState', false)
    }

    // Action for users
    @Action({ rawError: true })
    async getAllUsers() {
        this.context.commit('setUsersLoadingState', true)
        this.context.commit('setUsers', await UserService.getAllusers())
        this.context.commit('setUsersLoadingState', false)
    }

    // Action for regestering a user
    @Action({ rawError: true })
    async registerUser(user: User) {
        this.context.commit('setUserLoadingState', true)
        const docId = await UserService.registerUser(user)
        this.context.commit('setUser', await UserService.getUser(docId))
        this.context.commit('setUserLoadingState', false)
    }

    /** get the current user  */
    get user(): User | undefined {
        return this._user
    }

    /** get the list of all users  */
    get users(): Array<User> {
        return this._users
    }
    /** fetching status of User  */
    get isUserLoading(): boolean {
        return this.loadingUser
    }

    /** fetching status of all users  */
    get isUsersLoading(): boolean {
        return this.loadingUsers
    }

}