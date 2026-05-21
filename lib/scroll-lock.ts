'use client';
let lenisInstance: any = null;
export const setLenisInstance = (instance: any) => { lenisInstance = instance; };
export const getLenisInstance = () => lenisInstance;

export const lockScroll = () => { if (lenisInstance) lenisInstance.stop(); else document.body.style.overflow = 'hidden'; };
export const unlockScroll = () => { if (lenisInstance) lenisInstance.start(); else document.body.style.overflow = 'auto'; };
