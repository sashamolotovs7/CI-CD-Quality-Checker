import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        // Check if the model and its database connection are defined
        if (!model || !model.db?.db) {
            throw new Error(`Model ${modelName} or its database connection is undefined`);
        }
        // Check if the collection exists
        const modelExists = await model.db.db.listCollections({
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
