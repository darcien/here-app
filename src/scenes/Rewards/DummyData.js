// @flow
import {Itunes, Kintan, Starbucks, Xl} from '../../assets/images';

type Reward = {
  id: string,
  name: string,
  description?: string,
  source: *,
};

export let dummyData: Reward[] = [
  {
    id: '1',
    name: 'iTunes Gift Card ($25)',
    source: Itunes,
  },
  {
    id: '2',
    name: 'Voucher Kintan (IDR 50K)',
    source: Kintan,
  },
  {
    id: '3',
    name: 'Free Starbucks Frappuccino',
    source: Starbucks,
  },
  {
    id: '4',
    name: 'Pulsa XL (IDR 25K)',
    source: Xl,
  },
];
