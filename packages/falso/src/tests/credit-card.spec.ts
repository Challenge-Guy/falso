import { randCreditCard } from '../lib/credit-card';

describe('creditCard', () => {
  it('should create', () => {
    console.log(randCreditCard({ brand: 'Visa' }));

    expect(1);
  });
});
