export type IType = 'name' | 'flag' | 'code' | 'dial_code';

export declare const countryData: ICountryData[];

export interface ICountryData {
    name: string
    flag: string
    code: string
    dial_code: string
}