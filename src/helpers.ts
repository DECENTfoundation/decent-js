import {ChainApi} from './api/chain';

export let DecentLib: any = {};

export function setLibRef(libRef: any) {
    DecentLib = libRef;
}

export function getLibRef(): any {
    return DecentLib;
}

export function formatToDctPrice(price: number): number {
    return Math.ceil(price * ChainApi.DCTPower);
}

export function formatToReadiblePrice(price: number): number {
    return Math.floor(Number((price / ChainApi.DCTPower).toFixed(8)));
}