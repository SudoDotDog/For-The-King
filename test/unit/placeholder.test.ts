/**
 * @author WMXPY
 * @namespace ForTheKing
 * @description Decrypt
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Placeholder', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('for-the-king-placeholder');

    it('Placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
