import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        // Using optional chaining to handle potential undefined values
        let modelExists = await models[modelName]?.db?.db?.listCollections({
            name: collectionName
        }).toArray();
        // Ensure modelExists is defined before checking length
        if (modelExists && modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
