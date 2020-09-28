const { writeFile, existsSync, readFileSync, unlink } = require('fs');
const path = require('path');
const LOCAL_STORAGE = 'local-storage.json';

class LocalStorage {
    constructor() {
        if (existsSync('local-storage.json')) {
            console.log(`Loading from ${ LOCAL_STORAGE }`);
            const txt = readFileSync(LOCAL_STORAGE);
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, val) {
        this.items[key] = val;
        writeFile(path.join(__dirname, LOCAL_STORAGE), JSON.stringify(this.items), err => {
            if (err) {
                console.error(err);
            }
        });
    }

    clear() {
        this.items = {};
        unlink(path.join(__dirname, LOCAL_STORAGE), () => {
            console.log(`Removed ${ LOCAL_STORAGE }`);
        });
    }
}

module.exports = new LocalStorage();
