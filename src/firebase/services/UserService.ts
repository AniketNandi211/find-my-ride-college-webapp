import { usersCollection } from '@/firebase/firebase'
import User from '@/models/user'

export default class UserService {
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
}
