#!/usr/bin/env zx
import { faker } from '@faker-js/faker';

const organizations = [];
for (let i = 0; i < 10; i++) {
  organizations.push({
    name: faker.company.companyName(),
    image: faker.image.business(),
    streetAddress: faker.address.streetAddress(true),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    state: faker.address.stateAbbr(),
    phoneNumber: faker.phone.number(),
  });
}

fs.writeJSONSync('./organizations.json', organizations);