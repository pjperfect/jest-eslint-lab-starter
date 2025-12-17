/* eslint-env node, jest */

const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    it('reformats a string so that the first letter of each word is capitalized', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('')).toBe('');
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
        expect(capitalizeWords('hello')).toBe('Hello');
    });
});

describe('filterActiveUsers', () => {
    it('filters an array of user objects, returning only active users (mixed array)', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];
        const filtered = filterActiveUsers(users);
        expect(filtered).toEqual([{ name: 'Alice', isActive: true }]);
    });

    it('returns an empty array if all users are inactive', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false },
        ];
        const filtered = filterActiveUsers(users);
        expect(filtered).toEqual([]);
    });

    it('returns an empty array if input array is empty', () => {
        const users = [];
        const filtered = filterActiveUsers(users);
        expect(filtered).toEqual([]);
    });
});

describe('logAction', () => {
    it('logs an action performed by a user with a timestamp', () => {
        const result = logAction('login', 'Alice');
        expect(result).toContain('User Alice performed login at');
        
        const result2 = logAction('login', '');
        expect(result2).toContain('User  performed login at');
        
        const result3 = logAction('', '');
        expect(result3).toContain('User  performed  at');
    });
});

