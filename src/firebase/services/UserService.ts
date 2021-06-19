import { usersCollection } from '@/firebase/firebase'
import User from '@/models/user'

export default class UserService {

    private constructor() {
        // can not be instantiated
    }

    // Read and return all documents
    static async getAllusers(): Promise<Array<User>> {
        const users = Array<User>()

        usersCollection
            .get()
            .then(querySnapshot => {
                querySnapshot.docs.map(
                    doc => users.push(
                        User.userFromData(doc.data())
                    )
                )
            })
        return users
    }

    // read and return specific user with given id
    static async getUser(id: string): Promise<User | undefined> {
        let user: User | undefined = undefined
        const doc = await usersCollection.doc(id).get()
        if (doc.exists) user = User.userFromData(doc.data())
        return user
    }

    // write a user to the firestore
    static async registerUser(user: User) {
        const userDocument = await usersCollection.add({
            name: user.name,
            age: user.age,
            mobile: user.mobile,
            email: user.email,
            address: user.address,
            fabVehicles: []
        })
        return userDocument.id
    }
}
