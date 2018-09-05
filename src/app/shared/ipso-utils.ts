export default class The {
    static valueIsNil(value: any): boolean {
        return value === undefined || value === null || value === "";
    }

    static collectionIsEmpty(collection: any[]): boolean {
        return this.valueIsNil(collection) || collection.length === 0;
    }

    static valueIsNotNil(value: any): boolean {
        return !this.valueIsNil(value);
    }

    static collectionIsNotEmpty(collection: any[]): boolean {
        return !this.collectionIsEmpty(collection);
    }

    static valueAsANumber(value: any): number {
        return Number(value);
    }

    static prototypeChainDefinesThisProperty(object: {}, propertyName: string) {
        return propertyName in object;
    }

    static prototypeChainDoesNotDefineThisProperty(object: {}, propertyName: string) {
        return !this.prototypeChainDefinesThisProperty(object, propertyName);
    }

    static collectionContainsThisObject(collection: any[], object: any, keyPropertyNames: string[]): boolean {
        if (this.collectionIsEmpty(collection) ||
            this.collectionIsEmpty(keyPropertyNames) ||
            this.valueIsNil(object)) {
            return false;
        }

        for (const keyPropertyName of keyPropertyNames) {
            if (this.prototypeChainDoesNotDefineThisProperty(collection[0], keyPropertyName) ||
                this.prototypeChainDoesNotDefineThisProperty(object, keyPropertyName)) {
                return false;
            }

            for (const collectionItem of collection) {
                if (collectionItem[keyPropertyName] === object[keyPropertyName]) {
                    return true;
                }
            }
        }

        return false;
    }

    static collectionDoesNotContainThisObject(collection: any[], object: any, keyPropertyNames: string[]): boolean {
        return !this.collectionContainsThisObject(collection, object, keyPropertyNames);
    }

    static objectIsAnInstanceOf<T extends Object>(object: Object, constructor: { new(...args: any[]): T }): boolean {
        return object instanceof constructor;
    }

    static objectIsNotAnInstanceOf<T extends Object>(object: Object, constructor: { new(...args: any[]): T }): boolean {
        return !this.objectIsAnInstanceOf<T>(object, constructor);
    }
}