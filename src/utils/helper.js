export const getPrice = (w) => {
  const weight = Math.floor(w);
  if (weight <= 2000) {
    return 4.3;
  } else if (weight > 2000 && weight < 3001) {
    return 4.6;
  } else if (weight > 3001 && weight < 4001) {
    return 4.9;
  } else if (weight > 4001 && weight < 5001) {
    return 5.2;
  } else if (weight > 5001 && weight < 6001) {
    return 5.4;
  } else if (weight > 6001 && weight < 7001) {
    return 5.7;
  } else if (weight > 7001 && weight < 8001) {
    return 6;
  } else if (weight > 8001 && weight < 9001) {
    return 6.3;
  } else if (weight > 9001 && weight < 10001) {
    return 6.6;
  } else {
    return 6.9;
  }
};

export const getNationalCourrierPrice = (w) => {
  const weight = Math.floor(w);
  if (weight <= 20) {
    return 7.5;
  } else if (weight > 20 && weight < 101) {
    return 1.2;
  } else if (weight > 101 && weight < 251) {
    return 2;
  } else if (weight > 251 && weight < 501) {
    return 2.5;
  } else if (weight > 501 && weight < 1001) {
    return 3.5;
  } else if (weight > 1001 && weight < 2001) {
    return 2;
  } else {
    return 3;
  }
};

export const getInternationalCourrierPrice = (w) => {
  let weight = Math.floor(w);
  if (weight <= 20) {
    return 1.2;
  } else if (weight > 20 && weight < 101) {
    return 1.5;
  } else if (weight > 101 && weight < 251) {
    return 3;
  } else if (weight > 251 && weight < 501) {
    return 5;
  } else if (weight > 501 && weight < 1001) {
    return 10;
  } else if (weight > 1001 && weight < 2001) {
    return 15;
  } else {
    return 20;
  }
};

export const roleCheck = (user) => {
  if (user.isAdmin) {
    return 'Admin';
  } else if (user.isActeur) {
    return 'Acteur';
  } else {
    return 'Client';
  }
};
