import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TState, TAppDispatch } from '../types/types';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
