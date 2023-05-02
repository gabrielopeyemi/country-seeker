# Country Seeker Node Package

This is a Node.js package that allows you to search for countries using different criteria such as country code, dial code, flag, or country name. It exports several functions that can be used in your Node.js projects to retrieve country data.



## Installation
To use this package, you can install it from npm using the following command:

```bash
npm install country-seeker
```
## Usage
To use this package, you first need to import it into your project:

```bash
import { getCountries, useCountry, useDialCode, useFlag, useCountryName, useCountryCode } from "country-seeker";
```
### `getCountries`
This function returns an array of all the countries in the package's data:

```bash 
const countries = getCountries();
console.log(countries);
```

### useCountry
This function takes an object with two properties, type and value, and returns the first country that matches the given criteria:

```bash
const countryByCode = useCountry({ type: 'code', value: 'US' });
console.log(countryByCode);

const countryByDialCode = useCountry({ type: 'dial_code', value: '+1' });
console.log(countryByDialCode);

const countryByFlag = useCountry({ type: 'flag', value: '🇺🇸' });
console.log(countryByFlag);

const countryByName = useCountry({ type: 'name', value: 'United States' });
console.log(countryByName);

```

### useDialCode
This function takes a value parameter, which represents the dial code of the country, and returns the first country that matches the given dial code:

```bash 
const country = useDialCode({ value: '+1' });
console.log(country);

```

### useFlag
This function takes a value parameter, which represents the flag of the country, and returns the first country that matches the given flag:

```bash 
const country = useFlag({ value: '🇺🇸' });
console.log(country);

```

### useCountryName
This function takes a value parameter, which represents the name of the country, and returns the first country that matches the given name::

```bash 
const country = useCountryName({ value: 'United States' });
console.log(country);
```

### useCountryCode
This function takes a value parameter, which represents the code of the country, and returns the first country that matches the given code:

```bash 
const country = useCountryCode({ value: 'US' });
console.log(country);

```


## Contributing

If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/gabrielopeyemi/country-seeker) . Pull requests are also welcome. .
# country-seeker
