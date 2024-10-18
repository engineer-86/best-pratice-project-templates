import { ObjectId } from 'mongodb';

export default class Quest {
    constructor(
        public title: string,
        public description: string,
        public category: string,
        public id?: ObjectId,
        public user?: { $ref: string; $id: ObjectId },
    ) {}
}
