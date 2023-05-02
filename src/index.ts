
import { types } from "./config";
import { countryData } from "./data";
import { ICountryData, IType } from "./utils/types";


/*
 * @param get all countries 
 * @return countries
 */
export const getCountries = (): ICountryData[] => {
    return countryData
};

/*
 * @param get country's dial_code 
 * @return dial_code || undefined
 */

export const useCountry = ({ type, value }: { type: IType, value: string }): ICountryData | null => {

    switch(type){
         case types.code:
            
            return countryData.filter((e) => e.code === value)[0];
         case types.dial_code:
             return countryData.filter((e) => e.dial_code === value)[0];
         case types.flag:
             return countryData.filter((e) => e.flag === value)[0];
         case types.name:
             return countryData.filter((e) => e.name === value)[0];
         default:
             return null;
     }
};

export const useDialCode = ({ value }: {  value: string }): ICountryData => {
    return countryData.filter((e) => e.dial_code === value)[0];
};

export const useFlag = ({ value }: {  value: string }): ICountryData => {
    return countryData.filter((e) => e.flag === value)[0];
};

export const useCountryName = ({ value }: {  value: string }): ICountryData => {
    return countryData.filter((e) => e.name === value)[0];
};

export const useCountryCode = ({ value }: {  value: string }): ICountryData => {
    return countryData.filter((e) => e.code === value)[0];
};