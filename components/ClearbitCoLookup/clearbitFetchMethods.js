const CLEARBIT_API_KEY = "sk_aa25329d59c07fbfa0586f7de84abab4";

const requestPayload = {
  method: "GET",
  headers: new Headers({
    Authorization: `Bearer ${CLEARBIT_API_KEY}`,
  }),
};

export const getOptions = async (value) => {
  const options = await fetch(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${value}`,
    requestPayload
  )
    .then((response) => {
      return response.json();
    })
    .catch((e) => console.error(e));

  return options;
};

export const findCompanyByDomain = async (domain) => {
  const company = await fetch(
    `https://company.clearbit.com/v2/companies/find?domain=${domain}`,
    requestPayload
  )
    .then((response) => {
      return response.json();
    })
    .catch((e) => console.error(e));

  return company;
};

export const findCompanyByEmail = async (email) => {
  // alex@clearbit.com
  // data: { company, person }
  const data = await fetch(
    `https://person-stream.clearbit.com/v2/combined/find?email=${email}`,
    requestPayload
  )
    .then((response) => {
      return response.json();
    })
    .catch((e) => console.error(e));

  return data;
};
